import React from 'react';
import data from "../data.json";
import { SearchContext } from '../SearchContext';
import {
    
  Link
} from "react-router-dom";

function Adventure() {
  const {filterProduct}=React.useContext(SearchContext);
  return (
      <>
        <div className='All'>
           <h2> Browsing Adventure games</h2>   
           <h4>Browse the newest and most played adventure titles on Steam</h4>       
          {data[0].adventure.filter(filterProduct).map((product) => {
            return (
              <div className='f2p' key={product.id}>               
                  <img src={product.image}></img>
                  <h2>{product.name}</h2>
                  <h5>{product.price}</h5>
                  <Link  className='link'  to={{
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
export default Adventure
