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
            <Modal open={ modalOpen } close={ closeModal } header="의뢰하기">
                <div className="form-name">이름(작가명): <input type="text" name="member_name" placeholder="본명 혹은 작가명을 입력해주세요."></input></div>
                <div className="form-email">이메일: <input type="email" name="member_email" placeholder="ex. happy@gmail.com"></input></div>
                <div className="form-tel">전화번호: <input type="tel" name="member_tel" placeholder="ex. 010-1234-5678"></input></div>
                <div className="form-number">작품 개수: <input type="text" name="member_number" placeholder="숫자만 입력해주세요."></input></div>
                <div className="form-sub">전시회 주제: <textarea maxLength="1000" cols="55" rows="3" placeholder="하고 싶은 전시회의 주제 혹은 컨셉에 대해 간단히 작성해주세요."></textarea></div>
                <div className="form-text">
                    *순차적으로 확인 후, 기재하신 이메일로 답변 드리겠습니다.<br/>
                    *의뢰가 성공적으로 접수되면, 해피플과 미팅 후 전시회를 꾸며나가면 됩니다.<br/>
                    *추가 문의사항 <a href="mailto:happypleus.gmail.com">happypleus.gmail.com</a>
                </div>
            </Modal>  
        </div>
        
    )
}

export default Header;