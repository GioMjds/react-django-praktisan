import { useEffect, useState } from 'react'
import { fetchAllMessage } from './services/axios';
import './App.css'

interface MessageData {
  message_id: number;
  content: string;
}

function App() {
  const [messages, setMessages] = useState<MessageData[]>([]);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetchAllMessage();
        setMessages(response.data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    }
    fetchMessage();
  }, []);

  return (
    <ul>
      {messages?.map((message) => (
        <li key={message.message_id}>
          <h1 className='text-2xl'>{message.message_id}. {message.content}</h1>
        </li>
      ))}
    </ul>
  )
}

export default App
