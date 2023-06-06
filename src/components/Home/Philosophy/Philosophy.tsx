import styles from '.././Philosophy/Philosophy.module.css';
import { CgMenuGridR } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter';

function Philosophy() {
    let navigate: NavigateFunction = useNavigate();
    const [home, setHome] = useState<boolean>(false);
    const [marketplace, setMarketplace] = useState<boolean>(false);
    const [booking, setBooking] = useState<boolean>(false);
    const [deals, setDeals] = useState<boolean>(false);
    const [readMore, setReadMore] = useState<boolean>(false);
    const [viewAll, setViewAll] = useState<boolean>(false);
    const [popupVisible, setPopupVisible] = useState<boolean>(false);
    const [p1, setP1] = useState<boolean>(true);
    const [p2, setP2] = useState<boolean>(false);
    const [p3, setP3] = useState<boolean>(false);
    const [p4, setP4] = useState<boolean>(false);
    const [p5, setP5] = useState<boolean>(false);
    const [p6, setP6] = useState<boolean>(false);
    const [catalogBtn, setCatalogBtn] = useState<boolean>(false);

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
        }
        if (value === 'booking') {
            setHome(false)
            setMarketplace(false)
            setBooking(true)
            setDeals(false)
        }
        if (value === 'deals') {
            setHome(false)
            setMarketplace(false)
            setBooking(false)
            setDeals(true)
        }

    }
    const handleClickP = (value: any) => {
        if (value === 'p1') {
            setP1(true)
            setP2(false)
            setP3(false)
            setP4(false)
            setP5(false)
            setP6(false)
        }
        if (value === 'p2') {
            setP1(false)
            setP2(true)
            setP3(false)
            setP4(false)
            setP5(false)
            setP6(false)
        }
        if (value === 'p3') {
            setP1(false)
            setP2(false)
            setP3(true)
            setP4(false)
            setP5(false)
            setP6(false)
        }
        if (value === 'p4') {
            setP1(false)
            setP2(false)
            setP3(false)
            setP4(true)
            setP5(false)
            setP6(false)
        }
        if (value === 'p5') {
            setP1(false)
            setP2(false)
            setP3(false)
            setP4(false)
            setP5(true)
            setP6(false)
            setReadMore(false)
        }
        if (value === 'p6') {
            setP1(false)
            setP2(false)
            setP3(false)
            setP4(false)
            setP5(false)
            setP6(true)
            setViewAll(false)
        }
    }

    const handleCatalogBtn = () => {
        setCatalogBtn(!catalogBtn)
    }

    const handleReadMore = () => {
        setReadMore(!readMore)
    }

    const handleViewAll = () => {
        setViewAll(!viewAll)
    }

    const handlePopup = () => {
        setPopupVisible(true)
    }
    const handleGotIt = () => {
        setPopupVisible(false)
    }

    return (
        <main>
            {/* header */}
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
            {/* header end */}

            {/* sub-header */}
            <section className={`${styles.header} d-xl-block d-lg-block d-md-block d-sm-none d-none`}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 col-12'>
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
                                    <button className={styles.btn}>
                                        <CiSearch />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12 col-12'>
                            <div className={styles.header_right2}>
                                <div className={styles.header_rightLink}>
                                    <a href='javascript:void(0)' className={home ? styles.navlink : styles.navlink_active}
                                        onClick={() => handleClick('home')}>Home</a>
                                    <a href='javascript:void(0)' className={marketplace ? styles.navlink : styles.navlink_active}
                                        onClick={() => handleClick('marketplace')}>Marketplace</a>
                                    <a href='javascript:void(0)' className={booking ? styles.navlink : styles.navlink_active}
                                        onClick={() => handleClick('booking')}>Booking</a>
                                    <a href='javascript:void(0)' className={deals ? styles.navlink : styles.navlink_active}
                                        onClick={() => handleClick('deals')}>Deals</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* sub-header end */}

            {/* tab */}
            <section className={styles.tab}>
                <div className='row'>
                    <div className='col-md-3 col-sm-12 col-12'>
                        <div className={styles.left_tab}>
                            <div className={styles.left_tabList}>
                                <p className={p1 ? styles.left_tabListP : styles.left_tabListP_active}
                                    onClick={() => handleClickP('p1')}>
                                    <span>
                                        {p1 ? <img src={require('../../../assets/images/subpoint-active.svg').default}
                                            alt=""
                                            className={styles.active}
                                        /> :
                                            <img src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                alt=""
                                                className={styles.active}
                                            />}
                                    </span>
                                    Philosophy
                                </p>
                                <p className={p2 ? styles.left_tabListP : styles.left_tabListP_active}
                                    onClick={() => handleClickP('p2')}>
                                    <span>
                                        {p2 ? <img src={require('../../../assets/images/subpoint-active.svg').default}
                                            alt=""
                                            className={styles.active}
                                        /> :
                                            <img src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                alt=""
                                                className={styles.active}
                                            />}
                                    </span>
                                    Terms of use & Privacy policy
                                </p>
                                <p className={p3 ? styles.left_tabListP : styles.left_tabListP_active}
                                    onClick={() => handleClickP('p3')}>
                                    <span>
                                        {p3 ? <img src={require('../../../assets/images/subpoint-active.svg').default}
                                            alt=""
                                            className={styles.active}
                                        /> :
                                            <img src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                alt=""
                                                className={styles.active}
                                            />}
                                    </span>
                                    Solutions
                                </p>
                                <p className={p4 ? styles.left_tabListP : styles.left_tabListP_active}
                                    onClick={() => handleClickP('p4')}>
                                    <span>
                                        {p4 ? <img src={require('../../../assets/images/subpoint-active.svg').default}
                                            alt=""
                                            className={styles.active}
                                        /> :
                                            <img src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                alt=""
                                                className={styles.active}
                                            />}
                                    </span>
                                    Blog
                                </p>
                                <p className={p5 ? styles.left_tabListP : styles.left_tabListP_active}
                                    onClick={() => handleClickP('p5')}>
                                    <span>
                                        {p5 ? <img src={require('../../../assets/images/subpoint-active.svg').default}
                                            alt=""
                                            className={styles.active}
                                        /> :
                                            <img src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                alt=""
                                                className={styles.active}
                                            />}
                                    </span>
                                    Help Center
                                </p>
                                <p className={p6 ? styles.left_tabListP : styles.left_tabListP_active}
                                    onClick={() => handleClickP('p6')}>
                                    <span>
                                        {p6 ? <img src={require('../../../assets/images/subpoint-active.svg').default}
                                            alt=""
                                            className={styles.active}
                                        /> :
                                            <img src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                alt=""
                                                className={styles.active}
                                            />}
                                    </span>
                                    Contact Us
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12 col-12">
                        <div className={`card ${styles.tab_card}`}>
                            <img src={require('../../../assets/images/dots.svg').default}
                                alt=""
                                className={styles.dots1}
                            />
                            <img src={require('../../../assets/images/dots.svg').default}
                                alt=""
                                className={styles.dots2}
                            />

                            <div className={styles.tab_body}>
                                {p1 && <div className={styles.tab_content}>
                                    <h2>Philosophy</h2>
                                    <div className={styles.p_main}>
                                        <p>
                                            Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                        </p>
                                        <p>
                                            Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                        </p>
                                        <p>
                                            Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                        </p>
                                        <p>
                                            Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                        </p>
                                    </div>
                                </div>}
                                {p2 && <div className={styles.tab_content}>
                                    <h2>Terms of use & Privacy policy</h2>
                                    <div className={styles.p_main}>
                                        <h2>
                                            Item
                                        </h2>
                                        <p>
                                            Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                        </p>
                                        <h2>
                                            Item
                                        </h2>
                                        <p>
                                            Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                        </p>
                                        <h2>
                                            Item
                                        </h2>
                                        <p>
                                            Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                        </p>
                                    </div>
                                </div>}
                                {p3 && <div className={styles.tab_content}>
                                    <h2>Solutions</h2>
                                    <div className={styles.p_main}>
                                        <p>
                                            Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                        </p>
                                        <p>
                                            Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                        </p>
                                        <p>
                                            Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                        </p>
                                        <p>
                                            Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                        </p>
                                    </div>
                                </div>}
                                {p4 && !readMore && <div className={styles.tab_content}>
                                    <h2>Blog</h2>
                                    <div className='row'>
                                        <div className='col-md-4 col-sm-12 col-12'>
                                            <div className={styles.blog_image}>
                                                <img src={require('../../../assets/images/Blog_img.png')}
                                                    alt=""

                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-8 col-sm-12 col-12'>
                                            <div className={styles.blog_text}>
                                                <p><span>Yes but if you Pixel perfect screen</span>
                                                    Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the dev About login need sign up you can click on
                                                    button on screen not topbar. Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the dev About login need sign up you can click on button
                                                    on screen not topbar. Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the de
                                                </p>
                                                <a href='javascript:void(0)' onClick={() => handleReadMore()}>Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='row'>
                                        <div className='col-md-4 col-sm-12 col-12'>
                                            <div className={styles.blog_image}>
                                                <img src={require('../../../assets/images/Blog_img.png')}
                                                    alt=""

                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-8 col-sm-12 col-12'>
                                            <div className={styles.blog_text}>
                                                <p><span>Yes but if you Pixel perfect screen</span>
                                                    Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the dev About login need sign up you can click on
                                                    button on screen not topbar. Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the dev About login need sign up you can click on button
                                                    on screen not topbar. Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the de
                                                </p>
                                                <a href='javascript:void(0)' onClick={() => handleReadMore()}>Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='row'>
                                        <div className='col-md-4 col-sm-12 col-12'>
                                            <div className={styles.blog_image}>
                                                <img src={require('../../../assets/images/Blog_img.png')}
                                                    alt=""

                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-8 col-sm-12 col-12'>
                                            <div className={styles.blog_text}>
                                                <p><span>Yes but if you Pixel perfect screen</span>
                                                    Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the dev About login need sign up you can click on
                                                    button on screen not topbar. Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the dev About login need sign up you can click on button
                                                    on screen not topbar. Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the de
                                                </p>
                                                <a href='javascript:void(0)' onClick={() => handleReadMore()}>Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='row'>
                                        <div className='col-md-4 col-sm-12 col-12'>
                                            <div className={styles.blog_image}>
                                                <img src={require('../../../assets/images/Blog_img.png')}
                                                    alt=""

                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-8 col-sm-12 col-12'>
                                            <div className={styles.blog_text}>
                                                <p><span>Yes but if you Pixel perfect screen</span>
                                                    Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the dev About login need sign up you can click on
                                                    button on screen not topbar. Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the dev About login need sign up you can click on button
                                                    on screen not topbar. Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the de
                                                </p>
                                                <a href='javascript:void(0)' onClick={() => handleReadMore()}>Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='row'>
                                        <div className='col-md-4 col-sm-12 col-12'>
                                            <div className={styles.blog_image}>
                                                <img src={require('../../../assets/images/Blog_img.png')}
                                                    alt=""

                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-8 col-sm-12 col-12'>
                                            <div className={styles.blog_text}>
                                                <p><span>Yes but if you Pixel perfect screen</span>
                                                    Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the dev About login need sign up you can click on
                                                    button on screen not topbar. Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the dev About login need sign up you can click on button
                                                    on screen not topbar. Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the de
                                                </p>
                                                <a href='javascript:void(0)' onClick={() => handleReadMore()}>Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='row'>
                                        <div className='col-md-4 col-sm-12 col-12'>
                                            <div className={styles.blog_image}>
                                                <img src={require('../../../assets/images/Blog_img.png')}
                                                    alt=""

                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-8 col-sm-12 col-12'>
                                            <div className={styles.blog_text}>
                                                <p><span>Yes but if you Pixel perfect screen</span>
                                                    Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the dev About login need sign up you can click on
                                                    button on screen not topbar. Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the dev About login need sign up you can click on button
                                                    on screen not topbar. Yes but if you Pixel perfect screen.
                                                    So it’s need a example how looks like it’s buy know not available.
                                                    So it’s Easyier for the de
                                                </p>
                                                <a href='javascript:void(0)' onClick={() => handleReadMore()}>Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                                {/* Blog read more content */}
                                {readMore && <div className={styles.tab_content}>
                                    <p className={styles.bread_crumb}>
                                        <a href='javascript:void(0)'>Blog {'>'}</a>&nbsp;
                                        Yes but if you Pixel perfect screen
                                    </p>
                                    <h2 className='my-4'>Yes but if you Pixel perfect screen</h2>

                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className={styles.blog_detail}>
                                                <div className={styles.blog_detail_img}>
                                                    <img src={require('../../../assets/images/Blog_img_1.png')}
                                                        alt="" />
                                                </div>
                                                <div className={styles.p_main}>
                                                    <p>
                                                        Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                                    </p>
                                                    <p>
                                                        Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                                    </p>
                                                    <p>
                                                        Yes but if you Pixel perfect screen.
                                                    </p>
                                                    <p>
                                                        Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                                {/* Blog read more content end*/}

                                {p5 && !viewAll && <div className={styles.tab_content}>
                                    <div className={styles.help_heading}>
                                        <h2>
                                            Hello, how we can help you
                                        </h2>
                                        <h3>
                                            Search for a question, or choose topic
                                        </h3>
                                        <input type='text' placeholder='Search for a topic or question' />
                                    </div>
                                    <div className='row mt-5'>
                                        <div className="col">
                                            <div className={styles.box_icon}>
                                                <div className={styles.circle_img}>
                                                    <img src={require('../../../assets/images/subpoint-active.svg').default}
                                                        alt=""
                                                        className={styles.icon_img}
                                                    />
                                                    <span>Icon</span>
                                                </div>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?</p>
                                                <p>Is it possible to pay by card</p>
                                                <p>How can I pay for my order?</p>
                                                <a href='javascript:void(0)' onClick={() => handleViewAll()}>View all</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className={styles.box_icon}>
                                                <div className={styles.circle_img}>
                                                    <img src={require('../../../assets/images/subpoint-active.svg').default}
                                                        alt=""
                                                        className={styles.icon_img}
                                                    />
                                                    <span>Icon</span>
                                                </div>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?</p>
                                                <p>Is it possible to pay by card</p>
                                                <p>How can I pay for my order?</p>
                                                <a href='javascript:void(0)' onClick={() => handleViewAll()}>View all</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className={styles.box_icon}>
                                                <div className={styles.circle_img}>
                                                    <img src={require('../../../assets/images/subpoint-active.svg').default}
                                                        alt=""
                                                        className={styles.icon_img}
                                                    />
                                                    <span>Icon</span>
                                                </div>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?</p>
                                                <p>Is it possible to pay by card</p>
                                                <p>How can I pay for my order?</p>
                                                <a href='javascript:void(0)' onClick={() => handleViewAll()}>View all</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className={styles.box_icon}>
                                                <div className={styles.circle_img}>
                                                    <img src={require('../../../assets/images/subpoint-active.svg').default}
                                                        alt=""
                                                        className={styles.icon_img}
                                                    />
                                                    <span>Icon</span>
                                                </div>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?</p>
                                                <p>Is it possible to pay by card</p>
                                                <p>How can I pay for my order?</p>
                                                <a href='javascript:void(0)' onClick={() => handleViewAll()}>View all</a>
                                            </div>
                                        </div>

                                    </div>
                                    <hr className='my-5' />
                                    <div className='row mt-5'>
                                        <div className="col">
                                            <div className={styles.box_icon}>
                                                <div className={styles.circle_img}>
                                                    <img src={require('../../../assets/images/subpoint-active.svg').default}
                                                        alt=""
                                                        className={styles.icon_img}
                                                    />
                                                    <span>Icon</span>
                                                </div>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?</p>
                                                <p>Is it possible to pay by card</p>
                                                <p>How can I pay for my order?</p>
                                                <a href='javascript:void(0)' onClick={() => handleViewAll()}>View all</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className={styles.box_icon}>
                                                <div className={styles.circle_img}>
                                                    <img src={require('../../../assets/images/subpoint-active.svg').default}
                                                        alt=""
                                                        className={styles.icon_img}
                                                    />
                                                    <span>Icon</span>
                                                </div>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?</p>
                                                <p>Is it possible to pay by card</p>
                                                <p>How can I pay for my order?</p>
                                                <a href='javascript:void(0)' onClick={() => handleViewAll()}>View all</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className={styles.box_icon}>
                                                <div className={styles.circle_img}>
                                                    <img src={require('../../../assets/images/subpoint-active.svg').default}
                                                        alt=""
                                                        className={styles.icon_img}
                                                    />
                                                    <span>Icon</span>
                                                </div>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?</p>
                                                <p>Is it possible to pay by card</p>
                                                <p>How can I pay for my order?</p>
                                                <a href='javascript:void(0)' onClick={() => handleViewAll()}>View all</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className={styles.box_icon}>
                                                <div className={styles.circle_img}>
                                                    <img src={require('../../../assets/images/subpoint-active.svg').default}
                                                        alt=""
                                                        className={styles.icon_img}
                                                    />
                                                    <span>Icon</span>
                                                </div>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?</p>
                                                <p>Is it possible to pay by card</p>
                                                <p>How can I pay for my order?</p>
                                                <a href='javascript:void(0)' onClick={() => handleViewAll()}>View all</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>}

                                {/* Help center view all */}
                                {viewAll && <div className={styles.tab_content}>
                                    <p className={styles.bread_crumb}>
                                        <a href='javascript:void(0)'>Help Center {'>'}</a>&nbsp;
                                        Lorem Ipsum
                                    </p>
                                    <h2 className='my-4'>Lorem Ipsum</h2>
                                    <div className={styles.help_heading}>
                                        <input type='text' placeholder='Search for a topic or question' />
                                    </div>
                                    <div className={styles.accordion}>
                                        <div id="accordion">

                                            <div className={`card ${styles.accordion_card}`}>
                                                <div className={`card-header ${styles.accordion_header}`}>
                                                    <a className={`card-link accordion-title ${styles.accordion_title}`} data-toggle="collapse" href="#collapseOne">
                                                        Yes but if you Pixel perfect screen.
                                                    </a>
                                                </div>
                                                <div id="collapseOne" className={`collapse show ${styles.accordion_colapse}`} data-parent="#accordion">
                                                    <div className={`card-body ${styles.accordion_body}`}>
                                                        Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`card ${styles.accordion_card}`}>
                                                <div className={`card-header ${styles.accordion_header}`}>
                                                    <a className={`collapsed card-link accordion-title ${styles.accordion_title}`} data-toggle="collapse" href="#collapseTwo">
                                                        Yes but if you Pixel perfect screen.
                                                    </a>
                                                </div>
                                                <div id="collapseTwo" className={`collapse ${styles.accordion_colapse}`} data-parent="#accordion">
                                                    <div className={`card-body ${styles.accordion_body}`}>
                                                        Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`card ${styles.accordion_card}`}>
                                                <div className={`card-header ${styles.accordion_header}`}>
                                                    <a className={`collapsed card-link accordion-title ${styles.accordion_title}`} data-toggle="collapse" href="#collapseThree">
                                                        Yes but if you Pixel perfect screen.
                                                    </a>
                                                </div>
                                                <div id="collapseThree" className={`collapse ${styles.accordion_colapse}`} data-parent="#accordion">
                                                    <div className={`card-body ${styles.accordion_body}`}>
                                                        Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`card ${styles.accordion_card}`}>
                                                <div className={`card-header ${styles.accordion_header}`}>
                                                    <a className={`collapsed card-link accordion-title ${styles.accordion_title}`} data-toggle="collapse" href="#collapseFour">
                                                        Yes but if you Pixel perfect screen.
                                                    </a>
                                                </div>
                                                <div id="collapseFour" className={`collapse ${styles.accordion_colapse}`} data-parent="#accordion">
                                                    <div className={`card-body ${styles.accordion_body}`}>
                                                        Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`card ${styles.accordion_card}`}>
                                                <div className={`card-header ${styles.accordion_header}`}>
                                                    <a className={`collapsed card-link accordion-title ${styles.accordion_title}`} data-toggle="collapse" href="#collapseFive">
                                                        Yes but if you Pixel perfect screen.
                                                    </a>
                                                </div>
                                                <div id="collapseFive" className={`collapse ${styles.accordion_colapse}`} data-parent="#accordion">
                                                    <div className={`card-body ${styles.accordion_body}`}>
                                                        Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need sign up you can click on button on screen not topbar. Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the de
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                                {/* Help center view all end */}

                                {/* Contact Us */}
                                {p6 && <div className={styles.tab_content}>
                                    <div className='row'>
                                        <div className='col-md-7 col-sm-12 col-12'>
                                            <div className={styles.contact_left}>
                                                <h2 className='my-4'>Contact Us</h2>
                                                <p>If you have any questions, suggestions or wishes, maybe you found a problem, write to us, and we will contact you soon.</p>
                                                <hr className='mt-4 mb-2' />
                                                <div className={styles.contact_form}>
                                                    <div className='row'>
                                                        <div className='col-md-6 mt-3'>
                                                            <div className={styles.form_group}>
                                                                <label>Name</label>
                                                                <input type="text" className="form-control" placeholder="Jonathan" id="name" />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6 mt-3'>
                                                            <div className={styles.form_group}>
                                                                <label>Email</label>
                                                                <input type="email" className="form-control" placeholder="xyfdsz@gmail.com" id="email" />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-12 mt-3'>
                                                            <div className={styles.form_group}>
                                                                <label>Message</label>
                                                                <textarea className="form-control" id="comment" placeholder="The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from the rotating sprayer heads is left on the decals for too long"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-12 mt-3'>
                                                            <div className={`text-center ${styles.form_group}`}>
                                                                <button className={styles.form_btn} onClick={() => handlePopup()}>Send</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-md-5 col-sm-12 col-12'>
                                            <div className={styles.contact_right}>
                                                <div className={styles.contact_map}>
                                                    <img src={require('../../../assets/images/Map.png')}
                                                        alt=""

                                                    />
                                                </div>
                                                <div className={styles.contact_address}>
                                                    <p><small>Address</small><br />Rivne, Linerty screen 22/15, Lindon</p>
                                                    <p><small>Phone</small><br />+894 557 445 335</p>
                                                    <p><small>Email</small><br />xyz@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}

                                {popupVisible &&
                                    (<div className={styles.form_popup}>
                                        <div className={styles.form_popup_sub}>
                                            <img src={require('../../../assets/images/dots.svg').default}
                                                alt=""
                                                className={styles.dots1_popup}
                                            />

                                            <div className={styles.formBody_popup}>

                                                <h1 className={styles.h1_popup}>Your message <br /> was successfully placed.</h1>
                                                <button className={styles.popup_btn} onClick={() => handleGotIt()}>Got it</button>
                                            </div>
                                            <img src={require('../../../assets/images/dots.svg').default}
                                                alt=""
                                                className={styles.dots2_popup}
                                            />
                                        </div>
                                    </div>
                                    )}

                                {/* Contact Us end */}
                            </div>

                            <img src={require('../../../assets/images/dots.svg').default}
                                alt=""
                                className={styles.dots3}
                            />
                            <img src={require('../../../assets/images/dots.svg').default}
                                alt=""
                                className={styles.dots4}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* tab end */}

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

        </main>
    );
}

export default Philosophy;
