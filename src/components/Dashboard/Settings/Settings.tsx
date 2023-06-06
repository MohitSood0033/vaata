import React, { useState } from 'react'
import styles from './Settings.module.css';
import CommonDashHeader from 'components/Shared/CommonDashHeader/CommonDashHeader';
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter';

const Settings = () => {
    const [array, setArray] = useState<any>(["Dark Theme", "Push Notifications", "Add Messenger"]);
    const [array1, setArray1] = useState<any>(["Changing on a Bid", "Buying a Good", "Selling a Good", "Adding a News",
        "Daily Report", "Weelky Report", "Monthly Report", "Yearly Report", "Needed to Review", "Needed to Reply"]);
    const [toggle, setToggle] = useState<any>([]);
    const [togglePush, setTogglePush] = useState<any>([]);
    const [toggleEmail, setToggleEmail] = useState<any>([]);
    const [prop, setProp] = useState<boolean>(false);
    const [sameBoth, setSameBoth] = useState<boolean>(false);
    const [sameGeneral, setSameGeneral] = useState<boolean>(false);

    const handleClicks = (value: any, i: any) => {
        const index = toggle.indexOf(i)
        if (toggle.includes(i)) {
            toggle.splice(index, 1)
        } else {
            toggle.push(i)
        }
        setProp(!prop)
    }

    const handleTogglePush = (value: any,i: any)  => {
        const index = togglePush.indexOf(i)
        if (togglePush.includes(i)) {
            togglePush.splice(index, 1)
        } else {
            togglePush.push(i)
        }
        setProp(!prop)
    }
    const handleToggleEmail = (value: any,i: any)  => {
        const index = toggleEmail.indexOf(i)
        if (toggleEmail.includes(i)) {
            toggleEmail.splice(index, 1)
        } else {
            toggleEmail.push(i)
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
                                <h2>Settings</h2>
                                <a href='#!'>Commercial</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home top area */}

            <div className={styles.settings_wrap}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-8 col-sm-8 col-12'>
                            <div className={styles.settings_leftCol}>
                                <div className={styles.settings_box}>
                                    <div className={styles.settings_boxContant}>
                                        <div className={styles.settings_heading}>
                                            <div className={styles.heading_left}>
                                                <h2>Personal Data</h2>
                                            </div>
                                            <div className={styles.heading_right}>
                                                <img src={require('../../../assets/images/notes.svg').default}
                                                    alt=""
                                                    className={styles.img}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.personal_data}>
                                            <div className={styles.profle}>
                                                <span>Edit email</span>
                                                <p>blablabka123@gmail.com</p>
                                            </div>
                                            <div className={styles.profle}>
                                                <span>Edit Password</span>
                                                <p>*******************</p>
                                            </div>
                                            <div className={styles.profle}>
                                                <span>Phone Number</span>
                                                <p>+38(097)13-61-757</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`mt-4 ${styles.settings_box}`}>
                                    <div className={styles.settings_boxContant}>
                                        <div className={styles.settings_heading}>
                                            <div className={styles.heading_left}>
                                                <h2>Accept Methode</h2>
                                            </div>
                                        </div>
                                        <div className={styles.pay_method}>
                                            <div className={styles.methdods}>
                                                <img src={require('../../../assets/images/PayPal-FullColo.png')}
                                                    alt=""
                                                    className={styles.img}
                                                />
                                                <img src={require('../../../assets/images/Group 1299.png')}
                                                    alt=""
                                                    className={styles.img}
                                                />
                                                <p>
                                                    <img src={require('../../../assets/images/Plus_active.png')}
                                                        alt=""
                                                        className={styles.img}
                                                    />
                                                    Add Payment Methood</p>
                                            </div>
                                            <div className={styles.notes}>
                                                <img src={require('../../../assets/images/notes.svg').default}
                                                    alt=""
                                                    className={styles.img}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`mt-4 ${styles.settings_box}`}>
                                    <div className={styles.settings_boxContant}>
                                        <div className={styles.settings_heading}>
                                            <div className={styles.heading_left}>
                                                <h2>Payment Methode</h2>
                                            </div>
                                            <div className={styles.methodheading_right}>
                                                <p>Same for both</p>
                                                <div className={styles.methodtogle_right} onClick={() => {setSameBoth(!sameBoth)}}>
                                                    {sameBoth ? <img src={require('../../../assets/images/switch-off.svg').default}
                                                        alt=""
                                                        className={styles.active_billing}
                                                    /> :
                                                    <img src={require('../../../assets/images/switch-on.svg').default}
                                                        alt=""
                                                        className={styles.active_billing}
                                                    />}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.pay_method}>
                                            <div className={styles.methdods}>
                                                <img src={require('../../../assets/images/apple pay.png')}
                                                    alt=""
                                                    className={styles.img}
                                                />
                                                <img src={require('../../../assets/images/credit-cards-pa.png')}
                                                    alt=""
                                                    className={styles.img}
                                                />
                                                <img src={require('../../../assets/images/PayPal-FullColo.png')}
                                                    alt=""
                                                    className={styles.img}
                                                />
                                                <img src={require('../../../assets/images/Group 1299.png')}
                                                    alt=""
                                                    className={styles.img}
                                                />
                                                <p>
                                                    <img src={require('../../../assets/images/Plus_active.png')}
                                                        alt=""
                                                        className={styles.img}
                                                    />
                                                    Add Payment Methood</p>
                                            </div>
                                            <div className={styles.notes}>
                                                <img src={require('../../../assets/images/notes.svg').default}
                                                    alt=""
                                                    className={styles.img}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`mt-4 ${styles.settings_box}`}>
                                    <div className={styles.settings_boxContant}>
                                        <div className={styles.settings_heading}>
                                            <div className={styles.heading_left}>
                                                <h2>Address</h2>
                                            </div>
                                            <div className={styles.heading_right}>
                                                <img src={require('../../../assets/images/notes.svg').default}
                                                    alt=""
                                                    className={styles.img}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.profile_address}>
                                            <div className={styles.current_adddress}>
                                                <h2>Currently Address</h2>
                                                <div className={styles.address_row}>
                                                    <div className={styles.row_Col}>
                                                        <span>Street</span>
                                                        <p>Liberty</p>
                                                    </div>
                                                    <div className={styles.row_Col}>
                                                        <span>Number</span>
                                                        <p>4</p>
                                                    </div>
                                                    <div className={styles.row_Col}>
                                                        <span>City</span>
                                                        <p>London</p>
                                                    </div>
                                                    <div className={styles.row_Col}>
                                                        <span>Postcode</span>
                                                        <p>123456</p>
                                                    </div>
                                                    <div className={styles.row_Col}>
                                                        <span>Country</span>
                                                        <p>Ukraine</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`mt-4 ${styles.current_adddress}`}>
                                                <h2>Currently Address</h2>
                                                <div className={styles.address_row}>
                                                    <div className={styles.row_Col}>
                                                        <span>Street</span>
                                                        <p>Liberty</p>
                                                    </div>
                                                    <div className={styles.row_Col}>
                                                        <span>Number</span>
                                                        <p>4</p>
                                                    </div>
                                                    <div className={styles.row_Col}>
                                                        <span>City</span>
                                                        <p>London</p>
                                                    </div>
                                                    <div className={styles.row_Col}>
                                                        <span>Postcode</span>
                                                        <p>123456</p>
                                                    </div>
                                                    <div className={styles.row_Col}>
                                                        <span>Country</span>
                                                        <p>Ukraine</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className={`mt-4 ${styles.settings_box}`}>
                                    <div className={styles.settings_boxContant}>
                                        <div className={styles.settings_heading}>
                                            <div className={styles.heading_left}>
                                                <h2>Notification Email</h2>
                                            </div>
                                            <div className={styles.methodheading_right}>
                                                <p>Use Same to General</p>
                                                <div className={styles.methodtogle_right} onClick={() => {setSameGeneral(!sameGeneral)}}>
                                                    {sameGeneral ? <img src={require('../../../assets/images/switch-off.svg').default}
                                                        alt=""
                                                        className={styles.active_billing}
                                                    /> :
                                                    <img src={require('../../../assets/images/switch-on.svg').default}
                                                        alt=""
                                                        className={styles.active_billing}
                                                    />}
                                                    <img src={require('../../../assets/images/notes.svg').default}
                                                        alt=""
                                                        className={styles.email_note}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.personal_data}>
                                            <div className={styles.profle}>
                                                <span>Edit email</span>
                                                <p>blablabka123@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4 col-12'>
                            <div className={styles.settings_rightCol}>
                                <div className={styles.settings_box}>
                                    <div className={styles.settings_boxContant}>
                                        <div className={styles.settings_boxtogle}>
                                            <div className={styles.setting_togleRow}>
                                                {array.map((options: any, index: any) => (
                                                    <label key={options}><span>{options}</span>
                                                        <div className={styles.togleRow_img} onClick={() => handleClicks(options, index)}>
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
                                        <hr></hr>
                                        <div className={styles.settings_boxtogle}>
                                            <div className={styles.setting_togleRow}>
                                                {array1.map((options: any,index: any) => (
                                                    <label key={options}>
                                                        <span>
                                                            <small>Type</small>
                                                            {options}
                                                        </span>
                                                        <div className={styles.togleRow_img}>
                                                            <div className={styles.cols}>
                                                                <small>Push</small>
                                                                <div onClick={() => { handleTogglePush(options, index) }}>
                                                                {togglePush.includes(index) ? <img src={require('../../../assets/images/switch-off.svg').default}
                                                                    alt=""
                                                                    className={styles.img}
                                                                /> :
                                                                <img src={require('../../../assets/images/switch-on.svg').default}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />}
                                                                </div>
                                                            </div>

                                                            <div className={styles.cols1} >
                                                                <small>Email</small>
                                                                <div onClick={() => { handleToggleEmail(options, index) }}>
                                                                {toggleEmail.includes(index) ? <img src={require('../../../assets/images/switch-off.svg').default}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />:
                                                                <img src={require('../../../assets/images/switch-on.svg').default}
                                                                    alt=""
                                                                    className={styles.img}
                                                                />}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>  
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>

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

export default Settings