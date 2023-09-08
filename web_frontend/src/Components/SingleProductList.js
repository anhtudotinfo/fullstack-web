// import { useState, useEffect } from "react";
// import React from "react";

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@material-ui/core';

import axiosInstance from '../Axios';


function PurchaseDialog() {
  const [open, setOpen] = useState(false);
  const [myId_, getmyId_] = useState({ v_: [] });


  const handleClickOpen = () => {
    setOpen(true);
  };

  
  const handleClose = () => {
    setOpen(false);
  };

  // handles start here
  const handlePurchase205684 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-205684/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase256004 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-256004/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase265771 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-265771/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase321549 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-321549/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase321892 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-321892/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase326881 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-326881/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase355840 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-355840/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase358621 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-358621/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }


  const handlePurchase512025 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-512025/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase516852 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-516852/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase564895 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-564895/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase568703 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-568703/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase569533 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-569533/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }


  const handlePurchase684321 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-684321/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase688410 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-688410/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase820034 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-820034/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase831562 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-831562/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase843056 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-843056/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase844321 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-844321/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase910240 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-910240/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase922640 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-922640/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase922681 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-922681/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase991330 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-991330/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase993546 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-993546/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  const handlePurchase994668 = (e) => {
    e.preventDefault();
    let error;

    axiosInstance.get(`bank-accounts/view`).then((res) => {
      getmyId_({
          v_: res.data,
      });
      const user_id_ = res.data.map(p => (p.user_bank_acc_id)); // to get the current user_id

      try{
        axiosInstance.put(`products/purchase-item-994668/`+user_id_+`/`).catch(err => {
          if (err.response.status === 400) {
            alert("Too low crypto balance! Please try again or acquire more crypto!");
          }
          throw err
        })
      } catch(err) {
        error = err
      }
    });
    setOpen(false);
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} style={{marginTop: '-75px', marginLeft: '750px'}}>
        Open Product Menu
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{textAlign: 'center'}}>Purchase an item</DialogTitle>
        <Typography style={{textAlign: 'center'}}>Catalogue</Typography>
        <DialogContent>
          <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '30px', paddingRight: '30px'}}>
            <Typography style={{textAlign: 'center'}}>205684 - SoftMiner Crypto Miner X - 
50 Æ</Typography><Button onClick={handlePurchase205684}>Purchase</Button><hr style={{width: '400px'}}/>

            <Typography style={{textAlign: 'center'}}>256004 - SoftMiner Crypto Miner VI - 30 Æ</Typography><Button onClick={handlePurchase256004}>Purchase
            </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>265771 - SoftMiner Crypto Miner VIII - 40 Æ</Typography><Button onClick={handlePurchase265771}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>321549 - Currency Access Codes - Tier I - 5 Æ</Typography><Button onClick={handlePurchase321549}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>321892 - Currency Access Codes - Tier V - 25 Æ</Typography><Button onClick={handlePurchase321892}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>326881 - Currency Access Codes - Tier IV - 20 Æ</Typography><Button onClick={handlePurchase326881}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>355840 - SoftMiner Crypto Miner I - 5 Æ</Typography><Button onClick={handlePurchase355840}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>358621 - Currency Access Codes - Tier II - 10 Æ</Typography><Button onClick={handlePurchase358621}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>512025 - SoftMiner Crypto Miner II - 10 Æ</Typography><Button onClick={handlePurchase512025}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>516852 - Currency Access Codes - Tier IX - 45 Æ</Typography><Button onClick={handlePurchase516852}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>564895 - Currency Access Codes - Tier VIII - 40 Æ </Typography><Button onClick={handlePurchase564895}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>568703 - Currency Access Codes - Tier VI - 30 Æ </Typography><Button onClick={handlePurchase568703}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>569533 - Currency Access Codes - Tier X - 50 Æ</Typography><Button onClick={handlePurchase569533}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>684321 - Currency Access Codes - Tier III - 15 Æ </Typography><Button onClick={handlePurchase684321}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>688410 - SoftMiner Crypto Miner III - 15 Æ</Typography><Button onClick={handlePurchase688410}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>820034 - SoftMiner Crypto Miner IV - 20 Æ</Typography><Button onClick={handlePurchase820034}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>831562 - Currency Access Codes - Tier VII - 35 Æ</Typography><Button onClick={handlePurchase831562}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>843056 - SoftMiner Crypto Miner VII - 35 Æ</Typography><Button onClick={handlePurchase843056}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>844321 - SoftMiner Crypto Miner IX - 45 Æ</Typography><Button onClick={handlePurchase844321}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>910240 - SoftMiner Crypto Miner V - 25 Æ</Typography><Button onClick={handlePurchase910240}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>922640 - SoftMiner Crypto Miner - Gold Tier - 100 Æ</Typography><Button onClick={handlePurchase922640}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>922681 - Unrestricted Currency Access Codes - 100 Æ </Typography><Button onClick={handlePurchase922681}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>991330 - SharpMiner Crypto Miner - 100 Æ</Typography><Button onClick={handlePurchase991330}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>993546 - Currency Access Codes - Gold Tier - 100 Æ</Typography><Button onClick={handlePurchase993546}>Purchase
              </Button><hr style={{width: '400px'}}/>
            <Typography style={{textAlign: 'center'}}>994668 - PlatMiner CryptoMiner - 100 Æ</Typography><Button onClick={handlePurchase994668}>Purchase
              </Button><hr style={{width: '400px'}}/>
   
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PurchaseDialog;
