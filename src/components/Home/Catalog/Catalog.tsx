import styles from '.././Catalog/Catalog.module.css';
import { CgMenuGridR } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter';

function Catalog() {
    let alphabet: any;
    let navigate: NavigateFunction = useNavigate();
    const [home, setHome] = useState<boolean>(false);
    const [marketplace, setMarketplace] = useState<boolean>(true);
    const [booking, setBooking] = useState<boolean>(false);
    const [deals, setDeals] = useState<boolean>(false);
    const [tab1, setTab1] = useState<boolean>(false);
    const [tab2, setTab2] = useState<boolean>(true);
    const [tab3, setTab3] = useState<boolean>(false);
    const [tab4, setTab4] = useState<boolean>(false);
    const [categories, setCategories] = useState<boolean>(true);
    const [abc, setABC] = useState<boolean>(false);
    const [xyz, setXyz] = useState<boolean>(false);
    const [activeOptions, setActiveOptions] = useState<any>(['#','A','B']);

    const alphabets = () => {
        const alphabetsArray = [];
        for (var i = 65; i <= 90; i++) {
            const options = {
                key: String.fromCharCode(i),
                selected: false
            }
            alphabetsArray.push(options);
        }
        alphabetsArray.unshift({
            key: "#",
            selected: false
        });
        return alphabetsArray
    }

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

    const handleTabs = (value: any) => {
        if (value === 'all') {
            setTab1(true)
            setTab2(false)
            setTab3(false)
            setTab4(false)
        }
        if (value === 'marketplace') {
            setTab1(false)
            setTab2(true)
            setTab3(false)
            setTab4(false)
        }
        if (value === 'booking') {
            setHome(false)
            setTab2(false)
            setTab3(true)
            setTab4(false)
        }
        if (value === 'deals') {
            setHome(false)
            setTab2(false)
            setTab3(false)
            setTab4(true)
        }
    }

    const handleButtonClick = (value: any) => {
        if (value === 'Categories') {
            setABC(false)
            setCategories(true)
        }
        if (value === 'ABC') {
            setABC(true)
            setCategories(false)
        }
    }

    const handleAlphabets = (value: any,i: any) => {
        let activeTempOptions = activeOptions;
        const index = activeTempOptions.indexOf(value.key);
        if (index > -1) { // only splice array when item is found
            activeTempOptions.splice(index, 1); // 2nd parameter means remove one item only
        } else{
            activeTempOptions.push(value.key);
        }
        setActiveOptions(activeTempOptions)   
        console.log(activeOptions);
              
        setXyz(!xyz);
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
                                    <button className={styles.btn}>
                                        <CgMenuGridR />Catalog of Goods
                                    </button>

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

            <section className={styles.catalog_header}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-6 col-12'>
                            <div className={styles.catalog_headernav}>
                                <a onClick={() => handleTabs('all')} className={tab1 ? styles.catalog_headerLink_active : styles.catalog_headerLink}>All Categories</a>
                                <a onClick={() => handleTabs('marketplace')} className={tab2 ? styles.catalog_headerLink_active : styles.catalog_headerLink}>Marketplace</a>
                                <a onClick={() => handleTabs('booking')} className={tab3 ? styles.catalog_headerLink_active : styles.catalog_headerLink}>Booking</a>
                                <a onClick={() => handleTabs('deals')} className={tab4 ? styles.catalog_headerLink_active : styles.catalog_headerLink}>Deals</a>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 col-12'>
                            <div className={styles.catalog_headerbtn}>
                                <button className={categories ? styles.catalog_btn_active : styles.catalog_btn} onClick={() => handleButtonClick('Categories')}>Categories</button>
                                <button className={abc ? styles.catalog_btn_active : styles.catalog_btn} onClick={() => handleButtonClick('ABC')}>ABC</button>
                            </div>
                        </div>
                    </div>
                    {categories && <div className='row'>
                        <div className='col-md-3 col-sm-4 col-12 mt-4'>
                            <div className={styles.catalog_catagory_leftBox}>
                                <img src={require('../../../assets/images/Bulb_catalog.svg').default}
                                    alt=""
                                    className={styles.leftBox_icon}
                                />
                                <span>Electronics</span>
                            </div>
                        </div>
                        <div className='col-md-9 col-sm-8 col-12'>
                            <div className={styles.catalog_catagory_rightBox}>
                                <div className='row mt-4'>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-4' >
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}

                </div>
            </section>

            {abc && <section className={styles.filterWrap}>
                <div className={styles.filter_rowMain}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className={styles.filter_row}>
                                    {alphabets().map((options, index) => (
                                        <a className={(activeOptions.indexOf(options.key) > -1) ? styles.row_alphabets_active : styles.row_alphabets}
                                            onClick={() => handleAlphabets(options,index)} key={options.key}>
                                            {options.key}
                                        </a>
                                    ))}                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className={styles.contant_rowMain}>
                    <div className='container-fluid'>
                       
                       {activeOptions.includes('#') && <div>
                            <div className='row'>
                                <div className='col'>
                                    <div className={styles.contant_titleRow}>
                                        <h2>#</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Music centers</p>
                                        <p>Home theaters</p>
                                        <p>Hi-Fi acoustics</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Music centers</p>
                                        <p>Home theaters</p>
                                        <p>Hi-Fi acoustics</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Universal Mobile Batteries</p>
                                        <p>Memory cards</p>
                                        <p>Mobile phone cases</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Men’s wrist watch</p>
                                        <p>Women’s watches</p>
                                        <p>Children’s wrist watches</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Smart tv</p>
                                        <p>4K Ultra HD</p>
                                        <p>Curved</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Smart tv</p>
                                        <p>4K Ultra HD</p>
                                        <p>Curved</p>
                                    </div>
                                </div>
                            </div>
                        </div> }

                        {activeOptions.includes('A') && <div>
                            <div className='row'>
                                <div className='col'>
                                    <div className={styles.contant_titleRow}>
                                        <h2>A{alphabet}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Music centers</p>
                                        <p>Home theaters</p>
                                        <p>Hi-Fi acoustics</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Music centers</p>
                                        <p>Home theaters</p>
                                        <p>Hi-Fi acoustics</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Universal Mobile Batteries</p>
                                        <p>Memory cards</p>
                                        <p>Mobile phone cases</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Men’s wrist watch</p>
                                        <p>Women’s watches</p>
                                        <p>Children’s wrist watches</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Smart tv</p>
                                        <p>4K Ultra HD</p>
                                        <p>Curved</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Smart tv</p>
                                        <p>4K Ultra HD</p>
                                        <p>Curved</p>
                                    </div>
                                </div>
                            </div>
                        </div> }

                        {activeOptions.includes('B') &&  <div>
                            <div className='row'>
                                <div className='col'>
                                    <div className={styles.contant_titleRow}>
                                        <h2>B</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Xbox</p>
                                        <p>Sony Play Station</p>
                                        <p>Nintendo Switch</p>
                                        <p>Joustichs</p>
                                        <p>Xbox</p>
                                        <p>Sony Play Station</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Xbox</p>
                                        <p>Sony Play Station</p>
                                        <p>Nintendo Switch</p>
                                        <p>Joustichs</p>
                                        <p>Xbox</p>
                                        <p>Sony Play Station</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Nicon</p>
                                        <p>Canon</p>
                                        <p>Olimpus</p>
                                        <p>SD Cards</p>
                                        <p>Accessories</p>
                                        <p>SD Cards</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Apple</p>
                                        <p>Lenovo</p>
                                        <p>Dell</p>
                                        <p>Samsung</p>
                                        <p>Asus</p>
                                        <p>Samsung</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Children track</p>
                                        <p>SPY GPS</p>
                                        <p>GPS Tracker</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.contant_Row}>
                                        <p>Apple</p>
                                        <p>Lenovo</p>
                                        <p>Dell</p>
                                        <p>Samsung</p>
                                        <p>Asus</p>
                                        <p>Samsung</p>
                                    </div>
                                </div>
                            </div>
                        </div> }
                    </div>
                </div>
            </section>}

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

export default Catalog;
