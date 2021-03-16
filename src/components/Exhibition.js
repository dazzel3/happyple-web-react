import React from 'react';
import Header from './Header';
import '../css/Exhibition.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Exhibition() {

    AOS.init();
    AOS.refresh();

    return (
        <div className="bs-all">
            <Header></Header>
            <div className="exhibition">
                <div
                    data-aos="flip-down"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="exhibition-text">Exhibition Page is comming soon...</div>
            </div>
        </div>
    )
}

export default Exhibition;