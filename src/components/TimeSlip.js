import React, { useEffect, useState } from "react";
import Header from "./Header";
import GoTop from "./GoTop";
import "../css/TimeSlip.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Virus from "./contents/Virus";
import Virus2 from "./contents/Virus2";
import Virus3 from "./contents/Virus3";
import insta from "../assets/insta.jpg";
import kakao from "../assets/kakao.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import Mp3play from "./contents/Mp3play";
import Guest from "./contents/Guest/Guest";
import Draw from "./contents/Draw";
import Tetris from './contents/Tetris/Tetris';
import random from "../assets/random.png";
import Popup from "./contents/Select/Popup";
import Popup2 from "./contents/Select/Popup2";
import Popup3 from "./contents/Select/Popup3";
import Popup4 from "./contents/Select/Popup4";
import next from "../assets/next.png";
import Card from "./contents/Card";

function TimeSlip() {
    const [volume, setVolume] = useState(1);
    const [mnumber, setMNumber] = useState(1);

    const soundUp = () => {
        if (volume >= 10) return;
        setVolume(volume + 1);
    };

    const soundDown = () => {
        if (volume <= 1) return;
        setVolume(volume - 1);
    };

    const nextMusic = () => {
        if (mnumber >= 3) return;
        setMNumber(mnumber + 1);
    };

    const prevMusic = () => {
        if (mnumber <= 1) return;
        setMNumber(mnumber - 1);
    };

    AOS.init();
    AOS.refresh();

    return (
        <div className="ts-all">
            <Header></Header>
            <div className="timeslip">
                <div className="ts-title-container">
                    <div className="ts-title">타임슬립</div>
                </div>
            </div>
            <div class="year-container">
                <a class="year-tab" href="#tab-20">
                    2020'
                </a>
                <a class="year-tab" href="#tab-10">
                    2010'
                </a>
                <a class="year-tab" href="#tab-00">
                    2000'
                </a>
                <a class="year-tab" href="#tab-90">
                    1990'
                </a>
                <a class="year-tab" href="#tab-80">
                    1980'
                </a>
                <span class="year-tab-slider"></span>
            </div>
            <div className="ts-slide" id="tab-20">
                <div
                    data-aos="fade-left"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work">
                    | COVID-19, 2020
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-details">
                    우리의 일상을 바꿔버린 코로나 바이러스. 공기 중에 떠다니는
                    코로나 바이러스를 우리가 직접 없앨 수 있다면 얼마나 좋을까.
                    <br />
                    우리의 바람을 미디어 속에서 나타냈다. 바이러스 걱정 없이
                    일상 생활을 할 수 있는 그 날을 기다리며... 아디오스...
                </div>
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
                <div
                    data-aos="fade-left"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-sub">
                    * 바이러스를 클릭해보세요.
                </div>
            </div>
            <div className="ts-slide tab-10" id="tab-10">
                <div
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work">
                    | SNS로 떠나는 과거여행
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-details">
                    사람들은 순간을 오랫동안 기억하고 기록하기 위해 <br />
                    사진을 찍는다. 찍은 사진을 소셜 네트워크 서비스(SNS)에
                    <br />
                    업로드하고 여러 사람과 공유한다. 이러한 SNS는 변화의 <br />
                    흐름이 빨라 유행이 자주 바뀌었는데, 우리가 한 때 자주 <br />
                    사용했던 SNS를 통해 그리웠던 일상을 떠올려본다.
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    className="work-txt">
                    <i>SOCIAL NETWORK SERVICE</i>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-delay="1500"
                    data-aos-duration="1000"
                    className="phone-img">
                    <div id="slideshow">
                        <div className="slide-wrapper">
                            <div className="slide">
                                <img className="slide-img" src={insta}></img>
                            </div>
                            <div className="slide">
                                <img className="slide-img" src={kakao}></img>
                            </div>
                            <div className="slide">
                                <img className="slide-img" src={facebook}></img>
                            </div>
                            <div className="slide">
                                <img className="slide-img" src={twitter}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ts-slide" id="tab-00">
                <div
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work">
                    | Music in my pocket
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-details">
                    2010년에는 스마트폰이 있어서 이러한 sns를 즐겼지만
                    2000년에는 우리가 어떻게 놀았지?
                    <br />
                    우리는 간zi나는 유선이어폰으로 노래를 들었다구~ 다들
                    미키마우스 mp3하나쯤은 있었지? 그럼 뮤직 스타트~
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    data-aos-duration="500"
                    className="mickey_mp3">
                    <div className="small_ball_left">
                        <div
                            style={{ zIndex: 100, position: "relative" }}
                            onClick={soundUp}
                            className="volume_plus"
                        >
                            +
                        </div>
                        <div
                            style={{ zIndex: 100, position: "relative" }}
                            onClick={soundDown}
                            className="volume_minus"
                        >
                            −
                        </div>
                        <div className="shadow"></div>
                    </div>
                    <div className="small_ball_right">
                        <img
                            style={{ position: "relative", zIndex: 100 }}
                            onClick={prevMusic}
                            className="before"
                            src={next}
                        ></img>
                        <img
                            style={{ position: "relative", zIndex: 100 }}
                            onClick={nextMusic}
                            className="after"
                            src={next}
                        ></img>
                        <div className="shadow"></div>
                        {/* 사실 오른쪽 귀에 노래 뒤로 앞으로 그 아이콘 넣어야되는데 똑같은거 못찾음 */}
                    </div>
                    <div className="big_ball">
                        <div className="play">
                            <Mp3play volume={volume} number={mnumber}></Mp3play>
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
                    className="work"
                >
                    | 그때 그 시절, 플래시 게임
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-details-tetris"> 추억의 플래시 게임 테트리스를 해보자!</div>
                <div
                    data-aos="fade-down"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-sub">
                    * 방향키로 게임을 즐겨봐요.
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-delay="1000"
                    data-aos-duration="500"
                    className="tetris-container">
                    <Tetris></Tetris>
                </div>
            </div>
            <div className="ts-slide" id="tab-80">
                <div
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work">
                    | 문방구에서 한 번쯤 해본 것
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-details">
                    꽝이 더 많은 걸 알면서도 도전하게 되더라구,, 과연 이번에는
                    당첨될 수 있을까?
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    data-aos-duration="500">
                    <img className="random-img" src={random}></img>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select1">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select2">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select3">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select4">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select5">
                    <Popup2></Popup2>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select6">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select7">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select8">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select9">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select10">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select11">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select12">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select1-1">
                    <Popup3></Popup3>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select2-1">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select3-1">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select4-1">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select5-1">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select6-1">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select7-1">
                    <Popup3></Popup3>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select8-1">
                    <Popup4></Popup4>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select9-1">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select10-1">
                    <Popup4></Popup4>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select11-1">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select12-1">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select1-2">
                    <Popup4></Popup4>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select2-2">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select3-2">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select4-2">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select5-2">
                    <Popup3></Popup3>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select6-2">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select7-2">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select8-2">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select9-2">
                    <Popup4></Popup4>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select10-2">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select11-2">
                    <Popup3></Popup3>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select12-2">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select1-3">
                    <Popup4></Popup4>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select2-3">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select3-3">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select4-3">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select5-3">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select6-3">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select7-3">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select8-3">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select9-3">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select10-3">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select11-3">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select12-3">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select1-4">
                    <Popup4></Popup4>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select2-4">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select3-4">
                    <Popup4></Popup4>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select4-4">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select5-4">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select6-4">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select7-4">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select8-4">
                    <Popup4></Popup4>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select9-4">
                    <Popup3></Popup3>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select10-4">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select11-4">
                    <Popup4></Popup4>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select12-4">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select1-5">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select2-5">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select3-5">
                    <Popup4></Popup4>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select4-5">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select5-5">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select6-5">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select7-5">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select8-5">
                    <Popup4></Popup4>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select9-5">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select10-5">
                    <Popup4></Popup4>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select11-5">
                    <Popup3></Popup3>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    className="select12-5">
                    <Popup></Popup>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work">
                    | 아E패드 대신 그림판
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-details">
                    라떼는 말이야~ 그림판에 그림그리고 놀았다고.. 마우스로
                    그림그리는 이 갬성 알긴 아니?
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="work-sub">
                    * 마우스로 자유롭게 그려봐요.
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    data-aos-duration="500">
                    <Draw></Draw>
                </div>
            </div>
            <Card></Card>
            <Guest></Guest>
            <GoTop />
        </div>
    );
}
export default TimeSlip;
