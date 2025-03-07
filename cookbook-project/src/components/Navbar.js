import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Search from "./Search";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 style={{fontFamily:'cursive'}}>Cook<span style={{color:"#074799"}}>Book</span></h2>
      <div className="" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      < Search />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categorys">Trending Dish</Link></li>
      </ul>
      </div>
    
    </nav>
  );
};

export default Navbar;
