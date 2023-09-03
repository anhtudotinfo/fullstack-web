import React, { useState, useEffect } from "react";
import axiosInstance from "../Axios";
import Chatbot from "./Chatbot";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { Grid, Link, Card, Typography, CardContent, CardMedia, Container, Button, 
Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core";
import { Chat, Shop } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";
import './StoreCss.css';

import background from './store-background-image.png';

const useStyle = makeStyles({
  root: {
    minWidth: 260,
    minHeight: 300,
    position: 'relative',
    margin: 'auto',
    transition: 'box-shadow 0.2s',
    '&:hover': {
      boxShadow: '0 0 25px honeydew', // glow effect
    },  
    
  }, 
  gridContainer: {
    display: 'column',
    minWidth: 1800,
    marginLeft: -291,
  }, 
  collapseText: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 10,
    marginRight: 15,
  }, 
  buttonPurchase: {
    display: 'flex',
    padding: 10,
    transition: 'box-shadow 0.2s',
    '&:hover': {
      boxShadow: '0 0 55px darkturquoise', 
    }, 
  }
})

export default function StorePage() {

    const classes = useStyle();

    const [productData, setProductData] = useState({ e: [] });

    const [myId_, getmyId_] = useState({ v_: [] });

    const [hovered, setHovered] = React.useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickToOpen = () => {
      setOpen(true);
  };

  const handleToClose = () => {
      setOpen(false);
  };

  const handlePurchase = (e) => {
    e.preventDefault();

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      axiosInstance.put(`products/purchase/`+user_id_+`/`);
      
    });
    setOpen(false);
  }

    useEffect(() => {
        axiosInstance.get(`products/all/`).then((res) => {
            setProductData({
                e: res.data,
            });
            console.log(res.data);
        })
    }, []);

    return (
        <React.Fragment>

            <Grid container style={{height: '1850px', backgroundImage: `url(${background})`, 
        backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}> 

            <div class="type-2" style={{marginTop: '-475px'}}>
                <Typography class="line-2 anim-typewriter-2" style={{fontFamily: "Fira Code"}}>Welcome to the E-Store
                </Typography>
            </div>

            <div class="type-3" style={{marginBottom: '-500px', marginTop: '-1290px', display: 'flex', 
          justifyContent: 'center', alignContent: 'center', marginLeft: '500px'}}>
              <Typography class="line-3" style={{fontFamily: "Fira Code"}}>All listed products below.
              To purchase a product please click on the Purchase button below.</Typography>
            </div>

            <Container style={{marginTop: '-1240px'}}>
          <Grid container spacing={4} className={classes.gridContainer} style={{justifyContent: 'center'}}>
            {productData.e.map((xx) => (
              <Grid item key={xx} xs={12} sm={8} md={2}>
                <Card elevation={8} className={classes.root} style={{backgroundColor: 'wheat'}}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                >
                  <CardContent style={{flexGrow: '1', justifyContent: 'space-between',display: 'flex', flexDirection: 'column'}}>

                    <Typography key={xx} style={{textAlign: 'center', fontFamily: "Fira Code"}} variant="h5" component="h2">
                      {xx.product_id} <hr/>
                    </Typography>
                    <Typography key={xx} style={{textAlign: 'center', fontFamily: "Fira Code"}}>
                       {xx.product_title} <hr/>
                    </Typography>
                    <Typography key={xx} style={{textAlign: 'center', fontFamily: "Fira Code"}}>
                     {xx.product_desc} <hr />
                    </Typography>
                    <Typography key={xx} style={{fontFamily: "Fira Code"}} className={classes.collapseText}> 
                     {xx.price} Æ
                    </Typography>

                  </CardContent>
                </Card>

              </Grid>
            ))}
          </Grid>

          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button className={classes.buttonPurchase} id="purchasebtn" variant="contained" 
          color="secondary"  onClick={handleClickToOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          startIcon={hovered ? <Shop /> : null} 
          style={{color: 'whitesmoke', marginBottom: '5px', marginTop: '20px', fontFamily: 'Fira Code'}}>
            Purchase A Product</Button>
            </div>

            <Dialog open={open} onClose={handleToClose}>
                <DialogTitle><p style={{display: 'flex', fontFamily: 'Fira Code', color: 'red'}}>Purchase</p></DialogTitle>
                <DialogContent>
                    <DialogContentText style={{fontFamily: 'Fira Code'}}>
                    Purchase a random product to acquire a unique microtransaction. Generally the higher your crypto balance, 
                    the better the product. <br/> View all microtransaction codes in your Inbox.
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{paddingBottom: '20px'}}>
                  <Button onClick={handlePurchase} color="secondary" variant="contained" style={{display: 'flex', fontFamily: 'Fira Code', marginRight: '280px'}}>
                    Yes</Button>
                    <Button variant="outlined" onClick={handleToClose} style={{display: 'flex', fontFamily: 'Fira Code', marginRight: '75px'}}
                        color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

        </Container>

            <Chatbot />
            </Grid>
        </React.Fragment>
    )
}