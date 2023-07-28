import React from "react";

import { CssBaseline } from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import Container from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import {createTheme, ThemeProvider} from "@material-ui/core";
import { Grid, Button } from "@material-ui/core";
import { height, keyframes } from "@mui/system";
import { Box } from "@mui/material";
import about_image from "./about-image.jpg";
import splash_image from "./login.gif";
import './About.css'

const useStyles = makeStyles((theme)=> {

});

const theme = createTheme();

export default function About() {

    // const [redirect, setRedirect] = useState(false);
    // const history = useHistory();

    // useEffect(() => {
    //     const getToken = localStorage.getItem('access_token');
    //     if (getToken) {
    //         setRedirect(true);
    //     } else {
    //         setRedirect(false);
    //     }
    // }, [redirect]);

    // if (redirect) {
    //     history.push("/");
    // }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <link href='https://fonts.googleapis.com/css?family=Fira Code' rel='stylesheet'></link>
            <Grid class="main-grid" item style={{height: '100vh', backgroundImage: `url(${about_image})`, 
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', alignContent: 'center'}}>
            
            <Box id="box" width='300px' height='300px' marginBottom='150px' 
            style={{backgroundImage: `url(${splash_image})`, backgroundSize: 'cover'}}>
            </Box>

            <div class="v1"></div>
   
            <h1 contenteditable style={{fontFamily: 'Fira Code'}}>about us</h1>
            <p id="p1"
            style={{fontSize: '20px', fontFamily: 'Fira Code'}}
            >making crypto-mining easier</p>
            
            <p id="p2" style={{fontFamily: 'Fira Code', fontSize:'20px', marginBottom: '300px', marginLeft: '-340px'}}>
                ever since 2023 we've been trying to build a good and reliable platform for end-users
            </p>

            <p id="p3" style={{fontFamily: 'Fira Code', fontSize:'20px', marginBottom: '200px', marginLeft: '-1065px'}}>
                inspired by nonprofits and other various e-commerce platforms
            </p>

            <p id="p4" style={{fontFamily: 'Fira Code', fontSize:'20px', marginBottom: '100px', marginLeft: '-765px'}}>
                this platform helps other developers contribute to the project 
            </p>
                
            </Grid>
    
        </ThemeProvider>
    )
}