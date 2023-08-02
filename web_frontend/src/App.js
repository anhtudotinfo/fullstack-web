import logo from '../src/Components/homepage_temp.gif';
import './App.css';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from './Axios';


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import animated1 from './Components/aa.gif';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Height } from '@mui/icons-material';


const theme = createTheme()

export default function App() {
  const history = useHistory();

  const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
	
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	
	};

  const handleSubmit = (event) => {
		event.preventDefault();
		axiosInstance
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				history.push("/home");
				
			}, reasons =>{
                alert("Login Failed!\nIncorrect login details!");  
			}
		);
      console.log(formData.email, formData.password);
	};	

	// const initialNewData = Object.freeze({
	// 	email_new: '',
	// 	password_new: '',

	// });

	// const [newData, updateNewData] = useState(initialNewData);

	// const handlenewChange = (e) => {
	// 	updateNewData ({
	// 		...newData,

	// 		[e.target.name]: e.target.value.trim(),
	// 	});
	// };

	// const [error, setError] = useState();

	// const handleNewSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(newData);

	// 	axiosInstance.post(`user/create/`, {
	// 		email: newData.email_new,
	// 		password: newData.password_new,
	// 	})
	// 	.then((res) => {
	// 		history.push("/home");
	// 		console.log(res.data);

	// 	}, reason => {
	// 		console.log(reason);
	// 		setError();
	// 		alert("Failed due to either one of the following:" + "\nUser already exists!\nPlease fill required fields!\nEnter a strong password!");
	// 	});
	// };


  return (
<ThemeProvider theme={theme}>
  <CssBaseline/>
  <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap" rel="stylesheet"></link>

  <Grid container component="main" sx={{ height: '100vh' }} style={{backgroundColor: '#e6eaee'}}> 

        <Grid item xs={12} sm={8} md={5} elevation={0}>
          <Box
            sx={{
              display: 'flex',
            }}
          >
<div class="maincontainer" style={{marginLeft: '-500px'}}>

<div class="thecard">

  <div class="thefront" style={{backgroundColor: '#e6eaee'}}>

	<p>FRONT</p>

	</div>

  <div class="theback" style={{backgroundColor: '#e6eaee'}}>
	
  <div class="login-wrap" style={{backgroundColor: '#e7eaee', marginTop: '15px'}}>
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/>
		<label for="tab-1" class="tab" style={{fontFamily:'Fira Code', color: 'black'}}>Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"/>
		<label for="tab-2" class="tab" style={{fontFamily:'Fira Code', color: 'black'}}>Register</label>
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label" style={{fontFamily:'Fira Code' ,fontSize: '16px'}}>Email Address</label>
					<input id="email" type="text" name='email' class="input" onChange={handleChange} />
				</div>
				<div class="group">
					<label for="pass" class="label" style={{fontFamily:'Fira Code' ,fontSize: '16px'}}>Password</label>
					<input id="password" type="password" class="input" data-type="password" name='password' onChange={handleChange}/>

				</div>

				<div class='frame'>
					<button class='custom-btn btn-14' type='submit' onClick={handleSubmit}
					style={{fontFamily: 'Fira Code', fontSize: '20px', width: '300px', color: 'black', paddingBottom: '40px'}}>LOGIN</button>
				</div>

				<div class="hr"></div>

			</div>
			<div class="sign-up-htm">
				<h2 style={{fontFamily:'Fira Code' ,fontSize: '16px'}}>DON'T HAVE AN ACCOUNT?</h2>
				{/* <div class="group">
					<label class="label" style={{fontFamily:'Fira Code' ,fontSize: '16px'}}>Email Address</label>
					<input id="email_new" name='email_new' type="text" class="input" onChange={handlenewChange}/>
				</div>
				<div class="group">
					<label class="label" style={{fontFamily:'Fira Code' ,fontSize: '16px'}}>Password</label>
					<input id="password_new" name='password_new' type="password" class="input" data-type="password" onChange={handlenewChange}/>
				</div> */}

			<div class='frame'>
					<button class='custom-btn btn-14' type='submit' 
					style={{fontFamily: 'Fira Code', fontSize: '20px', width: '300px', color: 'black', paddingBottom: '40px'}}>REGISTER</button>
			</div>
				<div class="hr"></div>

			</div>
		</div>
	</div>
</div>
  </div>

</div>
</div>

          </Box>
		  
        </Grid>

		<Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
			backgroundColor: '#e6eaee',
			backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '800px 900px',
            backgroundPosition: 'center',
			marginTop: '-60px'
          }}
        />
      </Grid>
    </ThemeProvider>


  );

}

