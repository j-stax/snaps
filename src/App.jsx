import './App.scss'
import Home from './pages/Home'
import Photo from './pages/Photo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [apiKey, setApiKey] = useState("")

  useEffect(() => {
    const getApiKey = async () => {
      try {
        const response = await axios.get('https://unit-3-project-c5faaab51857.herokuapp.com/register')
        if (response.status == 200) {
          setApiKey(response.data.api_key)
        } else {
          console.log(`Error registering API key: ${response.status}`)
        }
      } catch (err) {
        console.log(`Error registering API key: ${err}`)
      }  
    }

    getApiKey()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={apiKey && <Home apiKey={apiKey} />} />
        <Route path="/photo/:id" element={<Photo apiKey={apiKey} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
