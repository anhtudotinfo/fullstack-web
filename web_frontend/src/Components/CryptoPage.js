import React, { useState, useEffect } from "react";
import axiosInstance from "../Axios";
import Chatbot from "./Chatbot";
import './CryptoCss.css';
import neon_bg from './neon-background.jpg';
import bronze from './bronze.avif';
import silver from './silver.jpg';
import gold from './gold.jpg';

import { Line } from "react-chartjs-2";
import { Chart as ChartJs, registerables  } from "chart.js";
import { CategoryScale, LinearScale, PointElement } from "chart.js";
import { Grid, Button } from "@mui/material";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import createTheme from "@mui/material";

export default function CryptoPage() {

    ChartJs.register(CategoryScale, LinearScale, PointElement, ...registerables);

    const [chartData, setChartData] = useState({ pages: [] });

    const [open, setOpen] = React.useState(false);
 
    const handleClickToOpen = () => {
        setOpen(true);
    };
 
    const handleToClose = () => {
        setOpen(false);
    };

    const [myId_2, getmyId_2] = useState({ v_2: [] });

    const [myId_3, getmyId_3] = useState({ v_3: [] });
    const [myId_4, getmyId_4] = useState({ v_4: [] });
    const [myId_5, getmyId_5] = useState({ v_5: [] });

    const handleConversion = (e) => {
      e.preventDefault();
      
      axiosInstance.get(`bank-accounts/view`).then((res) => {
        getmyId_2({
            v_2: res.data,
        });
        const user_id_2 = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

        axiosInstance.get(`stock-market-exchange/convert/`+user_id_2+`/`);
        axiosInstance.put(`stock-market-exchange/convert/`+user_id_2+`/`);
        
      alert("Operation Complete!");
      });
      
    }

    const handlePlanOne = (e) => {
      e.preventDefault();
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

      try {
      axiosInstance.get(`bank-accounts/view`).then((res) => {
        getmyId_3({
          v_3: res.data,
        });
        const user_id_3 = res.data.map(p => (p.user_bank_acc_id));

        axiosInstance.put(`plans/one/`+user_id_3+`/`, {});
      })
      
      } catch (error) {
        alert(error);
      }
    }

    const handlePlanTwo = (e) => {
      e.preventDefault();
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

      try {
      axiosInstance.get(`bank-accounts/view`).then((res) => {
        getmyId_4({
          v_4: res.data,
        });
        const user_id_4 = res.data.map(p => (p.user_bank_acc_id));

        axiosInstance.put(`plans/two/`+user_id_4+`/`, {});
      })
      
      } catch (error) {
        alert(error);
      }
    }

    const handlePlanThree = (e) => {
      e.preventDefault();
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

      try {
      axiosInstance.get(`bank-accounts/view`).then((res) => {
        getmyId_5({
          v_5: res.data,
        });
        const user_id_5 = res.data.map(p => (p.user_bank_acc_id));

        axiosInstance.put(`plans/three/`+user_id_5+`/`, {});
      })
      
      } catch (error) {
        alert(error);
      }
    }

    useEffect(() => {
        axiosInstance.get('stock-market-exchange/display-all-data/').then((res) => {
            setChartData({
                pages: res.data,
            })
            console.log(res.data);
        });
        
    }, [setChartData]);
    
    const data = {
      
      labels: chartData.pages.map(r=>r.day),
      datasets: [
        {
          label: "Æ vs. U$D[Show/Hide]",
          data: chartData.pages.map(s=>s.crypto_usd_rate),
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)"
        },

      ]
    };
   
    return (
      <Grid item>

      <Grid item style={{display: 'flex'}} class='graph-section'>
      <div  style={{height: '785px', width: '1200px'}}>

      <p style={{marginTop: '100px', display: 'block', textAlign: 'center', marginLeft: '30px', fontFamily: 'Fira Code'}}>Stock Market Exchange</p>
      <Line id="graph" data={data} style={{display: 'flex', marginLeft: '30px'}}/>
      <p style={{textAlign: 'center', marginLeft: '30px',fontFamily: 'Fira Code'}}>DAY</p>
    </div>
    <div class="side-section" style={{display: 'flexbox', width: '719px',height: '700px',marginTop: '85px'}}>
      <p style={{marginTop: '100px', marginLeft: '220px', fontFamily: 'Fira Code', fontSize: '17px'}}>Stock Market Trading - Æ vs. U$D</p>
      <p style={{marginTop: '60px', marginLeft: '240px', fontFamily: 'Fira Code', fontSize: '14px'}}>Current Price of Æ vs. U$D = $86.7</p>
      <p style={{marginTop: '60px', marginLeft: '60px', fontFamily: 'Fira Code', fontSize: '14px', display: 'flex', textAlign: 'center'}}>
      * Stock prices are indicative of the current trading value between
      Æ and U$D</p>
      <p style={{marginTop: '35px', marginLeft: '60px', fontFamily: 'Fira Code', fontSize: '14px', display: 'flex', textAlign: 'center'}}>
       Click on the convert button below to convert your Æ crypto balance to U$D at the current Stock Market Exchange rate. 
       Please Note! -{">"} All your Æ Coin balance will be converted to U$D should you choose this option.
      </p>

        <button onClick={handleClickToOpen} class="btn convert" style={{fontSize: '14px', fontFamily: 'Fira Code',borderRadius: '5px', marginTop: '75px', display: 'flex',
      marginLeft: '300px'}}>
          {"["}CONVERT Æ{"]"}
          </button>
       
        <Dialog open={open} onClose={handleToClose}>
                <DialogTitle><p style={{display: 'flex', fontFamily: 'Fira Code', color: 'red'}}>Convert</p></DialogTitle>
                <DialogContent>
                    <DialogContentText style={{fontFamily: 'Fira Code'}}>
                    Do you want to convert all Æ coin to U$D? This process cannot be reversed.{" "}
                    {"["}1 DAY TIMEOUT INTERVAL{"]"}
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{paddingBottom: '20px'}}>
                  <Button onClick={handleConversion} color="secondary" variant="contained" style={{display: 'flex', fontFamily: 'Fira Code', marginRight: '280px'}}>
                    Yes</Button>
                    <Button variant="outlined" onClick={handleToClose} style={{display: 'flex', fontFamily: 'Fira Code', marginRight: '75px'}}
                        color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
       
    </div>
    
    </Grid>

      <Grid item id="section-2" style={{height: '100vh', display: 'block',backgroundImage: `url(${neon_bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div class="wrapper-typing">
    <div class="typing-demo" style={{fontFamily: 'Fira Code', marginBottom: '-80px', textAlign: 'center'}}>
      Select a plan and start mining.
    </div>

    <div class="container-card-1">
 <div class="wrapper-card-1">
   <div class="banner-image" style={{backgroundImage: `url(${bronze})`, opacity: '75%'}}> </div>
   <h2 class="h2-card-1" style={{fontFamily: 'Fira Code'}}>PLAN 1</h2>
   <p style={{marginTop: '-30px', fontFamily: 'Fira Code', color: 'whitesmoke'}}>BRONZE</p>
   <p id="p-card-1" style={{fontFamily: 'Fira Code'}}>$500<br/>
    HASH RATE: 20 TH/s <br/>
     DURATION: 5 SECONDS</p>
  </div>
  <div class="button-wrapper"> 
    <button class="btn-card-1 fill" onClick={handlePlanOne} style={{fontFamily: 'Fira Code'}}>ACTIVATE</button>
  </div>
    </div>

    <div class="container-card-2">
 <div class="wrapper-card-2">
   <div class="banner-image-2" style={{backgroundImage: `url(${silver})`, opacity: '75%'}}> </div>
   <h2 class="h2-card-2" style={{fontFamily: 'Fira Code'}}>PLAN 2</h2>
   <p style={{marginTop: '-30px', fontFamily: 'Fira Code', color: 'whitesmoke'}}>SILVER</p>
   <p id="p-card-2" style={{fontFamily: 'Fira Code'}}>$1000<br/>
    HASH RATE: 40 TH/s <br/>
     DURATION: 10 SECONDS</p>
  </div>
  <div class="button-wrapper-2"> 
    <button class="btn-card-2 fill-2" onClick={handlePlanTwo} style={{fontFamily: 'Fira Code'}}>ACTIVATE</button>
  </div>
    </div>

    <div class="container-card-3">
 <div class="wrapper-card-3">
   <div class="banner-image-3" style={{backgroundImage: `url(${gold})`, opacity: '75%'}}> </div>
   <h2 class="h2-card-3" style={{fontFamily: 'Fira Code'}}>PLAN 3</h2>
   <p style={{marginTop: '-30px', fontFamily: 'Fira Code', color: 'whitesmoke'}}>GOLD</p>
   <p id="p-card-3" style={{fontFamily: 'Fira Code'}}>$2000<br/>
    HASH RATE: 80 TH/s<br/>
     DURATION: 20 SECONDS</p>
  </div>
  <div class="button-wrapper-3"> 
    <button class="btn-card-3 fill-3" onClick={handlePlanThree} style={{fontFamily: 'Fira Code'}}>ACTIVATE</button>
  </div>
    </div>
    
</div>
<Chatbot />
      </Grid>

    </Grid>
    );
}

// demo chart below...

// import React from "react";
// import {Chart as ChartJS, registerables} from 'chart.js';
// import { Chart, Line } from "react-chartjs-2";
// import { CategoryScale, LinearScale, PointElement } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, PointElement, ...registerables);

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       label: "First dataset",
//       data: [33, 53, 85, 41, 44, 65],
//       fill: true,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgba(75,192,192,1)"
//     },
//     {
//       label: "Second dataset",
//       data: [33, 25, 35, 55, 54, 76],
//       fill: false,
//       borderColor: "#742774"
//     }
//   ]
// };

// export default function CryptoPage() {
//   return (
//     <div>
//       <Line data={data} />
//     </div>
//   );
// }


  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const response = await axiosInstance.get('stock-market-exchange/display-all-data/');
  //             const data = await response.json(chartData);

  //             const transformedData = data.pages.map((item, index) => ({
  //                 day: index + 1,
  //                 crypto_to_usd_rate: item.value,
  //             }));
              
  //             setChartData(transformedData);
  //         } catch (error) {
  //             alert("Error fetching data from API!", error);
  //         }
  //     };
  //     fetchData();
  // }, []);
