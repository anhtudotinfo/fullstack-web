import React, { useState, useEffect } from "react";
import axiosInstance from '../Axios';
import './LandingPage.css'

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Button } from "@material-ui/core";
import { height, keyframes } from "@mui/system";
import { Box } from "@mui/material";
import image from './image2.jpg'
import crypto_splash from './crypto-mining-landing.gif';
import e_store_splash from './E-commerce-landing.gif';

const useStyles = makeStyles((theme) => ({
	
	text1: {
		fontSize: '60px',
		display: 'flexbox',
		marginBottom: '75px',
		font: 'normal bold 6.5rem / 1.2 Poppins, Helvetica, sans-serif',
		color: 'white',
		
	},
	text2: {
		display: 'flexbox',
		fontSize: '30px',
		marginTop: '200px',
		font: 'normal bold 6.5rem / 1.2 Poppins, Helvetica, sans-serif',
	}

}));

const theme = createTheme()

export default function LandingPage() {

    const classes = useStyles();
    
    const [data, setData] = useState({ pages: [] });

    useEffect(() => {
        axiosInstance.get().then((res) => {
            setData({
                pages: res.data,
            });
            console.log(res.data);
        });	
    }, [setData]);
	
    return (

		<ThemeProvider theme={theme}>
			<CssBaseline />
			<link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap" rel="stylesheet"></link>
			<Grid item style={{ height: '100vh', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat'}}>
					
					{data.pages.length > 0 &&
						<Typography className='neon-text' style={{fontSize: '60px', display: 'flexbox' , fontFamily: 'Source Code Pro', fontStyle: 'oblique'}}>
							{data.pages[0].title}</Typography>}

					{data.pages.length > 0 &&
						<Typography className='neon-text2' style={{fontSize: '25px', 
						display: 'flexbox' , marginTop: '120px',fontFamily: 'Fira Code', marginRight: '20px'}}>
							{data.pages[0].body}
						</Typography>}

						{data.pages.length > 0 &&
						<Typography className='neon-text' style={{fontSize: '60px', display: 'flexbox' , fontFamily: 'Source Code Pro', fontStyle: 'oblique'}}>
							{data.pages[1].title}</Typography>}
														
						{data.pages.length > 0 &&
						<Typography className='neon-text2' style={{fontSize: '25px', 
						display: 'flexbox' , marginTop: '120px',fontFamily: 'Fira Code', marginRight: '20px'}}>
							{data.pages[1].body}
						</Typography>}
					
					<div class="neon-btn">
					<button class="btn one" style={{fontSize: '20px', fontFamily: 'Fira Code'}}>AE-COIN PLATFORM</button>
					<button  class="btn two" 
					style={{fontSize: '20px', fontFamily: 'Fira Code'}}>
						E-STORE</button>
					</div>
{/* <div class="landing-body">
<div class="content-container" style={{backgroundColor: 'white'}}>
  <div class="col-container">
    <div class="column-one">
      <h2 class="xl-font"><b>HTML</b></h2>
      <h2 class="l-font"><b>Gives content structure.</b></h2>
      <button class="button">Learn HTML</button>
    </div>
    <div class="column-two">
        <img id="img" src={crypto_splash} style={{backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}/>
    </div>
  </div>
</div>

<div class="content-container" style={{backgroundColor: 'red'}}>
  <div class="col-container">
    <div class="column-two">
      <img src={e_store_splash} alt="CSS" style={{backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}/>
    </div>
    <div class="column-one">
      <h2 class="xl-font"><b>CSS</b></h2>
      <h2 class="l-font"><b>Describes how HTML elements are displayed on the website.</b></h2>
      <button class="button">Learn CSS</button>
    </div>
  </div>
</div>

</div> */}

					
			</Grid>
		</ThemeProvider>

    )
}