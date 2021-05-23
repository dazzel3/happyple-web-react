import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../css/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import home_main from '../assets/home_main.png'

function Home() {

    AOS.init();
    AOS.refresh();

    return (
        <div className="bs-all">
            <Header></Header>
            <div className="bs">
                <div className="blog-slider">
                    <div className="blog-slider__wrp swiper-wrapper">
                        <div className="blog-slider__item swiper-slide">
                            <div className="blog-slider__img">
                                <img src={home_main}/>
                            </div>
                            <div className="blog-slider__content">
                                <span className="blog-slider__code">today's pick</span>
                                <div className="blog-slider__title">Time Slip: Retro</div>
                                <div className="blog-slider__text">'레트로' 컨셉을 담은 2020 to 1980년대 타임슬립. <br/>완전 소중한 추억 보고갈래..? </div>
                                <Link 
                                data-aos="zoom-in"
                                data-aos-delay="50"
                                data-aos-duration="800"
                                data-aos-easing="ease-in-out"
                                className="blog-slider__button"
                                to = "/exhibition-timeslip">VIEW MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="blog-slider__pagination"></div>
                </div>
            </div>
        </div>
    )
}

export default Home;