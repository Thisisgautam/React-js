import { useState, useEffect } from 'react'

import './App.css'
import Navbar from './components/Navbar'
//useeffect hook is explained using alerts
//Important point to note is that when count is changed whole app is re-rendered and when color is changed only Navbar is re-rendered

function App() {
  //color and Value state variables using usestate hook
  const [color, setColor] = useState(0)
  const [value, setvalue] = useState(0);
  //useEffect hook to run code on when color is changed it changes the color of Navbar
  useEffect(() => {
    alert("I will run when count is changed")
    setColor(color + 1)
  }, [value])

  return (
    <>
      <Navbar color={"red " + color} />
      <div className="Count">
        <p>Count is {value}</p>
        <button onClick={() => {
          setvalue(value + 1)
        }}>Click ME</button>
      </div>
    </>
  )
}

export default App
