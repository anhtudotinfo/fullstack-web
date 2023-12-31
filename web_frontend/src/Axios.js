import axios, { Axios } from "axios";

const baseURL = 'http://127.0.0.1:8000/api/';

let isRefreshing = false; // Variable to track refresh attempts

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'JWT ' + localStorage.getItem('access_token')
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },

});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		const originalRequest = error.config;

		if (typeof error.response === 'undefined') {
			console.log(
				'A server/network error occurred. ' +
					'Looks like CORS might be the problem. ' +
					'Sorry about this - we will get it fixed shortly.'
			);
			return Promise.reject(error);
		}

		if (
			error.response.status === 401 &&
			originalRequest.url === baseURL + 'token/refresh/')
		 {
			window.location.href = '/';
			return Promise.reject(error);
		}

		if (
			error.response.data.code === 'token_not_valid' &&
			error.response.status === 401 &&
			error.response.statusText === 'Unauthorized'
		) {
			const refreshToken = localStorage.getItem('refresh_token');

			if (refreshToken) {
				const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

				// exp date in token is expressed in seconds, while now() returns milliseconds:
				const now = Math.ceil(Date.now() / 1000);
				console.log(tokenParts.exp);

				if (tokenParts.exp > now) {
					if (!isRefreshing) {
					  isRefreshing = true; // Set flag to indicate refresh attempt
		  
					  try {
						const response = await axiosInstance.post('/token/refresh/', { refresh: refreshToken });
						localStorage.setItem('access_token', response.data.access);
						localStorage.setItem('refresh_token', response.data.refresh);
		  
						axiosInstance.defaults.headers['Authorization'] = 'JWT ' + response.data.access;
						originalRequest.headers['Authorization'] = 'JWT ' + response.data.access;
		  
						isRefreshing = false; // Reset the refresh flag
						return axiosInstance(originalRequest); // Retry the original request
					  } catch (refreshError) {
						isRefreshing = false; // Reset the refresh flag even if refresh fails
						console.log(refreshError);
						window.location.href = '/';
						alert("Infinite loop created. Please login again.");
					  }
					} else {
					  // Avoid infinite loop by redirecting if another refresh attempt is ongoing
					  console.log('Another refresh attempt is ongoing');
					  return Promise.reject(error);
					}
				  } else {
					console.log('Refresh token is expired', tokenParts.exp, now);
					window.location.href = '/';
				  }
				} else {
				  console.log('Refresh token not available.');
				  window.location.href = '/';
				}
			  }

		// specific error handling done elsewhere
		return Promise.reject(error);
	}
);

export default axiosInstance;


// original 

// 	if (tokenParts.exp > now) {
// 		return axiosInstance
// 			.post('/token/refresh/', { refresh: refreshToken })
// 			.then((response) => {
// 				localStorage.setItem('access_token', response.data.access);
// 				localStorage.setItem('refresh_token', response.data.refresh);

// 				axiosInstance.defaults.headers['Authorization'] =
// 					'JWT ' + response.data.access;
// 				originalRequest.headers['Authorization'] =
// 					'JWT ' + response.data.access;

// 				return axiosInstance(originalRequest);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	} else {
// 		console.log('Refresh token is expired', tokenParts.exp, now);
// 		window.location.href = '/';
// 	}
// } else {
// 	console.log('Refresh token not available.');
// 	window.location.href = '/';
// }
// }

// // specific error handling done elsewhere
// return Promise.reject(error);
// }
// );
