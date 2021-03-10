import React from 'react'
import data from "../data.json";
import {
    
    Link
  } from "react-router-dom";
import { SearchContext } from '../SearchContext';
function Strategy() {
    const {filterProduct}=React.useContext(SearchContext);
    return (
        <>
          <div className='All' >          
               <h2> Browsing Strategy games</h2>   
               <h4>Browse the newest and most played strategy titles on Steam</h4>  
               {data[0].strat.filter(filterProduct).length === 0 &&(
               <div>
                 <h3>Game not found</h3>
               </div>
                )}          
            {data[0].strat.filter(filterProduct).map((product) => {             
                      
              return (
                <div className='f2p' key={product.id}>                      
                    <img alt="product" src={product.image}></img>
                    <h2>{product.name}</h2>
                    <h5>{product.price}</h5>                               
               <Link  className='link'  
                 to={{
                 pathname: `/payment/${product.id}`,
                 state: {
                 product,                        
                 },}}>
                 Buy Now
               </Link> 
           </div>
              );
            })}
          </div>
        </>
      );
}

export default Strategy
