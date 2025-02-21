import { useEffect, useState } from 'react'
import { fetchAllMessage } from './services/axios';
import './App.css'

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetchAllMessage();
        setMessage(response.data.content);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    }
    fetchMessage();
  }, []);

  return (
    <>
      <div>
        {message}
      </div>
      <h1 className='text-5xl font-bold underline'>{message}</h1>
    </>
  )
}

export default App
