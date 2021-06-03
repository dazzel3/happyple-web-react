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
                    data-aos-delay="100"
                    data-aos-duration="1000" 
                    className="FAQ-container">
                    <div className="FAQ-header">
                        해피플에게 많이 묻는 질문들
                    </div>
                    <div className="qna-container">
                        <div className="question">
                            🧐 해피플에서 Sarah와 Dass의 역할은 무엇인가요?
                        </div>
                        <div className="answer">
                            😄  미디어아트 작가가 의뢰한 전시를 웹상에 표현해주는 개발자입니다.
                        </div>
                        <div className="question">
                            🧐 해피플은 무엇을 하는 플랫폼인가요?
                        </div>
                        <div className="answer">
                            😄  미디어아트를 웹에서 즐길 수 있도록 제공해주는 플랫폼이에요. <br></br>
                             PC, 스마트폰, 태블릿PC 등 다양한 기기에서의 호환이 되면 뉴미디어아트라고 볼수도 있어요.
                        </div>
                        <div className="question">
                            🧐 다른 전시회 플랫폼과의 차별점은 무엇인가요?
                        </div>
                        <div className="answer">
                            😄  가장 큰 차이는 미디어아트를 타겟으로한 온라인 전시회 플랫폼이 없다는 점이에요. <br></br>
                            또한, 다른 전시회 플랫폼은 정적인데 반해 미디어아트를 표현하는 해피플은 동적이에요. <br></br>
                            사람들과의 적극적인 인터랙션을 통해 작품의 의도를 더 효과적으로 전달할 수 있겠죠?
                        </div>
                        <div className="question">
                            🧐 작가가 해피플과 협업/해피플에게 의뢰하고 싶으면 어떻게 해야하나요?
                        </div>
                        <div className="answer">
                            😄  웹에서 미디어아트를 전시하고 싶은 작가는 상단 우측 의뢰하기 메뉴를 이용해주세요. <br></br>
                            그리고 해피플과 함께 전시를 구성해봐요.
                        </div>
                        <div className="question">
                            🧐 해피플에서 진행하는 전시회는 누구나 관람 가능한가요?
                        </div>
                        <div className="answer">
                            😄  맞아요. 인터넷 사용이 원활한 환경에서 누구나 해피플의 서비스를 이용할 수 있어요.
                        </div>
                    </div>
                    <a  href="mailto:happypleus.gmail.com"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="800"
                        data-aos-easing="ease-in-out" 
                        className="qna-button">
                        <a className="qna-text1">질문하기</a>
                    </a>
                    
                </div>
            </div>
            <GoTop />
        </div>
    )
    
}
export default FAQ;