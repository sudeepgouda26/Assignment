import { useState } from 'react'

import './App.css'
import OTPForm from './components/OTPForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <OTPForm/>
    </>
  )
}

export default App
