import React from 'react'
import {
    
  Link, useLocation
} from "react-router-dom";



function Payment() {
    const { state: { product } } = useLocation();
    console.log({ product });
    return (
        <div className='Payment'>
        <img alt="" className='Payment__Image' src={product.image}></img>
           <div className='payment__text'>
          <h2>{product.name}</h2>
          <h5>{product.price}</h5>  
           </div>
          <button className='payment__Button'>
            Proceed to Checkout Coming soon
          </button>
        </div>
    )
}
export default Payment


