import React from 'react';
import './Header.css';
import Search from'./Search' 


function Header({searchValue, setSearchValue}) {
    return (
        <div className='header'>  
        <img src='/steam.png'></img>    
           <Search searchValue={searchValue} setSearchValue={setSearchValue} />       
        </div>
    )
}

export default Header
