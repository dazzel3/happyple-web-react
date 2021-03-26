import React from 'react';
import Header from './Header';
import '../css/FAQ.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FAQ() {

    AOS.init();
    AOS.refresh();

    return (
        <div className="bs-all">
            <Header></Header>
            <div className="FAQ">
                <div
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="FAQ-text">FAQ Page is comming soon...</div>
            </div>
        </div>
    )
    
}
export default FAQ;