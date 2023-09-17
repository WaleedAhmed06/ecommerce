import React from 'react'
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import '../Component/nav.css'

export default function Navbar() {
    useEffect(() => {
        function scrollValue() {
          const navbar = document.getElementById('call');
          const scroll = window.scrollY;
    
          if (scroll < 200) {
            navbar.classList.remove('navbarColour');
          } else {
            navbar.classList.add('navbarColour');
          }
        }
    
        window.addEventListener('scroll', scrollValue);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', scrollValue);
        };
      }, []);
  return (
    <div>
      <div  className="navbar" id="call" >
        <div className="nav">
         <NavLink to="/">HOME</NavLink>
         <NavLink to="/card">PRODUCTS</NavLink>
         <NavLink to="/dashboard">DASHBOARD</NavLink>
        </div>
    </div>

    
    </div>
  )
}
