import React, { useState, useEffect } from "react";
import axiosInstance from "../Axios";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { Grid, Link, Card, Typography, CardContent, CardMedia, Container } from "@material-ui/core";
import './StoreCss.css';

import background from './store-background-image.png';


export default function StorePage() {

    const [productData, setProductData] = useState({ e: [] });

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

            <div class="type-2" style={{marginTop: '-480px'}}>
                <Typography class="line-2 anim-typewriter-2" style={{fontFamily: "Fira Code"}}>Welcome to the E-Store
                </Typography>
            </div>

            <Container style={{marginTop: '-1300px'}}>
          <Grid container spacing={2}>
            {productData.e.map((xx) => (
              <Grid item key={xx} xs={16} sm={8} md={2}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent>
                    <Typography key={xx} gutterBottom variant="h5" component="h2">
                      ID {xx.product_id} <hr/>
                    </Typography>
                    <Typography key={xx} style={{textAlign: 'center'}}>
                       {xx.product_title} <hr/>
                    </Typography>
                    <Typography key={xx}>
                     Product Description: {xx.product_desc} <hr/>
                    </Typography>
                    <Typography key={xx}>
                     Price: {xx.price} Æ
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

            </Grid>
        </React.Fragment>
    )
}