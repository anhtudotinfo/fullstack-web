import React, {useState} from "react";
import axiosInstance from "../Axios";
import { useHistory, NavLink } from 'react-router-dom';
import './Register.css';
import splash from '../Components/splash.jpg';
import reg_image from '../Components/register-image.webp';
import { ThemeProvider, createTheme } from "@material-ui/core";

const theme = createTheme();

export default function Register() {
	const history = useHistory();
    
    const initialNewData = Object.freeze({
		username_new: '',
		email_new: '',
		password_new: '',

	});

	const [newData, updateNewData] = useState(initialNewData);

	const handlenewChange = (e) => {
		updateNewData ({
			...newData,

			[e.target.name]: e.target.value.trim(),
		});
	};

	const [error, setError] = useState();

	const handleNewSubmit = (e) => {
		e.preventDefault();
		console.log(newData);

		axiosInstance.post(`user/create/`, {
			user_name: newData.username_new,
			email: newData.email_new,
			password: newData.password_new,
			
		})
		.then((res) => {
			history.push("/");
			console.log(res.data);

		}, reason => {
			console.log(reason);
			setError();
			alert("Failed due to either one of the following:" + "\nUser already exists!\nPlease fill required fields!\nEnter a strong password!");
		});
	};
return (
	<ThemeProvider theme={theme}>
	
<html>

<body class="body-register" style={{backgroundImage: `url(${splash})`, backgroundRepeat: 'no-repeat', padding: '200px'}}>
  <div id="login-box">
    <div class="left-box">
      <h1 id="h1-register" style={{fontFamily: 'Fira Code'}}> Sign Up </h1>
      <input id="input-register" style={{fontFamily: 'Fira Code'}} type="text" name="username_new" placeholder="Username" onChange={handlenewChange}/>
      <input id="input-register" style={{fontFamily: 'Fira Code'}} type="text" name="email_new" placeholder="Email" required onChange={handlenewChange}/>
      <input id="input-register" style={{fontFamily: 'Fira Code'}} type="password" name="password_new" placeholder="Password" required onChange={handlenewChange}/>
      <input id="input-register" style={{fontFamily: 'Fira Code'}} type="submit" name="singup-button" placeholder="Sign Up" onClick={handleNewSubmit}/>
    </div>
    <div class="right-box" style={{backgroundImage: `url(${reg_image})`, backgroundRepeat: 'no-repeat'}}>
    
    </div>
  </div> 
</body>
</html>

</ThemeProvider>
)

}
