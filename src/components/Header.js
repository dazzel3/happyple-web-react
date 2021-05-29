import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logo_white.png'
import Modal from './contents/Modal'

function Header() {

    const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div className="all">
            <img className="logo" src={logo} />    
                <nav className = "Menu">
                    <Link className="MenuItem" to = "/">Home</Link>
                    <Link className="MenuItem" to = "/about">About</Link>
                    <Link className="MenuItem" to = "/exhibition">Exhibition</Link>
                    <Link className="MenuItem" to = "/shop">Shop</Link>
                    <Link className="MenuItem" to = "/FAQ">FAQ</Link>
                    <span class="MenuIndicator"></span>
                </nav>
                <button className="request-btn" onClick={ openModal }>의뢰하기</button>
                <Modal open={ modalOpen } close={ closeModal } header="Modal heading">
                    리액트 함수형 모달 팝업창입니다.
                    쉽게 만들 수 있어요. 
                    같이 만들어봐요!
                </Modal>  
        </div>
        
    )
}

export default Header;