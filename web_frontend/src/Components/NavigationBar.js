import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, CssBaseline, alpha, makeStyles, Button, Drawer, Popover,
Box, Modal, TextField, Backdrop, Fade } from "@material-ui/core";
import { ExitToApp, MailOutlineOutlined, MonetizationOnSharp, MenuRounded } from "@mui/icons-material";

import { NavLink } from "react-router-dom";
import {Link} from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import axiosInstance from "../Axios";

import splash from './splash.jpg';
import image from './side-splash.jpg';
import image2 from './dropdown.jpg';
import estorebg from './estore_bg.jpg';
import chatbotbg from './chatbot_bg.jpg';

import '../App.css';
import './Navigation.css';

import symbol_ae from './ae symbol.png';
import symbol_cart from './e store symbol.jpg';
import symbol_chatbot from './chatbot symbol.png';

import icon from './2111125.png';

const useStyles = makeStyles((theme) => ({
    appBar: {
        height: '50px',
        border_bottom: `1px solid ${theme.palette.divider}`,
        position: 'fixed',
        
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

    const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl(null);
  };

  const open2 = Boolean(anchorEl);
  const id = open2 ? 'simple-popover' : undefined;

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
    let [id_2, setId] = useState({ r: [] })
    let [username, setUsername] = useState({ name: [] });

    let [data, setData] = useState({ value: [] });

    let [data2, setData2] = useState({ value2: [] });

    useEffect(()=> {
        if (localStorage.getItem('access_token') !==null){
        axiosInstance.get(`bank-accounts/view`).then((res)=>{
            setId({
                r: res.data,
            });
            const user_id_one = res.data.map(i => (i.user_bank_acc_id));
            axiosInstance.get(`user/user-info/`+user_id_one+`/`).then((res)=>{
                setUsername({
                    name: res.data,
                })
                console.log(res.data);
            })
        })
    }
    }, [setUsername, isDrawerOpen])

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

    // logs

    let [logData, setLogData] = useState({ logdataValue: [] });

    useEffect(() => {
        if (localStorage.getItem('access_token') !==null) {
            axiosInstance.get(`logs/view`).then((res) => {
                setLogData({
                    logdataValue: res.data,
                });
                console.log(res.data);
            })
        }
    }, [setLogData, isDrawerOpen])

    // deposit handle

    const initialData = Object.freeze({
        amount: '',
        
    });

    const [a, setB] = useState(initialData);

    const handleChanges = (e) => {
        e.preventDefault()
        setB({
            ...a,
            [e.target.name]: e.target.value
        });
    };

    let [myId, getmyId] = useState({ v: [] });

    const handleDeposit = (e) => {
        let error_2
        e.preventDefault();

        axiosInstance.get(`bank-accounts/view`).then((res) => {
            getmyId({
                v: res.data,
            });
            const user_id = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id
            console.log(user_id[0]); // prints the current user_id

        axiosInstance.get(`bank-accounts/edit/`+user_id+`/`);

        try {
            
        axiosInstance.put(`bank-accounts/edit/`+user_id+`/`, {
            bank_account_balance: a.amount,
        }).catch(error => {
            if (error.response.status === 429) {
                alert("\nOperation Failed! \nTimeout interval active! \nPlease try again later!");
            }
            if (error.response.status === 400) {
                alert("Invalid amount! Timeout interval triggered!");
            }
            throw error
        })
    } catch (error) {
        error_2 = error;
        }    
        setOpen(false);
        window.location.reload();
        })
    }
    
    const redirect = () => {
        const is_token = localStorage.getItem('access_token');
        if (is_token) {
            history.push("/home");
        } else {
            history.push("");
        }
    }

    const classes = useStyles();
    
    return (
        
        <React.Fragment>
            <CssBaseline />
                
                <AppBar
                id="app-bar"
                position="sticky"
                color="white"
                elevation={0}
                className={classes.appBar}
                >
                
                <link href='https://fonts.googleapis.com/css?family=Fira Code' rel='stylesheet'></link>

                <Toolbar className={classes.toolbar_title}>

                    <img src={icon} style={{marginBottom: '15px'}}/>

                    <div class='gradient-logo'>
                    <Link onClick={redirect} underline="hover" href="">
                    <p 
                    style={{fontFamily: 'Fira Code', marginBottom: '25px', display: 'flexbox', marginLeft: '10px', fontSize: '17px'}}
                    >Æ COIN POWER PLATFORM</p></Link>
                    </div>

                    <div class='container-links'>
                        <Link id="link-1" underline="none" style={{fontFamily: 'Fira Code'}} component={NavLink}
                        to='/about'>ABOUT</Link>
                        <Link id="link-2" underline="none" style={{fontFamily: 'Fira Code'}}
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
                            <Link component={NavLink} to="/learnmore" style={{fontSize: '14px', color: 'whitesmoke'}}>
                                <p style={{fontFamily: 'Fira Code', marginRight: '40px'}}>Learn More</p></Link>
                            </li>
                        </ul>
                        </div>

                        <div class="card" style={{backgroundSize: 'cover', backgroundImage: `url(${estorebg})`}}>
                        <div class="content">
                        <div class="img" style={{marginLeft: '10px'}}><img src={symbol_cart}/></div>
                        <div class="cardContent">
                        <h3>E-Store<br/><span></span></h3>
                        </div>
                        </div>
                        <ul class="sci" style={{listStyle: 'none'}}>
                        <li style={{i:1}}>
                        <Link component={NavLink} to="/learnmore" style={{fontSize: '14px', color: 'whitesmoke'}}>
                            <p style={{fontFamily: 'Fira Code', marginRight: '40px'}}>Learn More</p></Link>
                        </li>
                       
                        </ul>
                        </div>

                        <div class="card" style={{backgroundSize: 'cover', backgroundImage: `url(${chatbotbg})`}}>
                        <div class="content">
                        <div class="img" style={{marginLeft: '15px'}}><img src={symbol_chatbot}/></div>
                        <div class="cardContent">
                        <h3>Chatbot<br/><span></span></h3>
                        </div>
                        </div>
                        <ul class="sci" style={{listStyle: 'none'}}>
                        <li style={{i:1}}>
                        <Link component={NavLink} to="/learnmore" style={{fontSize: '14px', color: 'whitesmoke'}}>
                            <p style={{fontFamily: 'Fira Code', marginRight: '40px'}}>Learn More</p></Link>
                        </li>
                        
                        </ul>
                        </div>

                        </div>
                            </Box>
                            </Popover>

                        <Link component={NavLink} to="contact-us" id="link-3" underline="none" style={{fontFamily: 'Fira Code'}}>CONTACT</Link>
                    </div>
                    
                    {isLog &&
                    <Button className={classes.button} color="primary" variant="outlined" startIcon={<MenuRounded/>}
                    style={{marginLeft: '595px', marginBottom: '10px', backgroundColor: 'honeydew' , fontFamily: 'Fira Code',
                    paddingLeft: '15px', marginRight: '-50px', paddingTop: '6px', paddingBottom: '6px', borderRadius: '30px',
                    fontWeight: 'normal', display: 'flexbox'}}
                    onClick={(e) => { 
                        e.preventDefault();
                        setIsDrawerOpen(true)}}
                    
                    ></Button>}

                    <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                        <Box p={2} width='400px' textAlign='center' role="presentation" 
                        style={{backgroundImage: `url(${image})`, height: '950px', color: "white", backgroundSize: 'cover', 
                        backgroundRepeat: 'no-repeat'}}>
                            
                            <Typography variant="h6" component='div' style={{paddingBottom: '15px',marginTop: '5px', fontFamily: 'Fira Code', 
                            fontStyle: 'italic'}}>USER DASHBOARD</Typography>

                            <Typography variant="h8" component='div' style={{marginTop: '5px', fontFamily: 'Fira Code'}}>
                                {username.name.user_name}
                            </Typography>

                            <hr></hr>

                            {data.value.map(a => (
						<Typography key={a} style={{padding: '5px' , fontFamily: 'Fira Code'}}>Bank account Number{' : '}
							{a.bank_account_number}</Typography>
					))}

                    {data.value.map(b => (
                        <Typography key={b} style={{padding: '5px' , fontFamily: 'Fira Code'}}>Bank Account Balance{' : '}
                            $ {b.bank_account_balance}</Typography>
                    ))}

                    {data2.value2.map(c => (
                        <Typography key={c} style={{padding: '5px' , fontFamily: 'Fira Code'}}>Crypto Wallet ID{' : '}
                            {c.crypto_wallet_id}</Typography>
                    ))}

                    {data2.value2.map(d => (
                        <Typography key={d} style={{padding: '5px' , fontFamily: 'Fira Code'}}>Crypto Wallet Balance{' : '}
                           {d.crypto_balance} Æ</Typography>
                    ))}
                    
                    {data2.value2.map(e => (
                        <Typography key={e} style={{padding: '5px' , fontFamily: 'Fira Code'}}>Current Plan{' : '}
                        {e.current_plan}</Typography>
                    ))}

                     <hr></hr>

                     <Button className={classes.button} color="secondary" variant="contained" component={NavLink} href="#" to="/inbox"
                     startIcon={<MailOutlineOutlined />}
                     style={{ display: 'flexbox', marginTop: '20px' ,width: '200px', fontSize: '14px' , fontFamily: 'Fira Code'}}>My Inbox</Button>

                     <Button className={classes.button} color="secondary" variant="contained" onClick={handleOpen} startIcon={<MonetizationOnSharp />}
                     style={{ display: 'flexbox', marginTop: '20px' ,width: '200px', fontSize: '14px' , fontFamily: 'Fira Code'}}>Bank Balance</Button>

                     <hr style={{marginTop: '30px', marginBottom: '30px'}}></hr>

                     <div className="logs" style={{fontFamily: 'Fira Code'}}> Recently by you:
                        {logData.logdataValue.map((logs) => (
                            <div key={logs}>
                                <p key={logs} style={{fontFamily: 'Fira Code'}}>{logs.msg}</p>
                            </div>
                        ))
                        }
                        </div>

                    <Modal
                    className={`${classes.fadeIn}`}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{textAlign: 'center'}}
                    >   
                        
                        <div className={classes.paper}>

                        <Box sx={style} style={{backgroundImage: `url(${splash})`}}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom: '20px', fontFamily: 'Fira Code'}}>
            USER DEPOSIT AMOUNT
          </Typography>
        
        <form noValidate>
        <TextField
        required
        variant="outlined"
        type="number"
        label="Enter a value"
        id="amount"
        name="amount"
        autoComplete="amount"
        value={a.amount}
        onChange={handleChanges}
        onPaste={handleChanges}
        onKeyDown={(evt) => (evt.key === "-" || evt.key === "." || evt.key === ",") && evt.preventDefault()}
        InputProps={{ 
            inputProps: { min: 1, maxLenght: 4 }
            
          }}
        style={{fontFamily: 'Fira Code'}}
        ></TextField>

        <Typography style={{marginTop: '15px', marginBottom: '10px', fontSize: '14px', fontFamily: 'Fira Code', color: 'indigo'}}
        >NOTE: MAX DEPOSIT VALUE = $1500 </Typography>
        <Typography style={{marginTop: '15px', marginBottom: '10px', fontSize: '14px', fontFamily: 'Fira Code', color: 'indigo'}}
        >{"["}1-DAY TIMEOUT INTERVAL{"]"}</Typography>

        <Typography style={{fontSize: '12px', fontFamily: 'Fira Code', color: 'crimson'}}>
            EXCEPTION: OVER $1500 - WILL TRIGGER A 1 DAY TIME-OUT INTERVAL! </Typography>
        
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
                        
                    </Modal>
                        </Box>
                    </Drawer>
                    
                    {isLog &&
                   <Button to="/signout" className={classes.button} id="signout-button" startIcon={<ExitToApp />}
                    href="#" color="primary" variant="outlined" component={NavLink}     
                    style={{display:'flexbox', marginLeft: '60px', marginBottom: '10px', backgroundColor: 'honeydew', fontWeight: 'bold',
                    fontFamily: 'Fira Code'}}>
                        Log Out
                    </Button>}

                </Toolbar>

                </AppBar>

        </React.Fragment>
    )
}