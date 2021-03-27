import React from 'react';
import Header from './Header';
import GoTop from './GoTop'
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
                    className="FAQ-container">
                        <div 
                        data-aos="zoom-in-down"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="question">
                        Q. 해피플에서 우리의 역할은 무엇인가?
                        </div>
                        <div 
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className="answer">
                        A. 미디어아트 작가가 의뢰한 전시를 웹상에 표현해주는 개발자이다.
                        </div>
                        <div 
                        data-aos="zoom-in-down"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="question">
                        Q. 해피플에서 우리의 역할은 무엇인가?
                        </div>
                        <div 
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className="answer">
                        A. 미디어아트 작가가 의뢰한 전시를 웹상에 표현해주는 개발자이다.
                        </div>
                        <div 
                        data-aos="zoom-in-down"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="question">
                        Q. 해피플에서 우리의 역할은 무엇인가?
                        </div>
                        <div 
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className="answer">
                        A. 미디어아트 작가가 의뢰한 전시를 웹상에 표현해주는 개발자이다.
                        </div>
                        <div 
                        data-aos="zoom-in-down"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="question">
                        Q. 해피플에서 우리의 역할은 무엇인가?
                        </div>
                        <div 
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className="answer">
                        A. 미디어아트 작가가 의뢰한 전시를 웹상에 표현해주는 개발자이다.
                        </div>
                        <div 
                        data-aos="zoom-in-down"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="question">
                        Q. 해피플에서 우리의 역할은 무엇인가?
                        </div>
                        <div 
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className="answer">
                        A. 미디어아트 작가가 의뢰한 전시를 웹상에 표현해주는 개발자이다.
                        </div>
                </div>
            </div>
            <GoTop />
        </div>
    )
    
}
export default FAQ;