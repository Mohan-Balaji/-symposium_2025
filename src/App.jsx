// // import { useState } from 'react'
import './App.css'
// import Landing_page from './Pages/Landing_page'
// import Scrollport from './Components/Events/Technical/Scrollport';
// import TCardList from './Components/Events/Technical/TCardList';
// import Tech_cards from './Components/Events/Technical/Tech_cards';
// import Stars from './Components/Events/Technical/ui/Stars';
// import nav_bar from './Components/Navbar/navbar';
// import Contact from "../src/Pages/Contact"
import RegistrationForm from './Components/Backend_api/RegistrationForm';
// import Card from "./Components/Events/Non-Technical/Card"
import Navbar from './Components/Navbar/Navbar';
// import Card from './Components/Events/Non-Technical/Card'
function App() {

  return (
    <>
    <Navbar/>
    {/* <Navbar/>
    <Contact></Contact>
  
    <TCardList></TCardList> */}
    <RegistrationForm/> 
    {/* <Landing_page/>   */}
   </>
  )
}

export default App
