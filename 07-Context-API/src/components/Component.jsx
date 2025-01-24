import React, { useContext } from 'react'
import { countercontext } from '../context/context'

const Component = () => {
    const counter = useContext(countercontext)
  return (
    <div>
      Using Context API : {counter.count}
    </div>
  )
}

export default Component
