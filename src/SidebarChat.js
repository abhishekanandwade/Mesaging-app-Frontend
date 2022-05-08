import './SidebarChat.css';
import React from 'react'
import { Avatar } from '@material-ui/core';
import DoneAllSharpIcon from '@material-ui/icons/DoneAllSharp';

function SidebarChat() {
  return (
    <div className='SidebarChat'>
        <Avatar className='avatar'/>
        <div className="sidebarChat__info">
            <h2>Room Name</h2>
            <div className="msg">
                <DoneAllSharpIcon className='Tick'/>
                <p>This is the last message</p>
            </div>
        </div>
        
    </div>
  )
}

export default SidebarChat