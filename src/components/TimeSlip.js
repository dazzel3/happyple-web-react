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
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import Mp3play from './contents/Mp3play';
// import Mp3_text from './contents/Mp3_text';


function TimeSlip() {

    AOS.init();
    AOS.refresh();

    return (
        <div className="ts-all">
            <Header></Header>
            <div className="timeslip">
                <div className="ts-title-container"><div className="ts-title">타임슬립</div></div>
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
                            <div className="slide"><img className="slide-img" src={facebook}></img></div>
                            <div className="slide"><img className="slide-img" src={twitter}></img></div>
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
                    className="work-details"> 2010년에는 스마트폰이 있어서 이러한 sns를 즐겼지만 2000년에는 우리가 어떻게 놀았지?<br />
                    우리는 간zi나는 유선이어폰으로 노래를 들었다구~ 다들 미키마우스 mp3하나쯤은 있었지? 그럼 뮤직 스타트~</div>
                <div 
                    data-aos="fade-down"
                    data-aos-delay="1000"
                     data-aos-duration="500"
                    className="mickey_mp3">
                    <div className="small_ball_left">
                        <div className="volume">+ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; −</div>
                        <div className="shadow"></div>
                    </div>
                    <div className="small_ball_right">
                        <div className="next">+ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; −</div>
                        <div className="shadow"></div> 
                        {/* 사실 오른쪽 귀에 노래 뒤로 앞으로 그 아이콘 넣어야되는데 똑같은거 못찾음 */}
                    </div>
                    <div className="big_ball">
                        <div className="play">
                        <Mp3play></Mp3play>
                        </div>
                        <div className="shadow"></div>
                    </div>
                    <div className="play_txt">
                         Music is my life~ Click the 'HAPPYPLE'........
                    </div>
                </div> 
            </div>
            <div className="ts-slide" id="tab-90">
                <div 
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work">| 그때 그 시절, 우리의 소통</div>
                <div 
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-details"> 486... 1004.. 숫자로 소통했던 과거.. ㄱ나니..? <br />
                    추억을 회상하고 싶다면 삐삐에 암호를 입력해봐..9999</div>
                <div 
                    data-aos="fade-down"
                    data-aos-delay="1000"
                    data-aos-duration="500"
                    className="bbibbi_all">
                    <div className="bbibbi"></div>
                </div>

                <div 
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work">| 요즘엔 폰꾸한다며? 다꾸가 원조였어</div>
                <div 
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-details"> 스티커들로 나만의 이미지를 꾸며봐~<br />
                    그리고 저장 버튼을 눌러 이미지를 간직하자! 추억이 될거야 :)</div>
                <div 
                    data-aos="fade-down"
                    data-aos-delay="1000"
                    data-aos-duration="500"
                    className="ggumigi_paper">
                </div>
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