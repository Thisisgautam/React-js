import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img  src="https://miro.medium.com/v2/resize:fit:1200/1*odW0CyTVxMVt5s3yhjjOhw.png" alt="" />
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  )
}

export default Card
