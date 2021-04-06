import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../css/Exhibition.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import comming_soon from '../assets/comming_soon.png'
import lang from '../assets/lang_black.png'


function Exhibition() {

    AOS.init();
    AOS.refresh();

    return (
        <div className="bs-all">
            
            <Header></Header>
            <div className="exhibition">
                <div className="exhibition-text">현재 해피플에서 진행되는 전시들 </div>
                <div className="ex-dropdown">
                    <button className="ex-dropbtn"> 최신순</button>
                    <div className="ex-dropdown-content">
                        <a href="#latest"> 최신순 </a>
                        <a href="#popularity"> 인기순 </a>
                        <a href="#inquiry"> 조회순 </a>
                    </div>
                </div>
                <div className="wrapper">
                    <div class="card">
                        <img className="exhibition-lang" src={lang} />
                        <div class="info">
                            <h1>Time Slip</h1>
                            <p>I want to go back before corona19 virus. i will go jeju-island at july.</p>
                            <Link
                                to = "/exhibition-timeslip"><button id="open-btn">OPEN</button></Link>
                        </div>
                    </div>
                    <div class="card close">
                        <img className="exhibition-comming_soon" src={comming_soon} />
                        <div class="info">
                        <h1>Road</h1>
                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                        <button id="close-btn">CLOSE</button>
                        </div>
                    </div>
                    <div class="card">
                        <img className="exhibition-comming_soon" src={comming_soon} />
                        <div class="info">
                            <h1>Protester</h1>
                            <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                            <button id="close-btn">CLOSE</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Exhibition;