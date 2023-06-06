import React, { useState } from 'react'
import styles from './Dashboard.module.css';
import ReactApexChart from 'react-apexcharts';
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import CommonDashHeader from 'components/Shared/CommonDashHeader/CommonDashHeader';

const Dashboard = () => {
    let navigate: NavigateFunction = useNavigate();
    const [tabValue, setTabValue] = useState<any>('marketplace');
    const [widgets, setWidgets] = useState<boolean>(false);
    const [prop, setProp] = useState<boolean>(false);
    const [toggle] = useState<any>([]);
    const [toggleCheckbox] = useState<any>([]);
    const [array] = useState<any>(["Dark Theme", "Push Notifications", "Add Messenger"]);
    const [widgetsVal] = useState<any>(["Open Items", "Open Booking", "Open Deals", "News", "My saved searches", "Favorite Business",
        "My Shops", "Next Appointment", "Reviews", "Fees to Pay", "Communication", "My Favorite"]);

    const [donateSeries] = useState<any>([{
        data: [{
            x: 'Jan',
            y: 2
        },
        {
            x: 'Feb',
            y: 7
        },
        {
            x: 'Mar',
            y: 22
        },
        {
            x: 'Apr',
            y: 22
        },
        {
            x: 'May',
            y: 22
        },
        {
            x: 'Jun',
            y: 22
        },
        {
            x: 'Jul',
            y: 22
        },
        {
            x: 'Aug',
            y: 22
        },
        {
            x: 'Sep',
            y: 22
        },
        {
            x: 'Oct',
            y: 22
        },
        {
            x: 'Nov',
            y: 22
        },
        {
            x: 'Dec',
            y: 22
        },
        ],
    }])

    const [saleSeries] = useState<any>([50, 25, 25])

    const [publicSeries] = useState<any>([{
        data: [67, 22, 0, 10, 1]
    }])

    const [donatePot] = useState<any>({
        chart: {
            id: 'donate-pot',
            toolbar: {
                show: false,
                autoSelected: 'pan'
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
            max: 80,
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
            text: 'Total Donate',
            style: {
                fontSize: '16px',
            }
        },
        subtitle: {
            text: '$6677.99',
            style: {
                fontSize: '24px',
            }
        }
    })

    const [mySale] = useState<any>({
        chart: {
            type: 'donut',
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#FB3B71', '#B246CE', '#21CBB8'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 400
                },
                legend: {
                    show: false
                }
            }
        }],
        labels: ["Marketplace", "Booking", "Deals"],
        stroke: {
            show: true,
            width: 10,
        },
        legend: {
            show: true,
            position: 'left',
            horizontalAlign: 'center',
            floating: false,
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial',
            fontWeight: 400,
            customLegendItems: [],
            labels: {
                colors: ['#c0c0c0'],
                useSeriesColors: false
            },
            markers: {
                width: 18,
                height: 18,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
                customHTML: undefined,
                onClick: undefined,
                offsetX: -10,
                offsetY: 10
            },
            itemMargin: {
                horizontal: 5,
                vertical: 20
            },
            onItemClick: {
                toggleDataSeries: true
            },
            onItemHover: {
                highlightDataSeries: true
            },
        }
    })

    const [publicProfile] = useState<any>({
        chart: {
            toolbar: {
                show: false,
                autoSelected: 'pan'
            },
            type: 'bar',
            height: 350
        },
        colors: ['#FB3B71'],
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#fff']
            }
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                },
            }
        },
        title: {
            text: 'Average Review',
            style: {
                fontSize: '16px',
            }
        },
        xaxis: {
            categories: ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            }
        },
        yaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        }
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

    const handleCheckbox = (value: any, i: any) => {
        console.log(value);

        const index = toggleCheckbox.indexOf(i)
        if (toggleCheckbox.includes(i)) {
            toggleCheckbox.splice(index, 1)
        } else {
            toggleCheckbox.push(i)
        }
        setProp(!prop)
        console.log(toggleCheckbox.includes(0));
    }

    const [buffer, setBuffer] = useState<any>([{
        key: 1, value: <div id='1' className={`mt-4 ${styles.widgets_box}`}>
            <div className={styles.widgets_boxContant}>
                <div className={styles.widgets_profile}>
                    <div className={styles.profile_detail}>
                        <h2>Open Items</h2>
                    </div>
                    <div className={styles.profile_toggle}>
                        <img src={require('../../assets/images/Path 581.png')}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                </div>

                <div className={styles.widgets_items}>
                    <div className={styles.items}>
                        <div className={styles.items_top}>
                            <div className={styles.item_img}>
                                <img src={require('../../assets/images/dashboard_chip.png')}
                                    alt=""
                                />
                            </div>
                            <div className={styles.item_btns}>
                                <a href='#!' className={styles.plus}>
                                    <img src={require('../../assets/images/plus-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.cros}>
                                    <img src={require('../../assets/images/close-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.edit}>Edit</a>
                            </div>
                        </div>
                        <div className={styles.items_center}>
                            <p>Samsung 970 Evo Plus 500GB PCI NiFGFBDd54c…</p>
                        </div>
                        <div className={styles.items_bottom}>
                            <p><span>On Stock</span>98</p>
                            <p><span>Price</span>$144</p>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.items_top}>
                            <div className={styles.item_img}>
                                <img src={require('../../assets/images/dashboard_items_image2.png')}
                                    alt=""
                                />
                            </div>
                            <div className={styles.item_btns}>
                                <a href='#!' className={styles.plus}>
                                    <img src={require('../../assets/images/plus-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.cros}>
                                    <img src={require('../../assets/images/close-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.edit}>Edit</a>
                            </div>
                        </div>
                        <div className={styles.items_center}>
                            <p>Running track EnergyFIT 815</p>
                        </div>
                        <div className={styles.items_bottom}>
                            <p><span>On Stock</span>98</p>
                            <p><span>Price</span>$144</p>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.items_top}>
                            <div className={styles.item_img}>
                                <img src={require('../../assets/images/dashboard_chip.png')}
                                    alt=""
                                />
                            </div>
                            <div className={styles.item_btns}>
                                <a href='#!' className={styles.plus}>
                                    <img src={require('../../assets/images/plus-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.cros}>
                                    <img src={require('../../assets/images/close-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.edit}>Edit</a>
                            </div>
                        </div>
                        <div className={styles.items_center}>
                            <p>Samsung 970 Evo Plus 500GB PCI NiFGFBDd54c…</p>
                        </div>
                        <div className={styles.items_bottom}>
                            <p><span>On Stock</span>98</p>
                            <p><span>Price</span>$144</p>
                        </div>
                    </div>
                    <div className={styles.viewAll_item}>
                        <a href='#!'>View all</a>
                    </div>
                </div>

            </div>
        </div>
    }, {
        key: 2, value: <div id='2' className={`mt-4 ${styles.widgets_box}`}>
            <div className={styles.widgets_boxContant}>
                <div className={styles.widgets_profile}>
                    <div className={styles.profile_detail}>
                        <h2>Open Booking</h2>
                    </div>
                    <div className={styles.profile_toggle}>
                        <img src={require('../../assets/images/Path 581.png')}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                </div>

                <div className={styles.widgets_items}>
                    <div className={styles.items}>
                        <div className={styles.items_top}>
                            <div className={styles.item_img}>
                                <img src={require('../../assets/images/dashboard_booking.png')}
                                    alt=""
                                />
                            </div>
                            <div className={styles.item_btns}>
                                <a href='#!' className={styles.plus}>
                                    <img src={require('../../assets/images/plus-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.cros}>
                                    <img src={require('../../assets/images/close-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.edit}>Edit</a>
                            </div>
                        </div>
                        <div className={styles.items_center}>
                            <p>Acrylic Full Set Pearl/French Extension Tips</p>
                        </div>
                        <div className={styles.items_bottom}>
                            <p><span>On Stock</span>98</p>
                            <p><span>Time</span>$30 min</p>
                            <p><span>Price</span>$565</p>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.items_top}>
                            <div className={styles.item_img}>
                                <img src={require('../../assets/images/dashboard_booking.png')}
                                    alt=""
                                />
                            </div>
                            <div className={styles.item_btns}>
                                <a href='#!' className={styles.plus}>
                                    <img src={require('../../assets/images/plus-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.cros}>
                                    <img src={require('../../assets/images/close-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.edit}>Edit</a>
                            </div>
                        </div>
                        <div className={styles.items_center}>
                            <p>Acrylic Full Set Pearl/French Extension Tips</p>
                        </div>
                        <div className={styles.items_bottom}>
                            <p><span>On Stock</span>98</p>
                            <p><span>Time</span>$30 min</p>
                            <p><span>Price</span>$565</p>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.items_top}>
                            <div className={styles.item_img}>
                                <img src={require('../../assets/images/dashboard_booking.png')}
                                    alt=""
                                />
                            </div>
                            <div className={styles.item_btns}>
                                <a href='#!' className={styles.plus}>
                                    <img src={require('../../assets/images/plus-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.cros}>
                                    <img src={require('../../assets/images/close-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.edit}>Edit</a>
                            </div>
                        </div>
                        <div className={styles.items_center}>
                            <p>Acrylic Full Set Pearl/French Extension Tips</p>
                        </div>
                        <div className={styles.items_bottom}>
                            <p><span>On Stock</span>98</p>
                            <p><span>Time</span>$30 min</p>
                            <p><span>Price</span>$565</p>
                        </div>
                    </div>
                    <div className={styles.viewAll_item}>
                        <a href='#!'>View all</a>
                    </div>
                </div>

            </div>
        </div>
    }, {
        key: 3, value: <div id='3' className={`mt-4 ${styles.widgets_box}`}>
            <div className={styles.widgets_boxContant}>
                <div className={styles.widgets_profile}>
                    <div className={styles.profile_detail}>
                        <h2>Open Deals</h2>
                    </div>
                    <div className={styles.profile_toggle}>
                        <img src={require('../../assets/images/Path 581.png')}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                </div>

                <div className={styles.widgets_items}>
                    <div className={styles.items}>
                        <div className={styles.items_top}>
                            <div className={styles.item_img}>
                                <img src={require('../../assets/images/dashboard_deal_image1.png')}
                                    alt=""
                                />
                                <p>10% Off</p>
                            </div>
                            <div className={styles.item_btns}>
                                <a href='#!' className={styles.plus}>
                                    <img src={require('../../assets/images/plus-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.cros}>
                                    <img src={require('../../assets/images/close-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.edit}>Edit</a>
                            </div>
                        </div>
                        <div className={styles.items_center}>
                            <p>Cordless screwdriver Zenit USA-1213 A Li-1K</p>
                        </div>
                        <div className={styles.items_bottom}>
                            <p><span>On Stock</span>98</p>
                            <p><span>Price</span>$144</p>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.items_top}>
                            <div className={styles.item_img}>
                                <img src={require('../../assets/images/dashboard_deal_image2.png')}
                                    alt=""
                                />
                                <p>10% Off</p>
                            </div>
                            <div className={styles.item_btns}>
                                <a href='#!' className={styles.plus}>
                                    <img src={require('../../assets/images/plus-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.cros}>
                                    <img src={require('../../assets/images/close-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.edit}>Edit</a>
                            </div>
                        </div>
                        <div className={styles.items_center}>
                            <p>Akura Rice for sushi 1 kg</p>
                        </div>
                        <div className={styles.items_bottom}>
                            <p><span>On Stock</span>98</p>
                            <p><span>Price</span>$144</p>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.items_top}>
                            <div className={styles.item_img}>
                                <img src={require('../../assets/images/dashboard_deal_image3.png')}
                                    alt=""
                                />
                                <p>10% Off</p>
                            </div>
                            <div className={styles.item_btns}>
                                <a href='#!' className={styles.plus}>
                                    <img src={require('../../assets/images/plus-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.cros}>
                                    <img src={require('../../assets/images/close-black.svg').default}
                                        alt=""
                                    />
                                </a>
                                <a href='#!' className={styles.edit}>Edit</a>
                            </div>
                        </div>
                        <div className={styles.items_center}>
                            <p>Soccer ball Joerex Size 5 Yellow</p>
                        </div>
                        <div className={styles.items_bottom}>
                            <p><span>On Stock</span>98</p>
                            <p><span>Price</span>$144</p>
                        </div>
                    </div>
                    <div className={styles.viewAll_item}>
                        <a href='#!'>View all</a>
                    </div>
                </div>

            </div>
        </div>
    }, {
        key: 4, value: <div id='4' className={`mt-4 ${styles.widgets_box}`}>
            <div className={styles.widgets_boxContant}>
                <div className={styles.widgets_profile}>
                    <div className={styles.profile_detail}>
                        <h2>News</h2>
                    </div>
                    <div className={styles.profile_toggle}>
                        <img src={require('../../assets/images/Path 581.png')}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                </div>

                <div className={styles.widgets_news}>
                    <div className={styles.news_tabs}>
                        <a href='#!' className={styles.active}>General Information</a>
                        <a href='#!'>New Update</a>
                    </div>
                    <div className={styles.news_tabsContant}>
                        <p>Yes but if you Pixel perfect screen
                            <br /><br />
                            Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need
                        </p>
                        <a href='#!'>Read more</a>
                    </div>
                    <div className={styles.news_tabsContant}>
                        <p>Yes but if you Pixel perfect screen
                            <br /><br />
                            Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need
                        </p>
                        <a href='#!'>Read more</a>
                    </div>
                    <div className={styles.news_tabsContant}>
                        <p>Yes but if you Pixel perfect screen
                            <br /><br />
                            Yes but if you Pixel perfect screen. So it’s need a example how looks like it’s buy know not available. So it’s Easyier for the dev About login need
                        </p>
                        <a href='#!'>Read more</a>
                    </div>
                    <div className={styles.viewAll_item}>
                        <a href='#!'>View all</a>
                    </div>
                </div>

            </div>
        </div>
    }, {
        key: 5, value: <div id='5' className={`mt-4 ${styles.widgets_box}`}>
            <div className={styles.widgets_boxContant}>
                <div className={styles.widgets_profile}>
                    <div className={styles.profile_detail}>
                        <h2>My saved searches</h2>
                    </div>
                    <div className={styles.profile_toggle}>
                        <img src={require('../../assets/images/Path 581.png')}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                </div>

                <div className={styles.my_saved}>
                    <div className={styles.saved_contant}>
                        <div className={styles.saved_left}>
                            <h2>Running track EnergyFIT 815</h2>
                            <div className={styles.items_bottom}>
                                <p><span>Category</span>Electronics</p>
                                <p><span>Subcategory</span>Fitness</p>
                            </div>
                            <a href='#!'>More</a>
                        </div>
                        <div className={styles.saved_right}>
                            <img src={require('../../assets/images/Path 585.png')}
                                alt=""
                                className={styles.img}
                            />
                        </div>
                    </div>
                    <div className={styles.saved_contant}>
                        <div className={styles.saved_left}>
                            <h2>Leather feltcase for 9,7’ tablet</h2>
                            <div className={styles.items_bottom}>
                                <p><span>Category</span>Electronics</p>
                                <p><span>Subcategory</span>Tablet</p>
                            </div>
                        </div>
                        <div className={styles.saved_right}>
                            <img src={require('../../assets/images/Path 585.png')}
                                alt=""
                                className={styles.img}
                            />
                        </div>
                    </div>

                    <div className={styles.saved_contant}>
                        <div className={styles.saved_left}>
                            <h2>Smart Watch - GOGPS K20</h2>
                            <div className={styles.items_bottom}>
                                <p><span>Category</span>Electronics</p>
                            </div>
                            <a href='#!'>More</a>
                        </div>
                        <div className={styles.saved_right}>
                            <img src={require('../../assets/images/Path 585.png')}
                                alt=""
                                className={styles.img}
                            />
                        </div>
                    </div>

                    <div className={styles.saved_contant}>
                        <div className={styles.saved_left}>
                            <h2>Akura Rice for sushi 1 kg</h2>
                        </div>
                        <div className={styles.saved_right}>
                            <img src={require('../../assets/images/Path 585.png')}
                                alt=""
                                className={styles.img}
                            />
                        </div>
                    </div>

                    <div className={styles.saved_contant}>
                        <div className={styles.saved_left}>
                            <h2>Akura Rice for sushi 1 kg</h2>
                            <div className={styles.items_bottom}>
                                <p><span>Category</span>Electronics</p>
                                <p><span>Subcategory</span>Fitness</p>
                            </div>
                        </div>
                        <div className={styles.saved_right}>
                            <img src={require('../../assets/images/Path 585.png')}
                                alt=""
                                className={styles.img}
                            />
                        </div>
                    </div>

                    <div className={styles.viewAll_item}>
                        <a href='#!'>View all</a>
                    </div>
                </div>
            </div>
        </div>
    }, {
        key: 6, value: <div id='6' className={`mt-4 ${styles.widgets_box}`}>
            <div className={styles.widgets_boxContant}>
                <div className={styles.widgets_profile}>
                    <div className={styles.profile_detail}>
                        <h2>Favorite Business</h2>
                    </div>
                    <div className={styles.profile_toggle}>
                        <img src={require('../../assets/images/Path 581.png')}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                </div>

                <div className={styles.my_saved}>
                    <div className={styles.news_tabs}>
                        <a href='#!' className={styles.active}>General Information</a>
                        <a href='#!'>New Update</a>
                    </div>
                    <div className={styles.saved_contant}>
                        <div className={styles.saved_left}>
                            <h2>whatsupstoners shop</h2>
                            <div className={styles.busuness_stars}>
                                <div className={styles.stars}>
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
                                <p>2 product raitings</p>
                            </div>
                        </div>
                        <div className={styles.saved_right}>
                            <img src={require('../../assets/images/Path 585.png')}
                                alt=""
                                className={styles.img}
                            />
                        </div>
                    </div>

                    <div className={styles.saved_contant}>
                        <div className={styles.saved_left}>
                            <h2>Riidco shop</h2>
                            <div className={styles.busuness_stars}>
                                <div className={styles.stars}>
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
                                <p>233 product raitings</p>
                            </div>
                        </div>
                        <div className={styles.saved_right}>
                            <img src={require('../../assets/images/Path 585.png')}
                                alt=""
                                className={styles.img}
                            />
                        </div>
                    </div>

                    <div className={styles.saved_contant}>
                        <div className={styles.saved_left}>
                            <h2>Vatsak</h2>
                            <div className={styles.busuness_stars}>
                                <div className={styles.stars}>
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
                                <p>6456 product raitings</p>
                            </div>
                        </div>
                        <div className={styles.saved_right}>
                            <img src={require('../../assets/images/Path 585.png')}
                                alt=""
                                className={styles.img}
                            />
                        </div>
                    </div>

                    <div className={styles.saved_contant}>
                        <div className={styles.saved_left}>
                            <h2>Nike</h2>
                            <div className={styles.busuness_stars}>
                                <div className={styles.stars}>
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
                                <p>75675 product raitings</p>
                            </div>
                        </div>
                        <div className={styles.saved_right}>
                            <img src={require('../../assets/images/Path 585.png')}
                                alt=""
                                className={styles.img}
                            />
                        </div>
                    </div>

                    <div className={styles.saved_contant}>
                        <div className={styles.saved_left}>
                            <h2>Puma</h2>
                            <div className={styles.busuness_stars}>
                                <div className={styles.stars}>
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
                                <p>4556 product raitings</p>
                            </div>
                        </div>
                        <div className={styles.saved_right}>
                            <img src={require('../../assets/images/Path 585.png')}
                                alt=""
                                className={styles.img}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.viewAll_item}>
                    <a href='#!'>View all</a>
                </div>
            </div>


        </div>
    }, {
        key: 7, value: <div id='7' className={`mt-4 ${styles.widgets_box}`}>
            <div className={styles.widgets_boxContant}>
                <div className={styles.widgets_profile}>
                    <div className={styles.profile_detail}>
                        <h2>My Shops</h2>
                    </div>
                    <div className={styles.profile_toggle}>
                        <img src={require('../../assets/images/Path 581.png')}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                </div>

                <div className={styles.my_saved}>
                    <div className={styles.news_tabs}>
                        <a href='#!' className={styles.active}>Bid</a>
                        <a href='#!'>Offer</a>
                        <a href='#!'>Change</a>
                    </div>
                    <div className={styles.shop_contant}>
                        <div className={styles.shop_img}>

                            <img src={require('../../assets/images/dashboard_items_image2.png')}
                                alt=""
                            />
                        </div>
                        <div className={styles.shop_text}>
                            <div className={styles.items_center}>
                                <p>Running track EnergyFIT 815</p>
                            </div>
                            <div className={styles.items_bottom}>
                                <p><span>Start Bid</span>$23</p>
                                <p className={styles.bid_clr}><span>You’r Bid</span>$223</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.shop_contant}>
                        <div className={styles.shop_img}>
                            <img src={require('../../assets/images/dashboard_deal_image3.png')}
                                alt=""
                            />
                        </div>
                        <div className={styles.shop_text}>
                            <div className={styles.items_center}>
                                <p>Soccer ball Joerex Size 5 Yellow</p>
                            </div>
                            <div className={styles.items_bottom}>
                                <p><span>Start Bid</span>$144</p>
                                <p className={styles.bid_clr}><span>You’r Bid</span>$184</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    }, {
        key: 8, value: <div id='8' className={`mt-4 ${styles.widgets_box}`}>
            <div className={styles.widgets_boxContant}>
                <div className={styles.widgets_profile}>
                    <div className={styles.profile_detail}>
                        <h2>Next Appointment</h2>
                    </div>
                    <div className={styles.profile_toggle}>
                        <img src={require('../../assets/images/Path 581.png')}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                </div>

                <div className={styles.my_saved}>
                    <div className={styles.saved_contant}>
                        <div className={styles.saved_left}>
                            <h2>Acrylic Full Set Pearl/French Extension Tips</h2>
                            <div className={styles.busuness_stars}>
                                <div className={styles.stars}>
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
                                <p>Fashionable haircut</p>
                            </div>
                            <div className={`${styles.items_bottom} ${styles.nextCard_date}`}>
                                <p>$109<span>April 19, 2019 - 17:00 - 17:30</span></p>
                            </div>
                        </div>
                        <div className={styles.saved_right}>
                            <img src={require('../../assets/images/close-black.svg').default}
                                alt=""
                                className={styles.img}
                            />
                        </div>
                    </div>
                    <div className={styles.saved_contant}>
                        <div className={styles.saved_left}>
                            <h2>Men’s Haircut with Hot Towel Shave</h2>
                            <div className={styles.busuness_stars}>
                                <div className={styles.stars}>
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
                                <p>Man’s Lux</p>
                            </div>
                            <div className={`${styles.items_bottom} ${styles.nextCard_date}`}>
                                <p>$445<span>April 18, 2019 - 17:00 - 19:30</span></p>
                            </div>
                        </div>
                        <div className={styles.saved_right}>
                            <img src={require('../../assets/images/close-black.svg').default}
                                alt=""
                                className={styles.img}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.viewAll_item}>
                    <a href='#!'>View all</a>
                </div>
            </div>
        </div>
    }, {
        key: 9, value: <div id='9' className={`mt-4 ${styles.widgets_box}`}>
            <div className={styles.widgets_boxContant}>
                <div className={styles.widgets_profile}>
                    <div className={styles.profile_detail}>
                        <h2>Fees to Pay</h2>
                    </div>
                    <div className={styles.profile_toggle}>
                        <img src={require('../../assets/images/Path 581.png')}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                </div>

                <div className={styles.my_saved}>
                    <div className={styles.shop_contant}>
                        <div className={styles.shop_img}>
                            <img src={require('../../assets/images/dashboard_items_image2.png')}
                                alt=""
                            />
                        </div>
                        <div className={styles.shop_text}>
                            <div className={styles.items_center}>
                                <p>Running track EnergyFIT 815</p>
                            </div>
                            <div className={styles.items_bottom}>
                                <p><span>Shipping</span>$19.99</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.shop_contant}>
                        <div className={styles.shop_img}>
                            <img src={require('../../assets/images/dashboard_deal_image3.png')}
                                alt=""
                            />
                        </div>
                        <div className={styles.shop_text}>
                            <div className={styles.items_center}>
                                <p>Soccer ball Joerex Size 5 Yellow</p>
                            </div>
                            <div className={styles.items_bottom}>
                                <p><span>Shipping</span>$19.99</p>
                                <p><span>Tax Fee</span>$45.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }, {
        key: 10, value: <div id='10' className={`mt-4 ${styles.widgets_box}`}>
            <div className={styles.widgets_boxContant}>
                <div className={styles.widgets_profile}>
                    <div className={styles.profile_detail}>
                        <h2>Reviews <span></span></h2>
                    </div>
                    <div className={styles.profile_toggle}>
                        <img src={require('../../assets/images/Path 581.png')}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                </div>

                <div className={styles.widgets_news}>
                    <div className={styles.news_tabs}>
                        <a href='#!'> Newest Review</a>
                        <a href='#!'> Need to Review <span>2</span></a>
                        <a href='#!' className={styles.active}>Need to Review </a>
                    </div>
                    <div className={styles.news_tabsContant}>
                        <p>
                            Will this work with my snow Joe sun Joe spx3000 2030 psi 1.7 gpm electric pressure washer, 14.5-amp ?
                            <br></br>
                            <br></br>
                            It should work with your machine. However, I have found that it is not as effective as the turbo tip at cleaning my walk and driveway. I have both and the turbo tip is faster and does a better job.
                        </p>
                        <div className={styles.review_stars}>
                            <div className={styles.reviewStars_main}>
                                <p>John Doe</p>
                                <div className={styles.stars}>
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
                            </div>
                            <span>January 11, 2019</span>
                        </div>
                    </div>
                    <div className={styles.news_tabsContant}>
                        <p>
                            Are the bristles on the orbital hand wand brush soft enough not to damage the decals on an RV camper?                                                <br></br>
                            <br></br>
                            The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaning…</p>
                        <div className={styles.review_stars}>
                            <div className={styles.reviewStars_main}>
                                <p>Nelson O’Neal</p>
                                <div className={styles.stars}>
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
                            </div>
                            <span>January 10, 2019</span>
                        </div>
                    </div>
                    <div className={styles.news_tabsContant}>
                        <p>
                            wo rotating sprayer heads inside of the head of the brush. I believe if the spray from the rotating sprayer heads                                                <br></br>
                            Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty destination that offers premium products, one-time use pedi kits, over 600 gels, and regular color. Affordable, transparent… pricing is also
                        </p>
                        <div className={styles.review_stars}>
                            <div className={styles.reviewStars_main}>
                                <p>Robert Albiosa</p>
                                <div className={styles.stars}>
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
                            </div>
                            <span>January 12, 2019</span>
                        </div>
                    </div>
                    <div className={styles.viewAll_item}>
                        <a href='#!'>View all</a>
                    </div>
                </div>

            </div>
        </div>
    }, {
        key: 11, value: <div id='11' className={`mt-4 ${styles.widgets_box}`}>
            <div className={styles.widgets_boxContant}>
                <div className={styles.widgets_profile}>
                    <div className={styles.profile_detail}>
                        <h2>Communication <span></span></h2>
                    </div>
                    <div className={styles.profile_toggle}>
                        <img src={require('../../assets/images/Path 581.png')}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                </div>

                <div className={styles.widgets_news}>
                    <div className={styles.news_tabs}>
                        <a href='#!'> New Questions</a>
                        <a href='#!' className={styles.active}>New Messages <span>2</span></a>
                    </div>
                    <div className={styles.news_tabsContant}>
                        <h3>Jerald Burns <span>January 11, 2019 - 04:11 AM</span></h3>
                        <p>
                            It should work with your machine. However, I have found that it is not as effective as the turbo tip at cleaning my walk and driveway. I have both and the turbo tip is faster and does a better job?                                            </p>
                        <a href='#!'>Reply</a>
                    </div>
                    <div className={styles.news_tabsContant}>
                        <h3>Carel Denwers <span>January 11, 2019 - 03:22 AM</span></h3>
                        <p>
                            Welcome to Haus Of Polish! We are a full service nail salon and boutiqe beauty destination that offers premium products?                                            </p>
                        <a href='#!'>Reply</a>
                    </div>
                    <div className={styles.news_tabsContant}>
                        <h3>John Doe <span>January 10, 2019 - 09:32 AM</span></h3>
                        <p>
                            The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply.                                           </p>
                        <a href='#!'>Reply</a>
                    </div>
                    <div className={styles.viewAll_item}>
                        <a href='#!'>View all</a>
                    </div>
                </div>

            </div>
        </div>
    }, {
        key: 12, value: <div id='12' className={`mt-4 ${styles.widgets_box}`}>
            <div className={styles.widgets_boxContant}>
                <div className={styles.widgets_profile}>
                    <div className={styles.profile_detail}>
                        <h2>My Favorite</h2>
                    </div>
                    <div className={styles.profile_toggle}>
                        <img src={require('../../assets/images/Path 581.png')}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                </div>

                <div className={styles.my_saved}>
                    <div className={styles.news_tabs}>
                        <a href='#!'>Seller</a>
                        <a href='#!' className={styles.active}>Item</a>
                    </div>
                    <div className={styles.shop_contant}>
                        <div className={styles.shop_img}>

                            <img src={require('../../assets/images/dashboard_items_image2.png')}
                                alt=""
                            />
                        </div>
                        <div className={styles.shop_text}>
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
                            <div className={styles.items_center}>
                                <p>Running track EnergyFIT 815</p>
                            </div>
                            <div className={styles.items_bottom}>
                                <p><span>Customer Bid</span>$19.99</p>
                                <p className={styles.bid_clr}><span>Fix. Price</span>$45.99</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.shop_contant}>
                        <div className={styles.shop_img}>
                            <img src={require('../../assets/images/dashboard_deal_image3.png')}
                                alt=""
                            />
                        </div>
                        <div className={styles.shop_text}>
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
                            <div className={styles.items_center}>
                                <p>Soccer ball Joerex Size 5 Yellow</p>
                            </div>
                            <div className={styles.items_bottom}>
                                <p><span>Bidding Proce</span>$19.99</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.viewAll_item}>
                        <a href='#!'>View all</a>
                    </div>
                </div>
            </div>
        </div>
    }
    ])

    const Box = (props: any) => {
        return (
            <div className='col-md-4 col-sm-6 col-12'
                draggable={props.draggable}
                onDragStart={props.onDragStart({ id: props.value })}
                onDragOver={props.onDragOver({ id: props.value })}
                onDrop={props.onDrop({ id: props.value })}
            >
                <div className="content">{props.box}</div>

            </div>
        );
    }

    const swapBoxes = (fromBox: any, toBox: any) => {

        let boxes = buffer.slice();
        let fromIndex = -1;
        let toIndex = -1;

        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].key === fromBox.id) {
                fromIndex = i;
            }
            if (boxes[i].key === toBox.id) {
                toIndex = i;
            }
        }

        if (fromIndex != -1 && toIndex != -1) {
            let { fromId, ...fromRest } = boxes[fromIndex];
            let { toId, ...toRest } = boxes[toIndex];
            boxes[fromIndex] = { id: fromBox.id, ...toRest };
            boxes[toIndex] = { id: toBox.id, ...fromRest };
            setBuffer(boxes);
        }
    };

    const handleDragStart = (data: any) => (event: any) => {
        let fromBox = JSON.stringify({ id: data.id });
        event.dataTransfer.setData("dragContent", fromBox);
    };

    const handleDragOver = (data: any) => (event: any) => {

        event.preventDefault(); // Necessary. Allows us to drop.
        return false;
    };

    const handleDrop = (data: any) => (event: any) => {
        event.preventDefault();

        let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
        let toBox = { id: data.id };

        swapBoxes(fromBox, toBox);
        return false;
    };

    const makeBoxes = () => {
        return buffer.map((boxes: any) => (
            <Box
                box={boxes.value}
                key={boxes.key}
                draggable="true"
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                value={boxes.key}
            />
        ));
    };

    return (
        <div className={styles.main_dashboardWrap}>
            <CommonDashHeader />

            {/* home top area */}
            <div className={styles.home_top}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-6 col-12'>
                            <div className={styles.home_topLeft}>
                                <h2>Dashboard</h2>
                                <a href='#!'>Commercial</a>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 col-12'>
                            <div className={styles.home_topRight}>
                                <button className={styles.back_btn} onClick={() => { navigate('/') }}>Back to Home</button>
                                <button className={styles.manage_btn} onClick={() => { setWidgets(!widgets) }}>Manage Widgets</button>
                                {widgets && <div className={styles.widger_drpdown}>
                                    <label className={styles.container_check}>Profile
                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                        <span className={styles.checkmark}></span>
                                    </label>
                                    <label className={styles.container_check}>Reward Points
                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                        <span className={styles.checkmark}></span>
                                    </label>
                                    <label className={styles.container_check}>Quick Settings
                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                        <span className={styles.checkmark}></span>
                                    </label>
                                    <label className={styles.container_check}>Donate Pot
                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                        <span className={styles.checkmark}></span>
                                    </label>
                                    <label className={styles.container_check}>My Sale
                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                        <span className={styles.checkmark}></span>
                                    </label>
                                    <label className={styles.container_check}>Public Profile
                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                        <span className={styles.checkmark}></span>
                                    </label>

                                    <p className='mb-3'>Group 1</p>

                                    {widgetsVal.map((value: any, index: any) => (
                                        <div className={styles.widget_togleRow_img} onClick={() => handleCheckbox(value, index)}>
                                            {toggleCheckbox.includes(index) ? <img src={require('../../assets/images/checkbox-on.png')}
                                                alt=""
                                                onClick={() => { console.log(buffer.includes(0)) }}
                                                className={styles.img}
                                            /> :
                                                <img src={require('../../assets/images/checkbox-off.png')}
                                                    alt=""
                                                    className={styles.img}
                                                />}
                                            <label key={value}>{value}</label>
                                        </div>
                                    ))}
                                    <a href='#!'>Add Group</a>
                                </div>}
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
                                <a href='#!'>Widgets</a>
                                <a href='#!'>Public Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* top tab end */}

            {/* widgets */}
            <div className={styles.widgets_wrap}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className={styles.widgets_box}>
                                <div className={styles.widgets_boxContant}>
                                    <div className={styles.widgets_profile}>
                                        <div className={styles.profile_img}>
                                            <img src={require('../../assets/images/Profile.png')}
                                                alt=""
                                                className={styles.img}
                                            />
                                        </div>
                                        <div className={styles.profile_detail}>
                                            <h2>Jonathan Jameson
                                                <img src={require('../../assets/images/Subtraction 10.png')}
                                                    alt=""
                                                    className={styles.img}
                                                /> </h2>
                                            <h3>xyz@gmail.com</h3>
                                            <p>
                                                <img src={require('../../assets/images/commercial-buld.png')}
                                                    alt=""
                                                    className={styles.img}
                                                />
                                                Riidco shop <span>99.2%</span></p>
                                        </div>
                                        <div className={styles.profile_toggle}>
                                            <img src={require('../../assets/images/Path 581.png')}
                                                alt=""
                                                className={styles.img}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.widgets_rating}>
                                        <div className={styles.rating_box}>
                                            <h2>4.0</h2>
                                            <div className={styles.stars}>
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
                                            <p>Average Review</p>
                                            <span>67 Ratings</span>
                                        </div>
                                        <div className={styles.border}></div>
                                        <div className={styles.rating_box}>
                                            <h2>2345</h2>
                                            <p>Reward Points</p>
                                            <span>Get More</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={`mt-4 ${styles.widgets_box}`}>
                                <div className={styles.widgets_boxContant}>
                                    <div className={styles.widgets_profile}>
                                        <div className={styles.profile_detail}>
                                            <h2>Donate Pot</h2>
                                        </div>
                                        <div className={styles.profile_toggle}>
                                            <img src={require('../../assets/images/Path 581.png')}
                                                alt=""
                                                className={styles.img}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.widgets_lineGraph}>
                                        <div className={styles.lineGraph}>
                                            <ReactApexChart options={donatePot} series={donateSeries} type="area" height={300} width={400} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className={styles.widgets_box}>
                                <div className={styles.widgets_boxContant}>
                                    <div className={styles.widgets_profile}>
                                        <div className={styles.profile_detail}>
                                            <h2>Jonathan Jameson</h2>
                                        </div>
                                        <div className={styles.profile_toggle}>
                                            <img src={require('../../assets/images/Path 581.png')}
                                                alt=""
                                                className={styles.img}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.widgets_reward}>
                                        <h2>
                                            <span>You have</span>
                                            <br />
                                            2345 Reward Points
                                        </h2>
                                        <button className={styles.get_reward}>Get More</button>
                                    </div>

                                </div>
                            </div>

                            <div className={`mt-4 ${styles.widgets_box}`}>
                                <div className={styles.widgets_boxContant}>
                                    <div className={styles.widgets_profile}>
                                        <div className={styles.profile_detail}>
                                            <h2>My Sale</h2>
                                        </div>
                                        <div className={styles.profile_toggle}>
                                            <img src={require('../../assets/images/Path 581.png')}
                                                alt=""
                                                className={styles.img}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.widgets_circleGraph}>
                                        <div className={styles.circleGraph}>
                                            <ReactApexChart options={mySale} series={saleSeries} type="donut" height={300} width={400} />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className={styles.salesTab}>
                                        <a className={tabValue === 'marketplace' ? styles.active : styles.inactive} onClick={() => { setTabValue('marketplace') }}>Marketplace</a>
                                        <a className={tabValue === 'booking' ? styles.active : styles.inactive} onClick={() => { setTabValue('booking') }}>Booking</a>
                                        <a className={tabValue === 'deals' ? styles.active : styles.inactive} onClick={() => { setTabValue('deals') }}>Deals</a>
                                    </div>
                                    <div className={styles.marketplace_list_row}>
                                        <div className={styles.marketplace_list_col}>
                                            <p>
                                                <span className={styles.name}>Goods added</span>
                                                <span className={styles.number}>4567</span>
                                            </p>
                                            <p>
                                                <span className={styles.name}>Completed</span>
                                                <span className={styles.number}>1235</span>
                                            </p>
                                            <p>
                                                <span className={styles.name}>On Hold</span>
                                                <span className={styles.number}>234</span>
                                            </p>
                                        </div>
                                        <div className={styles.marketplace_list_col}>
                                            <p>
                                                <span className={styles.name}>Goods Sold</span>
                                                <span className={styles.number}>654</span>
                                            </p>
                                            <p>
                                                <span className={styles.name}>Processing</span>
                                                <span className={styles.number}>763</span>
                                            </p>
                                            <p>
                                                <span className={styles.name}>Cancelled</span>
                                                <span className={styles.number}>456</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className={styles.widgets_box}>
                                <div className={styles.widgets_boxContant}>
                                    <div className={styles.widgets_profile}>
                                        <div className={styles.profile_detail}>
                                            <h2>Quick Settings</h2>
                                        </div>
                                        <div className={styles.profile_toggle}>
                                            <img src={require('../../assets/images/Path 581.png')}
                                                alt=""
                                                className={styles.img}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.widgets_toggle}>
                                        <div className={styles.section_togleRow}>
                                            {array.map((options: any, index: any) => (
                                                <label key={options}><span>{options}</span>
                                                    <div className={styles.section_togleRow_img} onClick={() => handleClick(options, index)}>
                                                        {toggle.includes(index) ? <img src={require('../../assets/images/switch-off.svg').default}
                                                            alt=""
                                                            className={styles.active_billing}
                                                        /> :
                                                            <img src={require('../../assets/images/switch-on.svg').default}
                                                                alt=""
                                                                className={styles.active_billing}
                                                            />}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-4 ${styles.widgets_box}`}>
                                <div className={styles.widgets_boxContant}>
                                    <div className={styles.widgets_profile}>
                                        <div className={styles.profile_detail}>
                                            <h2>Public Profile</h2>
                                        </div>
                                        <div className={styles.profile_toggle}>
                                            <img src={require('../../assets/images/Path 581.png')}
                                                alt=""
                                                className={styles.img}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.widgets_columGraph}>
                                        <div className={styles.columGraph}>
                                            <ReactApexChart options={publicProfile} series={publicSeries} type="bar" height={300} width={400} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* group hr */}
                    <div className='row align-items-center'>
                        <div className='col-md-12 col-sm-12 col-5 pr-0'>
                            <div className={`mt-4 ${styles.border_group}`}>
                                <div className={styles.widgets_hr}>
                                    <hr></hr>
                                </div>
                                <div className={styles.widgets_or}>
                                    <p>Group 1
                                        <img src={require('../../assets/images/close-black.svg').default}
                                            alt=""
                                        />
                                    </p>
                                </div>
                                <div className={styles.widgets_hr}>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* group hr end */}

                    <div className='row'>
                        {makeBoxes()}
                    </div>

                </div>
            </div>
            {/* widgets end */}
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
        </div>
    )
}

export default Dashboard