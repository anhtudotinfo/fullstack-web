import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, CssBaseline, alpha, makeStyles, Button, Drawer, Popover,
Box, Modal, TextField, Backdrop, Fade } from "@material-ui/core";

import { NavLink } from "react-router-dom";
import {Link} from "@material-ui/core";
import { useHistory, useParams } from 'react-router-dom';
import axiosInstance from "../Axios";

import splash from './splash.jpg';
import image from './animated2.gif';
import image2 from './dropdown.jpg';
import estorebg from './estore_bg.jpg';
import chatbotbg from './chatbot_bg.jpg';

import '../App.css';
import './Navigation.css';

import symbol_ae from './ae symbol.png';
import symbol_cart from './e store symbol.jpg';
import symbol_chatbot from './chatbot symbol.png';

import icon from './home_icon.png';

const useStyles = makeStyles((theme) => ({
    appBar: {
        height: '50px',
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
    },
    paper: {
        outline: 'none',
    },
    '@keyframes fadeIn': {
        '0%': {
            opacity: 0,
        },
        '100%':{
            opacity: 1,
        },
    },
    fadeIn: {
        animation: '$fadeIn 0.2s',
    },

}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 1.5,
  };

export default function Bar() {
    const [isLog, setIsLog] = useState(false);
    const wait_time = 500;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); //Drawer component state


    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl(null);
  };

  const open2 = Boolean(anchorEl);
  const id = open2 ? 'simple-popover' : undefined;

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

    useEffect(() => {
        const id = setInterval(() =>{
            const token = localStorage.getItem('access_token');
            if (token) {
                setIsLog(true);
            } else {
                setIsLog(false);
            }
            // console.log(isLog);
        }, wait_time)
        return () => clearInterval(id);
    }, [isLog])

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
            // const current_user = res.data.map(t => (t.user_bank_acc_id));
            // console.log(current_user[0]); // get the user_id 
        }) 
    }
    }, [setData, isDrawerOpen]);

    useEffect(()=> {
        if (localStorage.getItem('access_token') !==null){
            axiosInstance.get(`wallets/view`).then((res) =>{
                setData2({
                    value2: res.data,
                });
                console.log(res.data);
            })
        }
    }, [setData2, isDrawerOpen]);

    // deposit handle

    const initialData = Object.freeze({
        amount: '',
        
    });

    const [a, setB] = useState(initialData);

    const handleChanges = (e) => {

    //     const regex = /^[1-9]\d*$/;
    // if (regex.test(e.target.value)) {
    //   setB(e.target.value);
    // } else {
    //   setB("");
    // }

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
        alert("Operation Complete!");
        window.location.reload();
        })
        // axiosInstance.put(`bank-accounts/edit/93/` , {
        //     bank_account_balance: a.amount,
        // });
    }

    const classes = useStyles();
    
    return (
        
        <React.Fragment>
            <CssBaseline />
                
                <AppBar
                position="sticky"
                color="white"
                elevation={0}
                className={classes.appBar}
                >
                
                <link href='https://fonts.googleapis.com/css?family=Fira Code' rel='stylesheet'></link>

                <Toolbar className={classes.toolbar_title}>

                    <img src={icon} style={{marginBottom: '15px'}}/>

                    <div class='gradient-logo'>
                    <p 
                    style={{fontFamily: 'Fira Code', marginBottom: '25px', display: 'flexbox', marginLeft: '10px', fontSize: '17px'}}
                    >Æ COIN POWER PLATFORM</p>
                    </div>

                    <div class='container-links'>
                        <Link id="link-1" underline="hover" style={{fontFamily: 'Fira Code'}} component={NavLink}
                        to='/about'>ABOUT</Link>
                        <Link id="link-2" underline="hover" style={{fontFamily: 'Fira Code'}}
                        onMouseEnter={handleClick}
                        >FEATURES</Link>

                        <Popover style={{display: 'flexbox', marginLeft: '-400px'}}
                                id={id}
                                open={open2}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                                }}
                            >
                            <Box className="body" p={0} width='950px' height= '320px' onMouseLeave={handleClose2}
                            style={{display: 'flex', backgroundColor: 'azure'}}
                            >
                                    
                        <div class="container">
                        <div class="card" style={{backgroundSize: 'cover', backgroundImage: `url(${image2})`}}>
                        <div class="content">
                        <div class="img" style={{marginLeft: '20px'}}><img src={symbol_ae} /></div>
                        <div class="cardContent">
                        <h3>Æ Mining<br/><span></span></h3>
                        </div>
                        </div>
                        <ul style={{listStyle: 'none'}} class="sci">
                            <li style={{i:1}}>
                            <Link style={{fontSize: '14px', color: 'whitesmoke'}}><p style={{fontFamily: 'Fira Code', marginRight: '40px'}}>Learn More</p></Link>
                            </li>
                        </ul>
                        </div>

                        <div class="card" style={{backgroundSize: 'cover', backgroundImage: `url(${estorebg})`}}>
                        <div class="content">
                        <div class="img" style={{marginLeft: '10px'}}><img src={symbol_cart}/></div>
                        <div class="cardContent">
                        <h3>E Store<br/><span></span></h3>
                        </div>
                        </div>
                        <ul class="sci" style={{listStyle: 'none'}}>
                        <li style={{i:1}}>
                        <Link style={{fontSize: '14px', color: 'whitesmoke'}}><p style={{fontFamily: 'Fira Code', marginRight: '40px'}}>Learn More</p></Link>
                        </li>
                       
                        </ul>
                        </div>

                        <div class="card" style={{backgroundSize: 'cover', backgroundImage: `url(${chatbotbg})`}}>
                        <div class="content">
                        <div class="img" style={{marginLeft: '10px'}}><img src={symbol_chatbot}/></div>
                        <div class="cardContent">
                        <h3>Chatbot<br/><span></span></h3>
                        </div>
                        </div>
                        <ul class="sci" style={{listStyle: 'none'}}>
                        <li style={{i:1}}>
                        <Link style={{fontSize: '14px', color: 'whitesmoke'}}><p style={{fontFamily: 'Fira Code', marginRight: '40px'}}>Learn More</p></Link>
                        </li>
                        
                        </ul>
                        </div>

                        </div>
                            </Box>
                            </Popover>

                        <Link id="link-3" underline="hover" style={{fontFamily: 'Fira Code'}}>CONTACT</Link>
                    </div>
                    
                    {isLog &&
                    <Button className={classes.button} color="primary" variant="outlined" 
                    style={{marginLeft: '550px', marginBottom: '10px', backgroundColor: 'whitesmoke' , fontFamily: 'Fira Code'}}
                    onClick={() => setIsDrawerOpen(true)}
                   
                    >Dashboard</Button>}

                    <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}
                    
                    >
                        <Box p={2} width='400px' textAlign='center' role="presentation" 
                        style={{backgroundImage: `url(${image})`, height: '950px', color: "white", backgroundSize: 'cover', 
                        backgroundRepeat: 'no-repeat'}}>
                            
                            <Typography variant="h6" component='div' style={{paddingBottom: '15px',marginTop: '5px', fontFamily: 'Fira Code', 
                            fontStyle: 'italic'}}>USER DASHBOARD</Typography>

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

                     <Button className={classes.button} color="secondary" variant="contained" component={NavLink} href="#" to="/inbox"
                     style={{ display: 'flexbox', marginTop: '20px' ,width: '200px', fontSize: '14px' , fontFamily: 'Fira Code'}}>My Inbox</Button>

                     <Button className={classes.button} color="secondary" variant="contained" onClick={handleOpen}
                     style={{ display: 'flexbox', marginTop: '20px' ,width: '200px', fontSize: '14px' , fontFamily: 'Fira Code'}}>+ Bank Balance</Button>

                    <Modal
                    className={`${classes.fadeIn}`}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{textAlign: 'center'}}
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                    >   
                        <Fade in={open}>
                        <div className={classes.paper}>

                        <Box sx={style} style={{backgroundImage: `url(${splash})`}}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom: '20px', fontFamily: 'Fira Code'}}>
            USER DEPOSIT AMOUNT
          </Typography>
        
        <form noValidate>
        <TextField
        required
        type="number"
        label="Enter a value"
        id="amount"
        name="amount"
        autoComplete="amount"
        value={a.amount}
        onChange={handleChanges}
        style={{fontFamily: 'Fira Code'}}
        ></TextField>

        <Typography style={{marginTop: '15px', marginBottom: '10px', fontSize: '14px', fontFamily: 'Fira Code', color: 'indigo'}}
        >NOTE: MAX DEPOSIT VALUE = $1500 </Typography>

        <Typography style={{fontSize: '12px', fontFamily: 'Fira Code', color: 'crimson'}}>EXCEPTIONS: NEGATIVE VALUES/NULL VALUES -
        THIS WILL TRIGGER A 1 DAY TIME-OUT INTERVAL! </Typography>
        
        <Button
        type="submit"
        variant="outlined"
        color="primary"
        style={{marginLeft: '250px', marginTop: '20px', fontFamily: 'Fira Code'}}
        onClick={handleDeposit}
        >Confirm</Button>
        </form>
                        </Box>
                        </div>
                        </Fade>
                    </Modal>
                        </Box>
                    </Drawer>
                    
                    {isLog &&
                   <Button to="/signout" className={classes.button} 
                    href="#" color="primary" variant="outlined" component={NavLink}     
                    style={{display:'flexbox', marginLeft: '35px', marginBottom: '10px', backgroundColor: 'whitesmoke'
                    , fontFamily: 'Fira Code'}}>
                        Sign Out
                    </Button>}

                </Toolbar>

                </AppBar>

        </React.Fragment>
    )
}

