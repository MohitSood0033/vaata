import React from 'react'
import styles from './CommonFavourites.module.css';
import shoes from "../../../assets/images/shoes.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import 'react-accessible-accordion/dist/fancy-example.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';

function CommonFavourites() {

    let navigate: NavigateFunction = useNavigate();
    let slider: Slider | null;
    var settings_fav = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const next = () => {
        slider!.slickNext();
    }

    const previous = () => {
        slider!.slickPrev();
    }


    return (
        <div>
            <section className={styles.fav_wrap}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-5 col-sm-12 col-12'>
                            <div className={styles.fav_left}>
                                <div className='row'>
                                    <div className='col-md-12 col-sm-12 col-12'>
                                        <div className={styles.fav_leftContant}>
                                            <h2>02</h2>
                                            <p>New Style always with you</p>
                                            <h1>Your Favorites Always With You</h1>
                                            <p>Stayinfun was established with a clear vision: to provide the very latest in compelling designs for the fashionably hip along with providing exceptional value, quality, and superb customer service.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className='row d-xl-flex d-lg-flex d-md-flex d-sm-none d-none'>
                                    <div className='col-md-4 col-sm-4 col-4'>
                                        <div className={styles.fav_leftbox}>
                                            <h3>Thrends</h3>
                                            <p>Stayinfun was established with a clear vision: to provide</p>                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-4 col-4'>
                                        <div className={styles.fav_leftbox}>
                                            <h3>Thrends</h3>
                                            <p>Stayinfun was established with a clear vision: to provide</p>                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-4 col-4'>
                                        <div className={styles.fav_leftbox}>
                                            <h3>Thrends</h3>
                                            <p>Stayinfun was established with a clear vision: to provide</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row d-xl-block d-lg-block d-md-block d-sm-none d-none'>
                                    <div className='col-md-12 col-sm-12 col-4'>
                                        <div className={styles.fav_leftbtn}>
                                            <button className={styles.btn}>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7 col-sm-12 col-12'>
                            <div className={`${styles.fav_right} fav_right`}>
                                <div className='row'>
                                    <div className='col-md-6 col-sm-6 col-12 pr-0'>
                                        <div className={`${styles.fav_rightFirst} `}>
                                            <Slider ref={c => (slider = c)} {...settings_fav}>
                                                <Card className={styles.card_market}>
                                                    <Card.Img variant="top" src={require('../../../assets/images/fav_image1.png')} />
                                                </Card>
                                                <Card className={styles.card_market}>
                                                    <Card.Img variant="top" src={require('../../../assets/images/marketplace_image2.png')} />
                                                </Card>
                                            </Slider>
                                            <div>
                                                <button className={styles.previous_btn} onClick={() => previous()}>
                                                    Previous
                                                </button>
                                                <button className={styles.next_btn} onClick={() => next()}>
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-12 pl-0 d-xl-block d-lg-block d-md-block d-sm-none d-none'>
                                        <div className={styles.fav_rightSecond}>
                                            <div className={styles.fav_rightSecondText}>
                                                <h2>03</h2>
                                                <p>New Fashion</p>
                                                <h1>2019 Fashion for Fashion</h1>
                                                <img src={shoes}
                                                    alt=""
                                                    className={styles.fav_img}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CommonFavourites