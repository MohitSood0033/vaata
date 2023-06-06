import React, { useState } from 'react'
import styles from './DashboardPublicProfile.module.css';
import CommonDashHeader from 'components/Shared/CommonDashHeader/CommonDashHeader';
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const DashboardBlacklist = () => {
    let navigate: NavigateFunction = useNavigate();
    const [popup, setPopup] = useState<boolean>(false);
    const [confirm, setConfirm] = useState<boolean>(false);

    const handleGotIt = () => {
        setPopup(false)
        setConfirm(false)
    }

    return (
        <div className={styles.main_dashboardWrap}>
            <CommonDashHeader />

            <div className={styles.helpCenter_wrap}>
                <div className=''>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className={styles.bread_crumbs}>
                                <ul>
                                    <li><a href='#!'>Home {'>'}</a></li>
                                    <li><a href='#!'>Public Profile {'>'}</a></li>
                                    <li><p>Black List</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home top area */}
            <div className={styles.home_top}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-6 col-12'>
                            <div className={styles.home_topLeft}>
                                <h2>Public Profile</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home top area */}

            <div className={styles.profile_wrap}>
                <div className='container-fluid'>
                    {/*  */}

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.profile_left}>
                                                <div className={styles.profile}>
                                                    <img src={require('../../../assets/images/profile-pic.png')}
                                                        alt="" className={styles.img} />
                                                    <h1>Andrew Tane</h1>
                                                    <a onClick={() => navigate('/dashboard/edit-profile')} className={styles.btn}>Edit Profile</a>
                                                </div>
                                                <div className={styles.profile_boxes}>
                                                    <div className={styles.box}>
                                                        <p>1234</p>
                                                        <span>Items Sold</span>
                                                    </div>
                                                    <div className={styles.box}>
                                                        <p>3345</p>
                                                        <span>Follow</span>
                                                    </div>
                                                    <div className={styles.box}>
                                                        <p>456</p>
                                                        <span>Followed</span>
                                                    </div>
                                                    <div className={styles.box}>
                                                        <p>0</p>
                                                        <span>No-Shows</span>
                                                    </div>
                                                </div>

                                                <div className={styles.verify_row}>
                                                    <div className={styles.verify}>
                                                        <img src={require('../../../assets/images/verify.png')}
                                                            alt="" className={styles.img} />
                                                        <div className={styles.verify_text}>
                                                            <span>Verify Level</span>
                                                            <p>Uploaded a Billing address</p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.verify}>
                                                        <img src={require('../../../assets/images/membership.png')}
                                                            alt="" className={styles.img} />
                                                        <div className={styles.verify_text}>
                                                            <span>Membership Status</span>
                                                            <p>Commercial, since Jan 03, 2017</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.address_box}>
                                                    <div className={styles.address_row}>
                                                        <img src={require('../../../assets/images/location.png')}
                                                            alt="" className={styles.img} />
                                                        <p>Rivne, Liberty 33 Street, Ukraine, 33000</p>
                                                    </div>
                                                    <div className={styles.address_row}>
                                                        <img src={require('../../../assets/images/telephone.png')}
                                                            alt="" className={styles.img} />
                                                        <p>+1 545 767 9876</p>
                                                    </div>
                                                    <div className={styles.address_row}>
                                                        <img src={require('../../../assets/images/email-passive.png')}
                                                            alt="" className={styles.img} />
                                                        <p>xyz@gmail.com</p>
                                                    </div>
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

                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.new_memberTitle}>
                                                <h2>
                                                    Add to Blacklist
                                                </h2>
                                            </div>
                                            <div className={styles.reviewSearch_wrap}>
                                                <div className={`${styles.help_searchBox} ${styles.blacklist_searchBox}`}>
                                                    <div className={styles.search}>
                                                        <img src={require('../../../assets/images/search-1.svg').default}
                                                            alt=""
                                                        />
                                                        <input type="text" className={styles.form_control_feedback} placeholder="Search Family Member" />
                                                    </div>
                                                    <div className={styles.search_btn}>
                                                        <button className={styles.btn}>Search</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.profile_edit}>
                                                <div className={styles.profile_form}>
                                                    <form>
                                                        <div className='row'>
                                                            <div className='col-md-12'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="" className=''>Select Reason</label>
                                                                    <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                        <option>Did Something Bad</option>
                                                                        <option>Did Something Bad</option>
                                                                        <option>Did Something Bad</option>
                                                                    </select>
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
                                                            <button className={styles.Btn1} onClick={() => navigate('/dashboard/public-profile')}>Cancel</button>
                                                            <button className={styles.Btn2} onClick={() => { setConfirm(true) }}>Block User</button>
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
                    {confirm &&
                        (<div className={styles.form_popup}>
                            <div className={styles.form_popup_sub}>
                                <img src={require('../../../assets/images/dots.svg').default}
                                    alt=""
                                    className={styles.dots1_popup}
                                />

                                {!popup && <div className={styles.formBody_popup}>

                                    <h1 className={styles.h1_popup}>You have just take a try to <br /> Block Jina Miller.</h1>
                                    <hr className={styles.rectangle}></hr>
                                    <h3 className={styles.h3_popup}>Do you want to confirm this action?</h3>
                                    <button className={styles.popup_btn} onClick={() => { setPopup(true) }}>Confirm</button>
                                </div>
                                }
                                {popup && <div className={styles.formBody_popup}>

                                    <h1 className={styles.h1_popup}>User Jina Miller <br /> was successfully blocked.</h1>
                                    <button className={styles.popup_btn} onClick={() => handleGotIt()}>Got it</button>
                                </div>}

                                <img src={require('../../../assets/images/dots.svg').default}
                                    alt=""
                                    className={styles.dots2_popup}
                                />
                            </div>
                        </div>
                        )}
                </div>
            </div>
            {/* about box */}

            <hr></hr>

            <CommonFooter />
            {/* about box end */}
        </div >
    )
}

export default DashboardBlacklist