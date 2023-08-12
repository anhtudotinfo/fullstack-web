import { useState, useEffect } from "react";
import React from "react";

import { Table, TableBody, TableCell, TableContainer, Typography,
TableHead, TableRow, Paper, Button, Grid, TablePagination } from "@material-ui/core";
import { ArrowBack } from "@mui/icons-material";
import axiosInstance from "../Axios";
import { NavLink } from "react-router-dom";
import image from './image.jpg'


export default function Inbox() {

    // const handleTest = async () => {
    //     try{
    //         const response = await axiosInstance.put(`plans/one/93/`, {});
    //         console.log(response.data);
    //     }
    //     catch (error) {
    //         console.error(error);
    //     }
    // }

    const [dataInbox, setDataInbox] = useState({ val: [] });

    const [data, setData] = React.useState([
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
      ]);

const [page, setPage] = React.useState(1);

const rowsPerPageOptions = [10, 20, 50];

    useEffect(() => {
        axiosInstance.get(`inbox/view/`).then((res) => {
            setDataInbox({
                val: res.data,
            });
            console.log(res.data);
        });

    }, [setDataInbox])

    return (
        <React.Fragment>
        <Grid item style={{height: '100vh', backgroundSize: 'cover' , backgroundImage: `url(${image})`,
				backgroundRepeat: 'no-repeat'}}>
            <link href='https://fonts.googleapis.com/css?family=Fira Code' rel='stylesheet'></link>

            <Button to="/home" href="#" component={NavLink} variant="contained" color="secondary" startIcon={<ArrowBack/>} 
            style={{marginLeft: '20px', marginTop: '85px', fontFamily: 'Fira Code', backgroundColor: 'crimson'}}>Back</Button>
           
           <Typography className="neonText" style={{textAlign: 'center', fontSize: '32px', fontFamily: 'Fira Code'
        , color: 'seashell'}}>MY INBOX</Typography>

        <TableContainer component={Paper}  style={{
        width: '800px', marginLeft: '550px', marginRight: '600px',
        marginTop: '50px'
        }}>
            <Table style={{minWidth: 650}}>
                <TableHead style={{display: 'flexbox'}}>
                    <TableRow>
                        <TableCell style={{fontFamily: 'Fira Code'}}>id</TableCell>
                        <TableCell style={{paddingLeft: '700px', fontFamily: 'Fira Code'}}>Code</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {dataInbox.val.map((row) => (
                        <TableRow 
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row" style={{fontFamily: 'Fira Code'}}>{row.id}</TableCell>
                            <TableCell align="right" style={{fontFamily: 'Fira Code'}}>{row.code}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TablePagination
                count={data.length}
                rowsPerPage={rowsPerPageOptions[page -1]}
                rowsPerPageOptions={rowsPerPageOptions}
                page={page}
                onPageChange={(event, newPage) => setPage(newPage)}
                />

            </Table>
        </TableContainer>
        </Grid>
       </React.Fragment>
    
    );

}