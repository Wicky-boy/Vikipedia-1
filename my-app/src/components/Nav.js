import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";
import logo from "../image/VikipediaLOGO.png";
import {Link} from "react-router-dom"


function CustomNav(){
    return(
<Navbar className="customNavbar" collapseOnSelect expand="lg" bg="white" variant="dark">
<Navbar.Brand >
    <img
        alt=""
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top logo"
        
      />
    <span className="navTitle align-top"><a className="navTitleATag" href="/">Vikipedia<span style={{fontSize:"10px"}}>  BETA</span></a></span>
    </Navbar.Brand>
  <Navbar.Toggle style={{color:"black"}} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse style={{color:"black"}} id="responsive-navbar-nav">
  <Nav className="ml-auto">
      <Nav.Link  style={{color:"black",fontSize:"20px"}} className="navLinkColor linkColor" href="/">Home</Nav.Link>
      <Nav.Link  style={{color:"black",fontSize:"20px"}} className="navLinkColor linkColor" href="#">about</Nav.Link>
      
        <Nav.Link  className="navLinkColor linkColor" ><Link to="/login"><a className="loginButton btn navButton" href="###"> Sign Up </a></Link></Nav.Link> 
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )

}

export default CustomNav;


