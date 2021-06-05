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
                            <div class="line"></div>
                            <div className="conduct-text-main">
                                [SET] 레트로 스티커 케이스 + rabbit그립톡
                            </div>
                        </div>
                        <div className="purchase-text-all-2">
                            <div className="conduct-text-main2">
                                가격
                            </div>
                            <div className="conduct-text-sub">
                                <b>KRW &nbsp;21,000</b>
                            </div>
                            <div className="conduct-text-main2">
                                제조사
                            </div>                   
                            <div className="conduct-text-sub">
                                국내
                            </div>
                            <div className="conduct-text-main2">
                                국내·해외배송
                            </div>                   
                            <div className="conduct-text-sub">
                                국내배송
                            </div>
                            <div className="conduct-text-main2">
                                배송방법
                            </div>                   
                            <div className="conduct-text-sub">
                                택배
                            </div>
                            <div className="conduct-text-main2">
                                배송비
                            </div>
                            <div className="conduct-text-sub">
                                KRW &nbsp;3,000&nbsp;(3만원 이상 구매 시 무료)
                            </div>
                        </div>
                        <div class="line2"></div>
                        <div class="select">
                            <div className="conduct-text-main2">
                                기종
                            </div>
                            <select id="standard-select">
                                <option value = "" hidden>[필수] 옵션을 선택해주세요.</option>
                                <option value="Option 1">아이폰 12프로</option>
                                <option value="Option 2">아이폰 12</option>
                                <option value="Option 3">아이폰 12미니</option>
                                <option value="Option 4">아이폰 11프로</option>
                                <option value="Option 5">아이폰 11</option>
                                <option value="Option 6">아이폰 X</option>
                                <option value="Option 7">갤럭시 S20</option>
                                <option value="Option 8">갤럭시 S20울트라</option>
                            </select>
                            <span class="focus"></span>
                        </div>
                        <div class="line2"></div>
                        <div className="conduct-text-main2-1">
                            최소주문수량 1개 이상
                        </div>
                        <div className="purchase-btn">
                            <div className="purchase-btn-1">
                                <p class="p">바로구매</p>
                            </div>
                            <div className="purchase-btn-2">
                                <p class="p">장바구니</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Shoppurchase;