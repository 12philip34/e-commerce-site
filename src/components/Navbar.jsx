import React from 'react'
import "../App.css";
import { useState } from "react"
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';


const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const state = useSelector((state)=> state.HandleCart)
    

    return (
        <div className='Navbar'>
            <nav className="navigation">
                <NavLink to="/" className="brand-name">
                    La Boutique
                </NavLink>
                <button
                    className="hamburger"
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div
                    className={
                        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                    }
                >
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    <div className="button">
                            <NavLink to="/login" className="text"><i className="fa fa-sign-in"></i>Login</NavLink>
                            <NavLink to="/register" className="text"><i className="fa fa-user-plus"></i>Register</NavLink>
                            <NavLink to="/cart" className="text"><i className="fa fa-cart-plus"></i>Cart({state.length})</NavLink>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar