import React, { useState } from 'react'
import styles from './DashboardBooking.module.css';
import CommonDashHeader from 'components/Shared/CommonDashHeader/CommonDashHeader';
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DasboardWithoutMembership = () => {
    const [dateState, setDateState] = useState(new Date());
    const changeDate = (e: any) => {
        setDateState(e)
    }

    return (
        <div className={styles.main_dashboardWrap}>
            <CommonDashHeader />

            {/* home top area */}
            <div className={styles.home_top}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-6 col-12'>
                            <div className={`${styles.home_topLeft} ${styles.booking_topLeft}`}>
                                <h2>Booking</h2>
                                <a href='#!'>Select Plan</a>
                            </div>
                            <div className={styles.booking_topLeft_date}>
                                <p>Monday, April 1, 2019</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 col-12'>
                            <div className={styles.booking_topRight}>
                                <a href='#!' className={styles.home}>Back to home</a>
                                <a href='#!' className={styles.visit}>Book a Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home top area */}

            <div className={styles.event_wrap}>
                <div className='container-fluid'>

                    <div className='row mt-4'>

                        <div className='col-md-4'>
                            <div className={`${styles.market_itemBox}`}>
                                <div className={`h-100 ${styles.itemBox_main}`}>
                                    <div className='row h-100'>
                                        <div className='col'>
                                            <div className={`h-100 ${styles.col_1}`}>
                                                <div className={styles.calender_col}>
                                                    <Calendar value={dateState}
                                                        onChange={changeDate} />
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
                                                <div className={`mb-0 ${styles.statistics_title} ${styles.booking_title}`}>
                                                    <h2>
                                                        April 3, 2019
                                                    </h2>
                                                    <span>6 Visits</span>
                                                </div>
                                                <div className={`border-bottom-0 ${styles.visits_col}`}>
                                                    <div className={`${styles.all_servicesMain} ${styles.visit_servicesMain}`}>
                                                        <div className={`${styles.servicesRow_wrap}`}>
                                                            <div className={`${styles.servicesRow} ${styles.visits_Row} ${styles.visits_Row_active}`}>
                                                                <div className={`${styles.servicesRow_col1} ${styles.visitRow_col1}`}>
                                                                    <p>Acrylic Full Set Pearl/French Extension Tips</p>
                                                                    <span>
                                                                        <img src={require('../../../assets/images/building.png')}
                                                                            alt="" className={styles.building} />
                                                                        Riidco shop
                                                                    </span>
                                                                </div>
                                                                <div className={`${styles.servicesRow_col2} ${styles.visitRow_col3} ${styles.visitRow_col3_active}`}>
                                                                    <p>
                                                                        $55.00
                                                                        <br></br>
                                                                        <span>11:45 - 12:45</span>
                                                                    </p>
                                                                    <img src={require('../../../assets/images/notes.svg').default}
                                                                        alt="" className={styles.notes} />
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.servicesRow} ${styles.visits_Row}`}>
                                                                <div className={`${styles.servicesRow_col1} ${styles.visitRow_col1}`}>
                                                                    <p>Men’s Haircut with Hot Towel Shave</p>
                                                                    <span>
                                                                        <img src={require('../../../assets/images/building.png')}
                                                                            alt="" className={styles.building} />
                                                                        Paiz Barbershop
                                                                    </span>
                                                                </div>
                                                                <div className={`${styles.servicesRow_col2} ${styles.visitRow_col3}`}>
                                                                    <p>
                                                                        $80.00
                                                                        <br></br>
                                                                        <span>13:00 - 14:00</span>
                                                                    </p>
                                                                    <img src={require('../../../assets/images/notes.svg').default}
                                                                        alt="" className={styles.notes} />
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.servicesRow} ${styles.visits_Row}`}>
                                                                <div className={`${styles.servicesRow_col1} ${styles.visitRow_col1}`}>
                                                                    <p>Man Massage</p>
                                                                    <span>
                                                                        <img src={require('../../../assets/images/building.png')}
                                                                            alt="" className={styles.building} />
                                                                        Lolly Massage
                                                                    </span>
                                                                </div>
                                                                <div className={`${styles.servicesRow_col2} ${styles.visitRow_col3}`}>
                                                                    <p>
                                                                        $30.00
                                                                        <br></br>
                                                                        <span>15:15 - 15:45</span>
                                                                    </p>
                                                                    <img src={require('../../../assets/images/notes.svg').default}
                                                                        alt="" className={styles.notes} />
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.servicesRow} ${styles.visits_Row}`}>
                                                                <div className={`${styles.servicesRow_col1} ${styles.visitRow_col1}`}>
                                                                    <p>Massage</p>
                                                                    <span>
                                                                        <img src={require('../../../assets/images/building.png')}
                                                                            alt="" className={styles.building} />
                                                                        BeBeauty Relax
                                                                    </span>
                                                                </div>
                                                                <div className={`${styles.servicesRow_col2} ${styles.visitRow_col3}`}>
                                                                    <p>
                                                                        $30.00
                                                                        <br></br>
                                                                        <span>17:45 - 19:00</span>
                                                                    </p>
                                                                    <img src={require('../../../assets/images/notes.svg').default}
                                                                        alt="" className={styles.notes} />
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.servicesRow} ${styles.visits_Row} ${styles.visits_Row_active}`}>
                                                                <div className={`${styles.servicesRow_col1} ${styles.visitRow_col1}`}>
                                                                    <p>Acrylic Full Set Pearl/French Extension Tips</p>
                                                                    <span>
                                                                        <img src={require('../../../assets/images/building.png')}
                                                                            alt="" className={styles.building} />
                                                                        Riidco shop
                                                                    </span>
                                                                </div>
                                                                <div className={`${styles.servicesRow_col2} ${styles.visitRow_col3} ${styles.visitRow_col3_active}`}>
                                                                    <p>
                                                                        $55.00
                                                                        <br></br>
                                                                        <span>11:45 - 12:45</span>
                                                                    </p>
                                                                    <img src={require('../../../assets/images/notes.svg').default}
                                                                        alt="" className={styles.notes} />
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.servicesRow} ${styles.visits_Row}`}>
                                                                <div className={`${styles.servicesRow_col1} ${styles.visitRow_col1}`}>
                                                                    <p>Men’s Haircut with Hot Towel Shave</p>
                                                                    <span>
                                                                        <img src={require('../../../assets/images/building.png')}
                                                                            alt="" className={styles.building} />
                                                                        Paiz Barbershop
                                                                    </span>
                                                                </div>
                                                                <div className={`${styles.servicesRow_col2} ${styles.visitRow_col3}`}>
                                                                    <p>
                                                                        $80.00
                                                                        <br></br>
                                                                        <span>13:00 - 14:00</span>
                                                                    </p>
                                                                    <img src={require('../../../assets/images/notes.svg').default}
                                                                        alt="" className={styles.notes} />
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.servicesRow} ${styles.visits_Row}`}>
                                                                <div className={`${styles.servicesRow_col1} ${styles.visitRow_col1}`}>
                                                                    <p>Man Massage</p>
                                                                    <span>
                                                                        <img src={require('../../../assets/images/building.png')}
                                                                            alt="" className={styles.building} />
                                                                        Lolly Massage
                                                                    </span>
                                                                </div>
                                                                <div className={`${styles.servicesRow_col2} ${styles.visitRow_col3}`}>
                                                                    <p>
                                                                        $30.00
                                                                        <br></br>
                                                                        <span>15:15 - 15:45</span>
                                                                    </p>
                                                                    <img src={require('../../../assets/images/notes.svg').default}
                                                                        alt="" className={styles.notes} />
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.servicesRow} ${styles.visits_Row}`}>
                                                                <div className={`${styles.servicesRow_col1} ${styles.visitRow_col1}`}>
                                                                    <p>Massage</p>
                                                                    <span>
                                                                        <img src={require('../../../assets/images/building.png')}
                                                                            alt="" className={styles.building} />
                                                                        BeBeauty Relax
                                                                    </span>
                                                                </div>
                                                                <div className={`${styles.servicesRow_col2} ${styles.visitRow_col3}`}>
                                                                    <p>
                                                                        $30.00
                                                                        <br></br>
                                                                        <span>17:45 - 19:00</span>
                                                                    </p>
                                                                    <img src={require('../../../assets/images/notes.svg').default}
                                                                        alt="" className={styles.notes} />
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
                        <div className='col-md-12'>
                            <div className={`h-100 ${styles.market_itemBox}`}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.col_2}>
                                                <div className={`mb-0 ${styles.statistics_title} ${styles.history_title}`}>
                                                    <h2>
                                                        History
                                                    </h2>
                                                    <div className={`${styles.topTab} ${styles.history_topTab}`}>
                                                        <a href='#!' className={styles.active}>All</a>
                                                        <a href='#!'>Completed</a>
                                                        <a href='#!'>Cancelled</a>
                                                    </div>
                                                </div>
                                                <div className={`border-bottom-0 ${styles.history_col}`}>
                                                    <div className={`${styles.all_servicesMain} ${styles.history_servicesMain}`}>
                                                        <div className={`${styles.servicesRow_wrap}`}>
                                                            <div className={`${styles.servicesRow} ${styles.history_RowMain}`}>
                                                                <div className={`${styles.history_Row}`}>
                                                                    <div className={`${styles.servicesRow_col1} ${styles.visitRow_col1}`}>
                                                                        <p>Acrylic Full Set Pearl/French Extension Tips</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/building.png')}
                                                                                alt="" className={styles.building} />
                                                                            Riidco shop
                                                                        </span>
                                                                        <div className={styles.history_ratings}>
                                                                            <span>
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                            </span>
                                                                            <small>Write Review</small>
                                                                        </div>
                                                                    </div>
                                                                    <div className={`${styles.servicesRow_col2} ${styles.visitRow_col3} ${styles.historyRow_col3}`}>
                                                                        <p>
                                                                            $80.00
                                                                            <br></br>
                                                                            <span>April 3, 2019 10:15 - 10:45</span>
                                                                            <br></br>
                                                                            <small>Completed</small>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.servicesRow} ${styles.history_RowMain}`}>
                                                                <div className={`${styles.history_Row}`}>
                                                                    <div className={`${styles.servicesRow_col1} ${styles.visitRow_col1}`}>
                                                                        <p>Acrylic Full Set Pearl/French Extension Tips</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/building.png')}
                                                                                alt="" className={styles.building} />
                                                                            Riidco shop
                                                                        </span>
                                                                        <div className={styles.history_ratings}>
                                                                            <span>
                                                                                <img src={require('../../../assets/images/rating-active.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/rating-active.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/rating-active.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/rating-active.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                            </span>
                                                                            <small>Write Review</small>
                                                                        </div>
                                                                    </div>
                                                                    <div className={`${styles.servicesRow_col2} ${styles.visitRow_col3} ${styles.historyRow_col3}`}>
                                                                        <p>
                                                                            $55.00
                                                                            <br></br>
                                                                            <span>April 2, 2019 11:45 - 12:45</span>
                                                                            <br></br>
                                                                            <small>Completed</small>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className={`${styles.history_description}`}>
                                                                    <p>Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty destination that offers premium products, one-time use pedi kits, over 600 gels, and regular color. Affordable, transparent pricing is also available. All full sets and fills include desired nail shapes with up to medium nail length, and a cuticle treatment. Removals are available with new sets of dips and gel manicures. Pricing varies</p>
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.servicesRow} ${styles.history_RowMain}`}>
                                                                <div className={`${styles.history_Row}`}>
                                                                    <div className={`${styles.servicesRow_col1} ${styles.visitRow_col1}`}>
                                                                        <p>Man Massage</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/building.png')}
                                                                                alt="" className={styles.building} />
                                                                            Lolly Massage
                                                                        </span>
                                                                        {/* <div className={styles.history_ratings}>
                                                                            <span>
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                            </span>
                                                                            <small>Write Review</small>
                                                                        </div> */}
                                                                    </div>
                                                                    <div className={`${styles.servicesRow_col2} ${styles.visitRow_col3} ${styles.historyRow_col3}`}>
                                                                        <p>
                                                                            $30.00
                                                                            <br></br>
                                                                            <span>April 3, 2019 10:15 - 10:45</span>
                                                                            <br></br>
                                                                            <small>Completed</small>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.servicesRow} ${styles.history_RowMain}`}>
                                                                <div className={`${styles.history_Row}`}>
                                                                    <div className={`${styles.servicesRow_col1} ${styles.visitRow_col1}`}>
                                                                        <p>Men’s Haircut with Hot Towel Shave</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/building.png')}
                                                                                alt="" className={styles.building} />
                                                                            Paiz Barbershop
                                                                        </span>
                                                                        <div className={styles.history_ratings}>
                                                                            <span>
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                            </span>
                                                                            <small>Write Review</small>
                                                                        </div>
                                                                    </div>
                                                                    <div className={`${styles.servicesRow_col2} ${styles.visitRow_col3} ${styles.historyRow_col3}`}>
                                                                        <p>
                                                                            $80.00
                                                                            <br></br>
                                                                            <span>April 3, 2019 10:15 - 10:45</span>
                                                                            <br></br>
                                                                            <small>Completed</small>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.servicesRow} ${styles.history_RowMain}`}>
                                                                <div className={`${styles.history_Row}`}>
                                                                    <div className={`${styles.servicesRow_col1} ${styles.visitRow_col1}`}>
                                                                        <p>Acrylic Full Set Pearl/French Extension Tips</p>
                                                                        <span>
                                                                            <img src={require('../../../assets/images/building.png')}
                                                                                alt="" className={styles.building} />
                                                                            Riidco shop
                                                                        </span>
                                                                        <div className={styles.history_ratings}>
                                                                            <span>
                                                                                <img src={require('../../../assets/images/rating-active.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/rating-active.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/rating-active.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/rating-active.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                                <img src={require('../../../assets/images/paring-passive.svg').default}
                                                                                    alt="" className={styles.star} />
                                                                            </span>
                                                                            <small>Write Review</small>
                                                                        </div>
                                                                    </div>
                                                                    <div className={`${styles.servicesRow_col2} ${styles.visitRow_col3} ${styles.historyRow_col3}`}>
                                                                        <p>
                                                                            $55.00
                                                                            <br></br>
                                                                            <span>April 2, 2019 11:45 - 12:45</span>
                                                                            <br></br>
                                                                            <small>Completed</small>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className={`${styles.history_description}`}>
                                                                    <p>Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty destination that offers premium products, one-time use pedi kits, over 600 gels, and regular color. Affordable, transparent pricing is also available. All full sets and fills include desired nail shapes with up to medium nail length, and a cuticle treatment. Removals are available with new sets of dips and gel manicures. Pricing varies</p>
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
            </div>

            <hr></hr>
            {/* about box */}
            <CommonFooter />
            {/* about box end */}
        </div>
    )
}

export default DasboardWithoutMembership