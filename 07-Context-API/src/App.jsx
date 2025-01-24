import { useState } from 'react'
import { countercontext } from './context/context'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <countercontext.Provider value={{count,setCount}}>
   <Navbar/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> 
      </div>
      </countercontext.Provider>
    </>
  )
}

export default App
