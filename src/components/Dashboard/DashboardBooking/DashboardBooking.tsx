import React, { useCallback, useState } from 'react'
import styles from './DashboardBooking.module.css'
import CommonDashHeader from 'components/Shared/CommonDashHeader/CommonDashHeader'
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter'
import Cropper from 'react-easy-crop';
import ReactApexChart from 'react-apexcharts';
import Select from "react-select";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import BigCalendar from 'components/Shared/BigCalendar/BigCalendar';
import { NavigateFunction, useNavigate } from 'react-router-dom'

const DashboardBooking = () => {
    let navigate: NavigateFunction = useNavigate();
    const [tabValue, setTabValue] = useState<any>('visits');
    const [btnValue, setBtnValue] = useState<any>('day');
    const [subTabValue, setSubTabValue] = useState<any>('Push in Booking Categories');
    const [editProfile, setEditProfile] = useState<boolean>(false);
    const [newClient, setNewClient] = useState<boolean>(false);
    const [blockUser, setBlockUser] = useState<boolean>(false);
    const [upload, setUpload] = useState<boolean>(false);
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [catPopup, setCatPopup] = useState<boolean>(false)
    const [editService, setEditService] = useState<boolean>(false);
    const [addService, setAddService] = useState<boolean>(false);
    const [advancedOpt, setAdvancedOpt] = useState<boolean>(false);
    const [editMember, setEditMember] = useState<boolean>(false);
    const [newMember, setNewMember] = useState<boolean>(false);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState<any>([]);
    const [isCheckNotCatAll, setIsCheckNotCatAll] = useState(false);
    const [isCheckNotCat, setIsCheckNotCat] = useState<any>([]);
    const [isCheckConcAll, setIsCheckConcAll] = useState(false);
    const [isCheckConc, setIsCheckConc] = useState<any>([]);
    const [isCheckBeautyAll, setIsCheckBeautyAll] = useState(false);
    const [isCheckBeauty, setIsCheckBeauty] = useState<any>([]);
    const [popup, setPopup] = useState<boolean>(false);
    const [addVisitPopup, setAddVisitPopup] = useState<boolean>(false);
    const [linkPopup, setLinkPopup] = useState<boolean>(false);
    const [dateState, setDateState] = useState(new Date());

    const changeDate = (e: any) => {
        setDateState(e)
    }
    const [companyList] = useState([{
        id: "1",
        name: "Antory Morris"
    },
    {
        id: "2",
        name: "Bogdan Smith"
    },
    {
        id: "3",
        name: "Brett Bishep"
    }]);
    const [list] = useState([{
        id: "1",
        name: "Acrylic Full Set Pearl/French Extension Tips"
    },
    {
        id: "2",
        name: "Barber hair"
    },
    {
        id: "3",
        name: "Acrylic Full Set Pearl/French Extension Tips"
    },
    {
        id: "4",
        name: "Barber hair"
    }]);

    const [notCategorizedList] = useState([{
        id: "1",
        name: "Barber Hair"
    }]);
    const [concList] = useState([{
        id: "1",
        name: "Acrylic Full Set Pearl/French Extension Tips"
    }, {
        id: "2",
        name: "Barber hair"
    },
    ]);
    const [beautyList] = useState([{
        id: "1",
        name: "Barber Hair"
    }]);

    const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])

    const handleSelectAll = (e: any) => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map((li: any) => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };
    const handleMemberSelectAll = (e: any) => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(companyList.map((li: any) => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleNotCategorized = (e: any) => {
        setIsCheckNotCatAll(!isCheckNotCatAll);
        setIsCheckNotCat(notCategorizedList.map((li: any) => li.id));
        if (isCheckNotCatAll) {
            setIsCheckNotCat([]);
        }
    };
    const handleConc = (e: any) => {
        setIsCheckConcAll(!isCheckConcAll);
        setIsCheckConc(concList.map((li: any) => li.id));
        if (isCheckConcAll) {
            setIsCheckConc([]);
        }
    };
    const handleBeauty = (e: any) => {
        setIsCheckBeautyAll(!isCheckBeautyAll);
        setIsCheckBeauty(beautyList.map((li: any) => li.id));
        if (isCheckBeautyAll) {
            setIsCheckBeauty([]);
        }
    };

    const handleClick = (e: any) => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter((item: any) => item !== id));
        }
    };
    const handleClickNotCat = (e: any) => {
        const { id, checked } = e.target;
        setIsCheckNotCat([...isCheckNotCat, id]);
        if (!checked) {
            setIsCheckNotCat(isCheckNotCat.filter((item: any) => item !== id));
        }
    };
    const handleClickConc = (e: any) => {
        const { id, checked } = e.target;
        setIsCheckConc([...isCheckConc, id]);
        if (!checked) {
            setIsCheckConc(isCheckConc.filter((item: any) => item !== id));
        }
    };
    const handleClickBeauty = (e: any) => {
        const { id, checked } = e.target;
        setIsCheckBeauty([...isCheckBeauty, id]);
        if (!checked) {
            setIsCheckBeauty(isCheckBeauty.filter((item: any) => item !== id));
        }
    };

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
            offsetX: -8,
            style: {
                fontSize: '14px',
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
    const [publicSeries] = useState<any>([{
        data: [67, 22, 0, 10, 1]
    }])

    const colourOptions = [
        { value: "Up to 15 mins before start time", label: "Up to 15 mins before start time" },
        { value: "Up to 30 mins before start time", label: "Up to 30 mins before start time" },
        { value: "Up to 1 hour before start time", label: "Up to 1 hour before start time" },
        { value: "Up to 2 hour before start time", label: "Up to 2 hour before start time" },
    ];

    const colourStyles = {
        option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
            // const color = chroma(data.color);
            console.log({ data, isDisabled, isFocused, isSelected });
            return {
                ...styles,
                backgroundColor: isFocused ? "#fe3c72" : null,
                color: "#121212"
            };
        }
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
                                <h2>Booking</h2>
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
                                <a className={tabValue === 'visits' ? styles.active : styles.inactive} onClick={() => { setTabValue('visits') }}>Visits</a>
                                <a className={tabValue === 'sales' ? styles.active : styles.inactive} onClick={() => { setTabValue('sales') }}>Sales</a>
                                <a className={tabValue === 'clients' ? styles.active : styles.inactive} onClick={() => { setTabValue('clients') }}>Clients</a>
                                <a className={tabValue === 'company' ? styles.active : styles.inactive} onClick={() => { setTabValue('company') }}>Company</a>
                                <a className={tabValue === 'members' ? styles.active : styles.inactive} onClick={() => { setTabValue('members') }}>Members</a>
                                <a className={tabValue === 'portfolio' ? styles.active : styles.inactive} onClick={() => { setTabValue('portfolio') }}>Portfolio</a>
                                <a className={tabValue === 'marketing' ? styles.active : styles.inactive} onClick={() => { setTabValue('marketing') }}>Marketing</a>
                                <a className={tabValue === 'reviews' ? styles.active : styles.inactive} onClick={() => { setTabValue('reviews') }}>Reviews</a>
                                <a className={tabValue === 'statistics' ? styles.active : styles.inactive} onClick={() => { setTabValue('statistics') }}>Statistics</a>
                                <a className={tabValue === 'settings' ? styles.active : styles.inactive} onClick={() => { setTabValue('settings') }}>Settings</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* top tab end */}

            {tabValue === 'visits' && <div className={styles.event_wrap}>
                <div className='container-fluid'>
                    {/*  */}
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row align-items-center'>
                                        <div className='col-md-6'>
                                            <div className={styles.d_topLeft}>
                                                <h2>
                                                    <img className={styles.arrow_left} src={require('../../../assets/images/arrow-left.png')} alt="" />
                                                    Wednesday, April 3, 2019
                                                    <img className={styles.arrow_right} src={require('../../../assets/images/arrow-right.png')} alt="" />
                                                </h2>
                                                <p>
                                                    <span className={btnValue === 'day' ? styles.day_active : styles.day} onClick={() => { setBtnValue('day') }}>Day</span>
                                                    <span className={btnValue === 'week' ? styles.week_active : styles.week} onClick={() => { setBtnValue('week') }}>Week</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className={styles.d_topRight}>
                                                <button className={styles.back}>Back to Home</button>
                                                <button className={styles.visit} onClick={() => { setAddVisitPopup(true) }}>Add Visit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {btnValue === 'day' && <div className='row mt-4'>
                        <div className='col-md-4'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.d_left}>
                                                <Calendar value={dateState}
                                                    onChange={changeDate} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`mt-4 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.d_left}>
                                                <div className={styles.d_left_title}>
                                                    <h2>
                                                        <span className={styles.today}>Today</span>
                                                        <span className={styles.visit}>4 Visits</span>
                                                    </h2>
                                                </div>
                                                <div className={styles.d_left_list}>
                                                    <p>Martin<span>(1)</span></p>
                                                    <p>Andrey<span>(1)</span></p>
                                                    <p>Misha<span>(1)</span></p>
                                                    <p>Clark<span>(1)</span></p>
                                                </div>
                                                <div className={styles.d_left_clientCol}>
                                                    <div className={`${styles.d_left_clientRow} ${styles.d_left_clientRow_bggray}`}>
                                                        <h2>Barber hair</h2>
                                                        <div className={styles.name_row}>
                                                            <p><span>10:00 - 10:45</span> &nbsp;&nbsp; <span>Cavin Done</span></p>
                                                            <p><span>From Martin</span></p>
                                                        </div>
                                                    </div>
                                                    <div className={`${styles.d_left_clientRow} ${styles.d_left_clientRow_border}`}>
                                                        <h2>Acrylic Full Set Pearl/French Extension Tips</h2>
                                                        <div className={styles.name_row}>
                                                            <p><span>11:45 - 12:45</span> &nbsp;&nbsp; <span>John Doe</span></p>
                                                            <p><span>From Andrey</span></p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.d_left_clientRow}>
                                                        <h2>Men’s Haircut with Hot Towel Shave</h2>
                                                        <div className={styles.name_row}>
                                                            <p><span>14:00 - 14:30</span> &nbsp;&nbsp; <span>Caneron Deas</span></p>
                                                            <p><span>From Misha</span></p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.d_left_clientRow}>
                                                        <h2>Man Massage</h2>
                                                        <div className={styles.name_row}>
                                                            <p><span>16:30 - 17:45</span> &nbsp;&nbsp; <span>Bill Kent</span></p>
                                                            <p><span>From Clark</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className='row'>
                                    <div className='col'>
                                        <a href='#!' className={`${styles.invite_clientbtn}`}>
                                            <img src={require('../../../assets/images/Plus_active.png')}
                                                alt="" />
                                            Invite Clients
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-8'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.d_right}>
                                                <BigCalendar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}

                    {btnValue === 'week' && <div className='row mt-4'>
                        <div className='col-md-4'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.d_left}>
                                                <Calendar value={dateState}
                                                    onChange={changeDate} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`mt-4 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.d_left}>
                                                <div className={styles.d_left_title}>
                                                    <h2>
                                                        <span className={styles.today}>April 8 - April 17</span>
                                                        <span className={styles.visit}>9 Visits</span>
                                                    </h2>
                                                </div>
                                                <div className={styles.d_left_list}>
                                                    <p>Martin<span>(2)</span></p>
                                                    <p className={styles.p_gray}>Andrey<span>(0)</span></p>
                                                    <p>Misha<span>(4)</span></p>
                                                    <p>Clark<span>(2)</span></p>
                                                </div>
                                                <div className={`mt-4 mb-4 ${styles.d_left_title}`}>
                                                    <h2>
                                                        <span className={`${styles.today} ${styles.today_gray}`}>Monday, 8</span>
                                                        <span className={`${styles.visit} ${styles.visit_gray}`}>2 Visits</span>
                                                    </h2>
                                                </div>
                                                <div className={styles.d_left_clientCol}>
                                                    <div className={`${styles.d_left_clientRow} ${styles.d_left_clientRow_bggray}`}>
                                                        <h2>Barber hair</h2>
                                                        <div className={styles.name_row}>
                                                            <p><span>10:00 - 10:45</span> &nbsp;&nbsp; <span>Cavin Done</span></p>
                                                            <p><span>By Martin</span></p>
                                                        </div>
                                                    </div>
                                                    <div className={`${styles.d_left_clientRow} ${styles.d_left_clientRow_bggray}`}>
                                                        <h2>Lifting</h2>
                                                        <div className={styles.name_row}>
                                                            <p><span>13:00 - 13:45</span> &nbsp;&nbsp; <span>Brett Willson</span></p>
                                                            <p><span>By Andrey</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`mt-4 mb-4 ${styles.d_left_title}`}>
                                                    <h2>
                                                        <span className={`${styles.today}`}>Tuesday, 9</span>
                                                        <span className={`${styles.visit}`}>3 Visits</span>
                                                    </h2>
                                                </div>
                                                <div className={styles.d_left_clientCol}>
                                                    <div className={`${styles.d_left_clientRow} ${styles.d_left_clientRow_border}`}>
                                                        <h2>Acrylic Full Set Pearl/French Extension Tips</h2>
                                                        <div className={styles.name_row}>
                                                            <p><span>11:45 - 12:45</span> &nbsp;&nbsp; <span>John Doe</span></p>
                                                            <p><span>By Misha</span></p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.d_left_clientRow}>
                                                        <h2>Men’s Haircut with Hot Towel Shave</h2>
                                                        <div className={styles.name_row}>
                                                            <p><span>14:00 - 14:30</span> &nbsp;&nbsp; <span>Caneron Deas</span></p>
                                                            <p><span>By Clark</span></p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.d_left_clientRow}>
                                                        <h2>Man Massage</h2>
                                                        <div className={styles.name_row}>
                                                            <p><span>16:30 - 17:45</span> &nbsp;&nbsp; <span>Bill Kent</span></p>
                                                            <p><span>By Misha</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`mt-4 mb-4 ${styles.d_left_title}`}>
                                                    <h2>
                                                        <span className={`${styles.today}`}>Wednesday, 10</span>
                                                        <span className={`${styles.visit} ${styles.visit_black}`}>1 Visits</span>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className='row'>
                                    <div className='col'>
                                        <a href='#!' className={`${styles.invite_clientbtn}`}>
                                            <img src={require('../../../assets/images/Plus_active.png')}
                                                alt="" />
                                            Invite Clients
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-8'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.d_right}>
                                                <BigCalendar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}

                </div>
            </div>}

            {tabValue === 'clients' && <div className={styles.event_wrap}>
                <div className='container-fluid'>

                    <div className='row mt-4'>
                        <div className='col-md-4'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={`h-100 ${styles.itemBox_main}`}>
                                    <div className='row h-100'>
                                        <div className='col'>
                                            <div className={`h-100 ${styles.col_1}`}>
                                                {/*  */}
                                                <div className={styles.reviewSearch_wrap}>
                                                    <div className={styles.help_searchBox}>
                                                        <div className={styles.search}>
                                                            <img src={require('../../../assets/images/search-1.svg').default}
                                                                alt=""
                                                            />
                                                            <input type="text" className={styles.form_control_feedback} placeholder="Search Family Member" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*  */}
                                                <div className={styles.member_wrap}>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Antory Morris
                                                                <small>+1 345 356 4567</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Andrew Tane
                                                                <small>+1 545 767 9876</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Bogdan Smith
                                                                <small>+1 756 534 7565</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Brett Bishep
                                                                <small>+1 112 543 645</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Cyla Matthews
                                                                <small>+1 756 534 7565</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Christopher Jhyla
                                                                <small>+1 112 543 645</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Christopher Jhyla
                                                                <small>+1 112 543 645</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Christopher Jhyla
                                                                <small>+1 112 543 645</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*  */}
                                                <div className={styles.add_member}>
                                                    <div className={styles.add_member_row}>
                                                        <a href='javascript:void(0)' onClick={() => { setNewClient(true) }}>
                                                            <img src={require('../../../assets/images/Plus_active.png')}
                                                                alt=""
                                                            />
                                                            New Client
                                                        </a>
                                                    </div>
                                                </div>
                                                {/*  */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-8'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    {/* client base */}
                                    {!editProfile && !newClient && <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={`border-bottom-0 ${styles.profile_view}`}>
                                                    <div className={styles.profile_detail}>
                                                        <div className={styles.user_col}>
                                                            <div className={styles.user_image}>
                                                                <img src={require('../../../assets/images/upload-usr.png')}
                                                                    alt="" className={styles.img1} />
                                                            </div>
                                                            <div className={styles.user_name}>
                                                                <h2>Andrew Tane</h2>
                                                                <span>+1 545 767 9876</span>
                                                                <span>xyz@gmail.com</span>
                                                            </div>
                                                            <div className={styles.userEdit_icon}>
                                                                <img src={require('../../../assets/images/notes.svg').default}
                                                                    alt="" className={styles.img1}
                                                                    onClick={() => { setEditProfile(true) }} />
                                                            </div>
                                                        </div>
                                                        <div className={styles.profile_boxes}>
                                                            <div className={styles.box}>
                                                                <p>23</p>
                                                                <span>Bookings</span>
                                                            </div>
                                                            <div className={styles.box}>
                                                                <p>19</p>
                                                                <span>Finished</span>
                                                            </div>
                                                            <div className={styles.box}>
                                                                <p>4</p>
                                                                <span>Cancelled</span>
                                                            </div>
                                                            <div className={styles.box}>
                                                                <p>0</p>
                                                                <span>No-Shows</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={styles.price_row}>
                                                        <div className={styles.total_price}>
                                                            <span>Total revenue from client:</span>
                                                            <p>$17.70</p>
                                                        </div>
                                                        <div className={styles.total_price}>
                                                            <span>Discount:</span>
                                                            <p>0%</p>
                                                        </div>
                                                    </div>

                                                    <div className={styles.profile_text_wrap}>
                                                        <div className={styles.profile_text_row}>
                                                            <div className={styles.col_left}>
                                                                <h3>Acrylic Full Set Pearl/French Extension Tips</h3>
                                                                <p>
                                                                    <span>March 27, 2019 14:00 - 14:30</span>
                                                                    <span>From Martin</span>
                                                                </p>
                                                            </div>
                                                            <div className={styles.col_right}>
                                                                <h3>$55.00</h3>
                                                                <p>90 Min</p>
                                                            </div>
                                                        </div>
                                                        <div className={styles.profile_text_row}>
                                                            <div className={styles.col_left}>
                                                                <h3>Barber hair</h3>
                                                                <p>
                                                                    <span>March 27, 2019 14:00 - 14:30</span>
                                                                    <span>From Martin</span>
                                                                </p>
                                                            </div>
                                                            <div className={styles.col_right}>
                                                                <h3 className={styles.canceled}>Cancelled</h3>
                                                            </div>
                                                        </div>
                                                        <div className={styles.profile_text_row}>
                                                            <div className={styles.col_left}>
                                                                <h3>Men’s Haircut with Hot Towel Shave</h3>
                                                                <p>
                                                                    <span>March 27, 2019 14:00 - 14:30</span>
                                                                    <span>From Martin</span>
                                                                </p>
                                                            </div>
                                                            <div className={styles.col_right}>
                                                                <h3>$88.00</h3>
                                                                <p>90 Min</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                                    {/* edit client */}
                                    {editProfile && !newClient && <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={styles.new_memberTitle}>
                                                    <h2>
                                                        Edit Profile
                                                    </h2>
                                                </div>
                                                <div className={styles.profile_edit}>
                                                    <div className={styles.profile_upload}>
                                                        <div className={styles.upload_img}>
                                                            <img src={require('../../../assets/images/upload-usr.png')}
                                                                alt="" className={styles.img1} />
                                                            <img src={require('../../../assets/images/plus.svg').default}
                                                                alt="" className={styles.img2} />
                                                        </div>
                                                        <p>Drag & Drop <br></br> Client Profile Photo</p>
                                                        <a href='#!'>Upload</a>
                                                    </div>
                                                    <div className={styles.profile_form}>
                                                        <form>
                                                            <div className='row'>
                                                                <div className='col-md-6'>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Client Name</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Andrew" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Client Surname</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Tane" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-5'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Phone Number</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>+380</option>
                                                                                    <option>+380</option>
                                                                                    <option>+380</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-7'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Phone Number</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="98 78 67 675" id="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Email Address</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="xuz@gmail.com" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-7'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Street</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Liberty" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-5'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Number</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="4" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-7'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">City</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="London" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-5'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Postcode</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="123456" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Country</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Ukraine" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Internal note</label>
                                                                                <textarea rows={4} className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the' />
                                                                                <small className={styles.word_count}>11/40</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Allergens</label>
                                                                                <textarea rows={4} className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush' />
                                                                                <small className={styles.word_count}>11/40</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Birthday</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>25</option>
                                                                                    <option>25</option>
                                                                                    <option>25</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Birthday</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>04</option>
                                                                                    <option>04</option>
                                                                                    <option>04</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Birthday</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>Year</option>
                                                                                    <option>Year</option>
                                                                                    <option>Year</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Discount %</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="10" id="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>

                                                <div className='row align-items-center'>
                                                    <div className='col-md-5'>
                                                        <div className={`form-group ${styles.form_group}`}>
                                                            <div className={`d-flex justify-content-between ${styles.form_groupBtn}`}>
                                                                <label >
                                                                    <div className={`mr-3 ${styles.togleRow_img}`}>
                                                                        <img src={require('../../../assets/images/close-active.png')}
                                                                            alt=""
                                                                            className={styles.img}
                                                                        />
                                                                    </div>
                                                                    <span>Delete User</span>

                                                                </label>
                                                                <label ><span>Block User</span>
                                                                    <div className={styles.togleRow_img} onClick={() => { setBlockUser(!blockUser) }}>
                                                                        {blockUser ? <img src={require('../../../assets/images/switch-on.svg').default}
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
                                                    <div className='col-md-7'>
                                                        <div className={`form-group ${styles.form_group}`}>
                                                            <div className={styles.form_groupBtn}>
                                                                <button className={styles.Btn1} onClick={() => { setEditProfile(false) }}>Cancel</button>
                                                                <button className={styles.Btn2}>Save Changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                                    {/* new client */}
                                    {newClient && <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={styles.new_memberTitle}>
                                                    <h2>
                                                        New Client
                                                    </h2>
                                                </div>
                                                <div className={`border-bottom-0 ${styles.profile_edit}`}>
                                                    <div className={styles.profile_upload}>
                                                        <div className={styles.upload_img}>
                                                            <img src={require('../../../assets/images/upload-usr.png')}
                                                                alt="" className={styles.img1} />
                                                            <img src={require('../../../assets/images/plus.svg').default}
                                                                alt="" className={styles.img2} />
                                                        </div>
                                                        <p>Drag & Drop <br></br> Client Profile Photo</p>
                                                        <a href='#!' onClick={() => { setUpload(true) }}>Upload</a>
                                                    </div>
                                                    <div className={styles.profile_form}>
                                                        <form>
                                                            <div className='row'>
                                                                <div className='col-md-6'>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Client Name</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Andrew" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Client Surname</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Tane" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-5'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Phone Number</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>+380</option>
                                                                                    <option>+380</option>
                                                                                    <option>+380</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-7'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Phone Number</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="98 78 67 675" id="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Email Address</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="xuz@gmail.com" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-7'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Street</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Liberty" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-5'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Number</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="4" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-7'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">City</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="London" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-5'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Postcode</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="123456" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Country</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Ukraine" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Internal note</label>
                                                                                <textarea rows={4} className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the' />
                                                                                <small className={styles.word_count}>11/40</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Allergens</label>
                                                                                <textarea rows={4} className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush' />
                                                                                <small className={styles.word_count}>11/40</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Birthday</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>25</option>
                                                                                    <option>25</option>
                                                                                    <option>25</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Birthday</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>04</option>
                                                                                    <option>04</option>
                                                                                    <option>04</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Birthday</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>Year</option>
                                                                                    <option>Year</option>
                                                                                    <option>Year</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Discount %</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="10" id="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>

                                                <div className='row align-items-center'>
                                                    <div className='col-md-12'>
                                                        <div className={`form-group ${styles.form_group}`}>
                                                            <div className={styles.form_groupBtn}>
                                                                <button className={styles.Btn1} onClick={() => { setNewClient(false) }}>Cancel</button>
                                                                <button className={styles.Btn2}>Save Changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>

                        {upload && <div className={styles.search_saved}>
                            <div className={styles.form_popup}>
                                <div className={styles.form_popup_sub}>
                                    <img src={require('../../../assets/images/dots.svg').default}
                                        alt=""
                                        className={styles.dots1_popup}
                                    />
                                    <img src={require('../../../assets/images/close-black.svg').default}
                                        alt=""
                                        className={styles.close_popup}
                                        onClick={() => { setUpload(false) }}
                                    />

                                    <div className={styles.formBody_popup}>

                                        <h1 className={styles.h1_popup}>Add Photo</h1>
                                        <hr className={styles.rectangle}></hr>
                                        <h3 className={styles.h3_popup}>Drag & Drop crop area, to indicate most important part of image</h3>

                                        <div className={styles.popup_cropper}>
                                            <Cropper
                                                image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
                                                crop={crop}
                                                zoom={zoom}
                                                aspect={4 / 3}
                                                onCropChange={setCrop}
                                                onCropComplete={onCropComplete}
                                                onZoomChange={setZoom}
                                            />
                                        </div>

                                        <h3 className={`mt-2 ${styles.h3_popup}`}>slide to zoom-in or zoom-out</h3>
                                        <div className={styles.range_slide}>
                                            <input
                                                type="range"
                                                value={zoom}
                                                min={1}
                                                max={3}
                                                step={0.1}
                                                aria-labelledby="Zoom"
                                                onChange={(e: any) => {
                                                    setZoom(e.target.value)
                                                }}
                                                className="zoom-range"
                                            />
                                        </div>

                                        <button className={styles.popup_btn} onClick={() => { setUpload(false) }}>Send</button>
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
            </div>}

            {tabValue === 'company' && <div className={styles.event_wrap}>
                <div className='container-fluid'>
                    {!editService && !addService && <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={styles.new_memberTitle}>
                                                    <h2>
                                                        Company Info
                                                    </h2>
                                                </div>
                                                <div className={`border-bottom-0 ${styles.profile_edit}`}>
                                                    <div className={styles.profile_upload}>
                                                        <div className={styles.upload_img}>
                                                            <img src={require('../../../assets/images/upload-usr.png')}
                                                                alt="" className={styles.img1} />
                                                            <img src={require('../../../assets/images/plus.svg').default}
                                                                alt="" className={styles.img2} />
                                                        </div>
                                                        <p>Drag & Drop <br></br> Client Profile Photo</p>
                                                        <a href='#!' onClick={() => { setUpload(true) }}>Upload</a>
                                                    </div>
                                                    <div className={styles.profile_form}>
                                                        <form>
                                                            <div className='row'>
                                                                <div className='col-md-6'>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Business Name</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Andrew" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Name of Salon</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Pixel Perfect Barber shop" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-5'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Business Phone Number</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>+380</option>
                                                                                    <option>+380</option>
                                                                                    <option>+380</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-7'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Phone Number</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="98 78 67 675" id="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Email Address</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="xuz@gmail.com" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Short Description</label>
                                                                                <textarea rows={4} className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from the rotating sprayer heads is left on the decals for too long The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from the rotating sprayer heads is left on the decals for too long' />
                                                                                <small className={styles.word_count}>11/40</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                    <div className='row'>
                                                                        <div className='col-md-8'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Street</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Liberty" id="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Number</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="4" id="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-8'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">City</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="London" id="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Postcode</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="123456" id="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Country</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Ukraine" id="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <img src={require('../../../assets/images/map-image.png')}
                                                                                    alt="" className={styles.map_img} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}

                    {!editService && !addService && <div className='row mt-4'>
                        <div className='col-md-6'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={styles.new_memberTitle}>
                                                    <h2>
                                                        Working Hours
                                                    </h2>
                                                </div>
                                                <div className={`border-bottom-0 ${styles.hours_main}`}>
                                                    <div className={styles.profile_form}>
                                                        <form>
                                                            <div className='row'>
                                                                <div className='col-md-12'>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Monday
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Time From</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>10:00</option>
                                                                                    <option>10:00</option>
                                                                                    <option>10:00</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Time to</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>19:00</option>
                                                                                    <option>19:00</option>
                                                                                    <option>19:00</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr className={styles.hours_hr}></hr>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Tuesday
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Time From</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>10:00</option>
                                                                                    <option>10:00</option>
                                                                                    <option>10:00</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Time to</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>19:00</option>
                                                                                    <option>19:00</option>
                                                                                    <option>19:00</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr className={styles.hours_hr}></hr>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Wednesday
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Time From</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>10:00</option>
                                                                                    <option>10:00</option>
                                                                                    <option>10:00</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Time to</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>19:00</option>
                                                                                    <option>19:00</option>
                                                                                    <option>19:00</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr className={styles.hours_hr}></hr>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Thursday
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Time From</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>10:00</option>
                                                                                    <option>10:00</option>
                                                                                    <option>10:00</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Time to</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>19:00</option>
                                                                                    <option>19:00</option>
                                                                                    <option>19:00</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr className={styles.hours_hr}></hr>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Friday
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Time From</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>10:00</option>
                                                                                    <option>10:00</option>
                                                                                    <option>10:00</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Time to</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>19:00</option>
                                                                                    <option>19:00</option>
                                                                                    <option>19:00</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr className={styles.hours_hr}></hr>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Saturday
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr className={styles.hours_hr}></hr>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Sunday
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr className={styles.hours_hr}></hr>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={styles.new_memberTitle}>
                                                    <h2>
                                                        Business Categories
                                                    </h2>
                                                </div>
                                                <div className={`border-bottom-0 ${styles.hours_main}`}>
                                                    <div className={styles.profile_form}>
                                                        <form>
                                                            <div className='row'>
                                                                <div className='col-md-6'>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}>
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Beauty Salons
                                                                                </label>
                                                                            </div>
                                                                            <hr className={styles.hours_hr}></hr>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Craftsman
                                                                                </label>
                                                                            </div>
                                                                            <hr className={styles.hours_hr}></hr>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Concierge
                                                                                </label>
                                                                            </div>
                                                                            <hr className={styles.hours_hr}></hr>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Day Spa
                                                                                </label>
                                                                            </div>
                                                                            <hr className={styles.hours_hr}></hr>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Dentist
                                                                                </label>
                                                                            </div>
                                                                            <hr className={styles.hours_hr}></hr>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Home Services
                                                                                </label>
                                                                            </div>
                                                                            <hr className={styles.hours_hr}></hr>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Makeup Artist
                                                                                </label>
                                                                                <img src={require('../../../assets/images/baseline-up.png')}
                                                                                    alt="" className={styles.arrow} />
                                                                            </div>
                                                                            <hr className={styles.hours_hr}></hr>
                                                                            <div className='col-md-12 ml-3'>
                                                                                <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                    <label className={styles.container_check}   >
                                                                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                        <span className={styles.checkmark}></span>
                                                                                        Makeup Wedding
                                                                                    </label>
                                                                                </div>
                                                                                <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                    <label className={styles.container_check}   >
                                                                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                        <span className={styles.checkmark}></span>
                                                                                        Makeup
                                                                                    </label>
                                                                                </div>
                                                                                <hr className={styles.hours_hr}></hr>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Pet Service
                                                                                </label>
                                                                            </div>
                                                                            <hr className={styles.hours_hr}></hr>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Hair Stylist
                                                                                </label>
                                                                                <img src={require('../../../assets/images/baseline-up.png')}
                                                                                    alt="" className={styles.arrow} />
                                                                            </div>
                                                                            <hr className={styles.hours_hr}></hr>
                                                                            <div className='col-md-12 ml-3'>
                                                                                <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                    <label className={styles.container_check}   >
                                                                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                        <span className={styles.checkmark}></span>
                                                                                        Barber
                                                                                    </label>
                                                                                </div>
                                                                                <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                    <label className={styles.container_check}   >
                                                                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                        <span className={styles.checkmark}></span>
                                                                                        HairSalon
                                                                                    </label>
                                                                                </div>
                                                                                <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                    <label className={styles.container_check}   >
                                                                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                        <span className={styles.checkmark}></span>
                                                                                        Weeding
                                                                                    </label>
                                                                                </div>
                                                                                <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                    <label className={styles.container_check}   >
                                                                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                        <span className={styles.checkmark}></span>
                                                                                        Hair Stylist
                                                                                    </label>
                                                                                </div>
                                                                                <hr className={styles.hours_hr}></hr>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Training & Learnings
                                                                                </label>
                                                                                <img src={require('../../../assets/images/baseline-up.png')}
                                                                                    alt="" className={styles.arrow} />
                                                                            </div>
                                                                            <hr className={styles.hours_hr}></hr>
                                                                            <div className='col-md-12 ml-3'>
                                                                                <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                    <label className={styles.container_check}   >
                                                                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                        <span className={styles.checkmark}></span>
                                                                                        Groupe
                                                                                    </label>
                                                                                </div>
                                                                                <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                    <label className={styles.container_check}   >
                                                                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                        <span className={styles.checkmark}></span>
                                                                                        Personal
                                                                                    </label>
                                                                                </div>
                                                                                <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                    <label className={styles.container_check}   >
                                                                                        <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                        <span className={styles.checkmark}></span>
                                                                                        Martial arts
                                                                                    </label>
                                                                                </div>
                                                                                <hr className={styles.hours_hr}></hr>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group} ${styles.form_group_check}`}>
                                                                                <label className={styles.container_check}   >
                                                                                    <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                    Tattoo & Piercing Shops
                                                                                </label>
                                                                            </div>
                                                                            <hr className={styles.hours_hr}></hr>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}

                    {!editService && !addService && <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={`mb-0 ${styles.new_memberTitle}`}>
                                                    <h2>
                                                        Services
                                                    </h2>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-4'>
                                                        <div className='row h-100'>
                                                            <div className='col'>
                                                                <div className={`h-100 ${styles.col_1}`}>
                                                                    <h2 className={`${styles.left_title}`}>Service Categories</h2>
                                                                    {/*  */}
                                                                    <div className={`${styles.reviewSearch_wrap}`}>
                                                                        <div className={styles.help_searchBox}>
                                                                            <div className={styles.search}>
                                                                                <img src={require('../../../assets/images/search-1.svg').default}
                                                                                    alt=""
                                                                                />
                                                                                <input type="text" className={styles.form_control_feedback} placeholder="Search Service" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/*  */}
                                                                    <div className={`${styles.member_wrap}  ${styles.category_wrap}`}>
                                                                        <div className={`${styles.category_row} ${styles.category_row_active}`}>
                                                                            <div className={styles.colLeft}>
                                                                                <p>All Categories</p>
                                                                            </div>
                                                                            <div className={styles.colRight}>
                                                                                <span>15 Services</span>
                                                                                <img src={require('../../../assets/images/notes.svg').default}
                                                                                    alt=""
                                                                                    onClick={() => { setEditService(true) }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.category_row}>
                                                                            <div className={styles.colLeft}>
                                                                                <p>Not categorized</p>
                                                                            </div>
                                                                            <div className={styles.colRight}>
                                                                                <span>6 Services</span>
                                                                                <img src={require('../../../assets/images/notes.svg').default}
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                        </div>

                                                                        <div className={styles.category_row}>
                                                                            <div className={styles.colLeft}>
                                                                                <p>Concierge</p>
                                                                            </div>
                                                                            <div className={styles.colRight}>
                                                                                <span>5 Services</span>
                                                                                <img src={require('../../../assets/images/notes.svg').default}
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.category_row}>
                                                                            <div className={styles.colLeft}>
                                                                                <p>For Woman</p>
                                                                            </div>
                                                                            <div className={styles.colRight}>
                                                                                <span>4 Services</span>
                                                                                <img src={require('../../../assets/images/notes.svg').default}
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {catPopup && <div className={styles.add_categoryBox}>
                                                                        <div className={styles.categoryBox_form}>
                                                                            <h2 className={styles.new_categoryTitle}>New Category</h2>
                                                                            <form>
                                                                                <div className='row'>
                                                                                    <div className='col-md-12'>
                                                                                        <div className='row'>
                                                                                            <div className='col-md-12'>
                                                                                                <div className={`form-group ${styles.form_group}`}>
                                                                                                    <label htmlFor="">Category name</label>
                                                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="London" id="" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row'>
                                                                                            <div className='col-md-12'>
                                                                                                <div className={`form-group ${styles.form_group}`}>
                                                                                                    <label htmlFor="">Display Mode</label>
                                                                                                    <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                                        <option>Show all</option>
                                                                                                        <option>Show all</option>
                                                                                                        <option>Show all</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row'>
                                                                                            <div className='col-md-6'>
                                                                                                <div className={`form-group ${styles.form_groupBtn}`}>
                                                                                                    <button className={styles.cancel} onClick={() => { setCatPopup(false) }}>Cancel</button>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-md-6'>
                                                                                                <div className={`form-group ${styles.form_groupBtn}`}>
                                                                                                    <button className={styles.save}>Save Category</button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>}

                                                                    {/*  */}
                                                                    {!catPopup && <div className={styles.add_member}>
                                                                        <div className={styles.add_member_row}>
                                                                            <a href='javascript:void(0)' onClick={() => { setCatPopup(true) }}>
                                                                                <img src={require('../../../assets/images/Plus_active.png')}
                                                                                    alt=""
                                                                                />
                                                                                New Category
                                                                            </a>
                                                                        </div>
                                                                    </div>}
                                                                    {/*  */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='col-md-8'>
                                                        <div className='row h-100'>
                                                            <div className='col'>
                                                                <div className={`h-100 ${styles.col_2} ${styles.Scol_2}`}>
                                                                    <h2 className={`${styles.right_title}`}>All Categories - Services</h2>
                                                                    <div className={`${styles.all_servicesMain}`}>
                                                                        <div className={`${styles.servicesRow_wrap}`}>
                                                                            <div className={`${styles.servicesRow}`}>
                                                                                <div className={`${styles.servicesRow_col1}`}>
                                                                                    <p>Acrylic Full Set Pearl/French Extension Tips</p>
                                                                                    <span>For Man</span>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow_col2}`}>
                                                                                    <p>
                                                                                        $55.00
                                                                                        <br></br>
                                                                                        <span>30min</span>
                                                                                    </p>
                                                                                    <img src={require('../../../assets/images/baseline-up.png')}
                                                                                        alt="" className={styles.arrow} />
                                                                                </div>
                                                                            </div>
                                                                            <div className={`${styles.servicesRow}`}>
                                                                                <div className={`${styles.servicesRow_col1}`}>
                                                                                    <p>Barber hair</p>
                                                                                    <span>For Man</span>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow_col2}`}>
                                                                                    <p>
                                                                                        $55.00
                                                                                        <br></br>
                                                                                        <span>30min</span>
                                                                                    </p>
                                                                                    <img src={require('../../../assets/images/baseline-up.png')}
                                                                                        alt="" className={styles.arrow} />
                                                                                </div>
                                                                            </div>
                                                                            <div className={`${styles.servicesRow}`}>
                                                                                <div className={`${styles.servicesRow_col1}`}>
                                                                                    <p>Massage</p>
                                                                                    <span>Not categorized</span>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow_col2}`}>
                                                                                    <p>
                                                                                        $55.00
                                                                                        <br></br>
                                                                                        <span>30min</span>
                                                                                    </p>
                                                                                    <img src={require('../../../assets/images/baseline-up.png')}
                                                                                        alt="" className={styles.arrow} />
                                                                                </div>
                                                                            </div>
                                                                            <div className={`${styles.servicesRow}`}>
                                                                                <div className={`${styles.servicesRow_col1}`}>
                                                                                    <p>Men’s Haircut with Hot Towel Shave</p>
                                                                                    <span>For Man</span>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow_col2}`}>
                                                                                    <p>
                                                                                        $55.00
                                                                                        <br></br>
                                                                                        <span>30min</span>
                                                                                    </p>
                                                                                    <img src={require('../../../assets/images/baseline-up.png')}
                                                                                        alt="" className={styles.arrow} />
                                                                                </div>
                                                                            </div>
                                                                            <div className={`${styles.servicesRow}`}>
                                                                                <div className={`${styles.servicesRow_col1}`}>
                                                                                    <p>Massage</p>
                                                                                    <span>Not categorized</span>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow_col2}`}>
                                                                                    <p>
                                                                                        $55.00
                                                                                        <br></br>
                                                                                        <span>30min</span>
                                                                                    </p>
                                                                                    <img src={require('../../../assets/images/baseline-up.png')}
                                                                                        alt="" className={styles.arrow} />
                                                                                </div>
                                                                            </div>
                                                                            <div className={`${styles.servicesRow}`}>
                                                                                <div className={`${styles.servicesRow_col1}`}>
                                                                                    <p>Women’s Haircut with Hot Towel Shave</p>
                                                                                    <span>For Woman</span>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow_col2}`}>
                                                                                    <p>
                                                                                        $55.00
                                                                                        <br></br>
                                                                                        <span>30min</span>
                                                                                    </p>
                                                                                    <img src={require('../../../assets/images/baseline-up.png')}
                                                                                        alt="" className={styles.arrow} />
                                                                                </div>
                                                                            </div>
                                                                            <div className={`${styles.servicesRow}`}>
                                                                                <div className={`${styles.servicesRow_col1}`}>
                                                                                    <p>Women’s Haircut with Hot Towel Shave</p>
                                                                                    <span>For Woman</span>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow_col2}`}>
                                                                                    <p>
                                                                                        $55.00
                                                                                        <br></br>
                                                                                        <span>30min</span>
                                                                                    </p>
                                                                                    <img src={require('../../../assets/images/baseline-up.png')}
                                                                                        alt="" className={styles.arrow} />
                                                                                </div>
                                                                            </div>
                                                                            <div className={`${styles.servicesRow}`}>
                                                                                <div className={`${styles.servicesRow_col1}`}>
                                                                                    <p>Women’s Haircut with Hot Towel Shave</p>
                                                                                    <span>For Woman</span>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow_col2}`}>
                                                                                    <p>
                                                                                        $55.00
                                                                                        <br></br>
                                                                                        <span>30min</span>
                                                                                    </p>
                                                                                    <img src={require('../../../assets/images/baseline-up.png')}
                                                                                        alt="" className={styles.arrow} />
                                                                                </div>
                                                                            </div>
                                                                            <div className={`${styles.servicesRow}`}>
                                                                                <div className={`${styles.servicesRow_col1}`}>
                                                                                    <p>Women’s Haircut with Hot Towel Shave</p>
                                                                                    <span>For Woman</span>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow_col2}`}>
                                                                                    <p>
                                                                                        $55.00
                                                                                        <br></br>
                                                                                        <span>30min</span>
                                                                                    </p>
                                                                                    <img src={require('../../../assets/images/baseline-up.png')}
                                                                                        alt="" className={styles.arrow} />
                                                                                </div>
                                                                            </div>
                                                                            <div className={`${styles.servicesRow}`}>
                                                                                <div className={`${styles.servicesRow_col1}`}>
                                                                                    <p>Women’s Haircut with Hot Towel Shave</p>
                                                                                    <span>For Woman</span>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow_col2}`}>
                                                                                    <p>
                                                                                        $55.00
                                                                                        <br></br>
                                                                                        <span>30min</span>
                                                                                    </p>
                                                                                    <img src={require('../../../assets/images/baseline-up.png')}
                                                                                        alt="" className={styles.arrow} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/*  */}
                                                                    <div className={styles.add_member}>
                                                                        <div className={`justify-content-start pl-4 ${styles.add_member_row}`}>
                                                                            <a href='javascript:void(0)' onClick={() => { setAddService(true) }}>
                                                                                <img src={require('../../../assets/images/Plus_active.png')}
                                                                                    alt=""
                                                                                />
                                                                                New Service
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    {/*  */}

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

                    {/* edit service */}
                    {editService && <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={styles.new_memberTitle}>
                                                    <h2>
                                                        Edit Service
                                                    </h2>
                                                </div>
                                                <div className={`border-bottom-0 ${styles.profile_edit}`}>
                                                    <div className={styles.profile_form}>
                                                        <form>
                                                            <div className='row'>
                                                                <div className='col-md-4'>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Service Name</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Acrylic Full Set Pearl/French Extension Tips" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Service in Category</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>For Man</option>
                                                                                    <option>For Man</option>
                                                                                    <option>For Man</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-6'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Duration</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>0 Hours</option>
                                                                                    <option>0 Hours</option>
                                                                                    <option>0 Hours</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-6'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Business Phone Number</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>20 Mins</option>
                                                                                    <option>20 Mins</option>
                                                                                    <option>20 Mins</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Price</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="$15,00" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row mt-3'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                                <div className={styles.groupCheck_row}>
                                                                                    <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                                        <p>Members</p>
                                                                                        <label className={styles.container_check}>
                                                                                            Select All
                                                                                            <input className={styles.checkbox}
                                                                                                type="checkbox"
                                                                                                name="selectAll"
                                                                                                id="selectAll"
                                                                                                onClick={handleMemberSelectAll}
                                                                                                checked={isCheckAll}
                                                                                            />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>

                                                                                    {companyList.map(({ id, name }) => (<div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                                        <p className={styles.p_dark}>{name}</p>
                                                                                        <label className={styles.container_check}>
                                                                                            <input className={styles.checkbox}
                                                                                                key={id}
                                                                                                type="checkbox"
                                                                                                name={name}
                                                                                                id={id}
                                                                                                onClick={handleClick}
                                                                                                checked={isCheck.includes(id)}
                                                                                            />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>))}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-8'>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Service Description</label>
                                                                                <textarea rows={4} className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from the rotating sprayer heads is left on the decals for too long The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from the rotating sprayer heads is left on the decals for too long' />
                                                                                <small className={styles.word_count}>11/40</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Note for Client</label>
                                                                                <textarea rows={4} className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from the rotating sprayer heads is left on the decals for too long The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from the rotating sprayer heads is left on the decals for too long' />
                                                                                <small className={styles.word_count}>11/40</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <div className={`${styles.form_groupBtn} ${styles.group_togle}`}>
                                                                                    <div className='row'>
                                                                                        <div className='col-sm-6'>
                                                                                            <div className={styles.advanced_togle}>
                                                                                                <label ><span>Advanced Options</span>
                                                                                                    <div className={styles.togleRow_img} onClick={() => { setAdvancedOpt(!advancedOpt) }}>
                                                                                                        {advancedOpt ? <img src={require('../../../assets/images/switch-on.svg').default}
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
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Padding Time</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>After</option>
                                                                                    <option>After</option>
                                                                                    <option>After</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Number</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>20 Mins</option>
                                                                                    <option>20 Mins</option>
                                                                                    <option>20 Mins</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div className='col-md-6'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Parallel Clients</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>Yes</option>
                                                                                    <option>Yes</option>
                                                                                    <option>Yes</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Processing Time During the Service</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>0 H</option>
                                                                                    <option>0 H</option>
                                                                                    <option>0 H</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Number</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>0 Mins</option>
                                                                                    <option>0 Mins</option>
                                                                                    <option>0 Mins</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className=''>Processing Time After the Service</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>0 H</option>
                                                                                    <option>0 H</option>
                                                                                    <option>0 H</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Number</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>20 Mins</option>
                                                                                    <option>20 Mins</option>
                                                                                    <option>20 Mins</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Interval</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>0 H</option>
                                                                                    <option>0 H</option>
                                                                                    <option>0 H</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Number</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>30 Mins</option>
                                                                                    <option>30 Mins</option>
                                                                                    <option>30 Mins</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div className='col-md-6'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Tax Rate</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>5.00%</option>
                                                                                    <option>5.00%</option>
                                                                                    <option>5.00%</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <hr></hr>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-4'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <div className={styles.form_groupBtn}>
                                                                                    <label >
                                                                                        <div className={`mr-3 ${styles.togleRow_img}`}>
                                                                                            <img src={require('../../../assets/images/close-active.png')}
                                                                                                alt=""
                                                                                                className={styles.img}
                                                                                            />
                                                                                        </div>
                                                                                        <span>Delete Service</span>

                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-8'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <div className={styles.form_groupBtn}>
                                                                                    <button className={styles.Btn1} onClick={() => { setEditService(false) }}>Cancel</button>
                                                                                    <button className={styles.Btn2}>Save Chandes</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {/* edit service end */}

                    {/* add service */}
                    {addService && <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={styles.new_memberTitle}>
                                                    <h2>
                                                        Add Service
                                                    </h2>
                                                </div>
                                                <div className={`border-bottom-0 ${styles.profile_edit}`}>
                                                    <div className={styles.profile_form}>
                                                        <form>
                                                            <div className='row'>
                                                                <div className='col-md-4'>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Service Name</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="Acrylic Full Set Pearl/French Extension Tips" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Service in Category</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>For Man</option>
                                                                                    <option>For Man</option>
                                                                                    <option>For Man</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-6'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Duration</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>0 Hours</option>
                                                                                    <option>0 Hours</option>
                                                                                    <option>0 Hours</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-6'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Business Phone Number</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>20 Mins</option>
                                                                                    <option>20 Mins</option>
                                                                                    <option>20 Mins</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Price</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="$15,00" id="" />
                                                                                {/* <small className={styles.word_count}>11/40</small> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row mt-3'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                                <div className={styles.groupCheck_row}>
                                                                                    <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                                        <p>Members</p>
                                                                                        <label className={styles.container_check}>
                                                                                            Select All
                                                                                            <input className={styles.checkbox}
                                                                                                type="checkbox"
                                                                                                name="selectAll"
                                                                                                id="selectAll"
                                                                                                onClick={handleMemberSelectAll}
                                                                                                checked={isCheckAll}
                                                                                            />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>

                                                                                    {companyList.map(({ id, name }) => (<div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                                        <p className={styles.p_dark}>{name}</p>
                                                                                        <label className={styles.container_check}>
                                                                                            <input className={styles.checkbox}
                                                                                                key={id}
                                                                                                type="checkbox"
                                                                                                name={name}
                                                                                                id={id}
                                                                                                onClick={handleClick}
                                                                                                checked={isCheck.includes(id)}
                                                                                            />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>))}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-8'>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Service Description</label>
                                                                                <textarea rows={4} className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from the rotating sprayer heads is left on the decals for too long The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from the rotating sprayer heads is left on the decals for too long' />
                                                                                <small className={styles.word_count}>11/40</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Note for Client</label>
                                                                                <textarea rows={4} className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from the rotating sprayer heads is left on the decals for too long The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from the rotating sprayer heads is left on the decals for too long' />
                                                                                <small className={styles.word_count}>11/40</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <div className={`${styles.form_groupBtn} ${styles.group_togle}`}>
                                                                                    <div className='row'>
                                                                                        <div className='col-sm-6'>
                                                                                            <div className={styles.advanced_togle}>
                                                                                                <label ><span>Advanced Options</span>
                                                                                                    <div className={styles.togleRow_img} onClick={() => { setAdvancedOpt(!advancedOpt) }}>
                                                                                                        {advancedOpt ? <img src={require('../../../assets/images/switch-on.svg').default}
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
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Padding Time</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>After</option>
                                                                                    <option>After</option>
                                                                                    <option>After</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Number</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>20 Mins</option>
                                                                                    <option>20 Mins</option>
                                                                                    <option>20 Mins</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div className='col-md-6'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Parallel Clients</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>Yes</option>
                                                                                    <option>Yes</option>
                                                                                    <option>Yes</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Processing Time During the Service</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>0 H</option>
                                                                                    <option>0 H</option>
                                                                                    <option>0 H</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Number</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>0 Mins</option>
                                                                                    <option>0 Mins</option>
                                                                                    <option>0 Mins</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className=''>Processing Time After the Service</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>0 H</option>
                                                                                    <option>0 H</option>
                                                                                    <option>0 H</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Number</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>20 Mins</option>
                                                                                    <option>20 Mins</option>
                                                                                    <option>20 Mins</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Interval</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>0 H</option>
                                                                                    <option>0 H</option>
                                                                                    <option>0 H</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-3'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='invisible'>Number</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>30 Mins</option>
                                                                                    <option>30 Mins</option>
                                                                                    <option>30 Mins</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div className='col-md-6'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Tax Rate</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>5.00%</option>
                                                                                    <option>5.00%</option>
                                                                                    <option>5.00%</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <hr></hr>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <div className={styles.form_groupBtn}>
                                                                                    <button className={styles.Btn1} onClick={() => { setAddService(false) }}>Cancel</button>
                                                                                    <button className={styles.Btn2}>Save Chandes</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {/* add service end */}

                </div>
            </div>}

            {tabValue === 'members' && <div className={styles.event_wrap}>
                <div className='container-fluid'>
                    <div className='row mt-4'>
                        <div className='col-md-4'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={`h-100 ${styles.itemBox_main}`}>
                                    <div className='row h-100'>
                                        <div className='col'>
                                            <div className={`h-100 ${styles.col_1}`}>
                                                {/*  */}
                                                <div className={styles.reviewSearch_wrap}>
                                                    <div className={styles.help_searchBox}>
                                                        <div className={styles.search}>
                                                            <img src={require('../../../assets/images/search-1.svg').default}
                                                                alt=""
                                                            />
                                                            <input type="text" className={styles.form_control_feedback} placeholder="Search Family Member" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*  */}
                                                <div className={styles.member_wrap}>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Antory Morris
                                                                <small>+1 345 356 4567</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Andrew Tane
                                                                <small>+1 545 767 9876</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Bogdan Smith
                                                                <small>+1 756 534 7565</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Brett Bishep
                                                                <small>+1 112 543 645</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Cyla Matthews
                                                                <small>+1 756 534 7565</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Christopher Jhyla
                                                                <small>+1 112 543 645</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Christopher Jhyla
                                                                <small>+1 112 543 645</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Christopher Jhyla
                                                                <small>+1 112 543 645</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*  */}
                                                <div className={styles.add_member}>
                                                    <div className={styles.add_member_row}>
                                                        <a href='javascript:void(0)' onClick={() => { setNewMember(true) }}>
                                                            <img src={require('../../../assets/images/Plus_active.png')}
                                                                alt=""
                                                            />
                                                            New Member
                                                        </a>
                                                    </div>
                                                </div>
                                                {/*  */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-8'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>

                                    {/* member */}
                                    {!editMember && !newMember && <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={`border-bottom-0 ${styles.profile_view}`}>
                                                    <div className={` ${styles.profile_detail} ${styles.members_detail}`}>
                                                        <div className={styles.user_col}>
                                                            <div className={styles.user_image}>
                                                                <img src={require('../../../assets/images/upload-usr.png')}
                                                                    alt="" className={styles.img1} />
                                                            </div>
                                                            <div className={styles.user_name}>
                                                                <h2>Andrew Tane</h2>
                                                                <span>+1 545 767 9876</span>
                                                                <span>xyz@gmail.com</span>
                                                            </div>
                                                            <div className={styles.userEdit_icon}>
                                                                <img src={require('../../../assets/images/notes.svg').default}
                                                                    alt="" className={styles.img1}
                                                                    onClick={() => { setEditMember(true) }} />
                                                            </div>
                                                        </div>
                                                        <div className={styles.calender_right}>
                                                            <p>
                                                                <img src={require('../../../assets/images/calender.png')}
                                                                    alt="" className={styles.img} />
                                                                <span>Show Calendar</span>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* tab */}
                                                    <div className={`${styles.home_topTab} ${styles.members_topTab}`}>
                                                        <div className=''>
                                                            <div className='row'>
                                                                <div className='col-md-12'>
                                                                    <div className={`${styles.topTab} ${styles.members_tab}`}>
                                                                        <a className={styles.active}>Services performed (7)</a>
                                                                        <a className={styles.inactive}>Working Hours</a>
                                                                        <a className={styles.inactive}>Incoming Time Off</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* tab end */}

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        <p>All Categories (4)</p>
                                                                        <label className={styles.container_check}>
                                                                            Select All
                                                                            <input className={styles.checkbox}
                                                                                type="checkbox"
                                                                                name="selectAll"
                                                                                id="selectAll"
                                                                                onClick={handleSelectAll}
                                                                                checked={isCheckAll}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>

                                                                    {list.map(({ id, name }) => (<div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        <p className={styles.p_dark}>{name}</p>
                                                                        <label className={styles.container_check}>
                                                                            <input className={styles.checkbox}
                                                                                key={id}
                                                                                type="checkbox"
                                                                                name={name}
                                                                                id={id}
                                                                                onClick={handleClick}
                                                                                checked={isCheck.includes(id)}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        <p>Not categorized (1)</p>
                                                                        <label className={styles.container_check}>
                                                                            <input className={styles.checkbox}
                                                                                type="checkbox"
                                                                                name="selectAll"
                                                                                id="selectAll"
                                                                                onClick={handleNotCategorized}
                                                                                checked={isCheckNotCatAll}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>

                                                                    {notCategorizedList.map(({ id, name }) => (<div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        <p className={styles.p_dark}>{name}</p>
                                                                        <label className={styles.container_check}>
                                                                            <input className={styles.checkbox}
                                                                                key={id}
                                                                                type="checkbox"
                                                                                name={name}
                                                                                id={id}
                                                                                onClick={handleClickNotCat}
                                                                                checked={isCheckNotCat.includes(id)}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        <p>Concierge (2)</p>
                                                                        <label className={styles.container_check}>
                                                                            <input className={styles.checkbox}
                                                                                type="checkbox"
                                                                                name="selectAll"
                                                                                id="selectAll"
                                                                                onClick={handleConc}
                                                                                checked={isCheckConcAll}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>

                                                                    {concList.map(({ id, name }) => (<div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        <p className={styles.p_dark}>{name}</p>
                                                                        <label className={styles.container_check}>
                                                                            <input className={styles.checkbox}
                                                                                key={id}
                                                                                type="checkbox"
                                                                                name={name}
                                                                                id={id}
                                                                                onClick={handleClickConc}
                                                                                checked={isCheckConc.includes(id)}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        <p>Beauty Salons (1)</p>
                                                                        <label className={styles.container_check}>
                                                                            <input className={styles.checkbox}
                                                                                type="checkbox"
                                                                                name="selectAll"
                                                                                id="selectAll"
                                                                                onClick={handleBeauty}
                                                                                checked={isCheckBeautyAll}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>

                                                                    {beautyList.map(({ id, name }) => (<div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        <p className={styles.p_dark}>{name}</p>
                                                                        <label className={styles.container_check}>
                                                                            <input className={styles.checkbox}
                                                                                key={id}
                                                                                type="checkbox"
                                                                                name={name}
                                                                                id={id}
                                                                                onClick={handleClickBeauty}
                                                                                checked={isCheckBeauty.includes(id)}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}

                                    {/* edit member */}
                                    {editMember && !newMember && <div className='row'>
                                        <div className='col'>
                                            <div className={styles.new_memberTitle}>
                                                <h2>
                                                    Edit Member
                                                </h2>
                                            </div>
                                            <div className={`${styles.profile_edit} ${styles.member_profile_edit}`}>
                                                <div className={styles.profile_upload}>
                                                    <div className={styles.upload_img}>
                                                        <img src={require('../../../assets/images/upload-usr.png')}
                                                            alt="" className={styles.img1} />
                                                        <img src={require('../../../assets/images/plus.svg').default}
                                                            alt="" className={styles.img2} />
                                                    </div>
                                                    <p>Drag & Drop <br></br> Client Profile Photo</p>
                                                    <a href='#!'>Upload</a>
                                                </div>
                                                <div className={styles.profile_form}>
                                                    <form>
                                                        <div className='row'>
                                                            <div className='col-sm-6'>
                                                                <div className='row'>
                                                                    <div className='col-md-12'>
                                                                        <div className={`form-group ${styles.form_group}`}>
                                                                            <label htmlFor="">Member Name</label>
                                                                            <input type="text" className={`form-control ${styles.form_control}`} placeholder="Andrew" id="" />
                                                                            {/* <small className={styles.word_count}>11/40</small> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-md-12'>
                                                                        <div className={`form-group ${styles.form_group}`}>
                                                                            <label htmlFor="">Member Surname</label>
                                                                            <input type="text" className={`form-control ${styles.form_control}`} placeholder="Tane" id="" />
                                                                            {/* <small className={styles.word_count}>11/40</small> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-md-5'>
                                                                        <div className={`form-group ${styles.form_group}`}>
                                                                            <label htmlFor="">Phone Number</label>
                                                                            <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                <option>+380</option>
                                                                                <option>+380</option>
                                                                                <option>+380</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-7'>
                                                                        <div className={`form-group ${styles.form_group}`}>
                                                                            <label htmlFor="" className='invisible'>Phone Number</label>
                                                                            <input type="text" className={`form-control ${styles.form_control}`} placeholder="98 78 67 675" id="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-md-12'>
                                                                        <div className={`form-group ${styles.form_group}`}>
                                                                            <label htmlFor="" className=''>Email Address</label>
                                                                            <input type="text" className={`form-control ${styles.form_control}`} placeholder="xuz@gmail.com" id="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-sm-6'>
                                                                <div className='row'>
                                                                    <div className='col-md-12'>
                                                                        <div className={`form-group ${styles.form_group}`}>
                                                                            <label htmlFor="">Describe staffer position or skills</label>
                                                                            <textarea rows={4} className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from the rotating sprayer heads is left on the decals for too long The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from' />
                                                                            <small className={styles.word_count}>11/40</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            <div className={styles.member_height}></div>

                                            <div className='row align-items-center'>
                                                <div className='col-md-4'>
                                                    <div className={`form-group ${styles.form_group}`}>
                                                        <div className={styles.form_groupBtn}>
                                                            <label >
                                                                <div className={`mr-3 ${styles.togleRow_img}`}>
                                                                    <img src={require('../../../assets/images/close-active.png')}
                                                                        alt=""
                                                                        className={styles.img}
                                                                    />
                                                                </div>
                                                                <span>Delete Member</span>

                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-8'>
                                                    <div className={`form-group ${styles.form_group}`}>
                                                        <div className={styles.form_groupBtn}>
                                                            <button className={styles.Btn1} onClick={() => { setEditMember(false) }}>Cancel</button>
                                                            <button className={styles.Btn2}>Save Changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>}

                                    {/* new member */}
                                    {newMember && <div className='row'>
                                        <div className='col'>
                                            <div className={styles.new_memberTitle}>
                                                <h2>
                                                    New Member
                                                </h2>
                                            </div>
                                            <div className={`${styles.profile_edit} ${styles.member_profile_edit}`}>
                                                <div className={styles.profile_upload}>
                                                    <div className={styles.upload_img}>
                                                        <img src={require('../../../assets/images/upload-usr.png')}
                                                            alt="" className={styles.img1} />
                                                        <img src={require('../../../assets/images/plus.svg').default}
                                                            alt="" className={styles.img2} />
                                                    </div>
                                                    <p>Drag & Drop <br></br> Client Profile Photo</p>
                                                    <a href='#!'>Upload</a>
                                                </div>
                                                <div className={styles.profile_form}>
                                                    <form>
                                                        <div className='row'>
                                                            <div className='col-sm-6'>
                                                                <div className='row'>
                                                                    <div className='col-md-12'>
                                                                        <div className={`form-group ${styles.form_group}`}>
                                                                            <label htmlFor="">Member Name</label>
                                                                            <input type="text" className={`form-control ${styles.form_control}`} placeholder="Andrew" id="" />
                                                                            {/* <small className={styles.word_count}>11/40</small> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-md-12'>
                                                                        <div className={`form-group ${styles.form_group}`}>
                                                                            <label htmlFor="">Member Surname</label>
                                                                            <input type="text" className={`form-control ${styles.form_control}`} placeholder="Tane" id="" />
                                                                            {/* <small className={styles.word_count}>11/40</small> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-md-5'>
                                                                        <div className={`form-group ${styles.form_group}`}>
                                                                            <label htmlFor="">Phone Number</label>
                                                                            <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                <option>+380</option>
                                                                                <option>+380</option>
                                                                                <option>+380</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-7'>
                                                                        <div className={`form-group ${styles.form_group}`}>
                                                                            <label htmlFor="" className='invisible'>Phone Number</label>
                                                                            <input type="text" className={`form-control ${styles.form_control}`} placeholder="98 78 67 675" id="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-md-12'>
                                                                        <div className={`form-group ${styles.form_group}`}>
                                                                            <label htmlFor="" className=''>Email Address</label>
                                                                            <input type="text" className={`form-control ${styles.form_control}`} placeholder="xuz@gmail.com" id="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-sm-6'>
                                                                <div className='row'>
                                                                    <div className='col-md-12'>
                                                                        <div className={`form-group ${styles.form_group}`}>
                                                                            <label htmlFor="">Describe staffer position or skills</label>
                                                                            <textarea rows={4} className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from the rotating sprayer heads is left on the decals for too long The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I believe if the spray from' />
                                                                            <small className={styles.word_count}>11/40</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className={`form-group ${styles.form_groupCheck}`}>
                                                        <div className={styles.groupCheck_row}>
                                                            <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                <p>All Categories (4)</p>
                                                                <label className={styles.container_check}>
                                                                    Select All
                                                                    <input className={styles.checkbox}
                                                                        type="checkbox"
                                                                        name="selectAll"
                                                                        id="selectAll"
                                                                        onClick={handleSelectAll}
                                                                        checked={isCheckAll}
                                                                    />
                                                                    <span className={styles.checkmark}></span>
                                                                </label>
                                                            </div>

                                                            {list.map(({ id, name }) => (<div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                <p className={styles.p_dark}>{name}</p>
                                                                <label className={styles.container_check}>
                                                                    <input className={styles.checkbox}
                                                                        key={id}
                                                                        type="checkbox"
                                                                        name={name}
                                                                        id={id}
                                                                        onClick={handleClick}
                                                                        checked={isCheck.includes(id)}
                                                                    />
                                                                    <span className={styles.checkmark}></span>
                                                                </label>
                                                            </div>))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className={`form-group ${styles.form_groupCheck}`}>
                                                        <div className={styles.groupCheck_row}>
                                                            <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                <p>Not categorized (1)</p>
                                                                <label className={styles.container_check}>
                                                                    <input className={styles.checkbox}
                                                                        type="checkbox"
                                                                        name="selectAll"
                                                                        id="selectAll"
                                                                        onClick={handleNotCategorized}
                                                                        checked={isCheckNotCatAll}
                                                                    />
                                                                    <span className={styles.checkmark}></span>
                                                                </label>
                                                            </div>

                                                            {notCategorizedList.map(({ id, name }) => (<div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                <p className={styles.p_dark}>{name}</p>
                                                                <label className={styles.container_check}>
                                                                    <input className={styles.checkbox}
                                                                        key={id}
                                                                        type="checkbox"
                                                                        name={name}
                                                                        id={id}
                                                                        onClick={handleClickNotCat}
                                                                        checked={isCheckNotCat.includes(id)}
                                                                    />
                                                                    <span className={styles.checkmark}></span>
                                                                </label>
                                                            </div>))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className={`form-group ${styles.form_groupCheck}`}>
                                                        <div className={styles.groupCheck_row}>
                                                            <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                <p>Concierge (2)</p>
                                                                <label className={styles.container_check}>
                                                                    <input className={styles.checkbox}
                                                                        type="checkbox"
                                                                        name="selectAll"
                                                                        id="selectAll"
                                                                        onClick={handleConc}
                                                                        checked={isCheckConcAll}
                                                                    />
                                                                    <span className={styles.checkmark}></span>
                                                                </label>
                                                            </div>

                                                            {concList.map(({ id, name }) => (<div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                <p className={styles.p_dark}>{name}</p>
                                                                <label className={styles.container_check}>
                                                                    <input className={styles.checkbox}
                                                                        key={id}
                                                                        type="checkbox"
                                                                        name={name}
                                                                        id={id}
                                                                        onClick={handleClickConc}
                                                                        checked={isCheckConc.includes(id)}
                                                                    />
                                                                    <span className={styles.checkmark}></span>
                                                                </label>
                                                            </div>))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className={`form-group ${styles.form_groupCheck}`}>
                                                        <div className={styles.groupCheck_row}>
                                                            <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                <p>Beauty Salons (1)</p>
                                                                <label className={styles.container_check}>
                                                                    <input className={styles.checkbox}
                                                                        type="checkbox"
                                                                        name="selectAll"
                                                                        id="selectAll"
                                                                        onClick={handleBeauty}
                                                                        checked={isCheckBeautyAll}
                                                                    />
                                                                    <span className={styles.checkmark}></span>
                                                                </label>
                                                            </div>

                                                            {beautyList.map(({ id, name }) => (<div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                <p className={styles.p_dark}>{name}</p>
                                                                <label className={styles.container_check}>
                                                                    <input className={styles.checkbox}
                                                                        key={id}
                                                                        type="checkbox"
                                                                        name={name}
                                                                        id={id}
                                                                        onClick={handleClickBeauty}
                                                                        checked={isCheckBeauty.includes(id)}
                                                                    />
                                                                    <span className={styles.checkmark}></span>
                                                                </label>
                                                            </div>))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row align-items-center'>
                                                <div className='col-md-12'>
                                                    <div className={`form-group ${styles.form_group}`}>
                                                        <div className={styles.form_groupBtn}>
                                                            <button className={styles.Btn1} onClick={() => { setNewMember(false) }}>Cancel</button>
                                                            <button className={styles.Btn2}>Save Changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>}

                                </div>
                            </div>
                        </div>

                        {upload && <div className={styles.search_saved}>
                            <div className={styles.form_popup}>
                                <div className={styles.form_popup_sub}>
                                    <img src={require('../../../assets/images/dots.svg').default}
                                        alt=""
                                        className={styles.dots1_popup}
                                    />
                                    <img src={require('../../../assets/images/close-black.svg').default}
                                        alt=""
                                        className={styles.close_popup}
                                        onClick={() => { setUpload(false) }}
                                    />

                                    <div className={styles.formBody_popup}>

                                        <h1 className={styles.h1_popup}>Add Photo</h1>
                                        <hr className={styles.rectangle}></hr>
                                        <h3 className={styles.h3_popup}>Drag & Drop crop area, to indicate most important part of image</h3>

                                        <div className={styles.popup_cropper}>
                                            <Cropper
                                                image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
                                                crop={crop}
                                                zoom={zoom}
                                                aspect={4 / 3}
                                                onCropChange={setCrop}
                                                onCropComplete={onCropComplete}
                                                onZoomChange={setZoom}
                                            />
                                        </div>

                                        <h3 className={`mt-2 ${styles.h3_popup}`}>slide to zoom-in or zoom-out</h3>
                                        <div className={styles.range_slide}>
                                            <input
                                                type="range"
                                                value={zoom}
                                                min={1}
                                                max={3}
                                                step={0.1}
                                                aria-labelledby="Zoom"
                                                onChange={(e: any) => {
                                                    setZoom(e.target.value)
                                                }}
                                                className="zoom-range"
                                            />
                                        </div>

                                        <button className={styles.popup_btn} onClick={() => { setUpload(false) }}>Send</button>
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
            </div>}

            {tabValue === 'portfolio' && <div className={styles.event_wrap}>
                {/*  */}
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className={`row mt-0 ${styles.col_row}`}>

                                                <div className={styles.col}>
                                                    <div className={styles.card_market}>
                                                        <div className='position-relative'>
                                                            <div className={`${styles.card_top}`}>
                                                                <div className={styles.card_topLeft}>
                                                                    <img src={require('../../../assets/images/like-active.png')}
                                                                        alt=""
                                                                    />
                                                                    <span>1</span>
                                                                </div>
                                                                <div className={styles.card_topRight}>
                                                                    <img src={require('../../../assets/images/close-black.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <img className={styles.card_img_top} src={require('../../../assets/images/portfolio-6.png')} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.col}>
                                                    <div className={styles.card_market}>
                                                        <div className='position-relative'>
                                                            <div className={`${styles.card_top}`}>
                                                                <div className={styles.card_topLeft}>
                                                                    <img src={require('../../../assets/images/like-active.png')}
                                                                        alt=""
                                                                    />
                                                                    <span>1</span>
                                                                </div>
                                                                <div className={styles.card_topRight}>
                                                                    <img src={require('../../../assets/images/close-black.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <img className={styles.card_img_top} src={require('../../../assets/images/portfolio-2.png')} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.col}>
                                                    <div className={styles.card_market}>
                                                        <div className='position-relative'>
                                                            <div className={`${styles.card_top}`}>
                                                                <div className={styles.card_topLeft}>
                                                                    <img src={require('../../../assets/images/dislike.png')}
                                                                        alt=""
                                                                    />
                                                                    {/* <span>1</span> */}
                                                                </div>
                                                                <div className={styles.card_topRight}>
                                                                    <img src={require('../../../assets/images/close-black.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <img className={styles.card_img_top} src={require('../../../assets/images/portfolio-3.png')} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.col}>
                                                    <div className={styles.card_market}>
                                                        <div className='position-relative'>
                                                            <div className={`${styles.card_top}`}>
                                                                <div className={styles.card_topLeft}>
                                                                    <img src={require('../../../assets/images/dislike.png')}
                                                                        alt=""
                                                                    />
                                                                    {/* <span>1</span> */}
                                                                </div>
                                                                <div className={styles.card_topRight}>
                                                                    <img src={require('../../../assets/images/close-black.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <img className={styles.card_img_top} src={require('../../../assets/images/portfolio-4.png')} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`row mt-4 ${styles.col_row}`}>
                                                <div className={styles.col}>
                                                    <div className={styles.card_market}>
                                                        <div className='position-relative'>
                                                            <div className={`${styles.card_top}`}>
                                                                <div className={styles.card_topLeft}>
                                                                    <img src={require('../../../assets/images/dislike.png')}
                                                                        alt=""
                                                                    />
                                                                    {/* <span>1</span> */}
                                                                </div>
                                                                <div className={styles.card_topRight}>
                                                                    <img src={require('../../../assets/images/close-black.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <img className={styles.card_img_top} src={require('../../../assets/images/portfolio-5.png')} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.col}>
                                                    <div className={styles.card_market}>
                                                        <div className='position-relative'>
                                                            <div className={`${styles.card_top}`}>
                                                                <div className={styles.card_topLeft}>
                                                                    <img src={require('../../../assets/images/dislike.png')}
                                                                        alt=""
                                                                    />
                                                                    {/* <span>1</span> */}
                                                                </div>
                                                                <div className={styles.card_topRight}>
                                                                    <img src={require('../../../assets/images/close-black.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <img className={styles.card_img_top} src={require('../../../assets/images/portfolio-6.png')} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.col}>
                                                    <div className={styles.card_market}>
                                                        <div className='position-relative'>
                                                            <div className={`${styles.profile_upload} ${styles.portfoliophoto_upload}`}>
                                                                <p>Add Photo</p>
                                                                <div className={styles.upload_img}>
                                                                    <img src={require('../../../assets/images/upload-path.png')}
                                                                        alt="" className={styles.img1} />
                                                                </div>
                                                                <p>Drag & Drop Here</p>
                                                                <a href='#!'>Upload</a>
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
                </div>
            </div>}

            {tabValue === 'marketing' && <div className={styles.event_wrap}>
                <div className='container-fluid'>

                    {/* tabs */}
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            {/* tab */}
                                            <div className={`${styles.home_topTab} ${styles.marketing_topTab}`}>
                                                <div className=''>
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`${styles.topTab} ${styles.members_tab}`}>
                                                                <a className={subTabValue === 'Push in Booking Categories' ? styles.active : styles.inactive} onClick={() => { setSubTabValue('Push in Booking Categories') }}>Push in Booking Categories</a>
                                                                <a className={subTabValue === 'Invite Clients' ? styles.active : styles.inactive} onClick={() => { setSubTabValue('Invite Clients') }}>Invite Clients</a>
                                                                <a className={subTabValue === 'Last Minute Discount' ? styles.active : styles.inactive} onClick={() => { setSubTabValue('Last Minute Discount') }}>Last Minute Discount</a>
                                                                <a className={subTabValue === 'Happy Hours' ? styles.active : styles.inactive} onClick={() => { setSubTabValue('Happy Hours') }}>Happy Hours</a>
                                                                <a className={subTabValue === 'Flash Sale' ? styles.active : styles.inactive} onClick={() => { setSubTabValue('Flash Sale') }}>Flash Sale</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* tab end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* section Push in Booking Categories */}
                    {subTabValue === 'Push in Booking Categories' && <div className='row mt-4'>
                        <div className='col-md-4'>
                            <div className={`${styles.market_itemBox}`}>
                                <div className={`${styles.itemBox_main}`}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={` ${styles.col_1}`}>
                                                <div className={styles.pushBooking_left}>
                                                    <form>
                                                        <div className='row'>
                                                            <div className='col-md-12'>
                                                                <div className={styles.border_group}>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`${styles.Check_row} ${styles.marketing_Check_row}`}>
                                                                                {/* <p className={styles.p_dark}>{name}</p> */}
                                                                                <p className={styles.p_dark}>Push on Home Booking</p>
                                                                                <label className={styles.container_check}>
                                                                                    <input className={styles.checkbox}
                                                                                        type="checkbox"
                                                                                        onClick={handleClick}
                                                                                    />
                                                                                    <span className={styles.checkmark}></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Select Duration</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>1 day</option>
                                                                                    <option>2 day</option>
                                                                                    <option>3 day</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Start Date</label>
                                                                                <input type="date" className={`form-control ${styles.form_control}`} placeholder="April 4, 17:00" id="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="" className='d-block'>Description</label>
                                                                                <span className={styles.m_desription}>Description are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the brush. I</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='row'>
                                                            <div className='col-md-12'>
                                                                <div className={`${styles.Check_row} ${styles.marketing_Check_botton}`}>
                                                                    <p>Push on Home Booking</p>
                                                                    <label className={styles.container_check}>
                                                                        <input className={styles.checkbox}
                                                                            type="checkbox"
                                                                            onClick={handleClick}
                                                                        />
                                                                        <span className={styles.checkmark}></span>
                                                                    </label>
                                                                </div>
                                                                <div className={`${styles.Check_row} ${styles.marketing_Check_botton}`}>
                                                                    <p>Pay per for Near by You</p>
                                                                    <label className={styles.container_check}>
                                                                        <input className={styles.checkbox}
                                                                            type="checkbox"
                                                                            onClick={handleClick}
                                                                        />
                                                                        <span className={styles.checkmark}></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='row'>
                                                            <div className='col-md-12'>
                                                                <div className={styles.confirm_pay_row}>
                                                                    <label>Total</label>
                                                                    <h2>$7.00</h2>
                                                                    <a href='#!'>Confirm and Pay</a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-8'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>

                                    {/*  */}
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={`border-bottom-0 ${styles.profile_view}`}>
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            {/*  */}
                                                            <div className={`styles.reviewSearch_wrap`}>
                                                                <div className={`pb-0 ${styles.help_searchBox}`}>
                                                                    <div className={styles.search}>
                                                                        <img src={require('../../../assets/images/search-1.svg').default}
                                                                            alt=""
                                                                        />
                                                                        <input type="text" className={styles.form_control_feedback} placeholder="Search Service" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*  */}
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        <p>All Categories (4)</p>
                                                                        <label className={styles.container_check}>
                                                                            Select All
                                                                            <input className={styles.checkbox}
                                                                                type="checkbox"
                                                                                name="selectAll"
                                                                                id="selectAll"
                                                                                onClick={handleSelectAll}
                                                                                checked={isCheckAll}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>

                                                                    {list.map(({ id, name }) => (<div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        {/* <p className={styles.p_dark}>{name}</p> */}
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>{name}</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <label className={styles.container_check}>
                                                                            <input className={styles.checkbox}
                                                                                key={id}
                                                                                type="checkbox"
                                                                                name={name}
                                                                                id={id}
                                                                                onClick={handleClick}
                                                                                checked={isCheck.includes(id)}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={styles.Check_row}>
                                                                        <p>Not categorized (1)</p>
                                                                        <label className={styles.container_check}>
                                                                            <input className={styles.checkbox}
                                                                                type="checkbox"
                                                                                name="selectAll"
                                                                                id="selectAll"
                                                                                onClick={handleNotCategorized}
                                                                                checked={isCheckAll}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>

                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Barber hair</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={styles.Check_row}>
                                                                        <p>Concierge (2)</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>

                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Acrylic Full Set Pearl/French Extension Tips</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>
                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Barber hair</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={styles.Check_row}>
                                                                        <p>Beauty Salons (1)</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>

                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Barber hair</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
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
                        </div>
                    </div>}

                    {/* section Invite Clients */}
                    {subTabValue === 'Invite Clients' && <div className='row mt-4'>
                        <div className='col-md-4'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={`${styles.itemBox_main}`}>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className={`${styles.new_memberTitle} ${styles.selct_methodTitle}`}>
                                                <h2>Select Method</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className={`${styles.on_demand}`}>
                                                <img src={require('../../../assets/images/Plus_active.png')}
                                                    alt="" className={styles.img2} />
                                                <p>On Demand</p>
                                            </div>
                                            <div className={`${styles.on_demand}`}>
                                                <img src={require('../../../assets/images/email-passive.png')}
                                                    alt="" className={styles.img2} />
                                                <p className={`${styles.p_gray}`}>By Your Address Book (e-mails)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-8'>
                            <div className={`${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className={styles.booking_online_wrap}>
                                                <img src={require('../../../assets/images/dots.svg').default}
                                                    alt="" className={styles.img1} />
                                                <div className={styles.booking_online_main}>
                                                    <h2>Let your clients know, you are booking online!</h2>
                                                    <p>So they can self-book appointments with you using Free Booksy Client App</p>
                                                    <span>Client Email Address or Phone Number</span>
                                                    <button className={styles.btn}>Send Invite</button>
                                                </div>
                                                <img src={require('../../../assets/images/dots.svg').default}
                                                    alt="" className={styles.img2} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}

                    {/* section Last Minute Discount */}
                    {subTabValue === 'Last Minute Discount' && <div className='row mt-4'>
                        <div className='col-md-4'>
                            <div className={`${styles.market_itemBox}`}>
                                <div className={`${styles.itemBox_main}`}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={` ${styles.col_1}`}>
                                                <div className={styles.pushBooking_left}>
                                                    <form>
                                                        <div className='row'>
                                                            <div className='col-md-12'>
                                                                <div className={`mb-4 ${styles.border_group}`}>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <h2 className={styles.discount_leftTitle}>Last Minute Discount</h2>
                                                                        </div>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Type Discount Percent</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="12% off of the service price" id="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className={`mb-4 ${styles.border_group}`}>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <h2 className={styles.discount_leftTitle}>Your clients must book no more than</h2>
                                                                        </div>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Type Time</label>
                                                                                <input type="text" className={`form-control ${styles.form_control} ${styles.fadeform_control}`} placeholder="Time before the visit to qualify for the discount" id="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-12'>
                                                                <div className={`form-group ${styles.descriptionForm_group}`}>
                                                                    <span className={styles.m_desription}>
                                                                        Make the most out of your work day by having a full calendar of clients!
                                                                        <br></br>
                                                                        <br></br>
                                                                        Last Minute Discounts are designed to help fill remaining same-day appointment slots.
                                                                        With our Last Minute Discount, clients will be more inclined to book with you,
                                                                        even if on short notice.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-12'>
                                                                <div className={`justify-content-center pt-0 border-0 ${styles.confirm_pay_row}`}>
                                                                    <a href='#!'>Confirm and Start</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-8'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>

                                    {/*  */}
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={`border-bottom-0 ${styles.profile_view}`}>
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            {/*  */}
                                                            <div className={`styles.reviewSearch_wrap`}>
                                                                <div className={`pb-0 ${styles.help_searchBox}`}>
                                                                    <div className={styles.search}>
                                                                        <img src={require('../../../assets/images/search-1.svg').default}
                                                                            alt=""
                                                                        />
                                                                        <input type="text" className={styles.form_control_feedback} placeholder="Search Service" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*  */}
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        <p>All Categories (4)</p>
                                                                        <label className={styles.container_check}>
                                                                            Select All
                                                                            <input className={styles.checkbox}
                                                                                type="checkbox"
                                                                                name="selectAll"
                                                                                id="selectAll"
                                                                                onClick={handleSelectAll}
                                                                                checked={isCheckAll}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>

                                                                    {list.map(({ id, name }) => (<div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        {/* <p className={styles.p_dark}>{name}</p> */}
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>{name}</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <label className={styles.container_check}>
                                                                            <input className={styles.checkbox}
                                                                                key={id}
                                                                                type="checkbox"
                                                                                name={name}
                                                                                id={id}
                                                                                onClick={handleClick}
                                                                                checked={isCheck.includes(id)}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={styles.Check_row}>
                                                                        <p>Not categorized (1)</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>

                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Barber hair</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={styles.Check_row}>
                                                                        <p>Concierge (2)</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>

                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Acrylic Full Set Pearl/French Extension Tips</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>
                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Barber hair</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={styles.Check_row}>
                                                                        <p>Beauty Salons (1)</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>

                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Barber hair</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
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
                        </div>
                    </div>}

                    {/* section Happy Hours */}
                    {subTabValue === 'Happy Hours' && <div className='row mt-4'>
                        <div className='col-md-4'>
                            <div className={`${styles.market_itemBox}`}>
                                <div className={`${styles.itemBox_main}`}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={` ${styles.col_1}`}>
                                                <div className={styles.pushBooking_left}>
                                                    <form>
                                                        <div className='row'>
                                                            <div className='col-md-12'>
                                                                <div className={`mb-4 ${styles.border_group}`}>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <h2 className={styles.discount_leftTitle}>HAppy Hours Discount</h2>
                                                                        </div>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Type Discount Percent</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="12% applied to the service price" id="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className={`mb-4 ${styles.border_group}`}>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <h2 className={styles.discount_leftTitle}>Use discounted price during</h2>
                                                                        </div>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                                <div className={styles.groupCheck_row}>
                                                                                    <div className={`${styles.Check_row} ${styles.discount_Check_row}`}>
                                                                                        <p>9:00 AM - 5:00 PM</p>
                                                                                        <label className={`${styles.container_check}`}>
                                                                                            Monday
                                                                                            <input className={styles.checkbox}
                                                                                                type="checkbox"
                                                                                                name="selectAll"
                                                                                            />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                                <div className={styles.groupCheck_row}>
                                                                                    <div className={`${styles.Check_row} ${styles.discount_Check_row}`}>
                                                                                        <p className={styles.p_gray}>Set Promotion</p>
                                                                                        <label className={`${styles.container_check} ${styles.container_check_gray}`}>
                                                                                            Tuesday
                                                                                            <input className={styles.checkbox}
                                                                                                type="checkbox"
                                                                                                name="selectAll"
                                                                                            />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                                <div className={styles.groupCheck_row}>
                                                                                    <div className={`${styles.Check_row} ${styles.discount_Check_row}`}>
                                                                                        <p>9:00 AM - 5:00 PM</p>
                                                                                        <label className={`${styles.container_check}`}>
                                                                                            Wednesday
                                                                                            <input className={styles.checkbox}
                                                                                                type="checkbox"
                                                                                                name="selectAll"
                                                                                            />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                                <div className={styles.groupCheck_row}>
                                                                                    <div className={`${styles.Check_row} ${styles.discount_Check_row}`}>
                                                                                        <p className={styles.p_gray}>Set Promotion</p>
                                                                                        <label className={`${styles.container_check} ${styles.container_check_gray}`}>
                                                                                            Thursday
                                                                                            <input className={styles.checkbox}
                                                                                                type="checkbox"
                                                                                                name="selectAll"
                                                                                            />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                                <div className={styles.groupCheck_row}>
                                                                                    <div className={`${styles.Check_row} ${styles.discount_Check_row}`}>
                                                                                        <p className={styles.p_gray}>Set Promotion</p>
                                                                                        <label className={`${styles.container_check} ${styles.container_check_gray}`}>
                                                                                            Friday
                                                                                            <input className={styles.checkbox}
                                                                                                type="checkbox"
                                                                                                name="selectAll"
                                                                                            />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                                <div className={styles.groupCheck_row}>
                                                                                    <div className={`${styles.Check_row} ${styles.discount_Check_row}`}>
                                                                                        <p>9:00 AM - 5:00 PM</p>
                                                                                        <label className={`${styles.container_check}`}>
                                                                                            Saturday
                                                                                            <input className={styles.checkbox}
                                                                                                type="checkbox"
                                                                                                name="selectAll"
                                                                                            />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                                <div className={styles.groupCheck_row}>
                                                                                    <div className={`${styles.Check_row} ${styles.discount_Check_row}`}>
                                                                                        <p className={styles.p_gray}>Set Promotion</p>
                                                                                        <label className={`${styles.container_check} ${styles.container_check_gray}`}>
                                                                                            Sunday
                                                                                            <input className={styles.checkbox}
                                                                                                type="checkbox"
                                                                                                name="selectAll"
                                                                                            />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-12'>
                                                                <div className={`form-group ${styles.descriptionForm_group}`}>
                                                                    <span className={styles.m_desription}>
                                                                        Happy Hours allow you to set a discounted price for all or some of your services during these usual down times.
                                                                        For example, if Monday mornings are usually slow for you, set up a Happy Hour sale to discount your services by 10% on
                                                                        Monday’s from 9am-12pm.
                                                                        <br></br>
                                                                        With Booksy’s Happy Hours, you can easily fill in those schedule gaps and turn your usual down time into $$$
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-12'>
                                                                <div className={`justify-content-center pt-0 border-0 ${styles.confirm_pay_row}`}>
                                                                    <a href='#!'>Confirm and Start</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-8'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>

                                    {/*  */}
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={`border-bottom-0 ${styles.profile_view}`}>
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            {/*  */}
                                                            <div className={`styles.reviewSearch_wrap`}>
                                                                <div className={`pb-0 ${styles.help_searchBox}`}>
                                                                    <div className={styles.search}>
                                                                        <img src={require('../../../assets/images/search-1.svg').default}
                                                                            alt=""
                                                                        />
                                                                        <input type="text" className={styles.form_control_feedback} placeholder="Search Service" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*  */}
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        <p>All Categories (4)</p>
                                                                        <label className={styles.container_check}>
                                                                            Select All
                                                                            <input className={styles.checkbox}
                                                                                type="checkbox"
                                                                                name="selectAll"
                                                                                id="selectAll"
                                                                                onClick={handleSelectAll}
                                                                                checked={isCheckAll}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>

                                                                    {list.map(({ id, name }) => (<div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        {/* <p className={styles.p_dark}>{name}</p> */}
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>{name}</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <label className={styles.container_check}>
                                                                            <input className={styles.checkbox}
                                                                                key={id}
                                                                                type="checkbox"
                                                                                name={name}
                                                                                id={id}
                                                                                onClick={handleClick}
                                                                                checked={isCheck.includes(id)}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={styles.Check_row}>
                                                                        <p>Not categorized (1)</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>

                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Barber hair</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={styles.Check_row}>
                                                                        <p>Concierge (2)</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>

                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Acrylic Full Set Pearl/French Extension Tips</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>
                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Barber hair</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={styles.Check_row}>
                                                                        <p>Beauty Salons (1)</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>

                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Barber hair</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
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
                        </div>
                    </div>}

                    {/* section for sale */}
                    {subTabValue === 'Flash Sale' && <div className='row mt-4'>
                        <div className='col-md-4'>
                            <div className={`${styles.market_itemBox}`}>
                                <div className={`${styles.itemBox_main}`}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={` ${styles.col_1}`}>
                                                <div className={styles.pushBooking_left}>
                                                    <form>
                                                        <div className='row'>
                                                            <div className='col-md-12'>
                                                                <div className={`mb-4 ${styles.border_group}`}>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <h2 className={styles.discount_leftTitle}>Flash Sale Discount</h2>
                                                                        </div>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Type Discount Percent</label>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="12% off of the service price" id="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className={`mb-4 ${styles.border_group}`}>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <h2 className={styles.discount_leftTitle}>Offer the Sale</h2>
                                                                        </div>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <label htmlFor="">Select Duration</label>
                                                                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                                    <option>Today Only</option>
                                                                                    <option>Today Only</option>
                                                                                    <option>Today Only</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className={`mb-4 ${styles.border_group}`}>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <h2 className={styles.discount_leftTitle}>Booking date to qualify</h2>
                                                                        </div>
                                                                        <div className='col-md-12'>
                                                                            <div className={`form-group ${styles.form_group}`}>
                                                                                <div>
                                                                                    <label className={`radio ${styles.radio_lable}`}>
                                                                                        <input type="radio" name="r" value="1" checked /> <span>Today Only</span> </label>
                                                                                    <label className={`radio ${styles.radio_lable}`}>
                                                                                        <input type="radio" name="r" value="2" /> <span>Select Days</span> </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-12'>
                                                                <div className={`form-group ${styles.descriptionForm_group}`}>
                                                                    <span className={styles.m_desription}>
                                                                        A flash sale is a discount or promotion offered by a store for a short period of time.
                                                                        <br></br>
                                                                        <br></br>
                                                                        The promotion applies to all clients who book with you during the flase sale window.
                                                                        You can choose the dates for this window, and when the booking needs to happen in order for the
                                                                        promotion to apply.
                                                                        <br></br>.From the client perpective, the rules are simple:
                                                                        Book today for any day you'd like (within the range of the promotion) and you'll receive a discount.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-12'>
                                                                <div className={`justify-content-center pt-0 border-0 ${styles.confirm_pay_row}`}>
                                                                    <a href='#!' onClick={() => { setPopup(true) }}>Confirm and Start</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-8'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>

                                    {/*  */}
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={`border-bottom-0 ${styles.profile_view}`}>
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            {/*  */}
                                                            <div className={`styles.reviewSearch_wrap`}>
                                                                <div className={`pb-0 ${styles.help_searchBox}`}>
                                                                    <div className={styles.search}>
                                                                        <img src={require('../../../assets/images/search-1.svg').default}
                                                                            alt=""
                                                                        />
                                                                        <input type="text" className={styles.form_control_feedback} placeholder="Search Service" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*  */}
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        <p>All Categories (4)</p>
                                                                        <label className={styles.container_check}>
                                                                            Select All
                                                                            <input className={styles.checkbox}
                                                                                type="checkbox"
                                                                                name="selectAll"
                                                                                id="selectAll"
                                                                                onClick={handleSelectAll}
                                                                                checked={isCheckAll}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>

                                                                    {list.map(({ id, name }) => (<div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                        {/* <p className={styles.p_dark}>{name}</p> */}
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>{name}</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <label className={styles.container_check}>
                                                                            <input className={styles.checkbox}
                                                                                key={id}
                                                                                type="checkbox"
                                                                                name={name}
                                                                                id={id}
                                                                                onClick={handleClick}
                                                                                checked={isCheck.includes(id)}
                                                                            />
                                                                            <span className={styles.checkmark}></span>
                                                                        </label>
                                                                    </div>))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={styles.Check_row}>
                                                                        <p>Not categorized (1)</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>

                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Barber hair</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={styles.Check_row}>
                                                                        <p>Concierge (2)</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>

                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Acrylic Full Set Pearl/French Extension Tips</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>
                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Barber hair</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group ${styles.form_groupCheck}`}>
                                                                <div className={styles.groupCheck_row}>
                                                                    <div className={styles.Check_row}>
                                                                        <p>Beauty Salons (1)</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
                                                                    </div>

                                                                    <div className={styles.Check_row}>
                                                                        <div className={styles.marketingCheck_row}>
                                                                            <p className={styles.p_dark}>Barber hair</p>
                                                                            <p className={styles.select_p}>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55.00</span>
                                                                            </p>
                                                                        </div>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/checkbox-off.png')}
                                                                                alt="" className={styles.img2} />
                                                                            <img src={require('../../../assets/images/checkbox-on.png')}
                                                                                alt="" className={styles.img2} />
                                                                        </span>
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
                        </div>
                    </div>}

                </div>
            </div >}

            {popup && <div className={styles.search_saved}>
                <div className={styles.form_popup}>
                    <div className={`${styles.form_popup_sub} ${styles.confirm_popup}`}>
                        <img src={require('../../../assets/images/dots.svg').default}
                            alt=""
                            className={styles.dots1_popup}
                        />
                        <img src={require('../../../assets/images/close-black.svg').default}
                            alt="" onClick={() => { setPopup(false) }}
                            className={styles.close_popup}
                        />

                        <div className={styles.formBody_popup}>

                            <h1 className={styles.h1_popup}>Confirm Order</h1>
                            <hr className={styles.rectangle}></hr>
                            <h3 className={styles.h3_popup}>An order of $ 7.00 is created,<br /> we will not be able to cancel your order after confirmation</h3>
                            <button className={styles.popup_btn} onClick={() => { setPopup(false) }}>Confirm</button>
                        </div>
                        <img src={require('../../../assets/images/dots.svg').default}
                            alt=""
                            className={styles.dots2_popup}
                        />
                    </div>
                </div>
            </div>}

            {tabValue === 'reviews' && <div className={styles.event_wrap}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row align-items-center'>
                                        <div className='col-md-7'>
                                            <div className={styles.review_boxTop_left}>
                                                <div className='row'>
                                                    <div className='col-md-4'>
                                                        <div className={styles.left_Col1}>
                                                            <div className={styles.sold_box}>
                                                                <h2>whatsupstoners shop</h2>
                                                                <span>
                                                                    <img src={require('../../../assets/images/Subtraction.png')}
                                                                        alt=""
                                                                    />
                                                                    <small>99.2%</small>
                                                                </span>
                                                                <p>
                                                                    1000+ Services sold
                                                                    <br></br>
                                                                    Member since 2017
                                                                </p>
                                                                <h3>
                                                                    <img src={require('../../../assets/images/location.svg').default}
                                                                        alt=""
                                                                    />
                                                                    25400, Lindon, Ukraine
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-3'>
                                                        <div className={styles.left_Col2}>
                                                            <div className={styles.rating_box}>
                                                                <h2>4.0</h2>
                                                                <small>99.2%</small>
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
                                                                <p>Average Review</p>
                                                                <span>67 Ratings</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-5'>
                                                        <div className={styles.left_Col3}>
                                                            <div className={styles.left_Col_rating}>
                                                                <small>Service as Described</small>
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
                                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                        alt=""
                                                                    />
                                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={styles.left_Col_rating}>
                                                                <small>Communication</small>
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
                                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                        alt=""
                                                                    />
                                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={styles.left_Col_rating}>
                                                                <small>Quantity</small>
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
                                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                        alt=""
                                                                    />
                                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={styles.left_Col_rating}>
                                                                <small>Availability</small>
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
                                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                        alt=""
                                                                    />
                                                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-5'>
                                            <div className={styles.review_boxTop_right}>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <div className={styles.right_Col}>
                                                            <ReactApexChart options={publicProfile} series={publicSeries} type="bar" height={250} width={600} />
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
                    <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className={`${styles.topTab} ${styles.review_topTab}`}>
                                                <a href='#!' className={styles.active}>All Reviews</a>
                                                <a href='#!'>Newest Review</a>
                                                <a href='#!'>Need to Review <span>23</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className={styles.all_review}>
                                                {/* <div className={styles.all_reviewLeft}>
                                                    <img src={require('../../../assets/images/rating_image1.png')}
                                                        alt="" className={styles.img} />
                                                </div> */}
                                                <div className={styles.all_reviewRight}>
                                                    <div className={styles.reviewRight_header}>
                                                        <h2 className={styles.title}><span></span>Acrylic Full Set Pearl/French Extension Tips</h2>
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
                                                        <p>Welcome to Haus Of Polish! We are a full service nail salon and boutique
                                                            beauty destination that offers premium products, one-time use pedi kits,
                                                            over 600 gels, and regular color. Affordable, transparent pricing is also available.
                                                            All full sets and fills include desired nail shapes with up to medium nail length,
                                                            and a cuticle treatment. Removals are available with new sets of dips and gel manicures.
                                                            Pricing varies on nail art!, Welcome to Haus Of Polish! We are a full service
                                                            nail salon and boutique beauty destination that offers premium products,
                                                            one-time use pedi kits, over 600 gels, and regular color. Affordable, transparent
                                                            pricing is also available. All full sets and fills include desired nail
                                                            shapes with up to medium nail length, and a cuticle treatment. Removals
                                                            are available with new sets of dips and gel manicures. Pricing varies on nail art!
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
                                                        <p>1 Comment</p>
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
                                                {/* <div className={styles.all_reviewLeft}>
                                                    <img src={require('../../../assets/images/rating_image2.png')}
                                                        alt="" className={styles.img} />
                                                </div> */}
                                                <div className={styles.all_reviewRight}>
                                                    <div className={styles.reviewRight_header}>
                                                        <h2 className={`${styles.title} ${styles.title_gray}`}>Braids</h2>
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
                                                        <p>Welcome to Haus Of Polish! We are a full service nail
                                                            salon and boutique beauty destination that offers premium products,
                                                            one-time use pedi kits, over 600 gels, and regular color.
                                                            Affordable, transparent pricing is also available.
                                                            All full sets and fills include desired nail shapes with up
                                                            to medium nail length, and a cuticle treatment.
                                                            Removals are available with new sets of dips and gel manicures.

                                                        </p>
                                                    </div>
                                                    {/* <div className={styles.reviewRight_imgBox}>
                                                        <img src={require('../../../assets/images/rating_sub_image1.png')}
                                                            alt=""
                                                        />
                                                        <img src={require('../../../assets/images/rating_sub_image2.png')}
                                                            alt=""
                                                        />
                                                    </div> */}
                                                    <div className={styles.cmt_rply}>
                                                        {/* <p>1 Comment (Hire)</p> */}
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
                                                {/* <div className={styles.all_reviewLeft}>
                                                    <img src={require('../../../assets/images/rating_image3.png')}
                                                        alt="" className={styles.img} />
                                                </div> */}
                                                <div className={styles.all_reviewRight}>
                                                    <div className={styles.reviewRight_header}>
                                                        <h2 className={`${styles.title} ${styles.title_gray}`}>Removals are available with new sets of dips and</h2>
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
                                                        {/* <img src={require('../../../assets/images/rating_sub_image2.png')}
                                                            alt=""
                                                        /> */}
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

            {tabValue === 'statistics' && <div className={styles.event_wrap}>
                <div className='container-fluid'>
                    <div className='row mt-4'>
                        <div className='col-md-8'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={`h-100 ${styles.itemBox_main}`}>
                                    <div className='row h-100'>
                                        <div className='col'>
                                            <div className={`h-100 ${styles.col_1}`}>
                                                <div className={`mb-0 ${styles.statistics_title}`}>
                                                    <h2>
                                                        Statistics
                                                    </h2>
                                                </div>
                                                <div className={styles.statistics}>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={`mb-0 ${styles.statistics_title}`}>
                                                    <h2>
                                                        Summary
                                                    </h2>
                                                </div>
                                                <div className={`border-bottom-0 ${styles.summary}`}>
                                                    <div className={`w-100 ${styles.total_boxes}`}>
                                                        <div className={styles.box}>
                                                            <span>Total Visits</span>
                                                            <p>6456</p>
                                                        </div>
                                                        <div className={styles.box}>
                                                            <span>Total Earnings</span>
                                                            <p>$22567.00</p>
                                                        </div>
                                                        <div className={styles.box}>
                                                            <span>Time Bookes</span>
                                                            <p>12 Hours</p>
                                                        </div>
                                                    </div>
                                                    <div className={`w-100 ${styles.profile_boxes}`}>
                                                        <div className={styles.box}>
                                                            <p>23</p>
                                                            <span>Bookings</span>
                                                        </div>
                                                        <div className={styles.box}>
                                                            <p>19</p>
                                                            <span>Finished</span>
                                                        </div>
                                                        <div className={styles.box}>
                                                            <p>4</p>
                                                            <span>Cancelled</span>
                                                        </div>
                                                        <div className={styles.box}>
                                                            <p>0</p>
                                                            <span>No-Shows</span>
                                                        </div>
                                                    </div>
                                                    <div className={`w-100 ${styles.sold_boxes}`}>
                                                        <div className={styles.box}>
                                                            <span>Total Sold</span>
                                                            <p>3453</p>
                                                        </div>
                                                        <div className={styles.box}>
                                                            <span>Growth Rate</span>
                                                            <p>0%</p>
                                                        </div>
                                                    </div>
                                                    <div className={`w-100 ${styles.sold_boxes} ${styles.client_boxes}`}>
                                                        <div className={styles.box1}>
                                                            <span>New</span>
                                                            <p>223</p>
                                                        </div>
                                                        <div className={styles.box}>
                                                            <span>New</span>
                                                            <p>223</p>
                                                        </div>
                                                        <div className={styles.box}>
                                                            <span>Returns</span>
                                                            <p>32</p>
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

                    <div className='row mt-4'>
                        <div className='col-md-6'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={`h-100 ${styles.itemBox_main}`}>
                                    <div className='row h-100'>
                                        <div className='col'>
                                            <div className={`h-100 ${styles.col_1}`}>
                                                <div className={`mb-0 ${styles.statistics_title}`}>
                                                    <h2>
                                                        Top 5 clients
                                                    </h2>
                                                </div>
                                                <div className={styles.member_wrap}>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Andrew Tane
                                                                <small>Last visit - 3 days ago</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Bogdan Smith
                                                                <small>Last visit - 3 days ago</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Brett Bishep
                                                                <small>Last visit - 3 days ago</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Cyla Matthews
                                                                <small>Last visit - 3 days ago</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Christopher Jhyla
                                                                <small>Last visit - 3 days ago</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={`h-100 ${styles.itemBox_main}`}>
                                    <div className='row h-100'>
                                        <div className='col'>
                                            <div className={`h-100 ${styles.col_1}`}>
                                                <div className={`mb-0 ${styles.statistics_title}`}>
                                                    <h2>
                                                        Team Performance
                                                    </h2>
                                                </div>
                                                <div className={styles.member_wrap}>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Andrew Tane
                                                                <small>Visits: 3 | Time: 12h. | Earnings: $223.00</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Bogdan Smith
                                                                <small>Visits: 3 | Time: 12h. | Earnings: $223.00</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Brett Bishep
                                                                <small>Visits: 3 | Time: 12h. | Earnings: $223.00</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Cyla Matthews
                                                                <small>Visits: 3 | Time: 12h. | Earnings: $223.00</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.member_row}>
                                                        <div className={styles.member_colLeft}>
                                                            <img src={require('../../../assets/images/member-profile.png')}
                                                                alt=""
                                                            />
                                                            <p>Christopher Jhyla
                                                                <small>Visits: 3 | Time: 12h. | Earnings: $223.00</small>
                                                            </p>
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

            {tabValue === 'settings' && <div className={styles.event_wrap}>
                <div className='container-fluid'>

                    <div className='row mt-4'>
                        <div className='col-md-4'>
                            <div className={`${styles.market_itemBox}`}>
                                <div className={`h-100 ${styles.itemBox_main}`}>
                                    <div className='row h-100'>
                                        <div className='col'>
                                            <div className={`h-100 ${styles.col_1}`}>
                                                <div className={styles.confirmation_col}>
                                                    <div className={`${styles.form_groupBtn}`}>
                                                        <div className={styles.advanced_togle}>
                                                            <label ><span>Confirmation Mode</span>
                                                                <div className={styles.togleRow_img} onClick={() => { setAdvancedOpt(!advancedOpt) }}>
                                                                    {advancedOpt ? <img src={require('../../../assets/images/switch-on.svg').default}
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-4 ${styles.market_itemBox}`}>
                                <div className={`h-100 ${styles.itemBox_main}`}>
                                    <div className='row h-100'>
                                        <div className='col'>
                                            <div className={`h-100 ${styles.col_1}`}>
                                                <div className={`mb-0 ${styles.statistics_title}`}>
                                                    <h2>
                                                        Lead Time
                                                    </h2>
                                                </div>
                                                <div className={`mt-4 ${styles.lead_col}`}>
                                                    <div className={`form-group ${styles.form_group}`}>
                                                        <label htmlFor="" className='w-100'>Client can book appointments</label>
                                                        <Select className={`form-control ${styles.form_control} ${styles.select_form_control}`}
                                                            defaultValue={colourOptions[1]}
                                                            // label="Single select"
                                                            options={colourOptions}
                                                            styles={colourStyles}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-8'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={`mb-0 ${styles.statistics_title}`}>
                                                    <h2>
                                                        Message Templates & Settings
                                                    </h2>
                                                </div>
                                                <div className={`border-bottom-0 ${styles.message_col}`}>
                                                    <div className='row'>
                                                        <div className='col-md-3'>
                                                            <div className={styles.events_btns}>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">Event</label>
                                                                    <div className={styles.btns}>
                                                                        <button className={styles.btn}>Email Footer</button>
                                                                        <button className={styles.btn}>Message Footer</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-9'>
                                                            <div className={styles.events_contant}>
                                                                <form>
                                                                    <div className={`form-group ${styles.form_group}`}>
                                                                        <label htmlFor="">E-mail footer content</label>
                                                                        <textarea rows={4} className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty destination that offers premium products, one-time use pedi kits, over 600 gels, and regular color. Affordable, transparent pricing is also available. All full sets and fills include desired nail shapes with up to medium nail length, and a cuticle treatment. Removals are available with new sets of dips and gel manicures. Pricing varies on nail art!, Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty destination that offers premium products, one-time use pedi kits, over 600 gels, and regular color. Affordable, transparent pricing is also available. All full sets and fills include desired nail shapes with up to medium nail length, and a cuticle treatment. Removals are available with new sets of dips and gel manicures. Pricing varies on nail art!' />
                                                                        <small className={styles.word_count}>250/5000</small>
                                                                    </div>
                                                                    <br></br>
                                                                    <br></br>
                                                                    <br></br>
                                                                    <br></br>
                                                                    <br></br>
                                                                    <div className={`form-group ${styles.form_group} ${styles.setting_form_group}`}>
                                                                        <div className='w-100'>
                                                                            <label htmlFor="">Send preview of the message</label>
                                                                            <input type='text' className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='xuz@gmail.com' />
                                                                        </div>
                                                                        <div className={styles.form_send}>
                                                                            <button className={styles.btn}>Send</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
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

                    <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={`h-100 ${styles.itemBox_main}`}>
                                    <div className='row h-100'>
                                        <div className='col'>
                                            <div className={`h-100 ${styles.col_1}`}>
                                                <div className={`mb-0 ${styles.statistics_title}`}>
                                                    <h2>
                                                        Staff Commissions
                                                    </h2>
                                                </div>
                                                <div className={styles.commission_col}>
                                                    <div className='row'>
                                                        <div className='col-md-4'>
                                                            <form>
                                                                <div className={`form-group mt-4 ${styles.form_group}`}>
                                                                    <div className='w-100'>
                                                                        <label htmlFor="">Default Services Commissions</label>
                                                                        <input type='text' className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='0% of sale' />
                                                                    </div>
                                                                </div>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <div className='w-100'>
                                                                        <label htmlFor="">Product Commission for</label>
                                                                    </div>
                                                                </div>
                                                            </form>

                                                            {/* tab */}
                                                            <div className={`pr-0 ${styles.home_topTab} ${styles.members_topTab}`}>
                                                                <div className=''>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className={`${styles.topTab} ${styles.members_tab}`}>
                                                                                <a className={styles.active}>Service Provider</a>
                                                                                <a className={styles.inactive}>Seller</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* tab end */}
                                                            {/*  */}
                                                            <div className={`${styles.reviewSearch_wrap}`}>
                                                                <div className={styles.help_searchBox}>
                                                                    <div className={styles.search}>
                                                                        <img src={require('../../../assets/images/search-1.svg').default}
                                                                            alt=""
                                                                        />
                                                                        <input type="text" className={styles.form_control_feedback} placeholder="Search Service" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*  */}
                                                            <div className={`${styles.member_wrap}  ${styles.category_wrap}`}>
                                                                <div className={`${styles.category_row} ${styles.category_row_active}`}>
                                                                    <div className={styles.colLeft}>
                                                                        <p>All Categories</p>
                                                                    </div>
                                                                    <div className={styles.colRight}>
                                                                        <span>15 Services</span>
                                                                        <img src={require('../../../assets/images/notes.svg').default}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className={styles.category_row}>
                                                                    <div className={styles.colLeft}>
                                                                        <p>Not categorized</p>
                                                                    </div>
                                                                    <div className={styles.colRight}>
                                                                        <span>6 Services</span>
                                                                        <img src={require('../../../assets/images/notes.svg').default}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className={styles.category_row}>
                                                                    <div className={styles.colLeft}>
                                                                        <p>Concierge</p>
                                                                    </div>
                                                                    <div className={styles.colRight}>
                                                                        <span>5 Services</span>
                                                                        <img src={require('../../../assets/images/notes.svg').default}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className={styles.category_row}>
                                                                    <div className={styles.colLeft}>
                                                                        <p>For Woman</p>
                                                                    </div>
                                                                    <div className={styles.colRight}>
                                                                        <span>4 Services</span>
                                                                        <img src={require('../../../assets/images/notes.svg').default}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-8'>
                                                            <div className='row h-100'>
                                                                <div className='col'>
                                                                    <div className={`h-100 ${styles.col_2} ${styles.Scol_2}`}>
                                                                        <div className={`${styles.btnd_row}`}>
                                                                            <h2 className={`${styles.right_title}`}>All Categories - Services</h2>
                                                                            <div className={`${styles.btnd_col}`}>
                                                                                <button className={`${styles.change_btn}`} onClick={() => { setPopup(true) }}>Change</button>
                                                                                <button className={`${styles.item_btn}`}>6 Items</button>
                                                                            </div>
                                                                        </div>
                                                                        <div className={`${styles.all_servicesMain}`}>
                                                                            <div className={`${styles.servicesRow_wrap}`}>
                                                                                <div className={`${styles.servicesRow}`}>
                                                                                    <div className={`${styles.servicesRow_col1}`}>
                                                                                        <span>Items</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow}`}>
                                                                                    <div className={`${styles.servicesRow_col1}`}>
                                                                                        <p>Acrylic Full Set Pearl/French Extension Tips</p>
                                                                                        <span>For Man</span>
                                                                                    </div>
                                                                                    <div className={`${styles.servicesRow_col2} ${styles.servicesRow_col3}`}>
                                                                                        <p>
                                                                                            0%
                                                                                            <br></br>
                                                                                            <br></br>
                                                                                            <span>$45.00</span>
                                                                                        </p>
                                                                                        <label className={styles.container_check}>
                                                                                            <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow}`}>
                                                                                    <div className={`${styles.servicesRow_col1}`}>
                                                                                        <p>Barber hair</p>
                                                                                        <span>For Man</span>
                                                                                    </div>
                                                                                    <div className={`${styles.servicesRow_col2} ${styles.servicesRow_col3}`}>
                                                                                        <p>
                                                                                            0%
                                                                                            <br></br>
                                                                                            <br></br>
                                                                                            <span>$45.00</span>
                                                                                        </p>
                                                                                        <label className={styles.container_check}>
                                                                                            <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow}`}>
                                                                                    <div className={`${styles.servicesRow_col1}`}>
                                                                                        <p>Massage</p>
                                                                                        <span>Not categorized</span>
                                                                                    </div>
                                                                                    <div className={`${styles.servicesRow_col2} ${styles.servicesRow_col3}`}>
                                                                                        <p>
                                                                                            0%
                                                                                            <br></br>
                                                                                            <br></br>
                                                                                            <span>$45.00</span>
                                                                                        </p>
                                                                                        <label className={styles.container_check}>
                                                                                            <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow}`}>
                                                                                    <div className={`${styles.servicesRow_col1}`}>
                                                                                        <p>Men’s Haircut with Hot Towel Shave</p>
                                                                                        <span>For Man</span>
                                                                                    </div>
                                                                                    <div className={`${styles.servicesRow_col2} ${styles.servicesRow_col3}`}>
                                                                                        <p>
                                                                                            0%
                                                                                            <br></br>
                                                                                            <br></br>
                                                                                            <span>$45.00</span>
                                                                                        </p>
                                                                                        <label className={styles.container_check}>
                                                                                            <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow}`}>
                                                                                    <div className={`${styles.servicesRow_col1}`}>
                                                                                        <p>Massage</p>
                                                                                        <span>Not categorized</span>
                                                                                    </div>
                                                                                    <div className={`${styles.servicesRow_col2} ${styles.servicesRow_col3}`}>
                                                                                        <p>
                                                                                            0%
                                                                                            <br></br>
                                                                                            <br></br>
                                                                                            <span>$45.00</span>
                                                                                        </p>
                                                                                        <label className={styles.container_check}>
                                                                                            <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow}`}>
                                                                                    <div className={`${styles.servicesRow_col1}`}>
                                                                                        <p>Acrylic Full Set Pearl/French Extension Tips</p>
                                                                                        <span>For Man</span>
                                                                                    </div>
                                                                                    <div className={`${styles.servicesRow_col2} ${styles.servicesRow_col3}`}>
                                                                                        <p>
                                                                                            0%
                                                                                            <br></br>
                                                                                            <br></br>
                                                                                            <span>$45.00</span>
                                                                                        </p>
                                                                                        <label className={styles.container_check}>
                                                                                            <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow}`}>
                                                                                    <div className={`${styles.servicesRow_col1}`}>
                                                                                        <p>Barber hair</p>
                                                                                        <span>For Man</span>
                                                                                    </div>
                                                                                    <div className={`${styles.servicesRow_col2} ${styles.servicesRow_col3}`}>
                                                                                        <p>
                                                                                            0%
                                                                                            <br></br>
                                                                                            <br></br>
                                                                                            <span>$45.00</span>
                                                                                        </p>
                                                                                        <label className={styles.container_check}>
                                                                                            <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow}`}>
                                                                                    <div className={`${styles.servicesRow_col1}`}>
                                                                                        <p>Massage</p>
                                                                                        <span>Not categorized</span>
                                                                                    </div>
                                                                                    <div className={`${styles.servicesRow_col2} ${styles.servicesRow_col3}`}>
                                                                                        <p>
                                                                                            0%
                                                                                            <br></br>
                                                                                            <br></br>
                                                                                            <span>$45.00</span>
                                                                                        </p>
                                                                                        <label className={styles.container_check}>
                                                                                            <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow}`}>
                                                                                    <div className={`${styles.servicesRow_col1}`}>
                                                                                        <p>Men’s Haircut with Hot Towel Shave</p>
                                                                                        <span>For Man</span>
                                                                                    </div>
                                                                                    <div className={`${styles.servicesRow_col2} ${styles.servicesRow_col3}`}>
                                                                                        <p>
                                                                                            0%
                                                                                            <br></br>
                                                                                            <br></br>
                                                                                            <span>$45.00</span>
                                                                                        </p>
                                                                                        <label className={styles.container_check}>
                                                                                            <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${styles.servicesRow}`}>
                                                                                    <div className={`${styles.servicesRow_col1}`}>
                                                                                        <p>Massage</p>
                                                                                        <span>Not categorized</span>
                                                                                    </div>
                                                                                    <div className={`${styles.servicesRow_col2} ${styles.servicesRow_col3}`}>
                                                                                        <p>
                                                                                            0%
                                                                                            <br></br>
                                                                                            <br></br>
                                                                                            <span>$45.00</span>
                                                                                        </p>
                                                                                        <label className={styles.container_check}>
                                                                                            <input type="checkbox" name="keep" className={styles.checkbox} />
                                                                                            <span className={styles.checkmark}></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        {/*  */}
                                                                        <div className={styles.add_member}>
                                                                            <div className={`justify-content-start pl-4 ${styles.add_member_row}`}>
                                                                                <a href='javascript:void(0)' className={`mr-5 ${styles.text_gray}`}>
                                                                                    Apply default commissions
                                                                                </a>
                                                                                <a href='javascript:void(0)'>
                                                                                    Clear all commissions
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        {/*  */}

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
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-md-4'>
                            <div className={`${styles.market_itemBox}`}>
                                <div className={`h-100 ${styles.itemBox_main}`}>
                                    <div className='row h-100'>
                                        <div className='col'>
                                            <div className={`h-100 ${styles.col_1}`}>
                                                <div className={`mb-4 ${styles.statistics_title}`}>
                                                    <h2>
                                                        Short Address to Your Business Website
                                                    </h2>
                                                </div>
                                                <div className={`${styles.short_col}`}>
                                                    <form>
                                                        <div className={`form-group ${styles.form_group} ${styles.setting_form_group} ${styles.short_form_group}`}>
                                                            <div className='w-100'>
                                                                <label htmlFor="">Link to your public profile</label>
                                                                <input type='text' className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='tesrt@vaata.com' />
                                                            </div>
                                                            <div className={styles.form_send}>
                                                                <button className={styles.btn} onClick={() => { setLinkPopup(true) }}>Copy</button>
                                                            </div>
                                                        </div>
                                                        <div className={`form-group ${styles.form_group} ${styles.setting_form_group} ${styles.short_form_group}`}>
                                                            <div className='w-100'>
                                                                <label htmlFor="">Customer Public Link</label>
                                                                <input type='text' className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='tesrt@vaata.com' />
                                                            </div>
                                                            <div className={styles.form_send}>
                                                                <button className={styles.btn}>Copy</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-5'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={`mb-4 ${styles.statistics_title}`}>
                                                    <h2>
                                                        Booking Widgets
                                                    </h2>
                                                </div>
                                                <div className={styles.booking_row}>
                                                    <div className={styles.booking_col}>
                                                        <p>Place «Book me» widget on Facebook profile</p>
                                                        <a href='#!' className={styles.btn}>Connect with Facebook</a>
                                                    </div>
                                                    <div className={styles.booking_col}>
                                                        <p>Place «Book me» widget on your own website</p>
                                                        <a href='#!' className={styles.btn}>Connect with Website</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={`mb-4 ${styles.statistics_title}`}>
                                                    <h2>
                                                        Photo Sharing
                                                    </h2>
                                                </div>
                                                <div className={styles.sharing_row}>
                                                    <div className={styles.sharing_col}>
                                                        <p>
                                                            <img src={require('../../../assets/images/instagram.png')}
                                                                alt=""
                                                                className={styles.img}
                                                            />
                                                            Instagram
                                                        </p>
                                                        <a href='#!'>Connect</a>
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

            {/* advisit popup  */}
            {addVisitPopup && <div className={styles.search_saved}>
                <div className={styles.form_popup}>
                    <div className={`${styles.form_popup_sub} ${styles.addVisit_popup}`}>
                        <img src={require('../../../assets/images/dots.svg').default}
                            alt=""
                            className={styles.dots1_popup}
                        />
                        <img src={require('../../../assets/images/close-black.svg').default}
                            alt="" onClick={() => { setAddVisitPopup(false) }}
                            className={styles.close_popup}
                        />

                        <div className={styles.formBody_popup}>

                            <h1 className={styles.h1_popup}>Wednesday 10, 15:00</h1>
                            <div className={styles.addVisit_btn}>
                                <button className={styles.visit_btn1} onClick={() => { navigate('/dashboard/booking/create-visit') }}>New Visit</button>
                                <button className={styles.visit_btn2} onClick={() => { setPopup(false) }}>Book Time</button>
                            </div>
                        </div>
                        <img src={require('../../../assets/images/dots.svg').default}
                            alt=""
                            className={styles.dots2_popup}
                        />
                    </div>
                </div>
            </div>}

            {/* change alert popup */}
            {popup && <div className={styles.search_saved}>
                <div className={styles.form_popup}>
                    <div className={`${styles.form_popup_sub} ${styles.confirm_popup}`}>
                        <img src={require('../../../assets/images/dots.svg').default}
                            alt=""
                            className={styles.dots1_popup}
                        />
                        <img src={require('../../../assets/images/close-black.svg').default}
                            alt="" onClick={() => { setPopup(false) }}
                            className={styles.close_popup}
                        />

                        <div className={styles.formBody_popup}>

                            <h1 className={styles.h1_popup}>Default Commission for Services</h1>
                            <hr className={styles.rectangle}></hr>
                            {/* <h3 className={styles.h3_popup}>An order of $ 7.00 is created,<br /> we will not be able to cancel your order after confirmation</h3> */}
                            <div className={`form-group ${styles.form_group}`}>
                                <label htmlFor="" className='w-100'>Commission From</label>
                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                    <option>% of Sale</option>
                                    <option>% of Sale</option>
                                    <option>% of Sale</option>
                                </select>
                            </div>
                            <div className={`form-group ${styles.form_group}`}>
                                <label htmlFor="" className='w-100'>Commission From</label>
                                <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                    <option>% of Sale</option>
                                    <option>% of Sale</option>
                                    <option>% of Sale</option>
                                </select>
                            </div>
                            <button className={styles.popup_btn} onClick={() => { setPopup(false) }}>Save Changes</button>
                        </div>
                        <img src={require('../../../assets/images/dots.svg').default}
                            alt=""
                            className={styles.dots2_popup}
                        />
                    </div>
                </div>
            </div>}

            {/* setting link alert popup */}
            {linkPopup && <div className={styles.search_saved}>
                <div className={styles.form_popup}>
                    <div className={`${styles.form_popup_sub} ${styles.confirm_popup}`}>
                        <img src={require('../../../assets/images/dots.svg').default}
                            alt=""
                            className={styles.dots1_popup}
                        />
                        <img src={require('../../../assets/images/close-black.svg').default}
                            alt="" onClick={() => { setLinkPopup(false) }}
                            className={styles.close_popup}
                        />

                        <div className={styles.formBody_popup}>

                            <h1 className={styles.h1_popup}>
                                Copy and paste it
                                <br></br>
                                on your website</h1>
                            <hr className={styles.rectangle}></hr>
                            <p className={styles.popup_link}>`{'<script type=«text/javascript» src=«https://booksy.com/widget/code.js? id=177088&country=us&lang=en»></script>'}`</p>
                            {/* <h3 className={styles.h3_popup}>An order of $ 7.00 is created,<br /> we will not be able to cancel your order after confirmation</h3> */}
                            <div className={`form-group ${styles.form_group}`}>
                                <label htmlFor="" className='w-100'>Send the code to my email address</label>
                                <input type='text' className={`form-control ${styles.form_control}`} placeholder='Xyz@gmail.com' />
                            </div>
                            <button className={styles.popup_btn} onClick={() => { setLinkPopup(false) }}>Send</button>
                        </div>
                        <img src={require('../../../assets/images/dots.svg').default}
                            alt=""
                            className={styles.dots2_popup}
                        />
                    </div>
                </div>
            </div>}

            <hr></hr>
            {/* about box */}
            <CommonFooter />
            {/* about box end */}
        </div >
    )
}

export default DashboardBooking