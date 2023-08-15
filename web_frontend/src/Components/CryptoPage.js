import React, { useState, useEffect } from "react";
import axiosInstance from "../Axios";
import './CryptoCss.css';

import { Line } from "react-chartjs-2";
import { Chart as ChartJs, registerables  } from "chart.js";
import { CategoryScale, LinearScale, PointElement } from "chart.js";
import { Typography, Grid } from "@mui/material";
import createTheme from "@mui/material";

export default function CryptoPage() {

    ChartJs.register(CategoryScale, LinearScale, PointElement, ...registerables);

    const [chartData, setChartData] = useState({ pages: [] });

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
          label: "Æ vs. U$D [Show/Hide]",
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

      <p style={{marginTop: '100px', display: 'block', textAlign: 'center', marginLeft: '30px'}}>Stock Market Exchange</p>
      <Line id="graph" data={data} style={{display: 'flex', marginLeft: '30px'}}/>
      <p style={{textAlign: 'center', marginLeft: '30px'}}>DAY</p>
    </div>
    <div class="side-section" style={{display: 'flexbox', width: '719px',height: '700px',marginTop: '85px'}}>
      <p style={{marginTop: '120px', marginLeft: '300px'}}>Stock Market Trading- Æ vs. U$D</p>
    </div>
    
    </Grid>
      <Grid item id="section-2" style={{backgroundColor: 'rebeccapurple', height: '100vh'}}>
        
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
