import React from 'react'
import Offers from './Offers.js'

function Offer({offers}) {
  return (
    <div className='offersSection'>
        {offers.map((item,index)=>(
            <Offers key = {item.image} index = {index} src={item.image} link={item.url}/>
            ))}
    </div>
  )
}

export default Offer