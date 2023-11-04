import React, { useState, useEffect } from "react";
import axiosInstance from '../Axios';
import './LandingPage.css'
import Stats from "./Stats";
import { useHistory, NavLink } from 'react-router-dom';
import Chatbot from "./Chatbot";

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Button } from "@material-ui/core";
import { height, keyframes } from "@mui/system";
import { Box } from "@mui/material";
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
	const history = useHistory();

	const handleClicktoCrypto = () => {
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
		history.push("/crypto-page");
	}

	const handleClicktoStore = () => {
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
		history.push("/e-store");
	}

    // const classes = useStyles();
    
    let [data, setData] = useState({ pages: [] });

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

<Grid item>
	<div class="html" style={{backgroundColor: '#2445bf'}}>
    <section class="hero">
        <div class="div" style={{marginRight: '200px'}}>

		{data.pages.length > 0 &&
						<Typography className='neon-text' style={{fontSize: '60px', display: 'flexbox' , fontFamily: 'Source Code Pro', fontWeight: 'bold'}}>
							{data.pages[0].title}</Typography>}

		{data.pages.length > 0 &&
					<p id="p" style={{fontFamily: 'Source Code Pro', display: 'grid', fontStyle: 'oblique'}}>
						{data.pages[0].body}</p>}

            <button class="btn one" onClick={handleClicktoCrypto} style={{fontSize: '20px', fontFamily: 'Fira Code',borderRadius: '15px'}}>Start Mining</button>
        </div>
        <img id="image-one" src={crypto_splash} alt="" style={{borderRadius: '20px'}}/>
    </section>
</div>

<div class="html-two" style={{backgroundColor: '#050a19'}}>
    <section class="hero">
	<img id="image-two" src={e_store_splash} alt="" style={{display: 'flex', marginLeft: '-300px', borderRadius: '20px'}}/>
        <div class="div" style={{paddingLeft: '200px'}}>

		{data.pages.length > 0 &&
		<Typography className='neon-text' style={{marginLeft: '-100px', marginTop:'60px', fontSize: '60px', display: 'flexbox' ,fontWeight: 'bold',
		fontFamily: 'Source Code Pro'}}>
			{data.pages[1].title}</Typography>}

			{data.pages.length > 0 &&
			<p id="p" style={{
			display: 'flexbox' ,fontFamily: 'Source Code Pro', display: 'grid', fontStyle: 'oblique'}}>
				{data.pages[1].body}
			</p>}

            <button class="btn two" onClick={handleClicktoStore}
					style={{fontSize: '20px', fontFamily: 'Fira Code',borderRadius: '15px'}}>
						Shop Microtransactions</button>
        </div>
    </section>
</div>
</Grid>

<Grid item id="stat-banner" style={{height: '300px'}}>
	<Stats />
</Grid>

<Chatbot />
			{/* </Grid> */}
		</ThemeProvider>

    )
}