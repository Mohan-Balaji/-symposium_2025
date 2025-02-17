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
import TeamPage from './Pages/Developers_Page/Teams';
import Confirmation from './Pages/Contact/Confirmation';
import CodeHeist from './Pages/Codetastic-NO/CodeHeist';
import DesignX from "./Pages/DesignX/DesignX"
import Mlshowdown from "./Pages/ML Showdown/Mlshowdown"
import Codetastic from "./Pages/Codetastic/Codetastic";

function App() {  

  return (
  //   <>
  //   {/* <Navbar></Navbar>
  //   {/* <LandingPage/> }
  //   <TCardList/> */}
  // //  </>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/events" element={<TCardList/>}></Route>
      <Route path="/registration" element={<RegistrationForm/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/success" element={<SuccessPage/>}></Route>
      <Route path="/teams" element={<TeamPage/>}></Route>
      <Route path="/confirmation" element={<Confirmation/>}></Route>
      <Route path="/codeheist" element={<CodeHeist/>}></Route>
      <Route path="/designx" element={<DesignX/>}></Route>
      <Route path="/mlshowdown" element={<Mlshowdown/>}></Route>
      <Route path="/codetastic" element={<Codetastic/>}></Route>
      

    </Routes>
    </BrowserRouter>
  )
}

export default App
