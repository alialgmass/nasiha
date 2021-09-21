import React from "react";
import './navbar.css';
import { Link} from "react-router-dom";
import { scroller } from "react-scroll";
const Navbar=()=>{
const scrollToSection = (clas) => {
        scroller.scrollTo(clas, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };
    return(<div className="navbar">
<div className="container">
    <div className="logo">logo</div>
   
    <div className="ul">
        <li>
            <Link to="/home" onClick={()=>scrollToSection("Home")}>home</Link>
           
        </li>
        <li>
            <Link to="/hadith" onClick={()=>scrollToSection("hadeth")}>hadith</Link>
           
        </li>
        <li>
            <Link to="/home" >home</Link>
           
        </li>
        <li>
            <Link to="/home" >home</Link>
           
        </li>
    </div>
   
</div>
    </div>);
}
export default Navbar;