import React from 'react';
import Header from './Header';
import '../css/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo_white.png'
import lang from '../assets/lang_black.png'
import emotion from '../assets/emo.png'
import sr from '../assets/seryoung.png'
import dy from '../assets/dayeon.png'
import kid from '../assets/kids.png'

function About() {

    AOS.init();
    AOS.refresh();

    return (
        <div className="bs-all">
            <Header></Header>
            <div className="about">
                <div className="first">
                    <div className="first-text">행복을 전하는 사람들.</div>
                    <img className="about-logo" src={logo} />
                    <img className="about-kid" src={kid} />
                    <div className="first-details">
                        행복을 전하는 해피플은 interaction기반의 온라인 전시회 플랫폼입니다.<br />
                        코로나19로 가지 못한 전시회를 여기, 해피플에서 즐겨보세요.
                    </div>
                    
                </div>
                <div className="second">
                    <div className="second-text">
                        시간, 공간, 돈의 제약없이<br />
                        누구나 상호작용할 수 있어요.
                    </div>
                    <div className="second-details">
                        상호작용이 가능한 전시회, 해피플에서 경험해보세요.<br />
                        언제 어디서나 전시회를 보고 느끼며 문화생활을 즐겨보세요.
                    </div>
                    <img className="about-emotion" src={emotion} />
                </div>
                <div className="third">
                    <div className="third-text">
                        나의 전시회를 생동감 있게,<br />
                        모두가 즐길 수 있게 하고 싶다면?
                    </div>
                    <div className="third-details">
                        전시회에 담고 싶은 이야기를 들려주세요. <br />
                        해피플과 함께 이야기를 생생하게 담은 인터랙션 전시회를 만들어봐요.
                    </div>
                    <img className="about-lang" src={lang} />
                </div>
                <div className="fourth">
                    <div className="fourth-text">
                        해피플에 오신 여러분 환영합니다. <br />
                        저희를 소개할게요.
                    </div>
                    <div className="fourth-details">
                        <div className="about-intro">
                            <img className="about-img" src={sr} />
                            <div className="about-name">
                                <b>sarah</b> | CEO
                            </div>
                            <div className="about-bio">
                                모두에게 행복을 전하는 행복 전도사가 되고자 합니다. <br />
                                해피플에서 마음의 평화를 찾으시길 바랍니다.
                            </div>
                        </div>
                        <div className="about-intro">
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
        </div>
    )
}

export default About;