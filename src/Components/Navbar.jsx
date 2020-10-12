import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import useWebAnimations, { bounceIn } from "@wellyshen/use-web-animations";

function Navbar() {

    const bounceInAnimation = bounceIn;
    const refBounceIn = useWebAnimations({
    keyframes: bounceInAnimation.keyframes,
    timing: {
        iterations: 1,
        duration: 1500,
      }
    });

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light p-1 bg-light mx-auto">
            <div className="container-fluid">
                <NavLink exact className="navbar-brand" to="/">
                    <img ref={refBounceIn.ref} width="70vh" className="ml-4 logo" src={Logo} alt=" " />
                </NavLink>
                <button 
                    className="navbar-toggler" 
                    type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse navbar-list nav-list" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-5 mb-2 mb-lg-0">
                    <li className="nav-item active">
                        <NavLink 
                        activeClassName="menu_active" 
                        exact 
                        className="nav-link active" 
                        to="/"
                        >
                            Home 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        activeClassName="menu_active" 
                        exact 
                        className="nav-link" 
                        to="/service"
                        >
                            Services
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        activeClassName="menu_active" 
                        exact 
                        className="nav-link" 
                        to="/about"
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        activeClassName="menu_active" 
                        exact 
                        className="nav-link" 
                        to="contact"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;