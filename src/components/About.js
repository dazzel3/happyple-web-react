import React from 'react';
import Header from './Header';
import '../css/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

    AOS.init();
    AOS.refresh();

    return (
        <div className="bs-all">
            <Header></Header>
            <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="about">
                <div className="about-text">행복을 전하는 사람들.</div>
                <div className="text">
                    누구나 시간, 공간, 돈 제약받지 않고 상호작용해봐요<br />
                    상호작용이 가능한 전시회 세상! 해피플과 함께 만들어봐요.
                </div>
            </div>
        </div>
    )
}

export default About;