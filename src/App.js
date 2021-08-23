import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

import  './App.css'

const App = () => {
    return (
       
       <ChatEngine height="200vh" projectID="
       0bbc5050-9891-44bb-a021-c9357ad1c236" userName="Gimna" userSecret="123" renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} />
    )
}

export default App
