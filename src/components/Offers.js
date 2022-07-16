import React from 'react';
import '../styles/offer.css'

function Offers({index,src,link}) {
  return (
    <a href={link} ><img src={src} alt={`${index} offres`}/></a>
    )
}

export default Offers