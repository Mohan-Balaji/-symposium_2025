// import { useState } from 'react'
import './App.css'
import Scrollport from './Components/Events/Technical/Scrollport';
// import TCardList from './Components/Events/Technical/TCardList';
// import Tech_cards from './Components/Events/Technical/Tech_cards';
// import Stars from './Components/Events/Technical/ui/Stars';
// import nav_bar from './Components/Navbar/navbar';\
import RegistrationForm from './Components/Backend_api/RegistrationForm'
import Navbar from './Components/Navbar/Navbar';
function App() {

  return (
    <>
    <Navbar/>
    {/* <nav_bar/>
    
    <Stars/>
    <TCardList></TCardList> */}
    {/* <Scrollport></Scrollport> */}
    <RegistrationForm/>
   </>
  )
}

export default App
