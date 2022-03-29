import React from 'react'
import './card.scss'
const Card = ({item}) => {
  return (
    <div className='card-container'>
        <div className="wrapper-card">
            <img src={item.imageUrl} alt="collectionItem" />
            <span className='title'>{item.name}</span>
            <span>$ {item.price}</span>
            <button>Add</button>
        </div>
    </div>
  )
}

export default Card