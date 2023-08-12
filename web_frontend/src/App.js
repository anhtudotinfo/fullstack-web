import logo from '../src/Components/homepage_new.gif';
import './App.css';
import React, {useState} from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import axiosInstance from './Axios';
import FAQ from './Components/FAQpage';

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
import bg_image_login from './Components/login-background-image.jpg';
import c1 from './Components/card-1.jpg';
import c2 from './Components/card-2.jpg';
import c3 from './Components/card-3.jpg';
import other_image from './Components/DigitalLandscape.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ArrowForward, Height } from '@mui/icons-material';


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

  return (
<ThemeProvider theme={theme}>
  <CssBaseline/>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=League+Spartan&family=Source+Code+Pro:wght@200&display=swap" rel="stylesheet"/>

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
	<div class='body1'>
		<div class="heading">
		<div>
			<p class="slide-up"><span class="green" style={{fontSize: '48px', fontFamily: 'League Spartan'}}>Æ Power Platform</span></p>
		</div>
		<div>
			<p class="slide-up" style={{fontSize: '24px', fontFamily: 'Fira Code'}}>Crypto-Mining. E-Commerce.</p>
			<p class="slide-up" style={{fontSize: '24px', fontFamily: 'Fira Code'}}>Event-driven technology.</p>
		</div>
		<div >
			<Typography class="slide-up" style={{fontSize: '20px', fontFamily: 'Fira Code', display: 'flex',
    flexWrap: 'wrap'}}>Get Started Here <ArrowForward style={{marginLeft: '5px', marginTop: '-2px'}}/></Typography>
	<hr class="slide-up"></hr>
		</div>

		</div>
	</div>

	</div>

  <div class="theback" style={{backgroundColor: '#e6eaee'}}>
	
  <div class="login-wrap" style={{backgroundColor: 'ghostwhite', marginTop: '15px'}}>
	<div class="login-html" style={{backgroundImage: `url(${bg_image_login})`, backgroundRepeat: 'no-repeat'}}>
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/>
		<label for="tab-1" class="tab" style={{fontFamily:'Fira Code', color: 'black'}}>Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"/>
		<label for="tab-2" class="tab" style={{fontFamily:'Fira Code', color: 'black'}}>Register</label>
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label" style={{fontFamily:'Fira Code' ,fontSize: '16px'}}>Email Address</label>
					<input id="email" style={{fontFamily:'Fira Code'}} type="text" name='email' class="input" onChange={handleChange} />
				</div>
				<div class="group">
					<label for="pass" class="label" style={{fontFamily:'Fira Code' ,fontSize: '16px'}}>Password</label>
					<input id="password" style={{fontFamily:'Fira Code'}} type="password" class="input" data-type="password" 
					name='password' onChange={handleChange}/>

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
					<Link to="/register" href="#" component={NavLink}><button class='custom-btn btn-14' 
					style={{fontFamily: 'Fira Code', fontSize: '20px', width: '300px', color: 'black', paddingBottom: '40px'}}>REGISTER</button></Link>
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

	  <Grid item height='100vh' class="body-cards" style={{backgroundImage: `url(${other_image})`, backgroundRepeat: 'no-repeat'}}>

	  <div class="container-one">
  <div class="card">
        <div class="face face1" style={{backgroundImage: `url(${c1})`, backgroundRepeat: 'no-repeat'}}>
          <div class="content">
        <h3 style={{fontFamily: 'Fira Code'}}> Create an account </h3>
        </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p style={{fontFamily: 'Fira Code'}}> Create a free account and get started with your own crypto-mining journey. </p>
            </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1" style={{backgroundImage: `url(${c2})`, backgroundRepeat: 'no-repeat'}}>
          <div class="content">
            <h3 style={{fontFamily: 'Fira Code'}}> Mine crypto </h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p style={{fontFamily: 'Fira Code'}}>Choose a plan and let us mine crypto for you. </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1" style={{backgroundImage: `url(${c3})`, backgroundRepeat: 'no-repeat'}}>
          <div class="content">
            <h3 style={{fontFamily: 'Fira Code'}}>Connect & Trade</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p style={{fontFamily: 'Fira Code'}}>Exchange your crypto for microtransactions or convert it directly to U$D currency.</p>
          </div>
        </div>
      </div>
    </div>
	  </Grid>

	  <Grid item>
		  <FAQ />
	  </Grid>

	  
    </ThemeProvider>

  );

}

