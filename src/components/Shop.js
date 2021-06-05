import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../css/Shop.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import shop1 from '../assets/shop1.jpg';
import shop2 from '../assets/shop2.jpg';
import shop3 from '../assets/shop3.jpg';
import shop4 from '../assets/shop4.jpg';
import shop5 from '../assets/shop5.jpg';


function Shop() {

    AOS.init();
    AOS.refresh();

    return (
        <div className="bs-all">
            <Header></Header>
            <div className="shop">
                <div className="shop1">
                    <div
                        className="shop-text">Time slip : Retro
                    </div>
                    <div className="shop-all">
                        <div className="shop-one">
                            <Link to="/shop-purchase">
                                <img className="shop-img" src={shop1}/>
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
                                <img className="shop-img" src={shop2}/>
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
                                <img className="shop-img" src={shop3}/>
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
                                <img className="shop-img" src={shop4}/>
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
                                <img className="shop-img" src={shop5}/>
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