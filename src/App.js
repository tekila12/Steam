import React from 'react'
import Header from './Header'
import './App.css';
import SlideShow from './SlideShow';
import SearchProvider from "./SearchContext";

import Routes from './Routes';
function App() {
  return (
    <div className="app">
    <SearchProvider>
      <Header />
      <SlideShow imgs={[
        "/SlideShow/cyberpunk.jpg",
        "/SlideShow/gate.jpg",
        "/SlideShow/gta.jpg",
        "/SlideShow/phasm.jpg",
        "/SlideShow/rust.jpg",       
      ]} /> 
     <Routes />
    </SearchProvider>    
    </div>
  );
}

export default App;
