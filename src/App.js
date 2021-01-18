import React from 'react'
import Header from './Header'
import './App.css';
import SlideShow from './SlideShow';
import SearchProvider from "./SearchContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SideBar from './SideBar';
import Adventure from './Games/Adventure';
import Action from './Games/Action';
import FreeToPlay from './Games/FreeToPlay';
import Casual from './Games/Casual';
import Indie from './Games/Indie';
import Multiplayer from './Games/Multiplayer';
import Simulation from './Games/Simulation';
import Strategy from './Games/Strategy';
import Racing from './Games/Racing';
import Sport from './Games/Sport';
import Payment from './Payment';
import Checkout from './Checkout';
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
      <Router>    
      <SideBar />                           
          <Switch>    
          <Route path="checkout">
          <Checkout/>     
          </Route>  
        <Route path="/payment/:productId">
          <Payment/>
        </Route>                                   
        <Route path="/sport">
          <Sport />          
        </Route>
        <Route path="/strategy">
            <Strategy />
        </Route>
        <Route path="/simulation">
          <Simulation/>
        </Route>
        <Route path="/racing">
          <Racing />
        </Route>
        <Route path="/multiplayer">
          <Multiplayer />
        </Route>
        <Route path="/indie">
          <Indie />
        </Route>
        <Route path="/casual">
          <Casual />
        </Route>
        <Route path="/adventure">
          <Adventure />
        </Route>
        <Route path="/action">
          <Action  />         
        </Route>             
        <Route path="/">  
          <FreeToPlay  />
        </Route>                  
          </Switch>      
         </Router>          
          
    </SearchProvider>    
    </div>
  );
}

export default App;
