import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

import  './App.css'

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
       
       <ChatEngine height="200vh" projectID="
       0bbc5050-9891-44bb-a021-c9357ad1c236" userName={localStorage.getItem('username')} userSecret={localStorage.getItem('password')}  renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} />
    )
}

export default App
