import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logo_white.png'

function Header() {

    // const indicator = document.querySelector('.MenuIndicator');
    // const items = document.querySelectorAll('.MenuItem');

    // function handleIndicator(el) {
    //     items.forEach(item => {
    //         item.classList.remove('is-active');
    //         item.removeAttribute('style');
    //     });
  
    //     indicator.style.width = `${el.offsetWidth}px`;
    //     indicator.style.left = `${el.offsetLeft}px`;
    //     indicator.style.backgroundColor = el.getAttribute('active-color');

    //     el.classList.add('is-active');
    //     el.style.color = el.getAttribute('active-color');
    // }
    
    // items.forEach((item, index) => {
    //     item.addEventListener('click', (e) => { handleIndicator(e.target)});
    //     item.classList.contains('is-active') && handleIndicator(item);
    // });

    return (
        <div className="all">
            <img className="logo" src={logo} />    
                <nav className = "Menu">
                    <Link className="MenuItem is-active" active-color='orange' to = "/">Home</Link>
                    <Link className="MenuItem" active-color='red' to = "/about">About</Link>
                    <Link className="MenuItem" active-color='green' to = "/exhibition">Exhibition</Link>
                    <Link className="MenuItem" active-color='blue' to = "/shop">Shop</Link>
                    <span class="MenuIndicator"></span>
                </nav>
        </div>
        
    )
}

export default Header;