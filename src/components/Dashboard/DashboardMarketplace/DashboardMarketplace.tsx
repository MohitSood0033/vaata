import React, { useState } from 'react'
import styles from './DashboardMarketplace.module.css'
import CommonDashHeader from 'components/Shared/CommonDashHeader/CommonDashHeader'
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter'
import { Editor } from "@tinymce/tinymce-react";
import ReactApexChart from 'react-apexcharts';

const DashboardMarketplace = () => {
    const [tabValue, setTabValue] = useState<any>('favourites');
    const [createCoupon, setCreateCoupon] = useState<boolean>(false);
    const [array] = useState<any>(["Push on Home ($10)", "Push on Searching List ($10)", "Push on Marketplace ($10)",
        "Push on Near by Me ($10)", "Push on Category Promo on Top ($10)"]);
    const [toggle] = useState<any>([]);
    const [prop, setProp] = useState<boolean>(false);
    const [shippingVal, setShippingVal] = useState<boolean>(false);
    const [contactMess, setContactMess] = useState<boolean>(false);
    const [contactQues, setContactQues] = useState<boolean>(false);
    const [arrow1, setArrow1] = useState<boolean>(false);
    const [arrow2, setArrow2] = useState<boolean>(false);
    const [arrow3, setArrow3] = useState<boolean>(false);
    const [arrow4, setArrow4] = useState<boolean>(false);
    const [arrow5, setArrow5] = useState<boolean>(false);
    const [arrow6, setArrow6] = useState<boolean>(false);
    const [popup, setPopup] = useState<boolean>(false);
    const [popupTab, setPopupTab] = useState<any>('card');

    const [rewardSeries] = useState<any>([70])

    const [rewardOptions] = useState<any>({
        chart: {
            type: 'radialBar',
            sparkline: {
                enabled: true
            }
        },
        colors: ['#FB3B71'],
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                track: {
                    background: "#c0c0c0",
                    strokeWidth: '97%',
                    margin: 20,
                    dropShadow: {
                        enabled: false,
                    }
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: '#c0c0c0',
                        show: true
                    },
                    value: {
                        offsetY: 80,
                        fontSize: '22px',
                        color: '#121212',
                    },
                }
            }
        },
        stroke: {
            lineCap: "round",
        },
        labels: [['Level 1', '70 / 100']]
    })

    const [donateSeries] = useState<any>([{
        data: [{
            x: 'January',
            y: 20
        },
        {
            x: 'Feburary',
            y: 700
        },
        {
            x: 'March',
            y: 1500
        },
        {
            x: 'April',
            y: 1500
        },
        {
            x: 'May',
            y: 1500
        },
        {
            x: 'June',
            y: 1500
        },
        {
            x: 'July',
            y: 1500
        },
        {
            x: 'August',
            y: 1500
        },
        {
            x: 'September',
            y: 1500
        },
        {
            x: 'October',
            y: 1500
        },
        {
            x: 'November',
            y: 1500
        },
        {
            x: 'December',
            y: 1500
        },
        ],
    }])

    const [donatePot] = useState<any>({
        chart: {
            id: 'donate-pot',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 5,
            hover: {
                size: 9
            }
        },
        stroke: {
            curve: "straight",
        },
        colors: ['#FB3B71'],
        yaxis: {
            min: 0,
            max: 2400,
            opposite: true,
            tickAmount: 4,
            labels: {
                show: true,
                align: 'right',
            },
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        grid: {
            strokeDashArray: 7,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                },
            }
        },
        title: {
            text: 'Statistics',
            style: {
                fontSize: '16px',
            }
        },
    })

    const handleClick = (value: any, i: any) => {
        const index = toggle.indexOf(i)
        if (toggle.includes(i)) {
            toggle.splice(index, 1)
        } else {
            toggle.push(i)
        }
        setProp(!prop)
    }

    return (
        <div className={styles.main_dashboardWrap}>
            <CommonDashHeader />

            {/* home top area */}
            <div className={styles.home_top}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-6 col-12'>
                            <div className={styles.home_topLeft}>
                                <h2>Marketplace</h2>
                                <a href='#!'>Commercial</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home top area */}

            {/* top tab */}
            <div className={styles.home_topTab}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.topTab}>
                                <a className={tabValue === 'favourites' ? styles.active : styles.inactive} onClick={() => { setTabValue('favourites') }}>Favourites</a>
                                <a className={tabValue === 'rating' ? styles.active : styles.inactive} onClick={() => { setTabValue('rating') }}>Rating & Reviews</a>
                                <a className={tabValue === 'coupons' ? styles.active : styles.inactive} onClick={() => { setTabValue('coupons') }}>Coupons</a>
                                <a className={tabValue === 'shipping' ? styles.active : styles.inactive} onClick={() => { setTabValue('shipping') }}>Shipping</a>
                                <a className={tabValue === 'rewards' ? styles.active : styles.inactive} onClick={() => { setTabValue('rewards') }}>Rewards</a>
                                <a className={tabValue === 'donate' ? styles.active : styles.inactive} onClick={() => { setTabValue('donate') }}>Donate</a>
                                <a className={tabValue === 'membership' ? styles.active : styles.inactive} onClick={() => { setTabValue('membership') }}>Membership</a>
                                <a className={tabValue === 'invoices' ? styles.active : styles.inactive} onClick={() => { setTabValue('invoices') }}>Invoices</a>
                                <a className={tabValue === 'fees' ? styles.active : styles.inactive} onClick={() => { setTabValue('fees') }}>Fees to Pay</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* top tab end */}

            {tabValue === 'favourites' && <div className={styles.market_itemWrap}>
                <div className='container-fluid'>
                    {/*  */}
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.itemBox_header}>
                                                <div className={styles.itemBox_header_title}>
                                                    <h2>Items</h2>
                                                </div>
                                                <div className={styles.itemBox_header_sort}>
                                                    <img src={require('../../../assets/images/baseline-view_list-24px-active.svg').default}
                                                        alt="" className={styles.img} />
                                                    <img src={require('../../../assets/images/baseline-view_module-24px-pasive.svg').default}
                                                        alt="" className={styles.img} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`row ${styles.col_row}`}>
                                        <div className='col'>
                                            <div className={styles.card_market}>
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
                                                    <img className={styles.card_img_top} src={require('../../../assets/images/marketplace_image1.png')} />
                                                </div>

                                                <div className={styles.card_body}>
                                                    <div className={styles.card_title}>Leather feltcase for 9,7’ tablet</div>
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
                                        <div className='col'>
                                            <div className={styles.card_market}>
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
                                                    <img className={styles.card_img_top} src={require('../../../assets/images/marketplace_image2.png')} />
                                                </div>

                                                <div className={styles.card_body}>
                                                    <div className={styles.card_title}>Leather feltcase for 9,7’ tablet</div>
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
                                        <div className='col'>
                                            <div className={styles.card_market}>
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
                                                    <img className={styles.card_img_top} src={require('../../../assets/images/marketplace_image3.png')} />
                                                </div>

                                                <div className={styles.card_body}>
                                                    <div className={styles.card_title}>Leather feltcase for 9,7’ tablet</div>
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
                                        <div className='col'>
                                            <div className={styles.card_market}>
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
                                                    <img className={styles.card_img_top} src={require('../../../assets/images/marketplace_image4.png')} />
                                                </div>

                                                <div className={styles.card_body}>
                                                    <div className={styles.card_title}>Leather feltcase for 9,7’ tablet</div>
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
                                        <div className='col'>
                                            <div className={styles.card_market}>
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
                                                    <img className={styles.card_img_top} src={require('../../../assets/images/marketplace_image5.png')} />
                                                </div>

                                                <div className={styles.card_body}>
                                                    <div className={styles.card_title}>Leather feltcase for 9,7’ tablet</div>
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

                                    <div className={`row mt-3 ${styles.col_row}`}>
                                        <div className={styles.col}>
                                            <div className={styles.card_market}>
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
                                                    <img className={styles.card_img_top} src={require('../../../assets/images/marketplace_image7.png')} />
                                                </div>

                                                <div className={styles.card_body}>
                                                    <div className={styles.card_title}>Leather feltcase for 9,7’ tablet</div>
                                                    <div className={styles.card_price_head}>
                                                        <p className={styles.customer_bid}>Customer Bid</p>
                                                        <p className={styles.fixed_price_deals1}>$334</p>
                                                    </div>
                                                    <div className={styles.card_price_head}>
                                                        <p className={styles.customer_bid}>Fixed Price</p>
                                                        <p className={styles.customer_price_deals}>$367</p>
                                                        <p className={styles.fixed_price_deals}>$334</p>
                                                    </div>
                                                    <div className={styles.deals_off}>10% Off</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.col}>
                                            <div className={styles.card_market}>
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
                                                    <img className={styles.card_img_top} src={require('../../../assets/images/marketplace_image8.png')} />
                                                </div>

                                                <div className={styles.card_body}>
                                                    <div className={styles.card_title}>Leather feltcase for 9,7’ tablet</div>
                                                    <div className={styles.card_price_head}>
                                                        <p className={styles.customer_bid}>Customer Bid</p>
                                                        <p className={styles.fixed_price_deals1}>$334</p>
                                                    </div>
                                                    <div className={styles.card_price_head}>
                                                        <p className={styles.customer_bid}>Fixed Price</p>
                                                        <p className={styles.customer_price_deals}>$367</p>
                                                        <p className={styles.fixed_price_deals}>$334</p>
                                                    </div>
                                                    <div className={styles.deals_off}>10% Off</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.itemBox_header}>
                                                <div className={styles.itemBox_header_title}>
                                                    <h2>Sellers</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.itemBox_header}>
                                                <div className={styles.itemBox_header_title}>
                                                    <h2>whatsupstoners shop</h2>
                                                </div>
                                                <div className={` ${styles.itemBox_header_sort} ${styles.member_sort}`}>
                                                    <img src={require('../../../assets/images/notes.svg').default}
                                                        alt="" className={styles.img} />
                                                    <img src={require('../../../assets/images/baseline-remove-active.svg').default}
                                                        alt="" className={styles.img} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col'>
                                            <div className={styles.membership_row}>
                                                <div className={styles.membership_col}>
                                                    <span>Membership</span>
                                                    <p><img src={require('../../../assets/images/commercial-buld.png')}
                                                        alt="" className={styles.img} />&nbsp; Commercial</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Items Sold</span>
                                                    <p>1000+</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Address</span>
                                                    <p>25400, Lindon, Ukraine</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Member Since</span>
                                                    <p>2007</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Rating</span>
                                                    <p><small>(5.0)&nbsp;<img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt="" className={styles.img} /></small>2k+ Ratings</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Verify Level</span>
                                                    <p>Uploted a Billing adress and Passport</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.itemBox_header}>
                                                <div className={styles.itemBox_header_title}>
                                                    <h2>Rickardo Jones</h2>
                                                </div>
                                                <div className={` ${styles.itemBox_header_sort} ${styles.member_sort}`}>
                                                    <img src={require('../../../assets/images/notes.svg').default}
                                                        alt="" className={styles.img} />
                                                    <img src={require('../../../assets/images/baseline-remove-active.svg').default}
                                                        alt="" className={styles.img} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col'>
                                            <div className={styles.membership_row}>
                                                <div className={styles.membership_col}>
                                                    <span>Membership</span>
                                                    <p><img src={require('../../../assets/images/private-active.svg').default}
                                                        alt="" className={styles.img} />&nbsp; Private</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Items Sold</span>
                                                    <p>118</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Address</span>
                                                    <p>33000, Denver, USA</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Member Since</span>
                                                    <p>2008</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Rating</span>
                                                    <p><small>(5.0)&nbsp;<img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt="" className={styles.img} /></small>60 Ratings</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Verify Level</span>
                                                    <p>Uploted a Billing adress</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.itemBox_header}>
                                                <div className={styles.itemBox_header_title}>
                                                    <h2>Black Box</h2>
                                                </div>
                                                <div className={` ${styles.itemBox_header_sort} ${styles.member_sort}`}>
                                                    <img src={require('../../../assets/images/notes.svg').default}
                                                        alt="" className={styles.img} />
                                                    <img src={require('../../../assets/images/baseline-remove-active.svg').default}
                                                        alt="" className={styles.img} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col'>
                                            <div className={styles.membership_row}>
                                                <div className={styles.membership_col}>
                                                    <span>Membership</span>
                                                    <p><img src={require('../../../assets/images/startup-active.svg').default}
                                                        alt="" className={styles.img} />&nbsp; Startup</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Items Sold</span>
                                                    <p>2</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Address</span>
                                                    <p>28976, Kyiv, Ukraine</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Member Since</span>
                                                    <p>2009</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Rating</span>
                                                    <p><small>(0)&nbsp;<img src={require('../../../assets/images/rating-active.svg').default}
                                                        alt="" className={styles.img} /></small>No Rating Yet</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Verify Level</span>
                                                    <p>Physical Address</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.itemBox_header}>
                                                <div className={styles.itemBox_header_title}>
                                                    <h2>Saved Searches</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.itemBox_header}>
                                                <div className={styles.itemBox_header_title}>
                                                    <h2>Running track EnergyFIT 815</h2>
                                                </div>
                                                <div className={` ${styles.itemBox_header_sort} ${styles.member_sort}`}>
                                                    <img src={require('../../../assets/images/notes.svg').default}
                                                        alt="" className={styles.img} />
                                                    <img src={require('../../../assets/images/baseline-remove-active.svg').default}
                                                        alt="" className={styles.img} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col'>
                                            <div className={styles.membership_row}>
                                                <div className={styles.membership_col}>
                                                    <span>Category</span>
                                                    <p>Electronics</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Subcategory</span>
                                                    <p>Fitness</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Tilt angle adjustment</span>
                                                    <p>Mechanical, Electrical</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Purpose</span>
                                                    <p>Professional</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Manufacturer</span>
                                                    <p>EnergyFit, EnergyPool, Samsung</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.itemBox_header}>
                                                <div className={styles.itemBox_header_title}>
                                                    <h2>Running track EnergyFIT 815</h2>
                                                </div>
                                                <div className={` ${styles.itemBox_header_sort} ${styles.member_sort}`}>
                                                    <img src={require('../../../assets/images/notes.svg').default}
                                                        alt="" className={styles.img} />
                                                    <img src={require('../../../assets/images/baseline-remove-active.svg').default}
                                                        alt="" className={styles.img} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col'>
                                            <div className={styles.membership_row}>
                                                <div className={styles.membership_col}>
                                                    <span>Category</span>
                                                    <p>Electronics</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Subcategory</span>
                                                    <p>Fitness</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Tilt angle adjustment</span>
                                                    <p>Mechanical, Electrical</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Purpose</span>
                                                    <p>Professional</p>
                                                </div>
                                                <div className={styles.membership_col}>
                                                    <span>Manufacturer</span>
                                                    <p>EnergyFit, EnergyPool, Samsung</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>}

            {tabValue === 'rating' && <div className={styles.market_itemWrap}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className={`${styles.topTab} ${styles.review_topTab}`}>
                                                <a href='#!'>All Reviews</a>
                                                <a href='#!'>Newest Review</a>
                                                <a href='#!'>Need to Review <span>23</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className={styles.all_review}>
                                                <div className={styles.all_reviewLeft}>
                                                    <img src={require('../../../assets/images/rating_image1.png')}
                                                        alt="" className={styles.img} />
                                                </div>
                                                <div className={styles.all_reviewRight}>
                                                    <div className={styles.reviewRight_header}>
                                                        <h2 className={styles.title}><span></span>Cordless screwdriver Zenit USA-1213 A Li-1K</h2>
                                                        <p>
                                                            <span className={styles.date}>John Doe, January 11, 2019</span>
                                                            <span className={styles.rating}>
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
                                                                <img src={require('../../../assets/images/rating-active.svg').default}
                                                                    alt=""
                                                                />
                                                            </span></p>
                                                    </div>
                                                    <div className={styles.reviewRight_description}>
                                                        <p>Will this work with my snow Joe sun Joe spx3000 2030 psi 1.7 gpm electric pressure washer, 14.5-amp ?
                                                            <br></br>
                                                            It should work with your machine. However, I have found that it is not as effective as the turbo tip at cleaning my walk and driveway. I have both and the turbo tip is faster and does a better job.
                                                        </p>
                                                    </div>
                                                    <div className={styles.cmt_rply}>
                                                        <p>1 Comment (Hire)</p>
                                                        <a href='#!'>Reply</a>
                                                    </div>
                                                    <hr></hr>
                                                    <div className={styles.rply_box}>
                                                        <p>John Doe<span>January 11, 2019</span></p>
                                                        <p>Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty destination that offers premium</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr></hr>

                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className={styles.all_review}>
                                                <div className={styles.all_reviewLeft}>
                                                    <img src={require('../../../assets/images/rating_image2.png')}
                                                        alt="" className={styles.img} />
                                                </div>
                                                <div className={styles.all_reviewRight}>
                                                    <div className={styles.reviewRight_header}>
                                                        <h2 className={`${styles.title} ${styles.title_gray}`}>Smart Watch - GOGPS K20</h2>
                                                        <p>
                                                            <span className={styles.date}>John Doe, January 11, 2019</span>
                                                            <span className={styles.rating}>
                                                                <img src={require('../../../assets/images/rating-active.svg').default}
                                                                    alt=""
                                                                />
                                                                <img src={require('../../../assets/images/rating-active.svg').default}
                                                                    alt=""
                                                                />
                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                    alt=""
                                                                />
                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                    alt=""
                                                                />
                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                    alt=""
                                                                />
                                                            </span></p>
                                                    </div>
                                                    <div className={styles.reviewRight_description}>
                                                        <p>Will this work with my snow Joe sun Joe spx3000 2030 psi 1.7 gpm electric pressure washer, 14.5-amp ?
                                                            <br></br>
                                                            It should work with your machine. However, I have found that it is not as effective as the turbo tip at cleaning my walk and driveway. I have both and the turbo tip is faster and does a better job.
                                                        </p>
                                                    </div>
                                                    <div className={styles.reviewRight_imgBox}>
                                                        <img src={require('../../../assets/images/rating_sub_image1.png')}
                                                            alt=""
                                                        />
                                                        <img src={require('../../../assets/images/rating_sub_image2.png')}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={styles.cmt_rply}>
                                                        <p>1 Comment (Hire)</p>
                                                        <a href='#!'>Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>

                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className={styles.all_review}>
                                                <div className={styles.all_reviewLeft}>
                                                    <img src={require('../../../assets/images/rating_image3.png')}
                                                        alt="" className={styles.img} />
                                                </div>
                                                <div className={styles.all_reviewRight}>
                                                    <div className={styles.reviewRight_header}>
                                                        <h2 className={`${styles.title} ${styles.title_gray}`}>Smart Watch - GOGPS K20</h2>
                                                        <p>
                                                            <span className={styles.date}>John Doe, January 11, 2019</span>
                                                            <span className={styles.rating}>
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
                                                            </span></p>
                                                    </div>
                                                    <div className={styles.reviewRight_description}>
                                                        <p>Will this work with my snow Joe sun Joe spx3000 2030 psi 1.7 gpm electric pressure washer, 14.5-amp ?
                                                            <br></br>
                                                            It should work with your machine. However, I have found that it is not as effective as the turbo tip at cleaning my walk and driveway. I have both and the turbo tip is faster and does a better job.
                                                        </p>
                                                    </div>
                                                    <div className={styles.reviewRight_imgBox}>

                                                    </div>
                                                    <div className={styles.reviewRight_imgBox}>
                                                        <img src={require('../../../assets/images/rating_sub_image1.png')}
                                                            alt=""
                                                        />
                                                        <img src={require('../../../assets/images/rating_sub_image2.png')}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={styles.cmt_rply}>
                                                        <p>1 Comment (Hire)</p>
                                                        <a href='#!'>Reply</a>
                                                    </div>
                                                    <hr></hr>
                                                    <div className={`mb-3 ${styles.rply_box}`}>
                                                        <p>John Doe<span>January 11, 2019</span></p>
                                                        <p>Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty destination that offers premium</p>
                                                    </div>
                                                    <div className={styles.rply_box}>
                                                        <p>John Doe<span>January 11, 2019</span></p>
                                                        <p>Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty
                                                            destination that offers premium products, one-time use pedi kits, over 600 gels,
                                                            and regular color. Affordable, transparent pricing is also available.
                                                            All full sets and fills include desired nail shapes with up to medium nail length,
                                                            and a cuticle treatment. Removals are available with new sets of dips and gel manicures.
                                                            Pricing varies on nail art!, Welcome to Haus Of Polish! We are a full service nail
                                                            salon and boutique beauty destination that offers premium products,
                                                            one-time use pedi kits, over 600 gels, and regular color. Affordable,
                                                            transparent pricing is also available. All full sets and fills include
                                                            desired nail shapes with up to medium nail length, and a cuticle treatment.
                                                            Removals are available with new sets of dips and gel manicures.
                                                            Pricing varies on nail art!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

            {tabValue === 'coupons' && <div className={styles.market_itemWrap}>
                {!createCoupon && <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className={`${styles.topTab} ${styles.review_topTab}`}>
                                                <a href='#!'>Bought Coupons</a>
                                                <a href='#!'>Created Coupons</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className={`row mt-3 ${styles.col_row}`}>
                                                <div className={styles.col}>
                                                    <div className={styles.card_market}>
                                                        <div className='position-relative'>
                                                            <div className={`${styles.card_top} ${styles.couponCard_top}`}>
                                                                <div className={styles.card_topLeft}>
                                                                    <img src={require('../../../assets/images/change-active.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className={styles.card_topRight}>
                                                                    <img src={require('../../../assets/images/private-active.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <img className={styles.card_img_top} src={require('../../../assets/images/marketplace_image8.png')} />
                                                        </div>

                                                        <div className={styles.card_body}>
                                                            <div className={styles.card_title}>Running track EnergyFIT 815</div>
                                                            <div className={styles.card_price_head}>
                                                                <p className={styles.customer_bid}>Fixed Price</p>
                                                                <p className={styles.customer_price_deals}>$367</p>
                                                                <p className={styles.fixed_price_deals}>$334</p>
                                                            </div>
                                                            <div className={styles.deals_off}>10% Off</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.col}>
                                                    <div className={styles.card_market}>
                                                        <div className='position-relative'>
                                                            <div className={`${styles.card_top} ${styles.couponCard_top}`}>
                                                                <div className={`invisible ${styles.card_topLeft}`}>
                                                                    <img src={require('../../../assets/images/change-active.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className={styles.card_topRight}>
                                                                    <img src={require('../../../assets/images/startup-active.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <img className={styles.card_img_top} src={require('../../../assets/images/marketplace_image3.png')} />
                                                        </div>

                                                        <div className={styles.card_body}>
                                                            <div className={styles.card_title}>Cordless screwdriver Zenit USA-1213 A Li-1K</div>
                                                            <div className={styles.card_price_head}>
                                                                <p className={styles.customer_bid}>Fixed Price</p>
                                                                <p className={styles.customer_price_deals}>$367</p>
                                                                <p className={styles.fixed_price_deals}>$334</p>
                                                            </div>
                                                            <div className={styles.deals_off}>10% Off</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.col}>
                                                    <div className={styles.card_market}>
                                                        <div className='position-relative'>
                                                            <div className={`${styles.card_top} ${styles.couponCard_top}`}>
                                                                <div className={`invisible ${styles.card_topLeft}`}>
                                                                    <img src={require('../../../assets/images/change-active.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className={styles.card_topRight}>
                                                                    <img src={require('../../../assets/images/private-active.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <img className={styles.card_img_top} src={require('../../../assets/images/marketplace_image9.png')} />
                                                        </div>

                                                        <div className={styles.card_body}>
                                                            <div className={styles.card_title}>Akura Rice for sushi 1 kg</div>
                                                            <div className={styles.card_price_head}>
                                                                <p className={styles.customer_bid}>Fixed Price</p>
                                                                <p className={styles.customer_price_deals}>$367</p>
                                                                <p className={styles.fixed_price_deals}>$334</p>
                                                            </div>
                                                            <div className={styles.deals_off}>10% Off</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.col}>
                                                    <div className={styles.card_market}>
                                                        <div className='position-relative'>
                                                            <div className={styles.crt_coupon} onClick={() => { setCreateCoupon(!createCoupon) }}>
                                                                <img className={styles.img} src={require('../../../assets/images/coupon.png')} />
                                                                <p>Create an Coupon</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
                {createCoupon && <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className={styles.upload_box}>
                                        <div className={styles.upload_boxContant}>
                                            <img src={require('../../../assets/images/image plaseholder.png')}
                                                alt=""
                                                className={styles.img}
                                            />
                                            <p>Drag & Drop<br></br> Your Photos or Video</p>
                                            <hr></hr>
                                            <a href='#!'>Add from Computer</a>
                                        </div>
                                    </div>
                                    <div className={styles.upload_images}>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <div className={styles.upload_singleImg}>
                                                    <img src={require('../../../assets/images/coupon_image1.png')}
                                                        alt=""
                                                        className={styles.img_1}
                                                    />
                                                    <img src={require('../../../assets/images/close-black.svg').default}
                                                        alt=""
                                                        className={styles.close}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className={styles.upload_singleImg}>
                                                    <img src={require('../../../assets/images/coupon_image2.png')}
                                                        alt=""
                                                        className={styles.img_1}
                                                    />
                                                    <img src={require('../../../assets/images/close-black.svg').default}
                                                        alt=""
                                                        className={styles.close}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className={styles.upload_singleImg}>
                                                    <img src={require('../../../assets/images/coupon_image1.png')}
                                                        alt=""
                                                        className={styles.img_1}
                                                    />
                                                    <img src={require('../../../assets/images/close-black.svg').default}
                                                        alt=""
                                                        className={styles.close}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className={styles.upload_singleImg}>
                                                    <img src={require('../../../assets/images/coupon_image1.png')}
                                                        alt=""
                                                        className={styles.img_1}
                                                    />
                                                    <img src={require('../../../assets/images/close-black.svg').default}
                                                        alt=""
                                                        className={styles.close}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className={styles.upload_singleImg}>
                                                    <img src={require('../../../assets/images/coupon_image2.png')}
                                                        alt=""
                                                        className={styles.img_1}
                                                    />
                                                    <img src={require('../../../assets/images/close-black.svg').default}
                                                        alt=""
                                                        className={styles.close}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className={styles.couppon_tab}>
                                        <a href='#!'>Marketplace</a>
                                        <a href='#!' className={styles.a_dot}>
                                            <img src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                alt=""
                                                className={styles.active}
                                            />
                                        </a>
                                        <a href='#!'>Booking</a>
                                        <a href='#!' className={styles.a_dot}>
                                            <img src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                alt=""
                                                className={styles.active}
                                            />
                                        </a>
                                        <a href='#!'>Deals</a>
                                    </div>
                                    <hr></hr>
                                    <div className={styles.couppon_formGroup}>
                                        <form>
                                            <div className={`form-group ${styles.form_group}`}>
                                                <label htmlFor="">Item</label>
                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Samsung Galaxy Note 9" id="email" />
                                                <small className={styles.word_count}>11/40</small>
                                            </div>
                                            <div className={`form-group ${styles.form_group}`}>
                                                <label htmlFor="">Category</label>
                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Samsung Galaxy > Samsung Galaxy Note 9" id="email" />
                                                <img src={require('../../../assets/images/close-black.svg').default}
                                                    alt=""
                                                    className={styles.cat_cross}
                                                />
                                            </div>
                                            <div className={`form-group ${styles.form_group}`}>
                                                <select className={`form-control ${styles.form_control} ${styles.cat_select}`}>
                                                    <option>Add in 2 categories</option>
                                                    <option>Add in 2 categories</option>
                                                    <option>Add in 2 categories</option>
                                                </select>
                                                <img src={require('../../../assets/images/add-button-inside-bl.png')}
                                                    alt=""
                                                    className={styles.circle_plus}
                                                />
                                            </div>
                                            <div className={`form-group ${styles.form_group}`}>
                                                <label htmlFor="">Condition</label>
                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                    <option>New</option>
                                                    <option>New</option>
                                                    <option>New</option>
                                                </select>
                                            </div>
                                            <div className={`form-group ${styles.form_group}`}>
                                                <label htmlFor="">Description</label>
                                                <Editor
                                                    apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                                                    initialValue='The bristles are relatively soft and should not damage 
                                                    the decals on an RV Camper. The brush bristles do not rotate so the amount 
                                                    of brush pressure placed on your decals is up to you to apply.
                                                     The cleaningprocess on the hand wash brush is primarily controlled by the 
                                                     two rotating sprayer heads inside of the head of the brush. I believe if 
                                                     the spray from the rotating sprayer heads is left on the decals for too 
                                                     long The bristles are relatively soft and should not damage the decals 
                                                     on an RV Camper. The brush bristles do not rotate so the amount of brush 
                                                     pressure placed on your decals is up to you to apply. The cleaningprocess 
                                                     on the hand wash brush is primarily controlled by the two rotating sprayer
                                                      heads inside of the head of the brush. I believe if the spray from the 
                                                      rotating sprayer heads is left on the decals for too long'
                                                    init={{
                                                        icons: "thin",
                                                        height: 300,
                                                        menubar: false,
                                                        branding: false,
                                                        elementpath: false,
                                                        plugins: ["lists"],
                                                        toolbar:
                                                            "bold italic underline | bullist | alignleft aligncenter alignright alignjustify"
                                                    }}
                                                />
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>

                            <div className={`mt-4 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col-md-5 col-sm-12 col-12'>
                                            <div className={styles.couppon_formleft}>
                                                <form>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className={`form-group ${styles.form_group}  ${styles.form_group1}`}>
                                                                <label htmlFor="">Time From</label>
                                                                <select className={`form-control ${styles.form_control}`}>
                                                                    <option>Apr 3, 10:00</option>
                                                                    <option>Apr 3, 10:00</option>
                                                                    <option>Apr 3, 10:00</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className={`form-group ${styles.form_group}  ${styles.form_group1}`}>
                                                                <label htmlFor="">Time to</label>
                                                                <select className={`form-control ${styles.form_control}`}>
                                                                    <option>Indefinite Period</option>
                                                                    <option>Indefinite Period</option>
                                                                    <option>Indefinite Period</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-4'>
                                                            <div className={`form-group ${styles.form_group}  ${styles.form_group1}`}>
                                                                <label htmlFor="">Discount %</label>
                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="10" id="email" />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-8'>
                                                            <div className={`form-group ${styles.form_group}  ${styles.form_group1}`}>
                                                                <label htmlFor="">Promo Code</label>
                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="$556" id="email" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_group}  ${styles.form_group1}`}>
                                                                <label htmlFor="">Fixed Price $</label>
                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="555.00" id="email" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <div className={styles.formleft_togle}>
                                                    <label ><span>Contact in Messenger</span>
                                                        <div className={styles.togleRow_img} onClick={() => { setContactMess(!contactMess) }}>
                                                            {contactMess ? <img src={require('../../../assets/images/switch-on.svg').default}
                                                                alt=""
                                                                className={styles.img}
                                                            /> :
                                                                <img src={require('../../../assets/images/switch-off.svg').default}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />}
                                                        </div>
                                                    </label>
                                                    <label ><span>Contact in Ask a Question</span>
                                                        <div className={styles.togleRow_img} onClick={() => { setContactQues(!contactQues) }}>
                                                            {contactQues ? <img src={require('../../../assets/images/switch-on.svg').default}
                                                                alt=""
                                                                className={styles.img}
                                                            /> :
                                                                <img src={require('../../../assets/images/switch-off.svg').default}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />}
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-2 col-sm-12 col-12'>
                                            <div className={styles.couppon_formhr}>
                                            </div>
                                        </div>
                                        <div className='col-md-5 col-sm-12 col-12'>
                                            <div className={`{styles.couppon_formright}`}>
                                                <div className={`${styles.formleft_togle} ${styles.formright_togle}`}>
                                                    <label ><span>Shipping</span>
                                                        <div className={styles.togleRow_img} onClick={() => { setShippingVal(!shippingVal) }}>
                                                            {shippingVal ? <img src={require('../../../assets/images/switch-on.svg').default}
                                                                alt=""
                                                                className={styles.img}
                                                            /> :
                                                                <img src={require('../../../assets/images/switch-off.svg').default}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />}
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className={`form-group mt-3 ${styles.form_group} ${styles.form_group1}`}>
                                                    <label htmlFor="">Shipping Price</label>
                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="$556" id="email" />
                                                </div>
                                                <div className={styles.delivery_time}>
                                                    <p>Delivery time</p>
                                                    <ul>
                                                        <li><a href='#!' className={styles.inactive}>1 day</a></li>
                                                        <li><a href='#!' className={styles.inactive}>5 days</a></li>
                                                        <li><a href='#!' className={styles.inactive}>1 week</a></li>
                                                        <li><a href='#!' className={styles.inactive}>2 weeks</a></li>
                                                    </ul>
                                                </div>
                                                <div className={styles.put_delivery}>
                                                    <p>Put Delivery Time Manually
                                                    </p>
                                                </div>

                                                <div className={styles.payments}>
                                                    <p>Payment
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            <a href='#!'>
                                                                <img src={require('../../../assets/images/apple pay.png')}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='#!'>
                                                                <img src={require('../../../assets/images/Card networks_MC-Hor.png')}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='#!'>
                                                                <img src={require('../../../assets/images/Visa.png')}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li className={styles.disable_li}>
                                                            <a href='#!'>
                                                                <img src={require('../../../assets/images/PayPal-FullColo.png')}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li className={styles.disable_li}>
                                                            <a href='#!'>
                                                                <img src={require('../../../assets/images/Group 1299.png')}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-4 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col-md-12 col-sm-12 col-12'>
                                            <div className={styles.marketing_box}>
                                                <div className={styles.itemBox_header}>
                                                    <div className={styles.itemBox_header_title}>
                                                        <h2>Marketing</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-7 col-sm-12 col-12'>
                                            <div className={styles.marketing_togle}>
                                                <div className={`${styles.formleft_togle} ${styles.marketing_togleContant}`}>
                                                    {array.map((options: any, index: any) => (
                                                        <label key={options}><span>{options}</span>
                                                            <div className={styles.togleRow_img} onClick={() => handleClick(options, index)}>
                                                                {toggle.includes(index) ? <img src={require('../../../assets/images/switch-on.svg').default}
                                                                    alt=""
                                                                    className={styles.img}
                                                                /> :
                                                                    <img src={require('../../../assets/images/switch-off.svg').default}
                                                                        alt=""
                                                                        className={styles.img}
                                                                    />}
                                                            </div>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-5 col-sm-12 col-12'>
                                            <div className={styles.marketing_total}>
                                                <img src={require('../../../assets/images/dots.svg').default}
                                                    alt=""
                                                    className={styles.img1} />
                                                <div className={styles.marketing_totalText}>
                                                    <h2>$0</h2>
                                                    <p>Total</p>
                                                </div>
                                                <img src={require('../../../assets/images/dots.svg').default}
                                                    alt=""
                                                    className={styles.img2} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-4 ${styles.mCupon_btn}`}>
                                <button>Create an Coupon</button>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>}

            {tabValue === 'shipping' && <div className={styles.market_itemWrap}>
                <div className='container-fluid'>

                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.shiping_title}>
                                <p>My Orders<span>(2)</span></p>
                                <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>

                                    <div className={styles.shoping_acc}>
                                        <div className={styles.Accordion_titlemain}>
                                            <div className={styles.Accordion_titleLeft}>
                                                <div className={styles.Accordion_titleIMG}>
                                                    <img src={require('../../../assets/images/bulb.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className={styles.Accordion_titleName}>
                                                    <h2>Cordless screwdriver Zenit USA-1213 A Li-1K
                                                        <br></br>
                                                        <span>03 April 2019</span>
                                                        <span>#221603112</span>
                                                    </h2>
                                                    <p>10% Off</p>
                                                </div>
                                            </div>
                                            <div className={styles.Accordion_titleRight}>
                                                <p>Fixed Price</p>
                                                <span>$367</span>
                                                <h2>$334</h2>
                                            </div>
                                            <div className={styles.titleRight_img} onClick={() => { setArrow1(!arrow1) }}>
                                                {arrow1 ? <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                                    alt=''
                                                    className={styles.img_down} /> :
                                                    <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                                        alt=''
                                                        className={styles.img_up} />}
                                            </div>
                                        </div>
                                        {arrow1 && <div className={styles.shiping_AccordionItemPanel}>
                                            <div className={styles.shiping_Accordion_list}>
                                                <div className={styles.shiping_Accordion_toplist}>
                                                    <div className={styles.toplist_list}>
                                                        <label>Size</label>
                                                        <input className={styles.input_1} type="text" id="fname" name="fname" placeholder='small' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Color</label>
                                                        <input className={styles.input_2} type="text" id="fname" name="fname" placeholder='2' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Quantity</label>
                                                        <input className={styles.input_3} type="text" id="fname" name="fname" placeholder='2' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Payment</label>
                                                        <img className={styles.input_4} src={require('../../../assets/images/Visa.png')}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Trach Number</label>
                                                        <input className={styles.input_5} type="text" id="fname" name="fname" placeholder='2' />
                                                        <button>Add</button>
                                                    </div>
                                                </div>
                                                <div className={styles.shiping_Accordion_botomlist}>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Name</label>
                                                        <p>Joth Doe</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Street</label>
                                                        <p>Liberty</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Number</label>
                                                        <p>4</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>City</label>
                                                        <p>London</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Postcode</label>
                                                        <p>123456</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Country</label>
                                                        <p>Ukraine</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>

                                </div>
                            </div>

                            <div className={`mt-4 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>

                                    <div className={styles.shoping_acc}>
                                        <div className={styles.Accordion_titlemain}>
                                            <div className={styles.Accordion_titleLeft}>
                                                <div className={styles.Accordion_titleIMG}>
                                                    <img src={require('../../../assets/images/bulb.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className={styles.Accordion_titleName}>
                                                    <h2>Cordless screwdriver Zenit USA-1213 A Li-1K
                                                        <br></br>
                                                        <span>03 April 2019</span>
                                                        <span>#221603112</span>
                                                    </h2>
                                                    <p>10% Off</p>
                                                </div>
                                            </div>
                                            <div className={styles.Accordion_titleRight}>
                                                <p>Fixed Price</p>
                                                <span>$367</span>
                                                <h2>$334</h2>
                                            </div>
                                            <div className={styles.titleRight_img} onClick={() => { setArrow2(!arrow2) }}>
                                                {arrow2 ? <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                                    alt=''
                                                    className={styles.img_down} /> :
                                                    <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                                        alt=''
                                                        className={styles.img_up} />}
                                            </div>
                                        </div>
                                        {arrow2 && <div className={styles.shiping_AccordionItemPanel}>
                                            <div className={styles.shiping_Accordion_list}>
                                                <div className={styles.shiping_Accordion_toplist}>
                                                    <div className={styles.toplist_list}>
                                                        <label>Size</label>
                                                        <input className={styles.input_1} type="text" id="fname" name="fname" placeholder='small' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Color</label>
                                                        <input className={styles.input_2} type="text" id="fname" name="fname" placeholder='2' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Quantity</label>
                                                        <input className={styles.input_3} type="text" id="fname" name="fname" placeholder='2' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Payment</label>
                                                        <img className={styles.input_4} src={require('../../../assets/images/Visa.png')}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Trach Number</label>
                                                        <input className={styles.input_5} type="text" id="fname" name="fname" placeholder='2' />
                                                        <button>Add</button>
                                                    </div>
                                                </div>
                                                <div className={styles.shiping_Accordion_botomlist}>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Name</label>
                                                        <p>Joth Doe</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Street</label>
                                                        <p>Liberty</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Number</label>
                                                        <p>4</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>City</label>
                                                        <p>London</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Postcode</label>
                                                        <p>123456</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Country</label>
                                                        <p>Ukraine</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='mt-4 mb-3'></hr>

                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.shiping_title}>
                                <p>Place Orders<span>(2)</span></p>
                                <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>

                                    <div className={styles.shoping_acc}>
                                        <div className={styles.Accordion_titlemain}>
                                            <div className={styles.Accordion_titleLeft}>
                                                <div className={styles.Accordion_titleIMG}>
                                                    <img src={require('../../../assets/images/bulb.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className={styles.Accordion_titleName}>
                                                    <h2>Cordless screwdriver Zenit USA-1213 A Li-1K
                                                        <br></br>
                                                        <span>03 April 2019</span>
                                                        <span>#221603112</span>
                                                    </h2>
                                                    {/* <p>10% Off</p> */}
                                                </div>
                                            </div>
                                            <div className={styles.Accordion_titleRight}>
                                                {/* <p>Fixed Price</p> */}
                                                <span className={styles.bid_span}>Start Bid</span>
                                                <h2 className={styles.bid_price}>$334</h2>
                                                <span className={styles.bid_span}>Won Bid</span>
                                                <h2>$334</h2>
                                            </div>
                                            <div className={styles.titleRight_img} onClick={() => { setArrow3(!arrow3) }}>
                                                {arrow3 ? <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                                    alt=''
                                                    className={styles.img_down} /> :
                                                    <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                                        alt=''
                                                        className={styles.img_up} />}
                                            </div>
                                        </div>
                                        {arrow3 && <div className={styles.shiping_AccordionItemPanel}>
                                            <div className={styles.shiping_Accordion_list}>
                                                <div className={styles.shiping_Accordion_toplist}>
                                                    <div className={styles.toplist_list}>
                                                        <label>Size</label>
                                                        <input className={styles.input_1} type="text" id="fname" name="fname" placeholder='small' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Color</label>
                                                        <input className={styles.input_2} type="text" id="fname" name="fname" placeholder='2' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Quantity</label>
                                                        <input className={styles.input_3} type="text" id="fname" name="fname" placeholder='2' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Payment</label>
                                                        <img className={styles.input_4} src={require('../../../assets/images/Visa.png')}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Trach Number</label>
                                                        <input className={styles.input_5} type="text" id="fname" name="fname" placeholder='2' />
                                                        {/* <button>Add</button> */}
                                                    </div>
                                                </div>
                                                <div className={styles.shiping_Accordion_botomlist}>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Name</label>
                                                        <p>Joth Doe</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Street</label>
                                                        <p>Liberty</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Number</label>
                                                        <p>4</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>City</label>
                                                        <p>London</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Postcode</label>
                                                        <p>123456</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Country</label>
                                                        <p>Ukraine</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>

                                </div>
                            </div>

                            <div className={`mt-4 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>

                                    <div className={styles.shoping_acc}>
                                        <div className={styles.Accordion_titlemain}>
                                            <div className={styles.Accordion_titleLeft}>
                                                <div className={styles.Accordion_titleIMG}>
                                                    <img src={require('../../../assets/images/bulb.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className={styles.Accordion_titleName}>
                                                    <h2>Cordless screwdriver Zenit USA-1213 A Li-1K
                                                        <br></br>
                                                        <span>03 April 2019</span>
                                                        <span>#221603112</span>
                                                    </h2>
                                                    {/* <p>10% Off</p> */}
                                                </div>
                                            </div>
                                            <div className={styles.Accordion_titleRight}>
                                                <span className={styles.bid_span}>Start Bid</span>
                                                <h2 className={styles.bid_price}>$334</h2>
                                                <span className={styles.bid_span}>Won Bid</span>
                                                <h2>$334</h2>
                                            </div>
                                            <div className={styles.titleRight_img} onClick={() => { setArrow4(!arrow4) }}>
                                                {arrow4 ? <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                                    alt=''
                                                    className={styles.img_down} /> :
                                                    <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                                        alt=''
                                                        className={styles.img_up} />}
                                            </div>
                                        </div>
                                        {arrow4 && <div className={styles.shiping_AccordionItemPanel}>
                                            <div className={styles.shiping_Accordion_list}>
                                                <div className={styles.shiping_Accordion_toplist}>
                                                    <div className={styles.toplist_list}>
                                                        <label>Size</label>
                                                        <input className={styles.input_1} type="text" id="fname" name="fname" placeholder='small' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Color</label>
                                                        <input className={styles.input_2} type="text" id="fname" name="fname" placeholder='2' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Quantity</label>
                                                        <input className={styles.input_3} type="text" id="fname" name="fname" placeholder='2' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Payment</label>
                                                        <img className={styles.input_4} src={require('../../../assets/images/Visa.png')}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Trach Number</label>
                                                        <input className={styles.input_5} type="text" id="fname" name="fname" placeholder='2' />
                                                        {/* <button>Add</button> */}
                                                    </div>
                                                </div>
                                                <div className={styles.shiping_Accordion_botomlist}>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Name</label>
                                                        <p>Joth Doe</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Street</label>
                                                        <p>Liberty</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Number</label>
                                                        <p>4</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>City</label>
                                                        <p>London</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Postcode</label>
                                                        <p>123456</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Country</label>
                                                        <p>Ukraine</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='mt-4 mb-3'></hr>

                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.shiping_title}>
                                <p>Compleated Orders<span>(2)</span></p>
                                <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>

                                    <div className={styles.shoping_acc}>
                                        <div className={styles.Accordion_titlemain}>
                                            <div className={styles.Accordion_titleLeft}>
                                                <div className={styles.Accordion_titleIMG}>
                                                    <img src={require('../../../assets/images/bulb.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className={styles.Accordion_titleName}>
                                                    <h2>Cordless screwdriver Zenit USA-1213 A Li-1K
                                                        <br></br>
                                                        <span>03 April 2019</span>
                                                        <span>#221603112</span>
                                                    </h2>
                                                    <p className={styles.off_green}>10% Off</p>
                                                </div>
                                            </div>
                                            <div className={styles.Accordion_titleRight}>
                                                <span className={styles.bid_span}>Start Bid</span>
                                                <h2 className={styles.bid_price}>$334</h2>
                                                <span className={styles.bid_span}>Won Bid</span>
                                                <h2>$334</h2>
                                            </div>
                                            <div className={styles.titleRight_img} onClick={() => { setArrow5(!arrow5) }}>
                                                {arrow5 ? <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                                    alt=''
                                                    className={styles.img_down} /> :
                                                    <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                                        alt=''
                                                        className={styles.img_up} />}
                                            </div>
                                        </div>
                                        {arrow5 && <div className={styles.shiping_AccordionItemPanel}>
                                            <div className={styles.shiping_Accordion_list}>
                                                <div className={styles.shiping_Accordion_toplist}>
                                                    <div className={styles.toplist_list}>
                                                        <label>Size</label>
                                                        <input className={styles.input_1} type="text" id="fname" name="fname" placeholder='small' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Color</label>
                                                        <input className={styles.input_2} type="text" id="fname" name="fname" placeholder='2' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Quantity</label>
                                                        <input className={styles.input_3} type="text" id="fname" name="fname" placeholder='2' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Payment</label>
                                                        <img className={styles.input_4} src={require('../../../assets/images/Visa.png')}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Trach Number</label>
                                                        <input className={styles.input_5} type="text" id="fname" name="fname" placeholder='2' />
                                                        {/* <button>Add</button> */}
                                                    </div>
                                                </div>
                                                <div className={styles.shiping_Accordion_botomlist}>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Name</label>
                                                        <p>Joth Doe</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Street</label>
                                                        <p>Liberty</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Number</label>
                                                        <p>4</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>City</label>
                                                        <p>London</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Postcode</label>
                                                        <p>123456</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Country</label>
                                                        <p>Ukraine</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>

                                </div>
                            </div>

                            <div className={`mt-4 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>

                                    <div className={styles.shoping_acc}>
                                        <div className={styles.Accordion_titlemain}>
                                            <div className={styles.Accordion_titleLeft}>
                                                <div className={styles.Accordion_titleIMG}>
                                                    <img src={require('../../../assets/images/bulb.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className={styles.Accordion_titleName}>
                                                    <h2>Cordless screwdriver Zenit USA-1213 A Li-1K
                                                        <br></br>
                                                        <span>03 April 2019</span>
                                                        <span>#221603112</span>
                                                    </h2>
                                                    <p className={styles.off_green}>10% Off</p>
                                                </div>
                                            </div>
                                            <div className={styles.Accordion_titleRight}>
                                                <span className={styles.bid_span}>Start Bid</span>
                                                <h2 className={styles.bid_price}>$334</h2>
                                                <span className={styles.bid_span}>Won Bid</span>
                                                <h2>$334</h2>
                                            </div>
                                            <div className={styles.titleRight_img} onClick={() => { setArrow6(!arrow6) }}>
                                                {arrow6 ? <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                                    alt=''
                                                    className={styles.img_down} /> :
                                                    <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                                        alt=''
                                                        className={styles.img_up} />}
                                            </div>
                                        </div>
                                        {arrow6 && <div className={styles.shiping_AccordionItemPanel}>
                                            <div className={styles.shiping_Accordion_list}>
                                                <div className={styles.shiping_Accordion_toplist}>
                                                    <div className={styles.toplist_list}>
                                                        <label>Size</label>
                                                        <input className={styles.input_1} type="text" id="fname" name="fname" placeholder='small' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Color</label>
                                                        <input className={styles.input_2} type="text" id="fname" name="fname" placeholder='2' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Quantity</label>
                                                        <input className={styles.input_3} type="text" id="fname" name="fname" placeholder='2' />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Payment</label>
                                                        <img className={styles.input_4} src={require('../../../assets/images/Visa.png')}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={styles.toplist_list}>
                                                        <label>Trach Number</label>
                                                        <input className={styles.input_5} type="text" id="fname" name="fname" placeholder='2' />
                                                        {/* <button>Add</button> */}
                                                    </div>
                                                </div>
                                                <div className={styles.shiping_Accordion_botomlist}>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Name</label>
                                                        <p>Joth Doe</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Street</label>
                                                        <p>Liberty</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Number</label>
                                                        <p>4</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>City</label>
                                                        <p>London</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Postcode</label>
                                                        <p>123456</p>
                                                    </div>
                                                    <div className={styles.botomlist_box}>
                                                        <label>Country</label>
                                                        <p>Ukraine</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>}

            {tabValue === 'rewards' && <div className={styles.market_itemWrap}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.itemBox_header}>
                                                <div className={styles.itemBox_header_title}>
                                                    <h2>Reward Points</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.reward_speedometer}>
                                                <ReactApexChart options={rewardOptions} series={rewardSeries} type="radialBar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.itemBox_header}>
                                                <div className={styles.itemBox_header_title}>
                                                    <h2>Reward levels</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.reward_level_box}>
                                                <img src={require('../../../assets/images/pig-1.png')}
                                                    alt=""
                                                />
                                                <p>Level 1</p>
                                                <h2>2,000 - 3,499</h2>
                                                <span>Reward Points</span>
                                                <p>$20.00</p>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className={styles.reward_level_box}>
                                                <img src={require('../../../assets/images/pig-2.png')}
                                                    alt=""
                                                />
                                                <p>Level 2</p>
                                                <h2>3500 - 4,999</h2>
                                                <span>Reward Points</span>
                                                <p>$40.00</p>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className={styles.reward_level_box}>
                                                <img src={require('../../../assets/images/pig-3.png')}
                                                    alt=""
                                                />
                                                <p>Level 3</p>
                                                <h2>5000 or More</h2>
                                                <span>Reward Points</span>
                                                <p>$60.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className={styles.shiping_title}>
                                <p>Reward Tasks</p>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>

                                    <div className={`row ${styles.taskBox_row}`}>
                                        <div className={styles.col}>
                                            <div className={styles.task_box}>
                                                <img src={require('../../../assets/images/t-box1.png')}
                                                    alt=""
                                                />
                                                <div className={styles.task_boxContent}>
                                                    <p>Tweet the Elephant Boxes</p>
                                                    <button className={styles.point_btn}>10 Points</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.col}>
                                            <div className={styles.task_box}>
                                                <img src={require('../../../assets/images/t-box2.png')}
                                                    alt=""
                                                />
                                                <div className={styles.task_boxContent}>
                                                    <p>Follow to Richardo shop</p>
                                                    <button className={styles.point_btn}>3 Points</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.col}>
                                            <div className={styles.task_box}>
                                                <img src={require('../../../assets/images/t-box3.png')}
                                                    alt=""
                                                />
                                                <div className={styles.task_boxContent}>
                                                    <p>Repost Good in Facebook</p>
                                                    <button className={styles.point_btn}>3 Points</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.col}>
                                            <div className={styles.task_box}>
                                                <img src={require('../../../assets/images/t-box4.png')}
                                                    alt=""
                                                />
                                                <div className={styles.task_boxContent}>
                                                    <p>Buy MacBook Pro In Rickardo shop</p>
                                                    <button className={styles.point_btn}>300 Points</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.col}>
                                            <div className={styles.task_box}>
                                                <img src={require('../../../assets/images/t-box5.png')}
                                                    alt=""
                                                />
                                                <div className={styles.task_boxContent}>
                                                    <p>Buy Stuff forMacBook Pro In Rickardo shop</p>
                                                    <button className={styles.point_btn}>100 Points</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`row mt-4 ${styles.taskBox_row}`}>
                                        <div className={styles.col}>
                                            <div className={styles.task_box}>
                                                <img src={require('../../../assets/images/t-box1.png')}
                                                    alt=""
                                                />
                                                <div className={styles.task_boxContent}>
                                                    <p>Tweet the Elephant Boxes</p>
                                                    <button className={styles.point_btn}>10 Points</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.col}>
                                            <div className={styles.task_box}>
                                                <img src={require('../../../assets/images/t-box2.png')}
                                                    alt=""
                                                />
                                                <div className={styles.task_boxContent}>
                                                    <p>Follow to Richardo shop</p>
                                                    <button className={styles.point_btn}>3 Points</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.col}>
                                            <div className={styles.task_box}>
                                                <img src={require('../../../assets/images/t-box3.png')}
                                                    alt=""
                                                />
                                                <div className={styles.task_boxContent}>
                                                    <p>Repost Good in Facebook</p>
                                                    <button className={styles.point_btn}>3 Points</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.col}>
                                            <div className={styles.task_box}>
                                                <img src={require('../../../assets/images/t-box4.png')}
                                                    alt=""
                                                />
                                                <div className={styles.task_boxContent}>
                                                    <p>Buy MacBook Pro In Rickardo shop</p>
                                                    <button className={styles.point_btn}>300 Points</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>}

            {tabValue === 'donate' && <div className={styles.market_itemWrap}>
                <div className='container-fluid'>

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.donate_leftChart}>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.donate_rightChart}>
                                                <ReactApexChart options={donatePot} series={donateSeries} type="area" height={300} width={850} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className={styles.shiping_title}>
                                <p>History<span>(4)</span></p>
                                <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>

                                    <div className={styles.shoping_acc}>
                                        <div className={`${styles.Accordion_titlemain} ${styles.donate_titlemain}`}>
                                            <div className={styles.Accordion_titleLeft}>
                                                <div className={styles.Accordion_titleIMG}>
                                                    <img src={require('../../../assets/images/bulb.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className={styles.Accordion_titleName}>
                                                    <h2>Cordless screwdriver Zenit USA-1213 A Li-1K
                                                        <br></br>
                                                        <span>03 April 2019</span>
                                                        <span>#221603112</span>
                                                    </h2>
                                                    {/* <p>10% Off</p> */}
                                                </div>
                                            </div>
                                            <div className={styles.Accordion_titleRight}>
                                                {/* <p>Fixed Price</p> */}
                                                <span className={styles.bid_span}>Start Bid</span>
                                                <h2 className={styles.bid_price}>$334</h2>
                                                <span className={styles.bid_span}>Won Bid</span>
                                                <h2>$334</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='my-4'></hr>
                                    <div className={styles.shoping_acc}>
                                        <div className={`${styles.Accordion_titlemain} ${styles.donate_titlemain}`}>
                                            <div className={styles.Accordion_titleLeft}>
                                                <div className={styles.Accordion_titleIMG}>
                                                    <img src={require('../../../assets/images/bulb.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className={styles.Accordion_titleName}>
                                                    <h2>Cordless screwdriver Zenit USA-1213 A Li-1K
                                                        <br></br>
                                                        <span>03 April 2019</span>
                                                        <span>#221603112</span>
                                                    </h2>
                                                    {/* <p>10% Off</p> */}
                                                </div>
                                            </div>
                                            <div className={styles.Accordion_titleRight}>
                                                {/* <p>Fixed Price</p> */}
                                                <span className={styles.bid_span}>Start Bid</span>
                                                <h2 className={styles.bid_price}>$334</h2>
                                                <span className={styles.bid_span}>Won Bid</span>
                                                <h2>$334</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='my-4'></hr>
                                    <div className={styles.shoping_acc}>
                                        <div className={`${styles.Accordion_titlemain} ${styles.donate_titlemain}`}>
                                            <div className={styles.Accordion_titleLeft}>
                                                <div className={styles.Accordion_titleIMG}>
                                                    <img src={require('../../../assets/images/bulb.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className={styles.Accordion_titleName}>
                                                    <h2>Cordless screwdriver Zenit USA-1213 A Li-1K
                                                        <br></br>
                                                        <span>03 April 2019</span>
                                                        <span>#221603112</span>
                                                    </h2>
                                                    {/* <p>10% Off</p> */}
                                                </div>
                                            </div>
                                            <div className={styles.Accordion_titleRight}>
                                                {/* <p>Fixed Price</p> */}
                                                <span className={styles.bid_span}>Start Bid</span>
                                                <h2 className={styles.bid_price}>$334</h2>
                                                <span className={styles.bid_span}>Won Bid</span>
                                                <h2>$334</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='my-4'></hr>
                                    <div className={styles.shoping_acc}>
                                        <div className={`${styles.Accordion_titlemain} ${styles.donate_titlemain}`}>
                                            <div className={styles.Accordion_titleLeft}>
                                                <div className={styles.Accordion_titleIMG}>
                                                    <img src={require('../../../assets/images/bulb.svg').default}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className={styles.Accordion_titleName}>
                                                    <h2>Cordless screwdriver Zenit USA-1213 A Li-1K
                                                        <br></br>
                                                        <span>03 April 2019</span>
                                                        <span>#221603112</span>
                                                    </h2>
                                                    {/* <p>10% Off</p> */}
                                                </div>
                                            </div>
                                            <div className={styles.Accordion_titleRight}>
                                                {/* <p>Fixed Price</p> */}
                                                <span className={styles.bid_span}>Start Bid</span>
                                                <h2 className={styles.bid_price}>$334</h2>
                                                <span className={styles.bid_span}>Won Bid</span>
                                                <h2>$334</h2>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>}

            {tabValue === 'membership' && <div className={styles.market_itemWrap}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.shiping_title}>
                                <p>Select Membership Plan</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className={styles.pricing_box}>
                                <div className={styles.pricing_boxContant}>
                                    <div className={styles.package_name}>
                                        <p>Private</p>
                                    </div>
                                    <div className={styles.package_price}>
                                        <h2>$7</h2>
                                    </div>
                                    <div className={styles.package_list}>
                                        <ul>
                                            <li><p>Multiaccount Option</p></li>
                                            <li><p>Pay Monthly Fees</p></li>
                                            <li><p>Memberships Status</p></li>
                                            <li><p>Memberships: Rewards</p></li>
                                            <li><p>- Coupons</p></li>
                                            <li><p>- Points</p></li>
                                            <li><p>- 1 Free Product Sellings</p></li>
                                        </ul>
                                    </div>
                                    <div className={styles.package_listBtn}>
                                        <button className={styles.btn}>Choose Private</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className={styles.pricing_box}>
                                <div className={styles.pricing_boxContant}>
                                    <div className={styles.package_name}>
                                        <p>Private Plus</p>
                                    </div>
                                    <div className={styles.package_price}>
                                        <h2>$14</h2>
                                    </div>
                                    <div className={styles.package_list}>
                                        <ul>
                                            <li><p>Multiaccount Option</p></li>
                                            <li><p>Pay Monthly Fees</p></li>
                                            <li><p>Memberships Status</p></li>
                                            <li><p>Memberships: Rewards</p></li>
                                            <li><p>- Coupons</p></li>
                                            <li><p>- Points</p></li>
                                            <li><p>- 2 Free Product Sellings</p></li>
                                            <li><p>Create Bookings</p></li>
                                        </ul>
                                    </div>
                                    <div className={styles.package_listBtn}>
                                        <button className={styles.btn}>You’r Membership Plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className={styles.pricing_box}>
                                <div className={styles.pricing_boxContant}>
                                    <div className={styles.package_name}>
                                        <p>Commercial</p>
                                    </div>
                                    <div className={styles.package_price}>
                                        <h2>$47</h2>
                                    </div>
                                    <div className={styles.package_list}>
                                        <ul>
                                            <li><p>Multiaccount Option</p></li>
                                            <li><p>Pay Monthly Fees</p></li>
                                            <li><p>Memberships Status</p></li>
                                            <li><p>Memberships: Rewards</p></li>
                                            <li><p>- Coupons</p></li>
                                            <li><p>- Points</p></li>
                                            <li><p>- 2 Free Product Sellings</p></li>
                                            <li><p>Create Bookings</p></li>
                                            <li><p>Create Coupons</p></li>
                                            <li><p>5% of Marketing</p></li>
                                        </ul>
                                    </div>
                                    <div className={styles.package_listBtn}>
                                        <button className={styles.btn}>Choose Commercial</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className={styles.pricing_box}>
                                <div className={styles.pricing_boxContant}>
                                    <div className={styles.package_name}>
                                        <p>Startup</p>
                                    </div>
                                    <div className={styles.package_price}>
                                        <h2>$27<small>Company is not older that 15 Months</small></h2>
                                    </div>
                                    <div className={styles.package_list}>
                                        <ul>
                                            <li><p>Multiaccount Option</p></li>
                                            <li><p>Pay Monthly Fees</p></li>
                                            <li><p>Memberships Status</p></li>
                                            <li><p>Memberships: Rewards</p></li>
                                            <li><p>- Coupons</p></li>
                                            <li><p>- Points</p></li>
                                            <li><p>- 2 Free Product Sellings</p></li>
                                            <li><p>Create Coupons</p></li>
                                            <li><p>10% Marketing Fees Discount</p></li>
                                        </ul>
                                    </div>
                                    <div className={styles.package_listBtn}>
                                        <button className={styles.btn}>Choose Startup</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>}

            {tabValue === 'fees' && <div className={styles.market_itemWrap}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='col'>
                                        <div className={styles.credit_row}>
                                            <div className={styles.credit_rowLeft}>
                                                <p>Credits</p>
                                                <h2>- $77.99</h2>
                                                <span>Future Fees Will be changed with this balance</span>
                                            </div>
                                            <div className={styles.credit_rowRight}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className={styles.credit_rowSelect}>
                                <div className={styles.credit_select}>
                                    <select>
                                        <option>Transaction</option>
                                        <option>Transaction</option>
                                        <option>Transaction</option>
                                        <option>Transaction</option>
                                        <option>Transaction</option>
                                    </select>
                                </div>
                                <div className={styles.credit_search}>
                                    <img src={require('../../../assets/images/search-1.svg').default}
                                        alt=""
                                    />
                                    <input type="text" className={styles.form_control_feedback} placeholder="Search" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 mt-3'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='col'>
                                        <div className={styles.credit_table}>
                                            <table className='' width='100'>
                                                <thead>
                                                    <tr>
                                                        <th>Type</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th>Amount</th>
                                                        <th>Balance</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Payment</td>
                                                        <td>01. April 2019</td>
                                                        <td></td>
                                                        <td>-3.35</td>
                                                        <td>-3.35</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment</td>
                                                        <td>01. April 2019</td>
                                                        <td></td>
                                                        <td>-3.35</td>
                                                        <td>-3.35</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment</td>
                                                        <td>01. April 2019</td>
                                                        <td></td>
                                                        <td>-3.35</td>
                                                        <td>-3.35</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment</td>
                                                        <td>01. April 2019</td>
                                                        <td></td>
                                                        <td>-3.35</td>
                                                        <td>-3.35</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment</td>
                                                        <td>01. April 2019</td>
                                                        <td></td>
                                                        <td>-3.35</td>
                                                        <td>-3.35</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className={styles.credit_tablebtn}>
                                            <a href='#!'>See More</a>
                                            <a href='#!'>Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 mt-4'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='col'>
                                        <div className={styles.credit_reciept}>
                                            <div className={styles.reciept_title}>
                                                <h2>Receipts</h2>
                                            </div>
                                            <div className={styles.reciept_arrow}>
                                                <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='col'>
                                        <div className={styles.credit_row}>
                                            <div className={`${styles.credit_rowLeft} ${styles.credit_rowLeft1}`}>
                                                <p>Open Fees</p>
                                                <h2>$774.99</h2>
                                                <span>Future Fees Will be changed with this balance</span>
                                            </div>
                                            <div className={styles.credit_rowRight}>
                                                <a onClick={() => { setPopup(true) }}>Make Payment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className={styles.credit_rowSelect}>
                                <div className={styles.credit_select}>
                                    <select>
                                        <option>Transaction</option>
                                        <option>Transaction</option>
                                        <option>Transaction</option>
                                        <option>Transaction</option>
                                        <option>Transaction</option>
                                    </select>
                                </div>
                                <div className={styles.credit_search}>
                                    <img src={require('../../../assets/images/search-1.svg').default}
                                        alt=""
                                    />
                                    <input type="text" className={styles.form_control_feedback} placeholder="Search" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 mt-3'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='col'>
                                        <div className={`${styles.credit_table} ${styles.openfee_table}`}>
                                            <table className='' width='100'>
                                                <thead>
                                                    <tr>
                                                        <th>Type</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th>Amount</th>
                                                        <th>Balance</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Returning</td>
                                                        <td>01. April 2019</td>
                                                        <td>Open</td>
                                                        <td>-3.35</td>
                                                        <td>-3.35</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Returning</td>
                                                        <td>01. April 2019</td>
                                                        <td>Open</td>
                                                        <td>-3.35</td>
                                                        <td>-3.35</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Returning</td>
                                                        <td>01. April 2019</td>
                                                        <td>Partial Missing</td>
                                                        <td>-3.35</td>
                                                        <td>-3.35</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className={styles.color_green}>Payment</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Andrey</span></td>
                                                        <td>01. April 2019</td>
                                                        <td></td>
                                                        <td className={styles.color_green}>-3.35</td>
                                                        <td>-3.35</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Returning</td>
                                                        <td>01. April 2019</td>
                                                        <td className={styles.color_green}>Paid</td>
                                                        <td>-3.35</td>
                                                        <td>-3.35</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className={styles.credit_tablebtn}>
                                            <a href='#!'>See More</a>
                                            <a href='#!'>Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 mt-4'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='col'>
                                        <div className={styles.credit_reciept}>
                                            <div className={styles.reciept_title}>
                                                <h2>Receipts</h2>
                                            </div>
                                            <div className={styles.reciept_arrow}>
                                                <img src={require('../../../assets/images/baseline-keyboard_ar.png')}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {popup && <div className={styles.search_saved}>
                    <div className={styles.form_popup}>
                        <div className={`${styles.form_popup_sub} ${styles.makePayment_popup_sub}`}>
                            <img src={require('../../../assets/images/dots.svg').default}
                                alt=""
                                className={styles.dots1_popup}
                            />

                            <div className={`${styles.formBody_popup} ${styles.makePayment_popup}`}>

                                <h1 className={styles.h1_popup}>Make Payment</h1>
                                {/* <hr className={styles.rectangle}></hr> */}
                                <div className={`${styles.topTab} ${styles.makePayment_tab}`}>
                                    <a className={popupTab === 'card' ? styles.active : styles.inactive} onClick={() => { setPopupTab('card') }}>Credit Card</a>
                                    <a className={popupTab === 'bank' ? styles.active : styles.inactive} onClick={() => { setPopupTab('bank') }}>Bank Transfer</a>
                                </div>
                                {popupTab === 'card' && <div className={styles.couppon_formGroup}>
                                    <form>
                                        <div className={`form-group ${styles.form_group} ${styles.makePayment_form_group}`}>
                                            <label htmlFor="">Cardholder Name</label>
                                            <input type="text" className={`form-control ${styles.form_control}`} placeholder="Jonathan Jamesom" id="email" />
                                        </div>
                                        <div className={`form-group ${styles.form_group} ${styles.makePayment_form_group}`}>
                                            <label htmlFor="">Card Nubmer</label>
                                            <input type="text" className={`form-control ${styles.form_control}`} placeholder="4345 4567 3456 3456" id="email" />
                                        </div>
                                        <div className='d-flex'>
                                            <div className={`form-group mr-2 ${styles.form_group} ${styles.makePayment_form_group}`}>
                                                <label htmlFor="">MM/YY</label>
                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="09/20" id="email" />
                                            </div>
                                            <div className={`form-group ml-2 ${styles.form_group} ${styles.makePayment_form_group}`}>
                                                <label htmlFor="">CVC</label>
                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="***" id="email" />
                                            </div>
                                        </div>
                                        <div className={`form-group ${styles.form_group} ${styles.makePayment_form_group}`}>
                                            <label className={styles.container_check}>Keep me loginned
                                                <input type="checkbox" name="keep" className={styles.checkbox} />
                                                <span className={styles.checkmark}></span>
                                            </label>
                                        </div>
                                        <div className={styles.card_price_head}>
                                            <p className={styles.customer_bid}>Total</p>
                                            <p className={`${styles.fixed_price_deals1} ${styles.popup_fixedPrice}`}>$774.99</p>
                                        </div>
                                    </form>
                                    <button className={styles.popup_btn}>Confirm and Pay</button>
                                </div>}
                                {popupTab === 'bank' && <div className={styles.couppon_formGroup}>
                                    <form>
                                        <div className={`form-group ${styles.form_group} ${styles.makePayment_form_group1}`}>
                                            <p>Fndslfnm mnfsmdns fms f</p>
                                            <label htmlFor="">Ricardf fdsfs. Fads<br />Address, street, number<br />45677 frt</label>
                                        </div>
                                        <div className={`form-group ${styles.form_group} ${styles.makePayment_form_group1}`}>
                                            <label htmlFor="">Account #</label>
                                            <p>F645646464</p>
                                            <span><img src={require('../../../assets/images/copy (2).png')}
                                                alt=""
                                                className={styles.img}
                                            /> Copy</span>
                                        </div>
                                        <div className={`form-group ${styles.form_group} ${styles.makePayment_form_group1}`}>
                                            <label htmlFor="">Reference to</label>
                                            <p>664566654564564564564</p>
                                            <span><img src={require('../../../assets/images/copy (2).png')}
                                                alt=""
                                                className={styles.img}
                                            /> Copy</span>
                                        </div>

                                    </form>
                                </div>}
                            </div>
                            <img src={require('../../../assets/images/dots.svg').default}
                                alt=""
                                className={styles.dots2_popup}
                            />
                        </div>
                    </div>
                </div>}

            </div>}

            {tabValue === 'invoices' && <div className={styles.market_itemWrap}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.itemBox_header}>
                                                <div className={styles.itemBox_header_title}>
                                                    <h2>Invoice</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.invoce_date}>
                                                <div className={styles.invoce_dateBox}>
                                                    <p><span>Date:</span> Apr 3, 2019</p>
                                                </div>
                                                <div className={styles.invoce_dateBox}>
                                                    <p><span>Due Date:</span>Apr 4, 2019</p>
                                                </div>
                                                <div className={styles.invoce_dateBox}>
                                                    <p><span>Invoice #</span> 234556</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className={styles.bill_from}>
                                                <span>Bill From</span>
                                                <p>whatsupstoners shop</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className={`${styles.bill_from} ${styles.bill_to}`}>
                                                <span>Bill To</span>
                                                <p>Rickardo shop</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className={styles.invoice_address}>
                                                <div className={styles.invoice_addressBox}>
                                                    <span>Address</span>
                                                    <p>665 Clinton Lake, Wilkess Bake, LA, 34566</p>
                                                </div>
                                                <div className={styles.invoice_addressBox}>
                                                    <span>Phone</span>
                                                    <p>+1 234 345 4565</p>
                                                </div>
                                                <div className={styles.invoice_addressBox}>
                                                    <span>Email</span>
                                                    <p>xyz@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className={styles.invoice_address}>
                                                <div className={styles.invoice_addressBox}>
                                                    <span>Address</span>
                                                    <p>444 Janeson avenue, Wilkess Bake, LA, 34566</p>
                                                </div>
                                                <div className={styles.invoice_addressBox}>
                                                    <span>Phone</span>
                                                    <p>+1 234 345 4565</p>
                                                </div>
                                                <div className={styles.invoice_addressBox}>
                                                    <span>Email</span>
                                                    <p>xyz@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className={styles.product_priceRow}>
                                                <div className={styles.Accordion_titleLeft}>
                                                    <div className={styles.Accordion_titleIMG}>
                                                        <img src={require('../../../assets/images/bulb.svg').default}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={styles.Accordion_titleName}>
                                                        <h2>Cordless screwdriver Zenit USA-1213 A Li-1K
                                                            <br></br>
                                                            <span>03 April 2019</span>
                                                            <span>#221603112</span>
                                                        </h2>
                                                        {/* <p>10% Off</p> */}
                                                    </div>
                                                </div>
                                                <div className={`${styles.Accordion_titleRight} ${styles.invoice_price}`}>
                                                    <span className={styles.bid_span}>Price</span>
                                                    <h2 className={styles.bid_price}>$334</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className={styles.product_priceRow}>
                                                <div className={styles.Accordion_titleLeft}>
                                                    <div className={styles.Accordion_titleIMG}>
                                                        <img src={require('../../../assets/images/bulb.svg').default}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={styles.Accordion_titleName}>
                                                        <h2>Cordless screwdriver Zenit USA-1213 A Li-1K
                                                            <br></br>
                                                            <span>03 April 2019</span>
                                                            <span>#221603112</span>
                                                        </h2>
                                                        {/* <p>10% Off</p> */}
                                                    </div>
                                                </div>
                                                <div className={`${styles.Accordion_titleRight} ${styles.invoice_price}`}>
                                                    <span className={styles.bid_span}>Price</span>
                                                    <h2 className={styles.bid_price}>$334</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className={styles.product_priceRow}>
                                                <div className={styles.Accordion_titleLeft}>

                                                </div>
                                                <div>
                                                    <div className={`${styles.Accordion_titleRight} ${styles.invoice_price}`}>
                                                        <span className={styles.bid_span}>Subtotal</span>
                                                        <h2 className={styles.bid_price}>$668.00</h2>
                                                    </div>
                                                    <div className={`mt-3 ${styles.Accordion_titleRight} ${styles.invoice_price}`}>
                                                        <span className={`${styles.bid_span} ${styles.discount_span}`}>Discount &nbsp;
                                                            <img src={require('../../../assets/images/Plus_active.png')}
                                                                alt=""
                                                            />
                                                        </span>
                                                        <h2 className={styles.bid_price}>-$13.50 (10%)</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className={styles.invoice_footer}>
                                                <div className={styles.payments}>
                                                    <p>Payment
                                                    </p>
                                                    <ul>
                                                        <li className={styles.disable_li}>
                                                            <a href='#!'>
                                                                <img src={require('../../../assets/images/apple pay.png')}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='#!'>
                                                                <img src={require('../../../assets/images/Card networks_MC-Hor.png')}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li className={styles.disable_li}>
                                                            <a href='#!'>
                                                                <img src={require('../../../assets/images/Visa.png')}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li className={styles.disable_li}>
                                                            <a href='#!'>
                                                                <img src={require('../../../assets/images/PayPal-FullColo.png')}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li className={styles.disable_li}>
                                                            <a href='#!'>
                                                                <img src={require('../../../assets/images/Group 1299.png')}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={styles.total_price}>
                                                    <div className={`${styles.Accordion_titleRight} ${styles.invoice_price}`}>
                                                        <span className={styles.bid_span}>Total</span>
                                                        <h2 className={styles.total_price}>$133.65</h2>
                                                    </div>
                                                    <div className={styles.conf_paybtn}>
                                                        <button className={styles.paybtn}>Confirm & pay</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <hr />
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
        </div >
    )
}

export default DashboardMarketplace