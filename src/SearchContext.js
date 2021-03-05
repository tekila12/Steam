import React, {} from 'react';

export const SearchContext =React.createContext(null)
export  default function SearchProvider({children}) {

const [searchValue, setSearchValue] = React.useState("");


function filterProduct(product) {
     return product.name.toLowerCase().includes(searchValue.toLowerCase());
     }
      return( 

       <SearchContext.Provider value ={{filterProduct, 
                                
                                        searchValue,
                                        setSearchValue}}>
             {children} 
        </SearchContext.Provider> 
             
             ); }
