import React from 'react';
import Header from './Header';
import GoTop from './GoTop';
import '../css/TimeSlip.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Virus from './contents/Virus';
import Virus2 from './contents/Virus2';
import Virus3 from './contents/Virus3';

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
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="virus-text">바이러스를 무찌르고 다음으로 넘어가요.</div>
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
            <div className="ts-slide" id="tab-10">
                <div>2010년대</div>
            </div>
            <div className="ts-slide" id="tab-00">
                <div>2000년대</div>
            </div>
            <div className="ts-slide" id="tab-90">
                <div>1990년대</div>
            </div>
            <div className="ts-slide" id="tab-80">
                <div>1980년대</div>
            </div>
            <GoTop />
        </div>
    )
    
}
export default TimeSlip;