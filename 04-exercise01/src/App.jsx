import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  
  const [count, setCount] = useState([])
  
 useEffect(() => {
   async function fetchdata(params) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")  
    const data = await response.json()
    // for (const element of data) {
    //   setCount(count += element)
    // }    

    setCount(data)
    // Array.from(data).forEach(element => {
    //   setCount(count => [...count, element])
    // });
    console.log(count)
  }
  fetchdata()
}, [])

const Todo=(props)=>{
  return(
    <div className='card'>
      <img src="https://th.bing.com/th/id/OIP.E3WZVnuubIK4OqhSTF3cqwHaEK?rs=1&pid=ImgDetMain" alt="" />
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  )
} 
return (
  <>
 
      <Navbar />
      <div className="cardcontainer">
      {
        count.map((count) => {
          // return <Card title={count.title} body={count.body}/>
          return <Todo title={count.title} body={count.body}/>
        }) 
      }

      </div>
    </>
  )
}

export default App
