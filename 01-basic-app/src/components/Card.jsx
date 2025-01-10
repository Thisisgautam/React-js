import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='Card'>
        <img src="https://th.bing.com/th/id/OIP.TbPAlPbJ0QQEfFA0pIq4ggHaEO?rs=1&pid=ImgDetMain" width={200} alt="" />
        <h1>{props.title}</h1>
        <p>{props.body}</p>
    </div>
  )
}

export default Card
