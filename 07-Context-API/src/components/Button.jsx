import React, { useContext } from 'react'
import Component from './Component'
import { countercontext } from '../context/context'

const Button = () => {
    const value = useContext(countercontext)
  return (
    <div>
      <button onClick={()=>value.setCount((count) => count + 1)}>I am a button <span><Component/></span> </button>
    </div>
  )
}

export default Button
