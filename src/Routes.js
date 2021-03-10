import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
   
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
function Routes() {
    return (
        <div>
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
          <Route  path="/">  
          <FreeToPlay  />
        </Route>   
          </Switch>           
         </Router>                  
        </div>
    )
}

export default Routes
