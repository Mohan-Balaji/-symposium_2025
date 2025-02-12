import { useState } from 'react'
import Technical_Reg_form from './Components/Technical_Reg_form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Technical_Reg_form/>
    </>
  )
}

export default App
