import { useState } from 'react'


function App() {
  //creating a state object for input tags
  const [form, setform] = useState({email : "", phone : ""})
  //Function to handle click event 
  const handleclick =()=>{
    alert("I am clicked hehe")
  }
//Creating a function to handle change in input tags
const handlechange =(e)=>{
  setform({...form,[e.target.name]:e.target.value})
  console.log(form)
}
  return (
    <>
    <div>
      <h1>Handling events in React</h1>
      <button onClick={handleclick}>Alert</button>
      </div>
      <div className="forms">
      <div><span>Email :</span><input type="text" name='email' value={form.email}  onChange={handlechange} /></div>
      <div><span>Phone :</span><input type="text" name='phone' value={form.phone}  onChange={handlechange} /></div>
      </div>
    </>
  )
}

export default App
