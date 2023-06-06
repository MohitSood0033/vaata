import React, { useState } from 'react';
import styles from './DashboardBooking.module.css'
import CommonDashHeader from 'components/Shared/CommonDashHeader/CommonDashHeader';
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const CreateVisit = () => {
    const [quickBook, setQuickBook] = useState<boolean>(false);
    let navigate: NavigateFunction = useNavigate();

    return (
        <div className={styles.main_dashboardWrap}>
            <CommonDashHeader />

            <div className={styles.helpCenter_wrap}>
                <div className=''>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className={styles.bread_crumbs}>
                                <ul>
                                    <li><a href='#!' onClick={() => { navigate(-1) }}>Booking {'>'}</a></li>
                                    <li><p>New Visit</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home top area */}
            <div className={styles.home_top}>
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 col-sm-6 col-12'>
                            <div className={styles.home_topLeft}>
                                <h2>New Visit</h2>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 col-12'>
                            <div className={styles.home_topRight}>
                                <a href='#!' className={styles.cancel} onClick={() => { navigate(-1) }}>Cancel</a>
                                <a href='#!' className={styles.addd}>Add Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home top area */}

            <div className={styles.event_wrap}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.newVisit_colLeft}>
                                                <form>
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={styles.form_groupCol}>
                                                                <div className={styles.form_groupImg}>
                                                                    <img src={require('../../../assets/images/member-profile.png')}
                                                                        alt="" className={styles.img} />
                                                                </div>
                                                                <div className={`form-group w-100 ${styles.form_group}`}>
                                                                    <div className={styles.label_switch}>
                                                                        <label htmlFor="">Client Name</label>
                                                                        <span onClick={() => { setQuickBook(!quickBook) }}>
                                                                            Quick Booking
                                                                            {quickBook ? <img src={require('../../../assets/images/switch-on.svg').default}
                                                                                alt="" className={styles.img} /> :
                                                                                <img src={require('../../../assets/images/switch-off.svg').default}
                                                                                    alt="" className={styles.img} />}
                                                                        </span>
                                                                    </div>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="John" id="" />
                                                                    {/* <small className={styles.word_count}>11/40</small> */}
                                                                </div>
                                                            </div>
                                                            <div className={`form-group w-100 ${styles.form_group}`}>
                                                                <p className={styles.add_newClient}>
                                                                    <img src={require('../../../assets/images/Plus_active.png')}
                                                                        alt="" className={styles.img} />
                                                                    Add new Client
                                                                </p>
                                                            </div>
                                                            <div className={styles.form_groupCol}>
                                                                <div className={styles.form_groupImg}>
                                                                    <img src={require('../../../assets/images/Profile.png')}
                                                                        alt="" className={styles.img} />
                                                                </div>
                                                                <div className={`form-group w-100 ${styles.form_group}`}>
                                                                    <label htmlFor="">Executed by</label>
                                                                    <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                        <option>Martin O’connell</option>
                                                                        <option>Martin O’connell</option>
                                                                        <option>Martin O’connell</option>
                                                                    </select>
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
                        <div className='col-md-8'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.newVisit_colRight}>
                                                <form>
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className={`form-group w-100 ${styles.form_group}`}>
                                                                <label htmlFor="" className={styles.red_label}>Service</label>
                                                                <div className={styles.visit_accordion}>
                                                                    <div className={styles.visit_accordionTitle}>
                                                                        <h2>
                                                                            Acrylic Full Set Pearl/French Extension Tips
                                                                            <small>30min</small>
                                                                            <span>$55</span>
                                                                            <img src={require('../../../assets/images/arrow-right.png')}
                                                                                alt="" className={styles.arrow} />
                                                                        </h2>
                                                                    </div>
                                                                    <div className={styles.visit_accordionBody}>
                                                                        <div className={`${styles.accordionBody_row}`}>
                                                                            <h2>Barber hair</h2>
                                                                            <p>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className={`${styles.accordionBody_row} ${styles.accordionBody_row_actieDark}`}>
                                                                            <h2>Acrylic Full Set Pearl/French Extension Tips</h2>
                                                                            <p>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className={`${styles.accordionBody_row} ${styles.accordionBody_row_actieLight}`}>
                                                                            <h2>Up to 1 hour before start time</h2>
                                                                            <p>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className={styles.accordionBody_row}>
                                                                            <h2>Man Massage</h2>
                                                                            <p>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className={styles.accordionBody_row}>
                                                                            <h2>Woman Massage</h2>
                                                                            <p>
                                                                                <span className={styles.time}>30min</span>
                                                                                <span className={styles.price}>$55</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`form-group w-100 ${styles.form_group}`}>
                                                                <label htmlFor="">Note</label>
                                                                <textarea rows={4} className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty destination that offers premium products, one-time use pedi kits, over 600 gels, and regular color. Affordable, transparent pricing is also available. All full sets and fills include desired nail shapes with up to medium nail length, and a cuticle treatment. Removals are available with new sets of dips and gel manicures. Pricing varies on nail art!, Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty destination that offers premium products, one-time use pedi kits, over 600 gels, and regular color. Affordable, transparent pricing is also available. All full sets and fills include desired nail shapes with up to medium nail length, and a cuticle treatment. Removals are available with new sets of dips and gel manicures. Pricing varies on nail art!' />
                                                                <small className={styles.word_count}>250/5000</small>
                                                            </div>
                                                            <div className={`form-group w-100 ${styles.form_group}`}>
                                                                <label htmlFor="">Message to Client</label>
                                                                <textarea rows={1} className={`form-control ${styles.form_control} ${styles.form_group_textArea}`} placeholder='Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty destination that offers premium products, one-time use pedi kits, over 600 gels, and regular color. Affordable, transparent pricing is also available. All full sets and fills include desired nail shapes with up to medium nail length, and a cuticle treatment. Removals are available with new sets of dips and gel manicures. Pricing varies on nail art!, Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty destination that offers premium products, one-time use pedi kits, over 600 gels, and regular color. Affordable, transparent pricing is also available. All full sets and fills include desired nail shapes with up to medium nail length, and a cuticle treatment. Removals are available with new sets of dips and gel manicures. Pricing varies on nail art!' />
                                                                <small className={styles.word_count}>250/5000</small>
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
            </div>

            {/* about box */}
            <CommonFooter />
            {/* about box end */}
        </div>
    )
}

export default CreateVisit