import { useState, useEffect } from "react";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import axiosInstance from "../Axios";

import { Grid, Button, Paper, Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Drawer from "@material-ui/core";



// const useStyles = makeStyles((theme) => ({
	
	

// }));

const theme = createTheme()

export default function Dashboard() {

    const [data, setData] = useState({ value: [] });

    useEffect(()=> {
        axiosInstance.get(`bank-accounts/view`).then((res) => {
            setData({
                value: res.data,
            });
            console.log(res.data);
        })
    }, [setData])


    return (
        
        <ThemeProvider theme={theme}>
            
            <CssBaseline/>

            <div>
                {data.value.map(a => (
                    <Typography key={a}>{a.bank_account_number}</Typography>
                ))}

                {data.value.map(b => (
                    <Typography key={b}>{b.bank_account_balance}</Typography>
                ))}

            </div>



        </ThemeProvider>
    )

}