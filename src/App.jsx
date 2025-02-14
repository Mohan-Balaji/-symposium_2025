// // import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import TCardList from './Components/Events/Technical/TCardList'
// import LandingPage from './Components/Home_Components/LandingPage'
function App() {

  return (
    <>
    <Navbar></Navbar>
    {/* <LandingPage/> */}
    <TCardList/>
   </>
  )
}

export default App
