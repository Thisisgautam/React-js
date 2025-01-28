import React, { memo } from 'react'

const Navbar = ({adjective,getadj}) => {
  return (
    <>
   { console.log("Navbar is re-rendered")}
    <div>
      I am a prop :  {adjective} 
    </div>
    <div>I come from a prop function which has a state variable as count : {getadj()}</div>
    </>
  )
}
//memo makes the component re render only when a prop is changed
export default memo (Navbar)
