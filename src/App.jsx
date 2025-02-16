// // import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import TCardList from './Components/Events/TCardList'
import LandingPage from './Components/Home_Components/LandingPage'
// import Background from './Components/Background/Background';
import RegistrationForm from "./Components/Registration_Form/RegistrationForm"
import Contact from './Pages/Contact';
function App() {

  return (
  //   <>
  //   {/* <Navbar></Navbar>
  //   {/* <LandingPage/> }
  //   <TCardList/> */}


  //  </>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/events" element={<TCardList/>}></Route>
      <Route path="/registration" element={<RegistrationForm/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
