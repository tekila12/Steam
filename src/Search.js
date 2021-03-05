import React from 'react'
import './Search.css'
import { SearchContext } from './SearchContext';

function Search() {

    const {searchValue, setSearchValue}=React.useContext(SearchContext); 
    return (
        <div className='search'>
            <input className="search__Input" type="text"
            value ={searchValue} 
            onChange={(e) => setSearchValue(e.target.value)}
            type='text'
            placeholder='Search '/>
           
        </div>
    )
}

export default Search
