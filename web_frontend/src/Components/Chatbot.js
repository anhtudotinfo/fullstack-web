import React, { useState, useEffect } from "react";
import axios from "axios";
import { Fab, Box, Dialog, Grid, Button, TextField, Container, Typography } from "@material-ui/core";
import { FormGroup, FormControl } from "@material-ui/core";

import './ChatBot.css';
import cc from './chatbot_icon.png';

export default function Chatbot() {

    const [openWindow, setOpenWindow] = useState(false);

    const [greetingMessage, setGreetingMessage] = useState('');
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const handleOpenChatWindow = () => {
        setOpenWindow(true);
    };

    const handleCloseChatWindow = () => {
        setOpenWindow(false);
    };

    const sendMessage = async () => {
        // send a POST request to the chatbot API with the user's message
        const response = await axios.post('http://localhost:8000/api/chatbot/', { message });
    
        // update the chat state with the chatbot's response
        setChat([...chat, { message, isUser: true }]);
        setChat([...chat, { message: response.data.message, isUser: false }]);
    
        // clear the message input field
        setMessage('');
        setGreetingMessage('');
      }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/chatbot/`).then((res) => {
            setGreetingMessage((res.data));
        });
        
    }, [])

    return (

      <React.Fragment>
        <Box class="float">
        <Fab variant="extended" size="medium" style={{backgroundColor: 'rgba(247,151,138,255)', fontFamily: 'Fira Code'}} 
        onClick={handleOpenChatWindow}>
            <img src={cc}/>
           Open Varana
        </Fab>

        {/* dialog window start */}

         <Dialog open={openWindow} onClose={handleCloseChatWindow}> 

        <Box sx={{ height: "100vh", display: "flex", flexDirection: 'column', minWidth: '35rem'}}>
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2}}>
            <Typography variant="body1" style={{fontFamily: 'Fira Code'}}>{greetingMessage.message}</Typography>

        <div className="chat">
            {chat.map((chatMessage, index) => (
                <div key={index} style={{fontFamily: 'Fira Code'}} className={`message ${chatMessage.isUser ? 'user' : 'chatbot'}`}>
                    {chatMessage.message} 
                    <p><hr /></p>
                </div>
            ))}

        </div>

      </Box>
      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              size="large"
              color="primary"
              variant="contained"
              onClick={sendMessage}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>

        </Dialog>
        </Box>
</React.Fragment>

    )
}