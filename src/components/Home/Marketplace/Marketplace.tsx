import styles from '.././Marketplace/Marketplace.module.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';
import shoes from "../../../assets/images/shoes.png";
import MultiRangeSlider from "multi-range-slider-react";
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter';
import CommonFavourites from 'components/Shared/CommonFavourites/CommonFavourites';
import { CgMenuGridR } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

function Marketplace() {
    let navigate: NavigateFunction = useNavigate();
    const [array, setArray] = useState<any>(["Section", "Section", "Section", "Section", "Section", "Section", "Section"]);
    const [watches, setWatches] = useState<boolean>(false);
    const [electronics, setElectronics] = useState<boolean>(false);
    const [saveSearch, setSaveSearch] = useState<boolean>(false);
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const [home, setHome] = useState<boolean>(false);
    const [listView, setListView] = useState<boolean>(false);
    const [marketplace, setMarketplace] = useState<boolean>(true);
    const [booking, setBooking] = useState<boolean>(false);
    const [deals, setDeals] = useState<boolean>(false);
    const [catalogBtn, setCatalogBtn] = useState<boolean>(false);
    const [search, setSearch] = useState<boolean>(false);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [prop, setProp] = useState<boolean>(false);
    const [toggle, setToggle] = useState<any>([]);
    const [popup, setPopup] = useState<boolean>(false);

    const handleClick = (value: any) => {
        if (value === 'home') {
            setHome(true)
            setMarketplace(false)
            setBooking(false)
            setDeals(false)
        }
        if (value === 'marketplace') {
            setHome(false)
            setMarketplace(true)
            setBooking(false)
            setDeals(false)
            navigate('/home/marketplace')
        }
        if (value === 'booking') {
            setHome(false)
            setMarketplace(false)
            setBooking(true)
            setDeals(false)
            navigate('/home/booking')
        }
        if (value === 'deals') {
            setHome(false)
            setMarketplace(false)
            setBooking(false)
            setDeals(true)
            navigate('/home/deals')
        }
    }

    const handleCatalogBtn = () => {
        setCatalogBtn(!catalogBtn)
    }

    const handleClicks = (value: any, i: any) => {
        const index = toggle.indexOf(i)
        if (toggle.includes(i)) {
            toggle.splice(index, 1)
        } else {
            toggle.push(i)
        }
        console.log(toggle);
        setProp(!prop)
    }

    return (

        <main>
            {/* ____________________1st section________________________   */}
            <section className={`${styles.header} d-xl-block d-lg-block d-md-block d-sm-none d-none`}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 col-12'>
                            <div className={styles.header_left}>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12 col-12'>
                            <div className={styles.header_right}>
                                <div className={styles.header_cart}>
                                    <img src={require('../../../assets/images/Cart.svg').default}
                                        alt=""
                                        className={styles.img_cart}
                                    />
                                </div>
                                <div className={styles.header_plus}>
                                    <img src={require('../../../assets/images/subpoint-active.svg').default}
                                        alt=""
                                        className={styles.circle}
                                    />
                                    <img src={require('../../../assets/images/plus.svg').default}
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

            {/* sub-header */}
            <section className={`${styles.header} d-xl-block d-lg-block d-md-block d-sm-none d-none`}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-7 col-sm-12 col-12'>
                            <div className={styles.header_left}>
                                <div className={styles.header_filter}>
                                    <button className={catalogBtn ? styles.btn_active : styles.btn} onClick={() => handleCatalogBtn()}>
                                        <CgMenuGridR />Catalog of Goods
                                    </button>
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
                                                            <img src={require('../../../assets/images/bulb.svg').default}
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
                                                            <img src={require('../../../assets/images/home-garden.svg').default}
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
                                                            <img src={require('../../../assets/images/fashion.svg').default}
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
                                                            <img src={require('../../../assets/images/parts.svg').default}
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
                                                            <img src={require('../../../assets/images/bulb.svg').default}
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
                                                            <img src={require('../../../assets/images/home-garden.svg').default}
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
                                                            <img src={require('../../../assets/images/fashion.svg').default}
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
                                                            <img src={require('../../../assets/images/parts.svg').default}
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

                                </div>
                                <div className={styles.header_search}>
                                    {!search && <button className={styles.btn} onClick={() => { setSearch(!search) }}>
                                        <CiSearch />
                                    </button>}
                                    {search && <div className={styles.header_searchExpand}>
                                        <div className={styles.header_searchBox}>
                                            <img src={require('../../../assets/images/search.svg').default}
                                                alt="" className={styles.search} />
                                            <input type="text" className={styles.input} placeholder="Search" />
                                            <img src={require('../../../assets/images/close.svg').default}
                                                alt="" className={styles.close}
                                                onClick={() => { setSearch(false) }} />
                                        </div>
                                        <div className={styles.header_searchDropdown}>
                                            <div className='row'>
                                                <div className='col-md-6 col-6'>
                                                    <div className={styles.searchDropdown_left}>
                                                        <h2>Often looking</h2>
                                                        <ul>
                                                            <li><a href='#!'>Apple Headphones</a></li>
                                                            <li><a href='#!'>Sennheiser Headphones</a></li>
                                                            <li><a href='#!'>Marshall Headphones</a></li>
                                                            <li><a href='#!'>Samsung Headphones</a></li>
                                                            <li><a href='#!'>Apple Headphones</a></li>
                                                            <li><a href='#!'>Sennheiser Headphones</a></li>
                                                            <li><a href='#!'>Marshall Headphones</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='col-md-6 col-6'>
                                                    <div className={styles.searchDropdown_right}>
                                                        <h2>Popular Goods</h2>
                                                        <ul>
                                                            <li>
                                                                <div className={styles.searchDropdown_rightImg}>
                                                                    <img src={require('../../../assets/images/Marketplace_search_image1.png')}
                                                                        alt="" className={styles.close} />
                                                                </div>
                                                                <div className={styles.searchDropdown_rightText}>
                                                                    <p>AIR MUSIC Go Play</p>
                                                                    <div className={styles.card_price_head}>
                                                                        <p className={styles.customer_bid}>Сustomer bid</p>
                                                                        <p className={styles.fixed_bid}>Fixed Price</p>
                                                                    </div>
                                                                    <div className={styles.card_price_head}>
                                                                        <p className={styles.customer_price}>$1098</p>
                                                                        <p className={styles.fixed_price}>$1123</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <div className={styles.searchDropdown_rightImg}>
                                                                    <img src={require('../../../assets/images/Marketplace_search_image2.png')}
                                                                        alt="" className={styles.close} />
                                                                </div>
                                                                <div className={styles.searchDropdown_rightText}>
                                                                    <p>Apple AirPods</p>
                                                                    <div className={styles.card_price_head}>
                                                                        <p className={styles.customer_bid}>Сustomer bid</p>
                                                                        <p className={styles.fixed_bid}>Fixed Price</p>
                                                                    </div>
                                                                    <div className={styles.card_price_head}>
                                                                        <p className={styles.customer_price}>$1098</p>
                                                                        <p className={styles.fixed_price}>$1123</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <div className={styles.searchDropdown_rightImg}>
                                                                    <img src={require('../../../assets/images/Marketplace_search_image3.png')}
                                                                        alt="" className={styles.close} />
                                                                </div>
                                                                <div className={styles.searchDropdown_rightText}>
                                                                    <p>Sennheiser PXC 550</p>
                                                                    <div className={styles.card_price_head}>
                                                                        <p className={styles.customer_bid}>Сustomer bid</p>
                                                                        <p className={styles.fixed_bid}>Fixed Price</p>
                                                                    </div>
                                                                    <div className={styles.card_price_head}>
                                                                        <p className={styles.customer_price}>$1098</p>
                                                                        <p className={styles.fixed_price}>$1123</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 col-sm-12 col-12'>
                            <div className={styles.header_right2}>
                                <div className={styles.header_rightLink}>
                                    <a className={home ? styles.navlink : styles.navlink_active}
                                        onClick={() => handleClick('home')}>Home</a>
                                    <a className={marketplace ? styles.navlink : styles.navlink_active}
                                        onClick={() => handleClick('marketplace')}>Marketplace</a>
                                    <a className={booking ? styles.navlink : styles.navlink_active}
                                        onClick={() => handleClick('booking')}>Booking</a>
                                    <a className={deals ? styles.navlink : styles.navlink_active}
                                        onClick={() => handleClick('deals')}>Deals</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* sub-header end */}

            {/* sub-header bread crumb */}
            {electronics && <section className={styles.bredcrumb_wrapper}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12 col-12'>
                            <div className={styles.bredcrumbs}>
                                <ul>
                                    <li><a href='#!'>Marketplace {'>'}</a></li>
                                    <li><a href='#!'>Electronic {'>'}</a></li>
                                    {watches && <li>Watches</li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
            {/* sub-header bread crumb end*/}

            {/* select category bar */}
            {electronics && <section className={styles.selectCat_wrap}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12 col-12'>
                            <div className={styles.select_category}>
                                <div className={styles.selected_category}>
                                    <ul>
                                        <li><p>Electronics<img src={require('../../../assets/images/close-white.svg').default}
                                            onClick={() => { setElectronics(false) }}
                                            alt=""
                                            className={styles.close_white}
                                        /></p></li>
                                        {watches && <li><p>Watches<img src={require('../../../assets/images/close-white.svg').default}
                                            onClick={() => { setWatches(false) }}
                                            alt=""
                                            className={styles.close_white}
                                        /></p></li>}
                                    </ul>
                                </div>
                                <div className={styles.selectBar_btn}>
                                    <ul>
                                        <li><button className={styles.clr_btn} onClick={() => { setElectronics(false) }}>Clear All</button></li>
                                        <li><button className={styles.search_btn} onClick={() => { setSaveSearch(!saveSearch) }}>Save Search</button></li>
                                    </ul>

                                    {saveSearch && <div className={styles.selectBar_dropdown}>
                                        <div className={styles.selectBar_dropdownMain}>
                                            <div className={styles.dropdown_searching}>
                                                <label>Searching</label>
                                                <h2>Running track EnergyFIT 815</h2>
                                            </div>
                                            <div className={styles.dropdown_categoryMain}>
                                                <div className={styles.dropdown_category}>
                                                    <label>Category</label>
                                                    <div className={styles.category_btns}>
                                                        <p>Electronics
                                                            <img src={require('../../../assets/images/close-white.svg').default}
                                                                alt="" className={styles.close} />
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={styles.dropdown_category}>
                                                    <label>Subcategory</label>
                                                    <div className={styles.category_btns}>
                                                        <p>Watches
                                                            <img src={require('../../../assets/images/close-white.svg').default}
                                                                alt="" className={styles.close} />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.dropdown_manufacture}>
                                                <h2>Manufacturer</h2>
                                                <div className={styles.category_btns}>
                                                    <p>Calvin Klein
                                                        <img src={require('../../../assets/images/close.svg').default}
                                                            alt="" className={styles.close} />
                                                    </p>
                                                    <p>Casio
                                                        <img src={require('../../../assets/images/close.svg').default}
                                                            alt="" className={styles.close} />
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={styles.dropdown_manufacture}>
                                                <h2>Material</h2>
                                                <div className={styles.category_btns}>
                                                    <p>Metal <img src={require('../../../assets/images/close.svg').default}
                                                        alt="" className={styles.close} /></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.selectBar_dropdownbtn}>
                                            <button className={styles.btn} onClick={() => { setPopup(true) }} >Save</button>
                                        </div>

                                    </div>}

                                    {popup && <div className={styles.search_saved}>
                                        <div className={styles.form_popup}>
                                            <div className={styles.form_popup_sub}>
                                                <img src={require('../../../assets/images/dots.svg').default}
                                                    alt=""
                                                    className={styles.dots1_popup}
                                                />

                                                <div className={styles.formBody_popup}>

                                                    <h1 className={styles.h1_popup}>You’r search has been saved</h1>
                                                    <hr className={styles.rectangle}></hr>
                                                    <h3 className={styles.h3_popup}>You can found saved search <br /> in you’r profile</h3>
                                                    <button className={styles.popup_btn} onClick={() => { setPopup(false); setSaveSearch(false) }}>Got it</button>
                                                </div>
                                                <img src={require('../../../assets/images/dots.svg').default}
                                                    alt=""
                                                    className={styles.dots2_popup}
                                                />
                                            </div>
                                        </div>
                                    </div>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
            {/* select category bar end */}

            {/* favorites */}
            {!electronics &&
                // <section className={styles.fav_wrap}>
                //     <div className='container-fluid'>
                //         <div className='row'>
                //             <div className='col-md-5 col-sm-12 col-12'>
                //                 <div className={styles.fav_left}>
                //                     <div className='row'>
                //                         <div className='col-md-12 col-sm-12 col-12'>
                //                             <div className={styles.fav_leftContant}>
                //                                 <h2>02</h2>
                //                                 <p>New Style always with you</p>
                //                                 <h1>Your Favorites Always With You</h1>
                //                                 <p>Stayinfun was established with a clear vision: to provide the very latest in compelling designs for the fashionably hip along with providing exceptional value, quality, and superb customer service.</p>

                //                             </div>
                //                         </div>
                //                     </div>
                //                     <div className='row d-xl-flex d-lg-flex d-md-flex d-sm-none d-none'>
                //                         <div className='col-md-4 col-sm-4 col-4'>
                //                             <div className={styles.fav_leftbox}>
                //                                 <h3>Thrends</h3>
                //                                 <p>Stayinfun was established with a clear vision: to provide</p>                                        </div>
                //                         </div>
                //                         <div className='col-md-4 col-sm-4 col-4'>
                //                             <div className={styles.fav_leftbox}>
                //                                 <h3>Thrends</h3>
                //                                 <p>Stayinfun was established with a clear vision: to provide</p>                                        </div>
                //                         </div>
                //                         <div className='col-md-4 col-sm-4 col-4'>
                //                             <div className={styles.fav_leftbox}>
                //                                 <h3>Thrends</h3>
                //                                 <p>Stayinfun was established with a clear vision: to provide</p>
                //                             </div>
                //                         </div>
                //                     </div>
                //                     <div className='row d-xl-block d-lg-block d-md-block d-sm-none d-none'>
                //                         <div className='col-md-12 col-sm-12 col-4'>
                //                             <div className={styles.fav_leftbtn}>
                //                                 <button className={styles.btn}>Shop Now</button>
                //                             </div>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //             <div className='col-md-7 col-sm-12 col-12'>
                //                 <div className={`${styles.fav_right} fav_right`}>
                //                     <div className='row'>
                //                         <div className='col-md-6 col-sm-6 col-12 pr-0'>
                //                             <div className={`${styles.fav_rightFirst} `}>
                //                                 <Slider ref={c => (slider = c)} {...settings_fav}>
                //                                     <Card className={styles.card_market}>
                //                                         <Card.Img variant="top" src={require('../../../assets/images/fav_image1.png')} />
                //                                     </Card>
                //                                     <Card className={styles.card_market}>
                //                                         <Card.Img variant="top" src={require('../../../assets/images/marketplace_image2.png')} />
                //                                     </Card>
                //                                 </Slider>
                //                                 <div>
                //                                     <button className={styles.previous_btn} onClick={() => previous()}>
                //                                         Previous
                //                                     </button>
                //                                     <button className={styles.next_btn} onClick={() => next()}>
                //                                         Next
                //                                     </button>
                //                                 </div>
                //                             </div>
                //                         </div>
                //                         <div className='col-md-6 col-sm-6 col-12 pl-0 d-xl-block d-lg-block d-md-block d-sm-none d-none'>
                //                             <div className={styles.fav_rightSecond}>
                //                                 <div className={styles.fav_rightSecondText}>
                //                                     <h2>03</h2>
                //                                     <p>New Fashion</p>
                //                                     <h1>2019 Fashion for Fashion</h1>
                //                                     <img src={shoes}
                //                                         alt=""
                //                                         className={styles.fav_img}
                //                                     />
                //                                 </div>
                //                             </div>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </section>
                <CommonFavourites />
            }
            {/* favorites end */}

            {/*category */}
            {!electronics && <section className={styles.catagories_wrap}>
                <div className={styles.catagories_title}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-12 col-sm-12 col-12'>
                                <div className={styles.Ctitle}>
                                    <h1>
                                        Categories
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.catagories_box}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                                <div className={styles.Cboxes} onClick={() => { setElectronics(!electronics) }}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/purple.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/bulb.svg').default}
                                        alt="" />
                                    <p>Electronics</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.Cboxes}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/mint.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/home-garden.svg').default}
                                        alt="" />
                                    <p>Home & Garden</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.Cboxes}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/coral.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/fashion.svg').default}
                                        alt="" />
                                    <p>Fashion</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.Cboxes}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/dark-blue.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/parts.svg').default}
                                        alt="" />
                                    <p>Auto parts & Accesories</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.Cboxes}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/orange.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/guitar.svg').default}
                                        alt="" />
                                    <p>Musical instruments & Gear</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.Cboxes}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/green.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/volleyball.svg').default}
                                        alt="" />
                                    <p>Sports Goods</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.Cboxes}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/violet.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/puzzle.svg').default}
                                        alt="" />
                                    <p>Toys & Hobbies</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.Cboxes}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/light blue.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/icon-action-stars_24px.svg').default}
                                        alt="" />
                                    <p>Other categories</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
            {/*category end */}

            {/*sub category */}
            {electronics && <section className={styles.catagories_wrap}>
                <div className={styles.catagories_title}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-12 col-sm-12 col-12'>
                                <div className={styles.Ctitle}>
                                    <h1>
                                        Subcategories
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.catagories_box}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                                <div className={styles.Cboxes} onClick={() => { setElectronics(!electronics) }}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/purple.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/audio.svg').default}
                                        alt="" />
                                    <p>Audio</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.Cboxes}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/mint.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/phone.svg').default}
                                        alt="" />
                                    <p>Phones & Accesoires</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.Cboxes} onClick={() => {setWatches(!watches)}}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/coral.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/watch.svg').default}
                                        alt="" />
                                    <p>Watches</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.Cboxes}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/dark-blue.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/tv.svg').default}
                                        alt="" />
                                    <p>TV & Video</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.Cboxes}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/orange.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/games.svg').default}
                                        alt="" />
                                    <p>Video games & Consoles</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.Cboxes}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/green.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/camera.svg').default}
                                        alt="" />
                                    <p>Cameras & Photos</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.Cboxes}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/violet.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/tablet.svg').default}
                                        alt="" />
                                    <p>Tablets & Computers</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.Cboxes}>
                                    <img className={styles.img_topleft} src={require('../../../assets/images/light blue.svg').default}
                                        alt="" />
                                    <img className={styles.img_main} src={require('../../../assets/images/gps.svg').default}
                                        alt="" />
                                    <p>GPS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
            {/*sub category end */}

            {/* item popular goods */}
            <section className={styles.category_wrap}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12 col-12'>
                            <div className={styles.productFilter_main}>
                                <div className={styles.productFilter_left}>
                                    <h2>Popular goods<br /><small>3445 Results</small></h2>
                                    <ul>
                                        <li>
                                            <span onClick={() => { setListView(true) }}>
                                                <img src={require('../../../assets/images/baseline-view_list-24px-active.svg').default}
                                                    alt="" className={styles.img} />
                                            </span>
                                        </li>
                                        <li>
                                            <span onClick={() => { setListView(false) }}>
                                                <img src={require('../../../assets/images/baseline-view_module-24px-pasive.svg').default}
                                                    alt="" className={styles.img} />
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.productFilter_right}>
                                    <ul>
                                        <li>
                                            <label className={styles.has_sort}>Sort:</label>
                                        </li>
                                        <li>
                                            <div className={styles.has_search}>
                                                {/* <span className={styles.pin_img}>
                                                    <img src={require('../../../assets/images/location.svg').default}
                                                        alt="" className={styles.pin} />
                                                </span> */}
                                                <select className={styles.control_feedback}>
                                                    <option>Price+Shipping: Highest first</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                                {/* <input type="text" className={styles.control_feedback} placeholder="Lindon, Ukraine" /> */}
                                            </div>
                                        </li>
                                        <li>
                                            <button className={styles.country_btn} onClick={() => { setShowFilter(true) }}>
                                                <img src={require('../../../assets/images/filter.svg').default} alt=""
                                                    className={styles.img} />
                                                Filter
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    {!listView && <div>
                        <div className='row'>
                            <div className='col'>
                                <Card className={styles.card_market}>
                                    <div className='position-relative'>
                                        <div className={styles.card_top}>
                                            <div className={styles.card_topLeft}>
                                                <img src={require('../../../assets/images/change-active.svg').default}
                                                    alt=""
                                                />
                                                <img src={require('../../../assets/images/bidding-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.card_topCenter}>
                                                <p>1h 02m 32s<br></br><span>43bids</span></p>
                                            </div>
                                            <div className={styles.card_topRight}>
                                                <img src={require('../../../assets/images/private-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <Card.Img variant="top" src={require('../../../assets/images/top_deals_image1.png')} />
                                    </div>

                                    <Card.Body>
                                        <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>

                                        <div className={styles.card_marketHover}>
                                            <div className={styles.card_price_raring}>
                                                <div className={styles.rating}>
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <p className={styles.fixed_bid}>2 Book Ratings</p>
                                            </div>
                                            <div className={styles.card_specification}>
                                                <p><span>Condition</span>New</p>
                                                <p><span>Size</span>Standard</p>
                                                <p><span>Color</span>
                                                    <span className={styles.color_select}>
                                                        <ul>
                                                            <li><small className={styles.green}></small></li>
                                                            <li><small className={styles.blue}></small></li>
                                                            <li><small className={styles.red}></small></li>
                                                        </ul>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
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
                            </div>
                            <div className='col'>
                                <Card className={styles.card_market}>
                                    <div className='position-relative'>
                                        <div className={styles.card_top}>
                                            <div className={styles.card_topLeft}>
                                                <img src={require('../../../assets/images/change-active.svg').default}
                                                    alt=""
                                                />
                                                <img src={require('../../../assets/images/bidding-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.card_topCenter}>
                                                <p>1h 02m 32s<br></br><span>43bids</span></p>
                                            </div>
                                            <div className={styles.card_topRight}>
                                                <img src={require('../../../assets/images/private-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <Card.Img variant="top" src={require('../../../assets/images/top_deals_image2.png')} />
                                    </div>

                                    <Card.Body>
                                        <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                        <div className={styles.card_marketHover}>
                                            <div className={styles.card_price_raring}>
                                                <div className={styles.rating}>
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <p className={styles.fixed_bid}>2 Book Ratings</p>
                                            </div>
                                            <div className={styles.card_specification}>
                                                <p><span>Condition</span>New</p>
                                                <p><span>Size</span>Standard</p>
                                                <p><span>Color</span>
                                                    <span className={styles.color_select}>
                                                        <ul>
                                                            <li><small className={styles.green}></small></li>
                                                            <li><small className={styles.blue}></small></li>
                                                            <li><small className={styles.red}></small></li>
                                                        </ul>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
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
                            </div>
                            <div className='col'>
                                <Card className={styles.card_market}>
                                    <div className='position-relative'>
                                        <div className={styles.card_top}>
                                            <div className={styles.card_topLeft}>
                                                <img src={require('../../../assets/images/change-active.svg').default}
                                                    alt=""
                                                />
                                                <img src={require('../../../assets/images/bidding-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.card_topCenter}>
                                                <p>1h 02m 32s<br></br><span>43bids</span></p>
                                            </div>
                                            <div className={styles.card_topRight}>
                                                <img src={require('../../../assets/images/private-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <Card.Img variant="top" src={require('../../../assets/images/top_deals_image3.png')} />
                                    </div>

                                    <Card.Body>
                                        <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                        <div className={styles.card_marketHover}>
                                            <div className={styles.card_price_raring}>
                                                <div className={styles.rating}>
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <p className={styles.fixed_bid}>2 Book Ratings</p>
                                            </div>
                                            <div className={styles.card_specification}>
                                                <p><span>Condition</span>New</p>
                                                <p><span>Size</span>Standard</p>
                                                <p><span>Color</span>
                                                    <span className={styles.color_select}>
                                                        <ul>
                                                            <li><small className={styles.green}></small></li>
                                                            <li><small className={styles.blue}></small></li>
                                                            <li><small className={styles.red}></small></li>
                                                        </ul>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`${styles.card_price_head} ${styles.card_priceSignle_line}`}>
                                            <p className={styles.fixed_bid}>Fixed Price</p>
                                            <p className={styles.fixed_price}>$1123</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col'>
                                <Card className={styles.card_market}>
                                    <div className='position-relative'>
                                        <div className={styles.card_top}>
                                            <div className={styles.card_topLeft}>
                                                <img src={require('../../../assets/images/change-active.svg').default}
                                                    alt=""
                                                />
                                                <img src={require('../../../assets/images/bidding-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.card_topCenter}>
                                                <p>1h 02m 32s<br></br><span>43bids</span></p>
                                            </div>
                                            <div className={styles.card_topRight}>
                                                <img src={require('../../../assets/images/private-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <Card.Img variant="top" src={require('../../../assets/images/top_deals_image4.png')} />
                                    </div>

                                    <Card.Body>
                                        <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                        <div className={styles.card_marketHover}>
                                            <div className={styles.card_price_raring}>
                                                <div className={styles.rating}>
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <p className={styles.fixed_bid}>2 Book Ratings</p>
                                            </div>
                                            <div className={styles.card_specification}>
                                                <p><span>Condition</span>New</p>
                                                <p><span>Size</span>Standard</p>
                                                <p><span>Color</span>
                                                    <span className={styles.color_select}>
                                                        <ul>
                                                            <li><small className={styles.green}></small></li>
                                                            <li><small className={styles.blue}></small></li>
                                                            <li><small className={styles.red}></small></li>
                                                        </ul>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
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
                            </div>
                            <div className='col'>
                                <Card className={styles.card_market}>
                                    <div className='position-relative'>
                                        <div className={styles.card_top}>
                                            <div className={styles.card_topLeft}>
                                                <img src={require('../../../assets/images/change-active.svg').default}
                                                    alt=""
                                                />
                                                <img src={require('../../../assets/images/bidding-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.card_topCenter}>
                                                <p>1h 02m 32s<br></br><span>43bids</span></p>
                                            </div>
                                            <div className={styles.card_topRight}>
                                                <img src={require('../../../assets/images/private-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <Card.Img variant="top" src={require('../../../assets/images/top_deals_image5.png')} />
                                    </div>

                                    <Card.Body>
                                        <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                        <div className={styles.card_marketHover}>
                                            <div className={styles.card_price_raring}>
                                                <div className={styles.rating}>
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <p className={styles.fixed_bid}>2 Book Ratings</p>
                                            </div>
                                            <div className={styles.card_specification}>
                                                <p><span>Condition</span>New</p>
                                                <p><span>Size</span>Standard</p>
                                                <p><span>Color</span>
                                                    <span className={styles.color_select}>
                                                        <ul>
                                                            <li><small className={styles.green}></small></li>
                                                            <li><small className={styles.blue}></small></li>
                                                            <li><small className={styles.red}></small></li>
                                                        </ul>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`${styles.card_price_head} ${styles.card_priceSignle_line}`}>
                                            <p className={styles.fixed_bid}>Fixed Price</p>
                                            <p className={styles.fixed_price}>$1123</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col'>
                                <Card className={styles.card_market}>
                                    <div className='position-relative'>
                                        <div className={styles.card_top}>
                                            <div className={styles.card_topLeft}>
                                                <img src={require('../../../assets/images/change-active.svg').default}
                                                    alt=""
                                                />
                                                <img src={require('../../../assets/images/bidding-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.card_topCenter}>
                                                <p>1h 02m 32s<br></br><span>43bids</span></p>
                                            </div>
                                            <div className={styles.card_topRight}>
                                                <img src={require('../../../assets/images/private-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <Card.Img variant="top" src={require('../../../assets/images/top_deals_image1.png')} />
                                    </div>

                                    <Card.Body>
                                        <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>

                                        <div className={styles.card_marketHover}>
                                            <div className={styles.card_price_raring}>
                                                <div className={styles.rating}>
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <p className={styles.fixed_bid}>2 Book Ratings</p>
                                            </div>
                                            <div className={styles.card_specification}>
                                                <p><span>Condition</span>New</p>
                                                <p><span>Size</span>Standard</p>
                                                <p><span>Color</span>
                                                    <span className={styles.color_select}>
                                                        <ul>
                                                            <li><small className={styles.green}></small></li>
                                                            <li><small className={styles.blue}></small></li>
                                                            <li><small className={styles.red}></small></li>
                                                        </ul>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
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
                            </div>
                            <div className='col'>
                                <Card className={styles.card_market}>
                                    <div className='position-relative'>
                                        <div className={styles.card_top}>
                                            <div className={styles.card_topLeft}>
                                                <img src={require('../../../assets/images/change-active.svg').default}
                                                    alt=""
                                                />
                                                <img src={require('../../../assets/images/bidding-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.card_topCenter}>
                                                <p>1h 02m 32s<br></br><span>43bids</span></p>
                                            </div>
                                            <div className={styles.card_topRight}>
                                                <img src={require('../../../assets/images/private-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <Card.Img variant="top" src={require('../../../assets/images/top_deals_image2.png')} />
                                    </div>

                                    <Card.Body>
                                        <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                        <div className={styles.card_marketHover}>
                                            <div className={styles.card_price_raring}>
                                                <div className={styles.rating}>
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <p className={styles.fixed_bid}>2 Book Ratings</p>
                                            </div>
                                            <div className={styles.card_specification}>
                                                <p><span>Condition</span>New</p>
                                                <p><span>Size</span>Standard</p>
                                                <p><span>Color</span>
                                                    <span className={styles.color_select}>
                                                        <ul>
                                                            <li><small className={styles.green}></small></li>
                                                            <li><small className={styles.blue}></small></li>
                                                            <li><small className={styles.red}></small></li>
                                                        </ul>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
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
                            </div>
                            <div className='col'>
                                <Card className={styles.card_market}>
                                    <div className='position-relative'>
                                        <div className={styles.card_top}>
                                            <div className={styles.card_topLeft}>
                                                <img src={require('../../../assets/images/change-active.svg').default}
                                                    alt=""
                                                />
                                                <img src={require('../../../assets/images/bidding-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.card_topCenter}>
                                                <p>1h 02m 32s<br></br><span>43bids</span></p>
                                            </div>
                                            <div className={styles.card_topRight}>
                                                <img src={require('../../../assets/images/private-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <Card.Img variant="top" src={require('../../../assets/images/top_deals_image3.png')} />
                                    </div>

                                    <Card.Body>
                                        <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                        <div className={styles.card_marketHover}>
                                            <div className={styles.card_price_raring}>
                                                <div className={styles.rating}>
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <p className={styles.fixed_bid}>2 Book Ratings</p>
                                            </div>
                                            <div className={styles.card_specification}>
                                                <p><span>Condition</span>New</p>
                                                <p><span>Size</span>Standard</p>
                                                <p><span>Color</span>
                                                    <span className={styles.color_select}>
                                                        <ul>
                                                            <li><small className={styles.green}></small></li>
                                                            <li><small className={styles.blue}></small></li>
                                                            <li><small className={styles.red}></small></li>
                                                        </ul>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`${styles.card_price_head} ${styles.card_priceSignle_line}`}>
                                            <p className={styles.fixed_bid}>Fixed Price</p>
                                            <p className={styles.fixed_price}>$1123</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col'>
                                <Card className={styles.card_market}>
                                    <div className='position-relative'>
                                        <div className={styles.card_top}>
                                            <div className={styles.card_topLeft}>
                                                <img src={require('../../../assets/images/change-active.svg').default}
                                                    alt=""
                                                />
                                                <img src={require('../../../assets/images/bidding-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.card_topCenter}>
                                                <p>1h 02m 32s<br></br><span>43bids</span></p>
                                            </div>
                                            <div className={styles.card_topRight}>
                                                <img src={require('../../../assets/images/private-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <Card.Img variant="top" src={require('../../../assets/images/top_deals_image4.png')} />
                                    </div>

                                    <Card.Body>
                                        <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                        <div className={styles.card_marketHover}>
                                            <div className={styles.card_price_raring}>
                                                <div className={styles.rating}>
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <p className={styles.fixed_bid}>2 Book Ratings</p>
                                            </div>
                                            <div className={styles.card_specification}>
                                                <p><span>Condition</span>New</p>
                                                <p><span>Size</span>Standard</p>
                                                <p><span>Color</span>
                                                    <span className={styles.color_select}>
                                                        <ul>
                                                            <li><small className={styles.green}></small></li>
                                                            <li><small className={styles.blue}></small></li>
                                                            <li><small className={styles.red}></small></li>
                                                        </ul>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
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
                            </div>
                            <div className='col'>
                                <Card className={styles.card_market}>
                                    <div className='position-relative'>
                                        <div className={styles.card_top}>
                                            <div className={styles.card_topLeft}>
                                                <img src={require('../../../assets/images/change-active.svg').default}
                                                    alt=""
                                                />
                                                <img src={require('../../../assets/images/bidding-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.card_topCenter}>
                                                <p>1h 02m 32s<br></br><span>43bids</span></p>
                                            </div>
                                            <div className={styles.card_topRight}>
                                                <img src={require('../../../assets/images/private-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <Card.Img variant="top" src={require('../../../assets/images/top_deals_image5.png')} />
                                    </div>

                                    <Card.Body>
                                        <Card.Title className={styles.card_title}>Leather feltcase for 9,7’ tablet</Card.Title>
                                        <div className={styles.card_marketHover}>
                                            <div className={styles.card_price_raring}>
                                                <div className={styles.rating}>
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <p className={styles.fixed_bid}>2 Book Ratings</p>
                                            </div>
                                            <div className={styles.card_specification}>
                                                <p><span>Condition</span>New</p>
                                                <p><span>Size</span>Standard</p>
                                                <p><span>Color</span>
                                                    <span className={styles.color_select}>
                                                        <ul>
                                                            <li><small className={styles.green}></small></li>
                                                            <li><small className={styles.blue}></small></li>
                                                            <li><small className={styles.red}></small></li>
                                                        </ul>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`${styles.card_price_head} ${styles.card_priceSignle_line}`}>
                                            <p className={styles.fixed_bid}>Fixed Price</p>
                                            <p className={styles.fixed_price}>$1123</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>}
                    <br></br>

                    {/* list view */}
                    {listView && <div className='row'>
                        <div className='col-md-12 col-12'>
                            <div className={`mb-4 ${styles.list_categoryMain} ${styles.list_categoryMain_marketplace}`}>
                                <div className={`${styles.list_left} ${styles.list_leftMarketplace}`}>
                                    <div className={styles.list_box1}>
                                        <img src={require('../../../assets/images/Marketplace_List_image1.png')}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.left_box2}>
                                        <img src={require('../../../assets/images/Marketplace_List_image2.png')}
                                            alt=""
                                        />
                                        <img src={require('../../../assets/images/Marketplace_List_image2.png')}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={`${styles.list_center} ${styles.Bookinglist_center}`}>
                                    <div className={styles.list_text}>
                                        <p className={styles.title}>Running track EnergyFIT 815</p>
                                        <div className={`${styles.card_marketHover} ${styles.cardList_marketHover}`}>
                                            <div className={styles.card_price_raring}>
                                                <div className={styles.rating}>
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <p className={styles.fixed_bid}>2 Book Ratings</p>
                                            </div>
                                            <div className={styles.card_specification}>
                                                <p><span>Condition</span>New</p>
                                                <p><span>Size</span>Standard</p>
                                                <p><span>Color</span>
                                                    <span className={styles.color_select}>
                                                        <ul>
                                                            <li><small className={styles.green}></small></li>
                                                            <li><small className={styles.blue}></small></li>
                                                            <li><small className={styles.red}></small></li>
                                                        </ul>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.list_rightMarketplace_main}>
                                    <div className={`${styles.list_right} ${styles.list_rightMarketplace}`}>
                                        <div className={styles.card_top}>
                                            <div className={styles.card_topLeft}>
                                                <img src={require('../../../assets/images/change-active.svg').default}
                                                    alt=""
                                                />
                                                <img src={require('../../../assets/images/bidding-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.card_topCenter}>
                                                <p>1h 02m 32s<br></br><span>43bids</span></p>
                                            </div>
                                            <div className={styles.card_topRight}>
                                                <img src={require('../../../assets/images/private-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.card_price_head}>
                                            <p className={styles.customer_bid}>Сustomer bid</p>
                                            <p className={styles.fixed_bid}>Fixed Price</p>
                                        </div>
                                        <div className={styles.card_price_head}>
                                            <p className={styles.customer_price}>$1098</p>
                                            <p className={styles.fixed_price}>$1123</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`mb-4 ${styles.list_categoryMain} ${styles.list_categoryMain_marketplace}`}>
                                <div className={`${styles.list_left} ${styles.list_leftMarketplace}`}>
                                    <div className={styles.list_box1}>
                                        <img src={require('../../../assets/images/Marketplace_List_image1.png')}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.left_box2}>
                                        <img src={require('../../../assets/images/Marketplace_List_image2.png')}
                                            alt=""
                                        />
                                        <img src={require('../../../assets/images/Marketplace_List_image2.png')}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={`${styles.list_center} ${styles.Bookinglist_center}`}>
                                    <div className={styles.list_text}>
                                        <p className={styles.title}>Running track EnergyFIT 815</p>
                                        <div className={`${styles.card_marketHover} ${styles.cardList_marketHover}`}>
                                            <div className={styles.card_price_raring}>
                                                <div className={styles.rating}>
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <p className={styles.fixed_bid}>2 Book Ratings</p>
                                            </div>
                                            <div className={styles.card_specification}>
                                                <p><span>Condition</span>New</p>
                                                <p><span>Size</span>Standard</p>
                                                <p><span>Color</span>
                                                    <span className={styles.color_select}>
                                                        <ul>
                                                            <li><small className={styles.green}></small></li>
                                                            <li><small className={styles.blue}></small></li>
                                                            <li><small className={styles.red}></small></li>
                                                        </ul>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.list_rightMarketplace_main}>
                                    <div className={`${styles.list_right} ${styles.list_rightMarketplace}`}>
                                        <div className={styles.card_top}>
                                            <div className={styles.card_topLeft}>
                                                <img src={require('../../../assets/images/change-active.svg').default}
                                                    alt=""
                                                />
                                                <img src={require('../../../assets/images/bidding-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.card_topCenter}>
                                                <p>1h 02m 32s<br></br><span>43bids</span></p>
                                            </div>
                                            <div className={styles.card_topRight}>
                                                <img src={require('../../../assets/images/private-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.card_price_head}>
                                            <p className={styles.customer_bid}>Сustomer bid</p>
                                            <p className={styles.fixed_bid}>Fixed Price</p>
                                        </div>
                                        <div className={styles.card_price_head}>
                                            <p className={styles.customer_price}>$1098</p>
                                            <p className={styles.fixed_price}>$1123</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`mb-4 ${styles.list_categoryMain} ${styles.list_categoryMain_marketplace}`}>
                                <div className={`${styles.list_left} ${styles.list_leftMarketplace}`}>
                                    <div className={styles.list_box1}>
                                        <img src={require('../../../assets/images/Marketplace_List_image1.png')}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.left_box2}>
                                        <img src={require('../../../assets/images/Marketplace_List_image2.png')}
                                            alt=""
                                        />
                                        <img src={require('../../../assets/images/Marketplace_List_image2.png')}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={`${styles.list_center} ${styles.Bookinglist_center}`}>
                                    <div className={styles.list_text}>
                                        <p className={styles.title}>Running track EnergyFIT 815</p>
                                        <div className={`${styles.card_marketHover} ${styles.cardList_marketHover}`}>
                                            <div className={styles.card_price_raring}>
                                                <div className={styles.rating}>
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <p className={styles.fixed_bid}>2 Book Ratings</p>
                                            </div>
                                            <div className={styles.card_specification}>
                                                <p><span>Condition</span>New</p>
                                                <p><span>Size</span>Standard</p>
                                                <p><span>Color</span>
                                                    <span className={styles.color_select}>
                                                        <ul>
                                                            <li><small className={styles.green}></small></li>
                                                            <li><small className={styles.blue}></small></li>
                                                            <li><small className={styles.red}></small></li>
                                                        </ul>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.list_rightMarketplace_main}>
                                    <div className={`${styles.list_right} ${styles.list_rightMarketplace}`}>
                                        <div className={styles.card_top}>
                                            <div className={styles.card_topLeft}>
                                                <img src={require('../../../assets/images/change-active.svg').default}
                                                    alt=""
                                                />
                                                <img src={require('../../../assets/images/bidding-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.card_topCenter}>
                                                <p>1h 02m 32s<br></br><span>43bids</span></p>
                                            </div>
                                            <div className={styles.card_topRight}>
                                                <img src={require('../../../assets/images/private-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.card_price_head}>
                                            <p className={styles.customer_bid}>Сustomer bid</p>
                                            <p className={styles.fixed_bid}>Fixed Price</p>
                                        </div>
                                        <div className={styles.card_price_head}>
                                            <p className={styles.customer_price}>$1098</p>
                                            <p className={styles.fixed_price}>$1123</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`mb-4 ${styles.list_categoryMain} ${styles.list_categoryMain_marketplace}`}>
                                <div className={`${styles.list_left} ${styles.list_leftMarketplace}`}>
                                    <div className={styles.list_box1}>
                                        <img src={require('../../../assets/images/Marketplace_List_image1.png')}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.left_box2}>
                                        <img src={require('../../../assets/images/Marketplace_List_image2.png')}
                                            alt=""
                                        />
                                        <img src={require('../../../assets/images/Marketplace_List_image2.png')}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={`${styles.list_center} ${styles.Bookinglist_center}`}>
                                    <div className={styles.list_text}>
                                        <p className={styles.title}>Running track EnergyFIT 815</p>
                                        <div className={`${styles.card_marketHover} ${styles.cardList_marketHover}`}>
                                            <div className={styles.card_price_raring}>
                                                <div className={styles.rating}>
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt=""
                                                    />
                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <p className={styles.fixed_bid}>2 Book Ratings</p>
                                            </div>
                                            <div className={styles.card_specification}>
                                                <p><span>Condition</span>New</p>
                                                <p><span>Size</span>Standard</p>
                                                <p><span>Color</span>
                                                    <span className={styles.color_select}>
                                                        <ul>
                                                            <li><small className={styles.green}></small></li>
                                                            <li><small className={styles.blue}></small></li>
                                                            <li><small className={styles.red}></small></li>
                                                        </ul>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.list_rightMarketplace_main}>
                                    <div className={`${styles.list_right} ${styles.list_rightMarketplace}`}>
                                        <div className={styles.card_top}>
                                            <div className={styles.card_topLeft}>
                                                <img src={require('../../../assets/images/change-active.svg').default}
                                                    alt=""
                                                />
                                                <img src={require('../../../assets/images/bidding-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.card_topCenter}>
                                                <p>1h 02m 32s<br></br><span>43bids</span></p>
                                            </div>
                                            <div className={styles.card_topRight}>
                                                <img src={require('../../../assets/images/private-active.svg').default}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.card_price_head}>
                                            <p className={styles.customer_bid}>Сustomer bid</p>
                                            <p className={styles.fixed_bid}>Fixed Price</p>
                                        </div>
                                        <div className={styles.card_price_head}>
                                            <p className={styles.customer_price}>$1098</p>
                                            <p className={styles.fixed_price}>$1123</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </section>
            {/* item popular goods end */}


            {/* filter modal */}
            {showFilter && <section className={styles.filter_modalWrap}>
                <div className={styles.filter_modalmain}>
                    <div className={styles.filter_modalTitle}>
                        <h2>Filter</h2>
                        <img src={require('../../../assets/images/close.svg').default}
                            alt="" className={styles.close}
                            onClick={() => { setShowFilter(false) }} />
                    </div>
                    <div className={styles.filter_modalSections}>
                        <div className={styles.section_1}>
                            <h2>Section</h2>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>Calvin Klein
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>Casio
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>Daniel Clein
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>Orient
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>Q&Q
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>Royal London
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>SWATCH
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>Timex
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>Tissot
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                        </div>
                        <div className={styles.meterial_section}>
                            <h2>Material</h2>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>Metall
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>Plastic
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                            <h2>Type</h2>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>For Man
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>For Woman
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                            <h2>Type</h2>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>For Man
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                            <div className={styles.checks}>
                                <label className={styles.container_check}>For Woman
                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <p>309</p>
                            </div>
                        </div>
                        <div className={styles.price_section}>
                            <h2>Price</h2>
                            <div className={styles.range_slider}>
                                <div className={styles.range_sliderText}>
                                    <p>From:</p>
                                    <span>{minValue}</span>
                                </div>
                                <div className={styles.range_sliderText}>
                                    <p>To:</p>
                                    <span>{maxValue}</span>
                                </div>
                            </div>
                            <MultiRangeSlider
                                onInput={(e: any) => {
                                    setMinValue(e.minValue);
                                    setMaxValue(e.maxValue);
                                }}
                                onChange={(e: any) => { }}
                            ></MultiRangeSlider>

                            <div className={styles.price_select}>
                                <label>Location</label>
                                <select>
                                    <option>Ukraine</option>
                                </select>
                            </div>
                            <div className={styles.price_select}>
                                <label>Section</label>
                                <select>
                                    <option>Section</option>
                                </select>
                            </div>
                            <div className={styles.price_select}>
                                <label>Section</label>
                                <select>
                                    <option>Section</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.section_2}>
                            <h2>Section</h2>
                            <div className={styles.section_togle}>
                                <div className={styles.section_togleRow}>
                                    <div className={styles.section_togleRow_text}>
                                        {array.map((options: any, index: any) => (
                                            <ul>
                                                <li>
                                                    <label key={options}>{options}
                                                        <div className={styles.section_togleRow_img} onClick={() => handleClicks(options, index)}>
                                                            {toggle.includes(index) ? <img src={require('../../../assets/images/switch-off.svg').default}
                                                                alt=""
                                                                className={styles.active_billing}
                                                            /> :
                                                                <img src={require('../../../assets/images/switch-on.svg').default}
                                                                    alt=""
                                                                    className={styles.active_billing}
                                                                />}
                                                        </div>
                                                    </label>
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.filter_modalbtn}>
                        <button className={styles.btn}>Apply Changes</button>
                    </div>
                </div>
            </section>}
            {/* filter modal end */}

            {/* about box */}
            {/* <section className={`${styles.threeBox_wrap} ${styles.box_footer}`}>
                <div className='container-fluid'>
                    <div className={`row mt-4 ${styles.footer_row}`}>
                        <div className="col">
                            <div>
                                <div className={styles.aboutBox_title}>
                                    <img src={require('../../../logo.svg').default}
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
                                <p>Philosophy</p>
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
        </main >
    )
}

export default Marketplace