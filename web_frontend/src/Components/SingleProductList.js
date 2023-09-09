import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@material-ui/core';
import axiosInstance from '../Axios';
import { Store } from '@mui/icons-material';

import './StoreCss.css';

function PurchaseDialog() {
  const [open, setOpen] = useState(false);
  const [myId_, getmyId_] = useState({ v_: [] });

  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  
  const handleClose = () => {
    setOpen(false);
  };

  const handlePurchase205684 = (e) => { // handles start here
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
            alert("Transaction Failed! Please acquire more crypto!");
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
      <Button variant="contained" id='opencatalogbutton' onClick={handleClickOpen} 
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} startIcon={hovered ? <Store /> : null}
      style={{marginTop: '-77px', marginLeft: '510px', padding: '10px', fontFamily: 'Fira Code'}}>
        Open Product Menu
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{textAlign: 'center', fontFamily: 'Fira Code'}}>Purchase an item</DialogTitle>
        <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>Catalogue</Typography>
        <DialogContent>
          <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '5px', paddingRight: '5px'}}>

            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>205684 - SoftMiner Crypto Miner X - 
50 Æ</Typography><Button variant="contained" style={{fontFamily: 'Fira Code'}} id='singlebuttonpurchase' onClick={handlePurchase205684}>Purchase</Button><hr style={{width: '500px'}}/>
 
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>256004 - SoftMiner Crypto Miner VI - 30 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase' 
            onClick={handlePurchase256004}>Purchase
            </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>265771 - SoftMiner Crypto Miner VIII - 40 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase265771}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>321549 - Currency Access Codes - Tier I - 5 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase321549}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>321892 - Currency Access Codes - Tier V - 25 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase321892}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>326881 - Currency Access Codes - Tier IV - 20 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase326881}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>355840 - SoftMiner Crypto Miner I - 5 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase355840}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>358621 - Currency Access Codes - Tier II - 10 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase358621}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>512025 - SoftMiner Crypto Miner II - 10 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase512025}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>516852 - Currency Access Codes - Tier IX - 45 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase516852}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>564895 - Currency Access Codes - Tier VIII - 40 Æ </Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase564895}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>568703 - Currency Access Codes - Tier VI - 30 Æ </Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase568703}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>569533 - Currency Access Codes - Tier X - 50 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase569533}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>684321 - Currency Access Codes - Tier III - 15 Æ </Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase684321}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>688410 - SoftMiner Crypto Miner III - 15 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase688410}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>820034 - SoftMiner Crypto Miner IV - 20 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase820034}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>831562 - Currency Access Codes - Tier VII - 35 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase831562}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>843056 - SoftMiner Crypto Miner VII - 35 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase843056}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>844321 - SoftMiner Crypto Miner IX - 45 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase844321}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>910240 - SoftMiner Crypto Miner V - 25 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase910240}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>922640 - SoftMiner Crypto Miner - Gold Tier - 100 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase922640}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>922681 - Unrestricted Currency Access Codes - 100 Æ </Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase922681}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>991330 - SharpMiner Crypto Miner - 100 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase991330}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>993546 - Currency Access Codes - Gold Tier - 100 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase993546}>Purchase
              </Button><hr style={{width: '500px'}}/>
            <Typography style={{textAlign: 'center', fontFamily: 'Fira Code'}}>994668 - PlatMiner CryptoMiner - 100 Æ</Typography><Button style={{fontFamily: 'Fira Code'}} variant="contained" id='singlebuttonpurchase'
            onClick={handlePurchase994668}>Purchase
              </Button><hr style={{width: '500px'}}/>
   
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='contained' color='secondary' style={{fontFamily: 'Fira Code'}}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PurchaseDialog;