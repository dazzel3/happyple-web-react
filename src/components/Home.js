import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../css/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

    AOS.init();
    AOS.refresh();

    return (
        <div className="bs-all">
            <Header></Header>
            <div className="bs">
                <div className="blog-slider">
                    <div className="blog-slider__wrp swiper-wrapper">
                        <div className="blog-slider__item swiper-slide">
                            <div className="blog-slider__img">
                                <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt=""/>
                            </div>
                            <div className="blog-slider__content">
                                <span className="blog-slider__code">17 MAY 2021</span>
                                <div className="blog-slider__title">Time Slip: go back</div>
                                <div className="blog-slider__text">We want to go back to our daily routine of not wearing a mask. </div>
                                <Link 
                                data-aos="zoom-in"
                                data-aos-delay="50"
                                data-aos-duration="800"
                                data-aos-easing="ease-in-out"
                                className="blog-slider__button"
                                to = "/Exhibition">VIEW MORE</Link>
                            </div>
                        </div>
                        {/* <div className="blog-slider__item swiper-slide">
                            <div className="blog-slider__img">
                                <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/jason-leung-798979-unsplash.jpg" alt=""/>
                            </div>
                            <div className="blog-slider__content">
                                <span className="blog-slider__code">26 December 2019</span>
                                <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
                                <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                                <Link className="blog-slider__button" to = "/Exhibition">VIEW MORE</Link>
                            </div>
                        </div> */}
                    </div>
                    <div className="blog-slider__pagination"></div>
                </div>
            </div>
        </div>
    )
}

export default Home;