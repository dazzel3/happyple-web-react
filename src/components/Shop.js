import React from 'react';
import Header from './Header';
import '../css/Shop.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Shop() {

    AOS.init();
    AOS.refresh();

    return (
        <div className="bs-all">
            <Header></Header>
            <div className="shop">
                <div
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="shop-text">Shop Page is comming soon...</div>
            </div>
        </div>
    )
    
}
export default Shop;