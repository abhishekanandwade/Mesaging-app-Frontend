import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile,MoreVert, SearchOutlined} from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import React, { useState } from 'react'
import axios from './axios';

import './Chat.css'


function Chat({ messages }) {

  const [input, setInput] = useState ('');

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
      message: input,
      name: 'Max',
      timestamp: '12:00',
      received: true
    });

    setInput('');


  };
  return (
      <div className='chat'>
        <div className="chat__header">
          <Avatar className='avatar2'/>
        
          
          <div className="chat__headerInfo">
            <h3>Room name</h3>
            <p>Online</p>
          </div>

          <div className="chat__headerRight">
            <IconButton>
              <SearchOutlined style={{ color: "#afbac1" }}/>
            </IconButton>
            
            <IconButton>
              <MoreVert style={{ color: "#afbac1" }}/>
            </IconButton>
          </div>
          </div>

          <div className="chat__body">
            {messages.map(message => (
            <p className={`chat__message ${message.received && "chat__receiver"}`}> 
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>
              {message.timestamp}
            </span>
            </p>
            ))}

            {/* <p className='chat__message chat__receiver'> 
            <span className='chat__name'>Abhishek</span>
            This is a message
            <span className='chat__timestamp'>
              {new Date().toUTCString()}
            </span>
            </p>                     */}

          </div>

          <div className="chat__footer">
            <IconButton>
            <InsertEmoticonIcon style={{ color: "#afbac1" }} />
            </IconButton>

            <IconButton>
            <AttachFile style={{ color: "#afbac1" }} />
            </IconButton>

            <form>
              <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text"/>
              <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            
            <IconButton>
            <MicIcon style={{ color: "#afbac1" }}/>
            </IconButton>


          </div>
      </div>
  )
}

export default Chat