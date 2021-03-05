import React from 'react'
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";
  import './SideBar.css'
function SideBar() {
    return (
        <div className='sidebar' >         
        <nav>
          <ul className='sidebar__List'>
            <li className='sidebar__Lists'>
              <NavLink activeStyle={{
                fontWeight: "bold",
                color: "green",
          }}    to="/FreeToPlay">Free to Play</NavLink>
            </li>
            <li className='sidebar__Lists'>
              <NavLink activeStyle={{
               fontWeight: "bold",
               color: "green",
               }}to="/Action">Action</NavLink>
            </li>
            <li className='sidebar__Lists'>
              <NavLink activeStyle={{
               fontWeight: "bold",
               color: "green",
               
                }} to="/Adventure">Adventure</NavLink>
            </li>          
            <li className='sidebar__Lists'>
              <NavLink activeStyle={{
               fontWeight: "bold",
               color: "green",
                }} to="/Casual">Casual</NavLink>
            </li>
            <li className='sidebar__Lists'>
              <NavLink activeStyle={{
               fontWeight: "bold",
               color: "green",
                }} to="/Indie">Indie</NavLink>
            </li>
            <li className='sidebar__Lists'>
              <NavLink activeStyle={{
               fontWeight: "bold",
               color: "green",
                }} to="/Multiplayer">Multiplayer</NavLink>
            </li>
            <li className='sidebar__Lists'>
              <NavLink activeStyle={{
               fontWeight: "bold",
               color: "green",
                }} to="/Racing">Racing</NavLink>
            </li>
            <li className='sidebar__Lists'>
              <NavLink activeStyle={{
               fontWeight: "bold",
               color: "green",
                }} to="/Simulation">Simulation</NavLink>
            </li >
            <li className='sidebar__Lists'>
              <NavLink activeStyle={{
               fontWeight: "bold",
               color: "green",
                }} to="/Sport">Sport</NavLink>
            </li>
            <li className='sidebar__Lists'>
              <NavLink activeStyle={{
               fontWeight: "bold",
               color: "green",
                }} to="/Strategy">Strategy</NavLink>
            </li>
          </ul>
        </nav>
        </div>
    )
}

export default SideBar
