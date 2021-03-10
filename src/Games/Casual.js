import React from 'react'
import data from "../data.json";
import { SearchContext } from '../SearchContext';
import {
    
  Link
} from "react-router-dom";
function Casual() {
    const {filterProduct}=React.useContext(SearchContext);
    return (
        <>
          <div className='All'>
              <h2> Browsing Casual Games</h2>   
              <h4>Browse the newest and most played Casual titles on Steam</h4> 
              {data[0].casual.filter(filterProduct).length === 0 &&(
           <div>
             <h3>Game not found</h3>
             </div>
         )}      
            {data[0].casual.filter(filterProduct).map((product) => {
              return (
                <div className='f2p' key={product.id}>               
                    <img alt='product' src={product.image}></img>
                    <h2>{product.name}</h2>
                    <h5>{product.price}</h5>
                    <Link  className='link' to={{
                    pathname: `/payment/${product.id}`,
                    state: {
                    product, 
                    },
                    }}>
             Buy Now
            </Link> 
        </div>
              );
            })}
          </div>
        </>
      );
          }

export default Casual
