import React from 'react';
import Header from './Header';
import '../css/shop-purchase.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import case1 from '../assets/coming_soon.png'

function Shoppurchase() {

    AOS.init();
    AOS.refresh();

    return (
        <div className="bs-all">
            <Header></Header>
            <div className="shop-purchase">
                <div className="purchase-all">
                    <div className="purchase-img">
                        <img className="purchase-img1" src={case1}/>
                    </div>
                    <div className="purchase-text-all">
                        <div className="purchase-text-all-1">
                            <div className="conduct-text-main">
                                제품명
                            </div>
                            <div className="conduct-text-sub">
                                레트로 스티커 케이스 + rabbit그립톡
                            </div>
                        </div>
                        <div className="purchase-text-all-2">
                            <div className="conduct-text-main">
                                제품명
                            </div>
                            <div className="conduct-text-sub">
                                레트로 스티커 케이스 + rabbit그립톡
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Shoppurchase;