import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../css/Exhibition.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ex_main from '../assets/ex_main.png'
import ex_2 from '../assets/ex_2.png'
import ex_3 from '../assets/ex_3.png'


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
                        <img className="exhibition-lang" src={ex_main} />
                        <div className="info">
                            <h1>🎨 Time Slip</h1>
                            <p className="info-details">
                                '레트로' 컨셉을 담은 2020 to 1980년대 타임슬립. 
                                완전 소중한 추억 보고갈래..?
                            </p>
                            <p>2021.08.09 - 2021.12.24</p>
                            <Link
                                to = "/exhibition-timeslip"><button id="open-btn">OPEN</button></Link>
                        </div>
                    </div>
                    <div class="card close">
                        <img className="exhibition-coming_soon" src={ex_2} />
                        <div class="info">
                            <h1>🎨 My flowers</h1>
                            <p className="info-details">
                                나만의 꽃을 찾으러 가는길, 함께 해요.
                                어떤 꽃을 갖고 싶으세요?
                            </p>
                            <p>2021.08.09 - 2021.12.24</p>
                            <button id="close-btn">CLOSE</button>
                        </div>
                    </div>
                    <div class="card">
                        <img className="exhibition-coming_soon" src={ex_3} />
                        <div class="info">
                            <h1>🎨 Rest</h1>
                            <p className="info-details">
                                일상에서의 쉼표, 필요하지 않으신가요?
                                잠시 여유를 즐겨보세요 :)
                            </p>
                            <p>2021.08.09 - 2021.12.24</p>
                            <button id="close-btn">CLOSE</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Exhibition;