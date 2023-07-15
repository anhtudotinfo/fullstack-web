import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, CssBaseline, alpha, makeStyles, Button, Drawer,
Box, Modal, TextField } from "@material-ui/core";

import { NavLink } from "react-router-dom";
import {Link} from "@material-ui/core";
import { useHistory, useParams } from 'react-router-dom';
import axiosInstance from "../Axios";

const useStyles = makeStyles((theme) => ({
    appBar: {
        height: '55px',
        border_bottom: `1px solid ${theme.palette.divider}`,
    },
    link: {
        margin: theme.spacing(1, 1.5),

    },
    toolbar_title: {
        flexGrow: 1,
        flexDirection: 'center',        
    },
    button: {
        padding: '4px',
        flexDirection: 'right',
    },
}))

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
//
export default function Bar() {
    // const [isLog, setIsLog] = useState(false);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // const handleLogin = () => {
    //     if (localStorage.getItem('access_token') !== null){
    //         setIsLog(true);
    //     };
    // }

    // const handleLogOut = () => {
    //     if (localStorage.getItem('access_token') === null){
    //         setIsLog(false);
    //     };
    // }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [data, setData] = useState({ value: [] });

    const [data2, setData2] = useState({ value2: [] });

    useEffect(()=> {
        if (localStorage.getItem('access_token') !==null){ 
        axiosInstance.get(`bank-accounts/view`).then((res) => {
            setData({
                value: res.data,
            });
            console.log(res.data);
            const current_user = res.data.map(t => (t.user_bank_acc_id));
            console.log(current_user[0]); // get the user_id 
        }) }
    }, [setData]);

    useEffect(()=> {
        if (localStorage.getItem('access_token') !==null){
            axiosInstance.get(`wallets/view`).then((res) =>{
                setData2({
                    value2: res.data,
                });
                console.log(res.data);
            })
        }
    }, [setData2]);

    const initialData = Object.freeze({
        amount: '',
        
    });

    const [a, setB] = useState(initialData);

    const handleChanges = (e) => {
        setB({
            ...a,
            [e.target.name]: e.target.value
        });
    };

    const [myId, getmyId] = useState({ v: [] });

    const handleDeposit = (e) => {
        e.preventDefault();

        axiosInstance.get(`bank-accounts/view`).then((res) => {
            getmyId({
                v: res.data,
            });
            const user_id = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id
            console.log(user_id[0]); // prints the current user_id

        axiosInstance.get(`bank-accounts/edit/`+user_id+`/`);

        axiosInstance.put(`bank-accounts/edit/`+user_id+`/`, {
            bank_account_balance: a.amount,
        });
        })
        // axiosInstance.put(`bank-accounts/edit/93/` , {
        //     bank_account_balance: a.amount,
        // });
    }

    const classes = useStyles()
    
    return (
        
        <React.Fragment>
            <CssBaseline />
                <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
                style={{color: 'black', display: 'flex'}}
                >
                
                <link href='https://fonts.googleapis.com/css?family=Fira Code' rel='stylesheet'></link>

                <Toolbar className={classes.toolbar_title}>
                    <Typography style={{display: 'flexbox', marginBottom: '5px' , fontFamily: 'Fira Code', fontSize: '15px'}}
                    >AE-COIN Crypto-Commerce Power Platform</Typography>
                    
                    <Button className={classes.button} color="primary" variant="outlined" 
                    style={{marginLeft: '1300px', marginBottom: '5px', backgroundColor: 'whitesmoke' , fontFamily: 'Fira Code'}}
                    onClick={() => setIsDrawerOpen(true)}
                   
                    >Dashboard</Button>

                    <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}
                    
                    >
                        <Box p={2} width='400px' textAlign='center' role="presentation">
                            
                            <Typography variant="h6" component='div' style={{paddingBottom: '20px', fontFamily: 'Fira Code'}}>USER DASHBOARD</Typography>

                            <hr></hr>

                            {data.value.map(a => (
						<Typography key={a} style={{padding: '5px' , fontFamily: 'Fira Code'}}>Bank account Number{' : '}
							{a.bank_account_number}</Typography>
					))}

                    {data.value.map(b => (
                        <Typography key={b} style={{padding: '5px' , fontFamily: 'Fira Code'}}>Bank Account Balance{' : '}
                            {b.bank_account_balance}</Typography>
                    ))}

                    {data2.value2.map(c => (
                        <Typography key={c} style={{padding: '5px' , fontFamily: 'Fira Code'}}>Crypto Wallet ID{' : '}
                            {c.crypto_wallet_id}</Typography>
                    ))}

                    {data2.value2.map(d => (
                        <Typography key={d} style={{padding: '5px' , fontFamily: 'Fira Code'}}>Crypto Wallet Balance{' : '}
                            {d.crypto_balance}</Typography>
                    ))}
                    
                    {data2.value2.map(e => (
                        <Typography key={e} style={{padding: '5px' , fontFamily: 'Fira Code'}}>Current Plan{' : '}
                        {e.current_plan}</Typography>
                    ))}

                     <hr></hr>

                     <Button className={classes.button} color="secondary" variant="outlined" component={NavLink} href="#" to="/inbox"
                     style={{ display: 'flexbox', marginTop: '20px' ,width: '200px', fontSize: '14px' , fontFamily: 'Fira Code'}}>My Inbox</Button>

                     <Button className={classes.button} color="secondary" variant="outlined" onClick={handleOpen}
                     style={{ display: 'flexbox', marginTop: '20px' ,width: '200px', fontSize: '14px' , fontFamily: 'Fira Code'}}>+ Bank Balance</Button>

                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
            User Deposit Amount
          </Typography>
          
          <TextField
          required
          id="amount"
          name="amount"
          autoComplete="amount"
          value={a.amount}
          onChange={handleChanges}
          ></TextField>

          <Button
          type="submit"
          onClick={handleDeposit}
          >Confirm</Button>

                        </Box>
                    </Modal>

                        </Box>
                        
                    </Drawer>

                   <Button to="/signout" className={classes.button} 
                    href="#" color="primary" variant="outlined" component={NavLink}     
                    style={{display:'flexbox', marginLeft: '35px', marginBottom: '5px', backgroundColor: 'whitesmoke'
                    , fontFamily: 'Fira Code'}}>
                        Sign Out
                    </Button>

                </Toolbar>

                </AppBar>

        </React.Fragment>
    )
}
