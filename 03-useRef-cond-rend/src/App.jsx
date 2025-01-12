import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// useRef hooks is usred for two things
// 1. To access the dom element
// 2. To persist the value between the re-renders, also it does not cause the re-render

//Conditional rendering is done in two ways
// 1. Using the ternary operator - for if else condition
// 2. Using the && operator - for if condition

function App() {

  const [show, setShow] = useState(true)
  //The useRef hook
  const btnref = useRef(null)
  const variable = useRef(0)
  //rendering lists using map
  //crete a list of objects
  const [list, setlist] = useState([
    {
      title: 'Test title 1',
      body: 'Test body 1'
    },
    {
      title: 'Test title 2',
      body: 'Test body 2'
    },
    {
      title: 'Test title 3',
      body: 'Test body 3'
    },
    {
      title: 'Test title 4',
      body: 'Test body 4'
    },
  ])
  useEffect(() => {
    //useRef 1st use case
    variable.current += 1;
    console.log(`The value of the useRef variable is ${variable.current}`)
  })


  return (
    <>


      {/* Conditional Rendering */}
      <div className="cond">
        {/* 1. if-else condition */}
        {show ? <button >show is true</button> : <button>show is false</button>}
        <button onClick={() => { setShow(!show); 
        show?btnref.current.style.background = 'red':btnref.current.style.background = 'green' }
        }>Toogle show state and bg color</button>

        {/* 2. if condition
        {show && <button>I am visible cuz show : true</button>}
        <button onClick={() => setShow(!show)}>Toogle show state</button> */}

      </div>


      {/* //useRef 2nd use case */}
      <div className="card">
        <button ref={btnref} >
          background
        </button>
      </div>
      {/* //rendering lists using map */}
      <div className="List">
        <h1>Rendering Lists</h1>

        {list.map((value) => {
          return <div value="list" className="card" key={value.title}>
            <p>{value.title}</p>
            <p>{value.body}</p>
          </div>
        })}

      </div>

    </>
  )
}

export default App
