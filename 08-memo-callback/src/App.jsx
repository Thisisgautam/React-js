import { useState, useMemo, useCallback } from 'react'
import './App.css'
import Navbar from './components/Navbar'

//creating an array for an example complex computation
const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    istrue: i === 29_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setnumbers] = useState(nums)

  // const complexv = numbers.find(item=>item.istrue===true) //expensive computation 
  //solution : useMemo hook
  const complexv = useMemo(() => numbers.find(item => item.istrue === true), [numbers])

  //This function is passed as a prop to Navbar and it re-intializes itself when the page is rerendered
  // const getadj=()=>{
  //   return "another adjective" 
  // }


  // To avoid the above problem useCallback Hook is used which freezes 
  // the function for rerendering also in the dependency array we can provide a value
  // when that changes the function is unfreezed only then
  const getadj = useCallback(() => {
    return "another adjective " + count
  }, [count])


  return (
    <>
      <Navbar adjective={"good"} getadj={getadj} />
      <h1>Complex number is : {complexv.index}</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          // to explain dependency array :: useMemo
          // if(count>20){
          //   const nums = new Array(10_000_000).fill(0).map((_,i)=>{
          //     return{
          //       index: i,
          //       istrue:i===9_000_000
          //     }
          //   })
          //   setnumbers(nums)
          // }
        }}>
          count is {count}
        </button>

      </div>

    </>
  )
}

export default App
