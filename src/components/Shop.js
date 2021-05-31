import React from 'react';
import Header from './Header';
import '../css/Shop.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import case1 from '../assets/coming_soon.png'
import { Link } from 'react-router-dom';

function Shop() {

    AOS.init();
    AOS.refresh();

    return (
        <div className="bs-all">
            <Header></Header>
            <div className="shop">
                <div className="shop1">
                    <div
                        // data-aos="fade-up"
                        // data-aos-delay="50"
                        // data-aos-duration="1000"
                        className="shop-text">Time slip : Retro
                    </div>
                    <div className="shop-all">
                        <div className="shop-one">
                            <Link to="/shop-purchase">
                                <img className="shop-img" src={case1}/>
                            </Link>
                            <div className="main-text">
                                레트로 스티커 케이스 + rabbit그립톡
                            </div>
                            <div className="price-text">
                                21,000원
                            </div>
                        </div>
                        <div className="shop-one">
                            <Link to="/shop-purchase">
                                <img className="shop-img" src={case1}/>
                            </Link>
                            <div className="main-text">
                                레트로 스티커 케이스
                            </div>
                            <div className="price-text">
                                18,000원
                            </div>
                        </div>
                        <div className="shop-one">
                            <Link to="/shop-purchase">
                                <img className="shop-img" src={case1}/>
                            </Link>
                            <div className="main-text">
                                star그립톡
                            </div>
                            <div className="price-text">
                                6,000원
                            </div>
                        </div>
                        <div className="shop-two">
                            <Link to="/shop-purchase">
                                <img className="shop-img" src={case1}/>
                            </Link>
                            <div className="main-text">
                                rabbit그립톡
                            </div>
                            <div className="price-text">
                                6,000원
                            </div>
                        </div>
                        <div className="shop-two">
                            <Link to="/shop-purchase">
                                <img className="shop-img" src={case1}/>
                            </Link>
                            <div className="main-text">
                                바이러스 키링
                            </div>
                            <div className="price-text">
                                7,500원
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Shop;