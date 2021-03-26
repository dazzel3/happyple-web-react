import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logo_white.png'

function Header() {

    return (
        <div className="all">
            <img className="logo" src={logo} />    
                <nav className = "Menu">
                    <Link className="MenuItem is-active" active-color='orange' to = "/">Home</Link>
                    <Link className="MenuItem" active-color='red' to = "/about">About</Link>
                    <Link className="MenuItem" active-color='green' to = "/exhibition">Exhibition</Link>
                    <Link className="MenuItem" active-color='blue' to = "/shop">Shop</Link>
                    <Link className="MenuItem" active-color='blue' to = "/FAQ">FAQ</Link>
                    <span class="MenuIndicator"></span>
                </nav>
                <button className="request-btn">의뢰하기</button>    
        </div>
        
    )
}

export default Header;