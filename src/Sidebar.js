
import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton, Avatar} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';


function sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__header">
        <IconButton style={{ color: "gray" }}>
           <Avatar src='https://scontent.fblr4-2.fna.fbcdn.net/v/t1.18169-9/12924339_520106051510045_904427695747043176_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=HfNNuulP3KwAX-uPwH1&_nc_ht=scontent.fblr4-2.fna&oh=00_AT-2Gszq0KKG8pguOUPTXg4_1ufSEhMQLuPoMpJd-v8bZQ&oe=628438ED'/>
          </IconButton>
            <div className="sidebar__headerRight">
              <IconButton>
                <DonutLargeIcon style={{ color: "#afbac1" }} />
              </IconButton>
              <IconButton>
                <ChatIcon style={{ color: "#afbac1" }}/>
              </IconButton>
              <IconButton>
                <MoreVertIcon style={{ color: "#afbac1" }}/>
              </IconButton>
            </div>
            
        </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined/>
          <input className='input' placeholder='Search or start new chat' type='text'/>
        </div>
        </div> 

        <div className="sidebar__chats">
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>

          </div>       
    </div>
  )
}

export default sidebar