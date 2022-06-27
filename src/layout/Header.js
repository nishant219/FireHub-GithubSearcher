import React,{useState, useContext} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {Link} from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";


const Header=()=>{

    const context= useContext(UserContext);

    const [isOpen, setIsOpen]= useState(false);  //state to flip menu icon 
    //we have to create toggle method below to do the flip of icon
    const toggle=()=> setIsOpen(!isOpen);  // and add this fun on click in NavToggler

// we have done some conditional rendering in all NavItems and and in NavText
// if user prenent in context then ? (logout) : (signin, signout)

    return(
    // <Navbar color="info" light expand="md" animation="false">
    <Navbar style={{backgroundColor: '#00C853'}} light expand="md" animation="false">


<NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
<NavbarBrand> <Link to="/" className="text-white"> FireHub </Link> </NavbarBrand>




<NavbarText className="text-center text-white  "> {
    context.user?.email ? `Hi👋 "${context.user?.email}"` : " "
} </NavbarText>

<NavbarToggler onClick={toggle} /> 
<Collapse isOpen={isOpen} navbar> 

<Nav className="ml-auto" navbar>

{
    context.user ?
     (
        // <NavItem as="li">
        // <NavLink id="RouterNavLink" onClick={()=>{context.setUser(null)}} className="text-white"> Logout </NavLink>
        // </NavItem>
        <NavItem className="text-center">
        <NavLink
          onClick={() => { context.setUser(null);
            toast(` you are now Logout`, { type: "error" });
          }}
          className=" text-center NavLink text-dark"
        >
          Logout
        </NavLink>
      </NavItem>
     )
   :
    (  <>
      <NavItem as="li">
          <NavLink id="RouterNavLink" tag={Link} to="/signup" className="text-white"> SignUp </NavLink>
      </NavItem>
      <NavItem as="li">
          <NavLink id="RouterNavLink" tag={Link} to="/signin" className="text-white"> SignIn </NavLink>
      </NavItem>  
      </>     
    )
}
   
</Nav>

        </Collapse>
        </Navbar>
    )
};

export default Header;