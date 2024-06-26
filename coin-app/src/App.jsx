import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Coin from './Coin.jsx'
import LiveChart from './LiveChart.jsx'
import Navbar from './Navbar.jsx'
import SideBar from './SideBar.jsx'
import Footer from './Footer.jsx'
function App() {
  return (
    <div className="App">
      <div className="main-content">
      <Navbar/>
      <Coin/>
      <LiveChart/>
      <SideBar/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
