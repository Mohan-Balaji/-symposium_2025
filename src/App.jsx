// // import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import TCardList from './Components/Events/TCardList'
import LandingPage from './Components/Home_Components/LandingPage'
// import Background from './Components/Background/Background';
import RegistrationForm from "./Components/Registration_Form/RegistrationForm"
import Contact from './Pages/Contact/Contact';
import SuccessPage from './Components/Registration_Form/Registration_Success/SuccessPage';
import TeamPage from './Components/Teams';
import Confirmation from './Pages/Contact/Confirmation';
import CodeHeist from './Pages/Codetastic/CodeHeist';

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
      <Route path="/success" element={<SuccessPage/>}></Route>
      <Route path="/teams" element={<TeamPage/>}></Route>
      <Route path="/confirmation" element={<Confirmation/>}></Route>
      <Route path="/codeheist" element={<CodeHeist/>}></Route>
      

    </Routes>
    </BrowserRouter>
  )
}

export default App
