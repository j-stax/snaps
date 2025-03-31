import './App.scss'
import Home from './pages/Home'
import Photo from './pages/Photo/Photo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos/:id" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
