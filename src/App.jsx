import { Route, Routes } from 'react-router-dom'

import './App.css'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Watch from './pages/Watch'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        {/* base path should be given like this  or base url*/}
        <Route path='/' element={<LandingPage/>} /> 
        <Route path='/home' element={<Home/>} />
        <Route path='/watch' element={<Watch/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
