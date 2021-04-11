import React from 'react';
import Header from './Header';
import GoTop from './GoTop';
import '../css/TimeSlip.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Virus from './contents/Virus';
import Virus2 from './contents/Virus2';
import Virus3 from './contents/Virus3';
import insta from '../assets/insta.jpg'
import kakao from '../assets/kakao.png'

function TimeSlip() {

    AOS.init();
    AOS.refresh();

    return (
        <div className="ts-all">
            <Header></Header>
            <div className="timeslip">
                <div className="ts-sub"></div>
                <div className="ts-title">타임슬립</div>
            </div>
            <div class="year-container">
                <a class="year-tab" href="#tab-20">2020'</a>
                <a class="year-tab" href="#tab-10">2010'</a>
                <a class="year-tab" href="#tab-00">2000'</a>
                <a class="year-tab" href="#tab-90">1990'</a>
                <a class="year-tab" href="#tab-80">1980'</a>
                <span class="year-tab-slider"></span>
            </div>
            <div className="ts-slide" id="tab-20">
                <div 
                    data-aos="fade-left"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work">| COVID-19, 2020</div>
                <div 
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-details">우리의 일상을 바꿔버린 코로나 바이러스. 공기 중에 떠다니는 코로나 바이러스를 우리가 직접 없앨 수 있다면 얼마나 좋을까.<br />
                    우리의 바람을 미디어 속에서 나타냈다. 바이러스 걱정 없이 일상 생활을 할 수 있는 그 날을 기다리며... 아디오스...</div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="1000"
                    data-aos-duration="500" 
                    className="virus1">
                    <Virus></Virus>
                </div>
                <div 
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="1000"
                    data-aos-duration="500"
                    className="virus2">
                    <Virus3></Virus3>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="1000"
                    data-aos-duration="500"  
                    className="virus3">
                    <Virus2></Virus2>
                </div>
                <div 
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="1000"
                    data-aos-duration="500" 
                    className="virus4">
                    <Virus></Virus>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="1000"
                    data-aos-duration="500"  
                    className="virus5">
                    <Virus></Virus>
                </div>
                <div 
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="1000"
                    data-aos-duration="500" 
                    className="virus6">
                    <Virus2></Virus2>
                </div>
                <div 
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="1000"
                    data-aos-duration="500" 
                    className="virus7">
                    <Virus3></Virus3>
                </div>
                <div 
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="1000"
                    data-aos-duration="500"
                    className="virus8">
                    <Virus2></Virus2>
                </div>
            </div>
            <div className="ts-slide tab-10" id="tab-10">
                <div 
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work">| SNS로 떠나는 과거여행</div>
                <div 
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-details"> 사람들은 순간을 오랫동안 기억하고 기록하기 위해 <br />사진을 찍는다. 찍은 사진을 소셜 네트워크 서비스(SNS)에 <br />업로드하고 여러 사람과 공유한다.
                    이러한 SNS는 변화의 <br />흐름이 빨라 유행이 자주 바뀌었는데, 우리가 한 때 자주 <br />사용했던 SNS를 통해 그리웠던 일상을 떠올려본다.</div>                
                <div 
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    className="work-txt"><i>SOCIAL NETWORK SERVICE</i></div>
                <div 
                    data-aos="fade-left"
                    data-aos-delay="1500"
                    data-aos-duration="1000"
                    className="phone-img">
                    <div id="slideshow">
                        <div className="slide-wrapper">
                            <div className="slide"><img className="slide-img" src={insta}></img></div>
                            <div className="slide"><img className="slide-img" src={kakao}></img></div>
                            <div className="slide"><img className="slide-img" src={insta}></img></div>
                            <div className="slide"><img className="slide-img" src={insta}></img></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ts-slide" id="tab-00">
                <div 
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work">| Music in my pocket</div>
                <div 
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-details"> 사람들은 순간을 오랫동안 기억하고 기록하기 위해 사진을 찍는다. 찍은 사진을 소셜 네트워킹 서비스(SNS)에 업로드하고 여러 사람과 공유한다.<br />
                    이러한 SNS는 변화의 흐름이 빨라 유행이 자주 바뀌었는데, 우리가 한 때 자주 사용했던 SNS를 통해 그리웠던 일상을 떠올려본다.</div>
            </div>
            <div className="ts-slide" id="tab-90">
                <div 
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work">| SNS로 떠나는 과거여행</div>
                <div 
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-details"> 사람들은 순간을 오랫동안 기억하고 기록하기 위해 사진을 찍는다. 찍은 사진을 소셜 네트워킹 서비스(SNS)에 업로드하고 여러 사람과 공유한다.<br />
                    이러한 SNS는 변화의 흐름이 빨라 유행이 자주 바뀌었는데, 우리가 한 때 자주 사용했던 SNS를 통해 그리웠던 일상을 떠올려본다.</div>
            </div>
            <div className="ts-slide" id="tab-80">
                <div 
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work">| SNS로 떠나는 과거여행</div>
                <div 
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-details"> 사람들은 순간을 오랫동안 기억하고 기록하기 위해 사진을 찍는다. 찍은 사진을 소셜 네트워킹 서비스(SNS)에 업로드하고 여러 사람과 공유한다.<br />
                    이러한 SNS는 변화의 흐름이 빨라 유행이 자주 바뀌었는데, 우리가 한 때 자주 사용했던 SNS를 통해 그리웠던 일상을 떠올려본다.</div>
            </div>
            <GoTop />
        </div>
    )
    
}
export default TimeSlip;