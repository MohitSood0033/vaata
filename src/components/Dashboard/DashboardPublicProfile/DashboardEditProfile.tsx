import React, { useState } from 'react'
import styles from './DashboardPublicProfile.module.css'
import CommonDashHeader from 'components/Shared/CommonDashHeader/CommonDashHeader'
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { boolean } from 'yup'

const DashboardEditProfile = () => {
    let navigate: NavigateFunction = useNavigate();
    const [donate, setDonate] = useState<boolean>(false);

    return (
        <div className={styles.main_dashboardWrap}>
            <CommonDashHeader />

            <div className={styles.helpCenter_wrap}>
                <div className=''>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className={styles.bread_crumbs}>
                                <ul>
                                    <li><a href='#!' onClick={() => { navigate(-1) }}>Public Profile {'>'}</a></li>
                                    <li><p>Edit Profile</p></li>
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
                                <h2>Edit Profile</h2>
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
                        <div className='col-md-9'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
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
                                                            <div className='col-md-12'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">Nickname</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="Andrew Tane" id="" />
                                                                    {/* <small className={styles.word_count}>11/40</small> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-2'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">Phone Number</label>
                                                                    <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                        <option>+380</option>
                                                                        <option>+380</option>
                                                                        <option>+380</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="" className='invisible'>Phone Number</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="98 78 67 675" id="" />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-7'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="" className='invisible'>Email Address</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="xuz@gmail.com" id="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-9'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">Street</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="Liberty" id="" />
                                                                    {/* <small className={styles.word_count}>11/40</small> */}
                                                                </div>
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">Number</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="4" id="" />
                                                                    {/* <small className={styles.word_count}>11/40</small> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-5'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">City</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="London" id="" />
                                                                    {/* <small className={styles.word_count}>11/40</small> */}
                                                                </div>
                                                            </div>
                                                            <div className='col-md-2'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">Postcode</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="123456" id="" />
                                                                    {/* <small className={styles.word_count}>11/40</small> */}
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">Country</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="Ukraine" id="" />
                                                                    {/* <small className={styles.word_count}>11/40</small> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row align-items-center'>
                                                            <div className='col-md-5'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <div className={styles.form_groupBtn}>
                                                                        <label ><span>Donate Ever</span>
                                                                            <div className={styles.togleRow_img} onClick={() => { setDonate(!donate) }}>
                                                                                {donate ? <img src={require('../../../assets/images/switch-on.svg').default}
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
                                                                        <button className={styles.Btn1}>Cancel</button>
                                                                        <button className={styles.Btn2}>Save Changes</button>
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
                        <div className='col-md-3'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={`h-100 ${styles.itemBox_main}`}>
                                    <div className='row h-100'>
                                        <div className='col h-100'>
                                            <div className={styles.member_plan}>
                                                <div className={styles.member_planContant}>
                                                    <img src={require('../../../assets/images/plan-img.png')}
                                                        alt=""
                                                        className={styles.img}
                                                    />
                                                    <p>Membership Plan</p>
                                                    <h2>Commercial</h2>
                                                    <span>since Jan 03, 2017</span>
                                                    <button className={styles.change_btn}>Change Plan</button>
                                                    <button className={styles.cancel_btn}>Cancel Plan</button>
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

            <hr></hr>

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

export default DashboardEditProfile