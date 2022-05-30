import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Song from './components/song/Song'
import About from './components/About/About'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/song" element={<Song />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
