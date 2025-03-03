import './App.scss'
import Home from './pages/Home'
import Photo from './pages/Photo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [API_KEY, setAPI_KEY] = useState("")

  useEffect(() => {
    if (!sessionStorage.getItem('API_KEY')) {
      getApiKey()
    } else {
      setAPI_KEY(sessionStorage.getItem('API_KEY'))
    }
  }, [])

  const getApiKey = async () => {
    try {
      const response = await axios.get('https://unit-3-project-c5faaab51857.herokuapp.com/register')
      if (response.status == 200) {
        console.log(response.data.api_key)
        setAPI_KEY(response.data.api_key)
      } else {
        console.log(`Error registering API key: ${response.status}`)
      }
    } catch (err) {
      console.log(`Error registering API key: ${err}`)
    }  
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={API_KEY && <Home API_KEY={API_KEY} />} />
        <Route path="/photo/:id" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
