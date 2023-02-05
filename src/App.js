import React,{useState} from 'react';
import Form from './components/form';
//import ChatContainer from './components/chat-box'
import './app.css';
import bot from './bot.svg';
import user from './user.svg';

function App(props){
  const [display, setDisplay]= useState('')
  function setRender(resp){
    setDisplay(resp)
  }
 
  return(
    <div id="app">
      <h1>Jinonet ChatBot</h1>
      <div>
        < Form
        addResponse={setRender} />
      </div>
    </div>
    )
}
export default App;