
import Sidebar from './Sidebar';
import './App.css';
import Chat from './Chat';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';


function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
      axios.get('/messages/sync').then(response => {
          
          setMessages(response.data);
      })
  }, []);




  useEffect(()=>{
    const pusher = new Pusher('cf49a72316f36e1797c7', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',(data)=>{
      //alert(JSON.stringify(data));
      setMessages([...messages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  },[messages]);

  console.log(messages);

  return (
    <div className="App">
      <div className='App__body'>
      <Sidebar/>
      <Chat messages={messages}/>

      </div>

    </div>
     
     
  );
}

export default App;
