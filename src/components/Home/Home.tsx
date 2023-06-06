import styles from '.././Home/Home.module.css';
import { CgMenuGridR } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import shoes from "../../assets/images/shoes.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Button } from "react-bootstrap";
import { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter';
import CommonFavourites from 'components/Shared/CommonFavourites/CommonFavourites';

function Home() {
    let navigate: NavigateFunction = useNavigate();
    let slider: Slider | null;
    const [catalogBtn, setCatalogBtn] = useState<boolean>(false);

    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    var settings_booking = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    };
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
    var settings_threebox = {
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: true,
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
                    dots: false
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

    const handleCatalogBtn = () => {
        setCatalogBtn(!catalogBtn)
    }

    return (
        <main>
            {/* header */}
            <section className={`${styles.header} d-xl-block d-lg-block d-md-block d-sm-none d-none`}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 col-12'>
                            <div className={styles.header_left}>
                                <div className={styles.header_filter}>
                                    <button className={catalogBtn ? styles.btn_active : styles.btn} onClick={() => handleCatalogBtn()}>
                                        <CgMenuGridR />Catalog of Goods
                                    </button>
                                    {/* Catalog */}
                                   {catalogBtn && <section className={styles.catalog}>
                                        <div className={styles.catalog_tab}>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className={styles.col_tabsMain}>
                                                        <a href='javascript:void(0)' className={styles.tabs_link}>
                                                            Marketplace
                                                        </a>
                                                        <a href='javascript:void(0)' className={styles.tabs_link}>
                                                            Booking
                                                        </a>
                                                        <a href='javascript:void(0)' className={styles.tabs_link}>
                                                            Deals
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`row mt-4 ${styles.catalog_row}`}>
                                                <div className="col">
                                                    <div className={`${styles.categoryBox} ${styles.catalog_box}`}>
                                                        <div className={styles.cateBox_title}>
                                                            <img src={require('../../assets/images/bulb.svg').default}
                                                                alt=""
                                                                className={styles.box_icon}
                                                            />
                                                            <h2>
                                                                Electronics
                                                            </h2>
                                                        </div>
                                                        <div className={styles.cateBox_list}>
                                                            <p>Notebooks</p>
                                                            <p>Smartphones</p>
                                                            <p>SSD</p>
                                                            <p>Routers</p>
                                                            <a href='javascript:void(0)' onClick={() => navigate('/home/catalog')}>See all</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className={`${styles.categoryBox} ${styles.catalog_box}`}>
                                                        <div className={styles.cateBox_title}>
                                                            <img src={require('../../assets/images/home-garden.svg').default}
                                                                alt=""
                                                                className={styles.box_icon}
                                                            />
                                                            <h2>
                                                                Home & Garden
                                                            </h2>
                                                        </div>
                                                        <div className={styles.cateBox_list}>
                                                            <p>Irrigation systems</p>
                                                            <p>Seeds and fertilizers</p>
                                                            <p>Garden equipment</p>
                                                            <p>Saplings</p>
                                                            <a href='javascript:void(0)'>See all</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className={`${styles.categoryBox} ${styles.catalog_box}`}>
                                                        <div className={styles.cateBox_title}>
                                                            <img src={require('../../assets/images/fashion.svg').default}
                                                                alt=""
                                                                className={styles.box_icon}
                                                            />
                                                            <h2>
                                                                Fashion
                                                            </h2>
                                                        </div>
                                                        <div className={styles.cateBox_list}>
                                                            <p>Footwear</p>
                                                            <p>Bags and accessories</p>
                                                            <p>Jewellery</p>
                                                            <p>Clothing</p>
                                                            <a href='javascript:void(0)'>See all</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className={`${styles.categoryBox} ${styles.catalog_box}`}>
                                                        <div className={styles.cateBox_title}>
                                                            <img src={require('../../assets/images/parts.svg').default}
                                                                alt=""
                                                                className={styles.box_icon}
                                                            />
                                                            <h2>
                                                                Auto parts & Accesoires
                                                            </h2>
                                                        </div>
                                                        <div className={styles.cateBox_list}>
                                                            <p>Car audio</p>
                                                            <p>Car electronics</p>
                                                            <p>Automotive Equipment</p>
                                                            <p>Auto chemical goods</p>
                                                            <a href='javascript:void(0)'>See all</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className={`row mt-4 ${styles.catalog_row}`}>
                                                <div className="col">
                                                    <div className={`${styles.categoryBox} ${styles.catalog_box}`}>
                                                        <div className={styles.cateBox_title}>
                                                            <img src={require('../../assets/images/bulb.svg').default}
                                                                alt=""
                                                                className={styles.box_icon}
                                                            />
                                                            <h2>
                                                                Electronics
                                                            </h2>
                                                        </div>
                                                        <div className={styles.cateBox_list}>
                                                            <p>Notebooks</p>
                                                            <p>Smartphones</p>
                                                            <p>SSD</p>
                                                            <p>Routers</p>
                                                            <a href='javascript:void(0)' onClick={() => navigate('/home/catalog')}>See all</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className={`${styles.categoryBox} ${styles.catalog_box}`}>
                                                        <div className={styles.cateBox_title}>
                                                            <img src={require('../../assets/images/home-garden.svg').default}
                                                                alt=""
                                                                className={styles.box_icon}
                                                            />
                                                            <h2>
                                                                Home & Garden
                                                            </h2>
                                                        </div>
                                                        <div className={styles.cateBox_list}>
                                                            <p>Irrigation systems</p>
                                                            <p>Seeds and fertilizers</p>
                                                            <p>Garden equipment</p>
                                                            <p>Saplings</p>
                                                            <a href='javascript:void(0)'>See all</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className={`${styles.categoryBox} ${styles.catalog_box}`}>
                                                        <div className={styles.cateBox_title}>
                                                            <img src={require('../../assets/images/fashion.svg').default}
                                                                alt=""
                                                                className={styles.box_icon}
                                                            />
                                                            <h2>
                                                                Fashion
                                                            </h2>
                                                        </div>
                                                        <div className={styles.cateBox_list}>
                                                            <p>Footwear</p>
                                                            <p>Bags and accessories</p>
                                                            <p>Jewellery</p>
                                                            <p>Clothing</p>
                                                            <a href='javascript:void(0)'>See all</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className={`${styles.categoryBox} ${styles.catalog_box}`}>
                                                        <div className={styles.cateBox_title}>
                                                            <img src={require('../../assets/images/parts.svg').default}
                                                                alt=""
                                                                className={styles.box_icon}
                                                            />
                                                            <h2>
                                                                Auto parts & Accesoires
                                                            </h2>
                                                        </div>
                                                        <div className={styles.cateBox_list}>
                                                            <p>Car audio</p>
                                                            <p>Car electronics</p>
                                                            <p>Automotive Equipment</p>
                                                            <p>Auto chemical goods</p>
                                                            <a href='javascript:void(0)'>See all</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className={styles.catalog_seeAll}>
                                                <a href='javascript:void(0)' onClick={() => navigate('/home/catalog')}>See all catagories {'>'}</a>
                                            </div>
                                        </div>
                                    </section>}
                                    {/* Catalog end */}

                                </div>
                                <div className={styles.header_search}>
                                    <button className={styles.btn}>
                                        <CiSearch />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12 col-12'>
                            <div className={styles.header_right}>
                                <div className={styles.header_plus}>
                                    <img src={require('../../assets/images/subpoint-active.svg').default}
                                        alt=""
                                        className={styles.circle}
                                    />
                                    <img src={require('../../assets/images/plus.svg').default}
                                        alt=""
                                        className={styles.plus}
                                    />
                                </div>
                                <div className={styles.header_btns}>
                                    <button className={styles.btn} onClick={() => navigate('/login')}>Log In</button>
                                    <button className={styles.btn} onClick={() => navigate('/signup')}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* header end */}

            {/* favorites */}
            {/* <section className={styles.fav_wrap}>
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
                                                    <Card.Img variant="top" src={require('../../assets/images/fav_image1.png')} />
                                                </Card>
                                                <Card className={styles.card_market}>
                                                    <Card.Img variant="top" src={require('../../assets/images/marketplace_image2.png')} />
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
            </section> */}
            <CommonFavourites />
            {/* favorites end */}

            {/* three box desktop */}
            <section className={`${styles.threeBox_wrap} d-xl-block d-lg-block d-md-block d-sm-none d-none`}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-12 col-12'>
                            <div className={styles.Box_main_after}></div>
                            <div className={styles.Box_main}>
                                <img src={require('../../assets/images/Dots_card.svg').default}
                                    alt=""
                                    className={styles.boxdot_1}
                                />
                                <img src={require('../../assets/images/Dots_card_1.svg').default}
                                    alt=""
                                    className={styles.boxdot_2}
                                />
                                <img src={require('../../assets/images/Dots_card_2.svg').default}
                                    alt=""
                                    className={styles.boxdot_3}
                                />
                                <img src={require('../../assets/images/Bag.svg').default}
                                    alt=""
                                    className={styles.boxbag}
                                />
                                <div className={styles.Box_text}>
                                    <h2>Marketplace</h2>
                                    <p>Logo,Filter,+ and Search need other space. “Hambuger” menu maybe other space its to small and hidden. so have to option search a product.
                                    </p>
                                    <button type='submit'>Explore</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-12 col-12'>
                            <div className={`${styles.Box_main_after} ${styles.Box_main_after_purple}`}></div>
                            <div className={`${styles.Box_main} ${styles.Box_main_purple}`}>
                                <img src={require('../../assets/images/Dots_card.svg').default}
                                    alt=""
                                    className={styles.boxdot_1}
                                />
                                <img src={require('../../assets/images/Dots_card_1.svg').default}
                                    alt=""
                                    className={styles.boxdot_2}
                                />
                                <img src={require('../../assets/images/Dots_card_2.svg').default}
                                    alt=""
                                    className={styles.boxdot_3}
                                />
                                <img src={require('../../assets/images/booling-card-ic.svg').default}
                                    alt=""
                                    className={styles.boxbag}
                                />
                                <div className={styles.Box_text}>
                                    <h2>Booking</h2>
                                    <p>Logo,Filter,+ and Search need other space. “Hambuger” menu maybe other space its to small and hidden. so have to option search a product.
                                    </p>
                                    <button type='submit'>Explore</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-12 col-12'>
                            <div className={`${styles.Box_main_after} ${styles.Box_main_after_green}`}></div>
                            <div className={`${styles.Box_main} ${styles.Box_main_green}`}>
                                <img src={require('../../assets/images/Dots_card.svg').default}
                                    alt=""
                                    className={styles.boxdot_1}
                                />
                                <img src={require('../../assets/images/Dots_card_1.svg').default}
                                    alt=""
                                    className={styles.boxdot_2}
                                />
                                <img src={require('../../assets/images/Dots_card_2.svg').default}
                                    alt=""
                                    className={styles.boxdot_3}
                                />
                                <img src={require('../../assets/images/deals-card icon.svg').default}
                                    alt=""
                                    className={styles.boxbag}
                                />
                                <div className={styles.Box_text}>
                                    <h2>Deals</h2>
                                    <p>Logo,Filter,+ and Search need other space. “Hambuger” menu maybe other space its to small and hidden. so have to option search a product.

                                    </p>
                                    <button type='submit'>Explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* three box end desktop */}

            {/* three box phone */}
            <section className={`${styles.threeBox_wrap} ${styles.threeBox_wrapTop} d-xl-none d-lg-none d-md-none d-sm-block d-block`}>
                <div className='container-fluid p-0'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12 col-12'>
                            <Slider {...settings_threebox}>
                                <Card className={styles.card_market}>
                                    <div className={styles.Box_main_after}></div>
                                    <div className={styles.Box_main}>
                                        <img src={require('../../assets/images/Bag.svg').default}
                                            alt=""
                                            className={styles.boxbag}
                                        />
                                        <div className={styles.Box_text}>
                                            <h2>Marketplace</h2>
                                            <p>Logo,Filter,+ and Search need other space. “Hambuger” menu maybe other space its to small and hidden. so have to option search a product.
                                            </p>
                                            <button type='submit'>Explore</button>
                                        </div>
                                    </div>
                                </Card>
                                <Card className={styles.card_market}>
                                    <div className={`${styles.Box_main_after} ${styles.Box_main_after_purple}`}></div>
                                    <div className={`${styles.Box_main} ${styles.Box_main_purple}`}>
                                        <img src={require('../../assets/images/booling-card-ic.svg').default}
                                            alt=""
                                            className={styles.boxbag}
                                        />
                                        <div className={styles.Box_text}>
                                            <h2>Booking</h2>
                                            <p>Logo,Filter,+ and Search need other space. “Hambuger” menu maybe other space its to small and hidden. so have to option search a product.
                                            </p>
                                            <button type='submit'>Explore</button>
                                        </div>
                                    </div>
                                </Card>
                                <Card className={styles.card_market}>
                                    <div className={`${styles.Box_main_after} ${styles.Box_main_after_green}`}></div>
                                    <div className={`${styles.Box_main} ${styles.Box_main_green}`}>
                                        <img src={require('../../assets/images/deals-card icon.svg').default}
                                            alt=""
                                            className={styles.boxbag}
                                        />
                                        <div className={styles.Box_text}>
                                            <h2>Deals</h2>
                                            <p>Logo,Filter,+ and Search need other space. “Hambuger” menu maybe other space its to small and hidden. so have to option search a product.

                                            </p>
                                            <button type='submit'>Explore</button>
                                        </div>
                                    </div>
                                </Card>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            {/* three box end phone */}

            {/* item icon mobile */}
            <section className={styles.icon_wrap}>
                <div className='row mt-4'>
                    <div className="col">
                        <div className={styles.box_icon}>
                            <img src={require('../../assets/images/home.svg').default}
                                alt=""
                                className={styles.icon_img}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.box_icon}>
                            <img src={require('../../assets/images/baseline-apps-24px.svg').default}
                                alt=""
                                className={styles.icon_img}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.box_icon}>
                            <img src={require('../../assets/images/search-1.svg').default}
                                alt=""
                                className={styles.icon_img}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.box_icon}>
                            <img src={require('../../assets/images/add-btn-1.svg').default}
                                alt=""
                                className={styles.icon_img}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.box_icon}>
                            <img src={require('../../assets/images/Profile-img.png')}
                                alt=""
                                className={styles.icon_img}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* item icon mobile end */}

            {/* category box */}
            <section className={`${styles.category_wrap} `}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12 col-12'>
                            <div className={styles.category_titile}>
                                <h2>Popular Categories</h2>
                                <button type='submit'>Show all</button>
                            </div>
                        </div>
                    </div>
                    <div className='row  d-xl-none d-lg-none d-md-none d-sm-flex d-flex'>
                        <div className='col-md-12'>
                            <div className={styles.accordion}>
                                <Accordion allowZeroExpanded className={styles.accordion_main}>
                                    <AccordionItem className={styles.AccordionItem}>
                                        <AccordionItemHeading className={styles.AccordionItemHeading}>
                                            <AccordionItemButton>
                                                <img src={require('../../assets/images/bulb.svg').default}
                                                    alt=""
                                                />
                                                Electronics
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className={styles.AccordionItemPanel}>
                                            <div className={styles.cateBox_list}>
                                                <p>Notebooks</p>
                                                <p>Smartphones</p>
                                                <p>SSD</p>
                                                <p>Routers</p>
                                                <a href='javascript:void(0)'>See all</a>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem className={styles.AccordionItem}>
                                        <AccordionItemHeading className={styles.AccordionItemHeading}>
                                            <AccordionItemButton>
                                                <img src={require('../../assets/images/home-garden.svg').default}
                                                    alt=""
                                                />
                                                Home & Garden
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className={styles.AccordionItemPanel}>
                                            <div className={styles.cateBox_list}>
                                                <p>Irrigation systems</p>
                                                <p>Seeds and fertilizers</p>
                                                <p>Garden equipment</p>
                                                <p>Saplings</p>
                                                <a href='javascript:void(0)'>See all</a>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem className={styles.AccordionItem}>
                                        <AccordionItemHeading className={styles.AccordionItemHeading}>
                                            <AccordionItemButton>
                                                <img src={require('../../assets/images/parts.svg').default}
                                                    alt=""
                                                />
                                                Auto parts & Accesoires
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className={styles.AccordionItemPanel}>
                                            <div className={styles.cateBox_list}>
                                                <p>Car audio</p>
                                                <p>Car electronics</p>
                                                <p>Automotive Equipment</p>
                                                <p>Auto chemical goods</p>
                                                <a href='javascript:void(0)'>See all</a>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem className={styles.AccordionItem}>
                                        <AccordionItemHeading className={styles.AccordionItemHeading}>
                                            <AccordionItemButton>
                                                <img src={require('../../assets/images/eyebrows.svg').default}
                                                    alt=""
                                                />
                                                Eyebrows & Lashes
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className={styles.AccordionItemPanel}>
                                            <div className={styles.cateBox_list}>
                                                <p>Notebooks</p>
                                                <p>Smartphones</p>
                                                <p>SSD</p>
                                                <p>Routers</p>
                                                <a href='javascript:void(0)'>See all</a>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-4 d-xl-flex d-lg-flex d-md-flex d-sm-none d-none'>
                        <div className="col">
                            <div className={styles.categoryBox}>
                                <div className={styles.cateBox_title}>
                                    <img src={require('../../assets/images/bulb.svg').default}
                                        alt=""
                                        className={styles.box_icon}
                                    />
                                    <h2>
                                        Electronics
                                    </h2>
                                </div>
                                <div className={styles.cateBox_list}>
                                    <p>Notebooks</p>
                                    <p>Smartphones</p>
                                    <p>SSD</p>
                                    <p>Routers</p>
                                    <a href='javascript:void(0)'>See all</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.categoryBox}>
                                <div className={styles.cateBox_title}>
                                    <img src={require('../../assets/images/home-garden.svg').default}
                                        alt=""
                                        className={styles.box_icon}
                                    />
                                    <h2>
                                        Home & Garden
                                    </h2>
                                </div>
                                <div className={styles.cateBox_list}>
                                    <p>Irrigation systems</p>
                                    <p>Seeds and fertilizers</p>
                                    <p>Garden equipment</p>
                                    <p>Saplings</p>
                                    <a href='javascript:void(0)'>See all</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.categoryBox}>
                                <div className={styles.cateBox_title}>
                                    <img src={require('../../assets/images/fashion.svg').default}
                                        alt=""
                                        className={styles.box_icon}
                                    />
                                    <h2>
                                        Fashion
                                    </h2>
                                </div>
                                <div className={styles.cateBox_list}>
                                    <p>Footwear</p>
                                    <p>Bags and accessories</p>
                                    <p>Jewellery</p>
                                    <p>Clothing</p>
                                    <a href='javascript:void(0)'>See all</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.categoryBox}>
                                <div className={styles.cateBox_title}>
                                    <img src={require('../../assets/images/parts.svg').default}
                                        alt=""
                                        className={styles.box_icon}
                                    />
                                    <h2>
                                        Auto parts & Accesoires
                                    </h2>
                                </div>
                                <div className={styles.cateBox_list}>
                                    <p>Car audio</p>
                                    <p>Car electronics</p>
                                    <p>Automotive Equipment</p>
                                    <p>Auto chemical goods</p>
                                    <a href='javascript:void(0)'>See all</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.categoryBox}>
                                <div className={styles.cateBox_title}>
                                    <img src={require('../../assets/images/sport.svg').default}
                                        alt=""
                                        className={styles.box_icon}
                                    />
                                    <h2>
                                        Sport Goods
                                    </h2>
                                </div>
                                <div className={styles.cateBox_list}>
                                    <p>Fitness equipment and fitness</p>
                                    <p>Bicycles and accessories</p>
                                    <p>Winter sports</p>
                                    <p>Pool and aquafitness</p>
                                    <a href='javascript:void(0)'>See all</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4 d-xl-flex d-lg-flex d-md-flex d-sm-none d-none'>
                        <div className="col">
                            <div className={styles.categoryBox}>
                                <div className={styles.cateBox_title}>
                                    <img src={require('../../assets/images/hair.svg').default}
                                        alt=""
                                        className={styles.box_icon}
                                    />
                                    <h2>
                                        Hair salon
                                    </h2>
                                </div>
                                <div className={styles.cateBox_list}>
                                    <p>Notebooks</p>
                                    <p>Smartphones</p>
                                    <p>SSD</p>
                                    <p>Routers</p>
                                    <a href='javascript:void(0)'>See all</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.categoryBox}>
                                <div className={styles.cateBox_title}>
                                    <img src={require('../../assets/images/barber.svg').default}
                                        alt=""
                                        className={styles.box_icon}
                                    />
                                    <h2>
                                        Barber shop
                                    </h2>
                                </div>
                                <div className={styles.cateBox_list}>
                                    <p>Notebooks</p>
                                    <p>Smartphones</p>
                                    <p>SSD</p>
                                    <p>Routers</p>
                                    <a href='javascript:void(0)'>See all</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.categoryBox}>
                                <div className={styles.cateBox_title}>
                                    <img src={require('../../assets/images/eyebrows.svg').default}
                                        alt=""
                                        className={styles.box_icon}
                                    />
                                    <h2>
                                        Eyebrows & Lashes
                                    </h2>
                                </div>
                                <div className={styles.cateBox_list}>
                                    <p>Notebooks</p>
                                    <p>Smartphones</p>
                                    <p>SSD</p>
                                    <p>Routers</p>
                                    <a href='javascript:void(0)'>See all</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.categoryBox}>
                                <div className={styles.cateBox_title}>
                                    <img src={require('../../assets/images/beauty.svg').default}
                                        alt=""
                                        className={styles.box_icon}
                                    />
                                    <h2>
                                        Beauty salon
                                    </h2>
                                </div>
                                <div className={styles.cateBox_list}>
                                    <p>Notebooks</p>
                                    <p>Smartphones</p>
                                    <p>SSD</p>
                                    <p>Routers</p>
                                    <a href='javascript:void(0)'>See all</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.categoryBox}>
                                <div className={styles.cateBox_title}>
                                    <img src={require('../../assets/images/car-rent.svg').default}
                                        alt=""
                                        className={styles.box_icon}
                                    />
                                    <h2>
                                        Car rent
                                    </h2>
                                </div>
                                <div className={styles.cateBox_list}>
                                    <p>Notebooks</p>
                                    <p>Smartphones</p>
                                    <p>SSD</p>
                                    <p>Routers</p>
                                    <a href='javascript:void(0)'>See all</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* category box end */}



            {/* item slider marketplace */}
            <section className={styles.category_wrap}>
                <div className={styles.top_leftBorder}>
                    <img src={require('../../assets/images/Bar_pink.svg').default}
                        alt=""
                    />
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12 col-12'>
                            <div className={styles.category_titile}>
                                <h2>
                                    Popular Marketplace</h2>
                                <button type='submit' onClick={() => navigate('/home/marketplace')}>Show all</button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <Slider {...settings}>
                        <Card className={styles.card_market}>
                            <div className='position-relative'>
                                <div className={styles.card_top}>
                                    <div className={styles.card_topLeft}>
                                        <img src={require('../../assets/images/change-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/bidding-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.card_topCenter}>
                                        <p>1h 02m 32s<br></br><span>43bids</span></p>
                                    </div>
                                    <div className={styles.card_topRight}>
                                        <img src={require('../../assets/images/private-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <Card.Img variant="top" src={require('../../assets/images/marketplace_image1.png')} />
                            </div>

                            <Card.Body>
                                <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_bid}>Сustomer bid</p>
                                    <p className={styles.fixed_bid}>Fixed Price</p>
                                </div>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_price}>$1098</p>
                                    <p className={styles.fixed_price}>$1123</p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <div className='position-relative'>
                                <div className={styles.card_top}>
                                    <div className={styles.card_topLeft}>
                                        <img src={require('../../assets/images/change-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/bidding-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.card_topCenter}>
                                        <p>1h 02m 32s<br></br><span>43bids</span></p>
                                    </div>
                                    <div className={styles.card_topRight}>
                                        <img src={require('../../assets/images/private-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <Card.Img variant="top" src={require('../../assets/images/marketplace_image2.png')} />
                            </div>
                            <Card.Body>
                                <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_bid}>Сustomer bid</p>
                                    <p className={styles.fixed_bid}>Fixed Price</p>
                                </div>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_price}>$1098</p>
                                    <p className={styles.fixed_price}>$1123</p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <div className='position-relative'>
                                <div className={styles.card_top}>
                                    <div className={styles.card_topLeft}>
                                        <img src={require('../../assets/images/change-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/bidding-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.card_topCenter}>
                                        <p>1h 02m 32s<br></br><span>43bids</span></p>
                                    </div>
                                    <div className={styles.card_topRight}>
                                        <img src={require('../../assets/images/private-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <Card.Img variant="top" src={require('../../assets/images/marketplace_image3.png')} />
                            </div>
                            <Card.Body>
                                <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_bid}>Сustomer bid</p>
                                    <p className={styles.fixed_bid}>Fixed Price</p>
                                </div>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_price}>$1098</p>
                                    <p className={styles.fixed_price}>$1123</p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <div className='position-relative'>
                                <div className={styles.card_top}>
                                    <div className={styles.card_topLeft}>
                                        <img src={require('../../assets/images/change-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/bidding-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.card_topCenter}>
                                        <p>1h 02m 32s<br></br><span>43bids</span></p>
                                    </div>
                                    <div className={styles.card_topRight}>
                                        <img src={require('../../assets/images/private-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <Card.Img variant="top" src={require('../../assets/images/marketplace_image4.png')} />
                            </div>
                            <Card.Body>
                                <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_bid}>Сustomer bid</p>
                                    <p className={styles.fixed_bid}>Fixed Price</p>
                                </div>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_price}>$1098</p>
                                    <p className={styles.fixed_price}>$1123</p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <div className='position-relative'>
                                <div className={styles.card_top}>
                                    <div className={styles.card_topLeft}>
                                        <img src={require('../../assets/images/change-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/bidding-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.card_topCenter}>
                                        <p>1h 02m 32s<br></br><span>43bids</span></p>
                                    </div>
                                    <div className={styles.card_topRight}>
                                        <img src={require('../../assets/images/private-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <Card.Img variant="top" src={require('../../assets/images/marketplace_image5.png')} />
                            </div>
                            <Card.Body>
                                <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_bid}>Сustomer bid</p>
                                    <p className={styles.fixed_bid}>Fixed Price</p>
                                </div>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_price}>$1098</p>
                                    <p className={styles.fixed_price}>$1123</p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <div className='position-relative'>
                                <div className={styles.card_top}>
                                    <div className={styles.card_topLeft}>
                                        <img src={require('../../assets/images/change-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/bidding-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.card_topCenter}>
                                        <p>1h 02m 32s<br></br><span>43bids</span></p>
                                    </div>
                                    <div className={styles.card_topRight}>
                                        <img src={require('../../assets/images/private-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <Card.Img variant="top" src={require('../../assets/images/marketplace_image6.png')} />
                            </div>
                            <Card.Body>
                                <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_bid}>Сustomer bid</p>
                                    <p className={styles.fixed_bid}>Fixed Price</p>
                                </div>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_price}>$1098</p>
                                    <p className={styles.fixed_price}>$1123</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Slider>
                </div>
            </section>
            {/* item slider marketplace end */}

            {/* item slider booking */}
            <section className={`${styles.category_wrap} best_booking`}>
                <div className={styles.top_leftBorder}>
                    <img src={require('../../assets/images/Bar_purple.svg').default}
                        alt=""
                    />
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12 col-12'>
                            <div className={`${styles.category_titile} ${styles.best_booking}`}>
                                <h2>Best Bookings</h2>
                                <button className={styles.booking_btn} type='submit' onClick={() => navigate('/home/booking')}>Show all</button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <Slider {...settings_booking}>
                        <Card className={styles.card_market}>
                            <Card.Img variant="top" src={require('../../assets/images/booking_image1.png')} />
                            <Card.Body>
                                <Card.Title className={styles.booking_card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                <div className={styles.card_price_head}>
                                    <div className={styles.rating}>
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/paring-passive.svg').default}
                                            alt=""
                                        />
                                    </div>
                                    <p className={styles.fixed_bid}>2 Book Ratings</p>
                                </div>
                                <p className={styles.booking_city}>Austria, Vienna</p>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <Card.Img variant="top" src={require('../../assets/images/booking_image2.png')} />
                            <Card.Body>
                                <Card.Title className={styles.booking_card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                <div className={styles.card_price_head}>
                                    <div className={styles.rating}>
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/paring-passive.svg').default}
                                            alt=""
                                        />
                                    </div>
                                    <p className={styles.fixed_bid}>2 Book Ratings</p>
                                </div>
                                <p className={styles.booking_city}>Austria, Vienna</p>

                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <Card.Img variant="top" src={require('../../assets/images/booking_image3.png')} />
                            <Card.Body>
                                <Card.Title className={styles.booking_card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                <div className={styles.card_price_head}>
                                    <div className={styles.rating}>
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/paring-passive.svg').default}
                                            alt=""
                                        />
                                    </div>
                                    <p className={styles.fixed_bid}>2 Book Ratings</p>
                                </div>
                                <p className={styles.booking_city}>Austria, Vienna</p>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <Card.Img variant="top" src={require('../../assets/images/booking_image4.png')} />
                            <Card.Body>
                                <Card.Title className={styles.booking_card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                <div className={styles.card_price_head}>
                                    <div className={styles.rating}>
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/paring-passive.svg').default}
                                            alt=""
                                        />
                                    </div>
                                    <p className={styles.fixed_bid}>2 Book Ratings</p>
                                </div>
                                <p className={styles.booking_city}>Austria, Vienna</p>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <Card.Img variant="top" src={require('../../assets/images/booking_image5.png')} />
                            <Card.Body>
                                <Card.Title className={styles.booking_card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                <div className={styles.card_price_head}>
                                    <div className={styles.rating}>
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/paring-passive.svg').default}
                                            alt=""
                                        />
                                    </div>
                                    <p className={styles.fixed_bid}>2 Book Ratings</p>
                                </div>
                                <p className={styles.booking_city}>Austria, Vienna</p>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <Card.Img variant="top" src={require('../../assets/images/booking_image6.png')} />
                            <Card.Body>
                                <Card.Title className={styles.booking_card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                <div className={styles.card_price_head}>
                                    <div className={styles.rating}>
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/rating-active.svg').default}
                                            alt=""
                                        />
                                        <img src={require('../../assets/images/paring-passive.svg').default}
                                            alt=""
                                        />
                                    </div>
                                    <p className={styles.fixed_bid}>2 Book Ratings</p>
                                </div>
                                <p className={styles.booking_city}>Austria, Vienna</p>
                            </Card.Body>
                        </Card>
                    </Slider>
                </div>
            </section>
            {/* item slider booking end */}

            {/* item slider top deals */}
            <section className={`${styles.category_wrap} top_deals`}>
                <div className={styles.top_leftBorder}>
                    <img src={require('../../assets/images/Bar_Green.svg').default}
                        alt=""
                    />
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12 col-12'>
                            <div className={`${styles.category_titile} ${styles.top_deals}`}>
                                <h2>Top Deals</h2>
                                <button className={styles.deal_btn} type='submit'>Show all</button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <Slider {...settings}>
                        <Card className={styles.card_market}>
                            <div className='position-relative'>
                                <div className={styles.card_top}>
                                    <div className={styles.card_topLeft_deals}>
                                        <img src={require('../../assets/images/change-active.svg').default}
                                            alt=""
                                        />

                                    </div>
                                    <div className={styles.card_topRight_deals}>
                                        <img src={require('../../assets/images/private-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <Card.Img variant="top" src={require('../../assets/images/top_deals_image1.png')} />
                            </div>
                            <Card.Body>
                                <Card.Title className={`${styles.booking_card_title} ${styles.deals_card_title}`}>Soccer ball Joerex Size 5 Yellow</Card.Title>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_bid}>Fixed Price</p>
                                    <p className={styles.customer_price_deals}>$367</p>
                                    <p className={styles.fixed_price_deals}>$334</p>
                                </div>
                                <div className={styles.deals_off}>10% Off</div>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <div className='position-relative'>
                                <div className={styles.card_top}>
                                    <div className={styles.card_topLeft_deals}>
                                        <img src={require('../../assets/images/change-active.svg').default}
                                            alt=""
                                        />

                                    </div>
                                    <div className={styles.card_topRight_deals}>
                                        <img src={require('../../assets/images/private-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <Card.Img variant="top" src={require('../../assets/images/top_deals_image2.png')} />
                            </div>
                            <Card.Body>
                                <Card.Title className={`${styles.booking_card_title} ${styles.deals_card_title}`}>Running track EnergyFIT 815</Card.Title>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_bid}>Fixed Price</p>
                                    <p className={styles.customer_price_deals}>$367</p>
                                    <p className={styles.fixed_price_deals}>$334</p>
                                </div>
                                <div className={styles.deals_off}>10% Off</div>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <div className='position-relative'>
                                <div className={styles.card_top}>
                                    <div className={styles.card_topLeft_deals}>
                                        {/* <img src={require('../../assets/images/change-active.svg').default}
                                        alt=""
                                    /> */}

                                    </div>
                                    <div className={styles.card_topRight_deals}>
                                        <img src={require('../../assets/images/startup-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <Card.Img variant="top" src={require('../../assets/images/top_deals_image3.png')} />
                            </div>
                            <Card.Body>
                                <Card.Title className={`${styles.booking_card_title} ${styles.deals_card_title}`}>Cordless screwdriver Zenit USA-1213 A Li-1K</Card.Title>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_bid}>Fixed Price</p>
                                    <p className={styles.customer_price_deals}>$367</p>
                                    <p className={styles.fixed_price_deals}>$334</p>
                                </div>
                                <div className={styles.deals_off}>10% Off</div>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <div className='position-relative'>
                                <div className={styles.card_top}>
                                    <div className={styles.card_topLeft_deals}>
                                        <img src={require('../../assets/images/change-active.svg').default}
                                            alt=""
                                        />

                                    </div>
                                    <div className={styles.card_topRight_deals}>
                                        <img src={require('../../assets/images/private-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <Card.Img variant="top" src={require('../../assets/images/top_deals_image4.png')} />
                            </div>
                            <Card.Body>
                                <Card.Title className={`${styles.booking_card_title} ${styles.deals_card_title}`}>Akura Rice for sushi 1 kg</Card.Title>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_bid}>Fixed Price</p>
                                    <p className={styles.customer_price_deals}>$367</p>
                                    <p className={styles.fixed_price_deals}>$334</p>
                                </div>
                                <div className={styles.deals_off}>10% Off</div>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <div className='position-relative'>
                                <div className={styles.card_top}>
                                    <div className={styles.card_topLeft_deals}>
                                        <img src={require('../../assets/images/change-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.card_topRight_deals}>
                                        <img src={require('../../assets/images/commercial-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <Card.Img variant="top" src={require('../../assets/images/top_deals_image5.png')} />
                            </div>
                            <Card.Body>
                                <Card.Title className={`${styles.booking_card_title} ${styles.deals_card_title}`}>Samsung 970 Evo Plus 500GB M.2 PCIe 3.0 x4 V-NAND MLC</Card.Title>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_bid}>Fixed Price</p>
                                    <p className={styles.customer_price_deals}>$367</p>
                                    <p className={styles.fixed_price_deals}>$334</p>
                                </div>
                                <div className={styles.deals_off}>10% Off</div>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card_market}>
                            <div className='position-relative'>
                                <div className={styles.card_top}>
                                    <div className={styles.card_topLeft_deals}>
                                        {/* <img src={require('../../assets/images/change-active.svg').default}
                                        alt=""
                                    /> */}

                                    </div>
                                    <div className={styles.card_topRight_deals}>
                                        <img src={require('../../assets/images/startup-active.svg').default}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <Card.Img variant="top" src={require('../../assets/images/top_deals_image6.png')} />
                            </div>
                            <Card.Body>
                                <Card.Title className={`${styles.booking_card_title} ${styles.deals_card_title}`}>Cordless screwdriver Zenit USA-1213 A Li-1K</Card.Title>
                                <div className={styles.card_price_head}>
                                    <p className={styles.customer_bid}>Fixed Price</p>
                                    <p className={styles.customer_price_deals}>$367</p>
                                    <p className={styles.fixed_price_deals}>$334</p>
                                </div>
                                <div className={styles.deals_off}>10% Off</div>
                            </Card.Body>
                        </Card>
                    </Slider>
                </div>
            </section>
            {/* item slider top deals end */}

            {/* about box */}
            {/* <section className={`${styles.threeBox_wrap} ${styles.box_footer}`}>
                <div className='container-fluid'>
                    <div className={`row mt-4 ${styles.footer_row}`}>
                        <div className="col">
                            <div>
                                <div className={styles.aboutBox_title}>
                                    <img src={require('../../assets/images/logo.svg').default}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.footer_heading1}>
                                <p>Home</p>
                                <p>Marketplace</p>
                                <p>Booking</p>
                                <p>Deals</p>
                            </div>
                        </div>
                        <div className="col d-xl-flex d-lg-flex d-md-flex d-sm-none d-none">
                            <div className={styles.footer_heading2}>
                                <p>Electronics</p>
                                <p>Home & Garden</p>
                                <p>Fashion</p>
                                <p>Auto parts $ Accessories</p>
                                <p>Musical instruments & Gear</p>
                                <p>Sport Goods</p>
                                <p>Toys & Hobbies</p>
                                <p>Other categories</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.footer_heading3}>
                                <p onClick={() => navigate('/home/philosophy')}>Philosophy</p>
                                <p>Terms of use & Privacy policy</p>
                                <p>Solutions</p>
                                <p>Blog</p>
                                <p>Help Center</p>
                                <p>FAQ</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.aboutBox_title}>
                                <h2>
                                    Subscribe to our news
                                </h2>
                            </div>
                            <div className={styles.cateBox_list}>
                                <input type='text' className={styles.subscribe} name='subscribe_news' placeholder='Example@mail.com' />

                            </div>
                            <div className={styles.cateBox_list}>
                                <button className={styles.subscribe_btn}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <CommonFooter />
            {/* about box end */}

        </main>
    );
}

export default Home;
