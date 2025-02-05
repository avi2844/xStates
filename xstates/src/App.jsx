import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Country from './components/Country'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Select Location</h1>
      <Country />
    </>
  )
}

export default App
