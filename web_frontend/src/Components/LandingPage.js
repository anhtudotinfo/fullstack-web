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

import animated from './animated.gif'

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
			<Grid item xs={false} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', 
				backgroundRepeat: 'no-repeat', 
				height: '100vh'}}>
					{/* {data.pages.map(a => (
						<Typography align="center" style={{textTransform: 'uppercase', backgroundImage: 'linear-gradient(to right, #00F260, #f79d00, #0575E6, #64f38c)', 
						WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', backgroundSize: '300%', backgroundPosition: '-100%', 
						animation:'animatedText 1s infinite'}} className={classes.text1}>
							{a.title}
						</Typography>
					))}

					{data.pages.map(b => (
						<Typography align="center" style={{textTransform: 'uppercase', backgroundImage: 'linear-gradient(to right, #00F260, #f79d00, #0575E6, #64f38c)', 
						WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', backgroundSize: '300%', backgroundPosition: '-100%', 
						animation:'animatedText 1s infinite'}} className={classes.text2}>
							{b.body}
						</Typography>
					))} */}
					
					{data.pages.map(a => (
						<Typography key={a} className='neon-text' style={{fontSize: '60px', display: 'flexbox' , fontFamily: 'Source Code Pro', fontStyle: 'oblique'}}>
							{a.title}</Typography>
					))}
					
					{data.pages.map(b => (
						<Typography key={b} className='neon-text2' style={{fontSize: '25px', 
						display: 'flexbox' , marginTop: '120px',fontFamily: 'Source Code Pro', marginRight: '20px'}}>
							{b.body}
						</Typography>
					))}

					{/* <div class="container">
						<div class="center">
					<a href=""><button class="btn">
							<svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
							<polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
							<polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
							</svg>
							<span style={{fontFamily: 'Candara', fontSize: '20px', fontStyle: 'oblique' }}>AE-COIN CRYPTO PLATFORM</span>
						</button>
						
					</a>
						</div>
					</div> */}
					
					<div id="neon-btn">
					<Button class="btn one" style={{fontFamily: 'Candara', fontSize: '20px', fontFamily: 'Source Code Pro'}}>AE-COIN PLATFORM</Button>
					<Button  class="btn two" 
					style={{fontSize: '20px', fontFamily: 'Source Code Pro'}}>
						E-STORE</Button>
					</div>
					
			</Grid>
		</ThemeProvider>

    )
}