import React from 'react';
import Header from './Header';
import GoTop from './GoTop'
import '../css/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo_white.png'
import lang from '../assets/lang_black.png'
import emotion from '../assets/emo.png'
import sr from '../assets/seryoung.png'
import dy from '../assets/dayeon.png'
import media1 from '../assets/media1.GIF'
import art1 from '../assets/art1.jpg'
import art2 from '../assets/art2.jpg'
import case1 from '../assets/case.png'
import drawing from '../assets/drawing.gif'


function About() {

    AOS.init();
    AOS.refresh();

    return (
        <div className="bs-all">
            <Header></Header>
            <div className="about">
                <div className="first">
                    <div 
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        className="first-text">행복을 전하는 사람들.</div>
                    <img 
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className="about-logo" src={logo} />
                    <div
                        data-aos="fade-right"
                        data-aos-delay="1000"
                        data-aos-duration="1000"
                        className="first-details">
                        해피플은 interaction기반의 미디어아트 온라인 전시회 플랫폼입니다.<br />
                        코로나19로 직접 가지 못한 전시회를 여기, <span>해피플</span>에서 즐겨보세요.
                    </div>  
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    className="second">
                    <div 
                        data-aos="zoom-in-down"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="second-text">
                        화면 속의 예술,<br />
                        <span>미디어아트</span>를 웹에서 즐겨보세요.
                    </div>
                    <div className="artsection1">
                        <img 
                            data-aos="fade-right"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                            className="art1" src={art1}/>
                        <img 
                            data-aos="fade-left"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                            className="art2" src={art2}/>
                    </div>
                    <div 
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className="second-details">
                        코로나19로 인해 가지 못했던 미디어아트 전시회를 해피플에서 경험해보세요. <br />
                        오프라인 전시회와 또 다른 매력을 느낄 수 있을거에요.
                    </div>   
                </div>
                <div className="third">
                    <div 
                        data-aos="zoom-in-right"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        className="third-text">
                        보기만 하는 전시가 아닌, <br />
                        작품과 <span>상호작용</span>하며 움직이는 전시를 경험하세요.
                    </div>
                    <img 
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className="about-media1" src={media1} />
                    <div 
                        data-aos="fade-right"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className="third-details">
                        누가, 어떻게 전시를 즐기냐에 따라 미디어아트 작품의 감상이 달라지기도 하죠. <br />
                        오프라인 전시회가 열리기 힘든 상황을 대신해 해피플이 이런 동적인 전시회를 개최합니다.
                    </div>
                </div>
                <div className="fourth">
                    <div 
                        data-aos="zoom-in-right"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        className="fourth-text">
                        나만의 감성으로 전시의 여운을 남겨보세요.
                    </div>
                    <img 
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className="about-media1" src={drawing} />
                    <div 
                        data-aos="fade-right"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className="fourth-details">
                        오프라인 전시회에서 사진을 찍듯이 해피플 전시회에서는 나만의 이미지를 만들 수 있어요. <br />
                        전시회에서 얻은 이미지를 SNS에 기록해봐요. <br />
                        전시를 추억하고 싶다면, shop을 방문해 굿즈를 구매하세요.
                    </div>
                </div>
                <div className="fifth">
                    <div 
                        data-aos="zoom-in-right"
                        data-aos-delay="2000"
                        data-aos-duration="500"
                        className="fifth-text">
                        물론<br/>미디어아트를<br/>직접 전시하는 것도<br/>가능하죠.
                    </div>
                    <div 
                        data-aos="fade-right"
                        data-aos-delay="2000"
                        data-aos-duration="500"
                        className="fifth-text fifth-text-big">
                        비용은 적게,<br/>시간과 장소의 제한 없이<br/>전시회를 열어보세요.
                    </div>
                    <div 
                        data-aos="fade-right"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className="fifth-details">
                        <span>오직 <b>해피플</b>에서만 가능합니다.</span> <br/>궁금하다면 상단의 의뢰하기 버튼을 클릭해보세요.
                    </div>
                    <img 
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className="about-media1" src={media1} />
                </div>
                <div className="sixth">
                    <div 
                        data-aos="zoom-in-right"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        className="sixth-text">
                        해피플이 제공하는<br/>다양한 형태의 굿즈.
                    </div>
                    <div className="goods-all">
                        <img 
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                            className="case" src={case1}/>
                        <img 
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                            className="griptok" src={case1}/>
                        <img 
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                            className="keyring" src={case1}/>
                    </div>
                </div>
                <div className="seventh">
                    <div 
                        data-aos="zoom-in-down"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="seventh-text">
                        해피플을 즐길 수 있는<br/><span>두가지 방법.</span>
                    </div>
                    <div className="seventh-details">
                        <div
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            className="about-intro">
                            <div className="way">
                                오프라인 전시회 대신<br/>해피플을 방문하세요.
                            </div>
                            <div className="way-details">
                                시간, 장소의 제약없이 즐길 수 있는<br />미디어아트 전시회, 상상만 해도 좋지 않나요? <br />
                                해피플이 여러분에게 행복한 시간을 선물할게요.
                            </div>
                            <div className="way-details-more">
                                전시보기
                            </div>
                        </div>
                        <div 
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                            className="about-intro">
                            <div className="way">
                                미디어아트 작품을<br/>해피플에 전시해보세요.
                            </div>
                            <div className="way-details">
                                오프라인 전시회 개최에<br />한계를 느낀다면, 해피플에게 의뢰해주세요. <br />
                                해피플이 작가님의 작품을 더욱 풍요롭게 만들어주겠습니다.
                            </div>
                            <div className="way-details-more">
                                의뢰하기
                            </div>
                        </div>
                    </div>
                </div>
                <div className="eighth">
                    <div 
                        data-aos="zoom-in-down"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="eighth-text">
                        해피플을 만든 사람들.
                    </div>
                    <div className="eighth-details">
                        <div 
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            className="about-intro">
                            <img className="about-img" src={sr} />
                            <div className="about-name">
                                <b>sarah</b> | CEO
                            </div>
                            <div className="about-bio">
                                모두에게 행복을 전하는 행복 전도사가 되고자 합니다. <br />
                                해피플에서 마음의 평화를 찾으시길 바랍니다.
                            </div>
                        </div>
                        <div 
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                            className="about-intro">
                            <img className="about-img" src={dy} />
                            <div className="about-name">
                                <b>dass</b> | CTO
                            </div>
                            <div className="about-bio">
                                흥미로운 아이디어로 여러분과 행복을 나누고 싶습니다. <br />
                                해피플만의 색다른 전시회로 즐거운 시간 되세요.
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
            <GoTop />    
        </div>
    )
}

export default About;