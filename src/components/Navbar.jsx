import React from 'react'
import "../App.css";
import { useState } from "react"

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <div className='Navbar'>
            <nav className="navigation">
                <a href="/" className="brand-name">
                    La Qlothque
                </a>
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
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    <div className="button">
                            <a href="#" className="text"><i className="fa fa-sign-in"></i>Login</a>
                            <a href="#" className="text"><i className="fa fa-user-plus"></i>Register</a>
                            <a href="#" className="text"><i className="fa fa-cart-plus"></i>Cart(0)</a>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar