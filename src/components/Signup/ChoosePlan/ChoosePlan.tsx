import React, { useState } from "react";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from '.././ChoosePlan/ChoosePlan.module.css';
import Carousel from 'react-bootstrap/Carousel';
import '../../../Carousel.css'

type Props = {}

const ChoosePlan: React.FC<Props> = () => {
    let navigate: NavigateFunction = useNavigate();
    const [popUpVisibble, setpopUpVisibble] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [BusinessInfo, setBusinessInfo] = useState(false);
    const [message, setMessage] = useState<string>("");


    const openPopup = () => {
        setpopUpVisibble(true)
    };
    const onStart = () => {
        navigate('/login')
    };


    const handleAdd = (formValue: { firstname: string; lastname: string }) => {
        console.log('1234');

        const { firstname, lastname } = formValue;

        setMessage("");
        setLoading(true);

        // login(username, password).then(
        //     () => {
        //         navigate("/profile");
        //         window.location.reload();
        //     },
        //     (error) => {
        //         const resMessage =
        //             (error.response &&
        //                 error.response.data &&
        //                 error.response.data.message) ||
        //             error.message ||
        //             error.toString();

        //         setLoading(false);
        //         setMessage(resMessage);
        //     }
        // );
    };

    return (
        <>
      <h1 className={styles.h1_plan}>Choose a Plan</h1>  
                        <div className={styles.form_billing_main}>   
                             
                            <div className="row">
                                
                                <div className="col-md-12 col-12">
                                    <div className={styles.pricing_col}>
                                        <div className={styles.col}>
                                            <div className={`card ${styles.card_marketting}`}>
                                                <div className={styles.price_heading}>
                                                    <h5>Private</h5>
                                                    <p>$7</p>
                                                    </div>
                                                
                                                <div className={styles.price_detail}>
                                                    <hr className={styles.pricing_hr}></hr>
                                                    <p>Multiaccount Option</p>
                                                    <p>Pay Monthly Fees</p>
                                                    <p>Membership Status</p>
                                                    <p>Memberships: Rewards</p>
                                                    <p>- Coupons</p>
                                                    <p>- Points</p>
                                                    <p>- 1 Free Product Sellings</p>
                                                </div>
                                                <div className={styles.price_btn}>
                                                    <button type="submit" className={styles.btn_private}>Choose Private</button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={styles.col}>
                                            <div className={`card ${styles.card_marketting}`}>
                                                <div className={styles.price_heading_plus}>
                                                    <h5>Private Plus</h5>
                                                    <p>$14</p>
                                                </div>

                                                <div className={styles.price_detail}>
                                                    <hr className={styles.pricing_hr}></hr>
                                                    <p>Multiaccount Option</p>
                                                    <p>Pay Monthly Fees</p>
                                                    <p>Membership Status</p>
                                                    <p>Memberships: Rewards</p>
                                                    <p>- Coupons</p>
                                                    <p>- Points</p>
                                                    <p>- 2 Free Product Sellings</p>
                                                    <p>Create Bookings</p>
                                                </div>
                                                <div className={styles.price_btn}>
                                                    <button type="submit" className={styles.btn_plus}>Choose Private Plus</button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={styles.col}>
                                            <div className={`card ${styles.card_marketting}`}>
                                                <div className={styles.price_heading_commercial}>
                                                    <h5>Commercial</h5>
                                                    <p>$47</p>
                                                </div>

                                                <div className={styles.price_detail}>
                                                    <hr className={styles.pricing_hr}></hr>
                                                    <p>Multiaccount Option</p>
                                                    <p>Pay Monthly Fees</p>
                                                    <p>Membership Status</p>
                                                    <p>Memberships: Rewards</p>
                                                    <p>- Coupons</p>
                                                    <p>- Points</p>
                                                    <p>- 2 Free Product Sellings</p>
                                                    <p>Create Bookings</p>
                                                    <p>Create Coupons</p>
                                                    <p>5% of Marketing</p>
                                                </div>
                                                <div className={styles.price_btn}>
                                                    <button type="submit" className={styles.btn_commercial}>Choose Commerical</button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={styles.col}>
                                            <div className={`card ${styles.card_marketting}`}>
                                                <div className={styles.price_heading_startup}>
                                                    <h5>Startup</h5>
                                                    <p>$27</p>
                                                    <h6>Company is not older than 15 months</h6>
                                                </div>

                                                <div className={styles.price_detail}>
                                                    <hr className={styles.pricing_hr}></hr>
                                                    <p>Multiaccount Option</p>
                                                    <p>Pay Monthly Fees</p>
                                                    <p>Membership Status</p>
                                                    <p>Memberships: Rewards</p>
                                                    <p>- Coupons</p>
                                                    <p>- Points</p>
                                                    <p>- 2 Free Product Sellings</p>
                                                    <p>Create Coupons</p>
                                                    <p>10% of Marketing Fees Discount</p>
                                                </div>
                                                <div className={styles.price_btn}>
                                                    <button type="submit" className={styles.btn_startup}>Choose Startup</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-12">
                                    <div className={styles.later_btn}>
                            <button type="submit" onClick={() => openPopup()} className={styles.btn_later}>Choose later</button>
                                    </div>
                                </div>

                            </div>
                
                        </div>
            {popUpVisibble && (<div className={styles.form_popup}>
                <div className={styles.form_popup_sub}>
                    <img src={require('../../../assets/images/dots.svg').default}
                        alt=""
                        className={styles.dots1_popup}
                    />
                    <div className={styles.formBody_popup}>

                        <h1 className={styles.h1_popup}>You have create an account</h1>
                        <hr className={styles.rectangle}></hr>
                        <h3 className={styles.h3_popup}>Confirmation link has been sent<br></br> To you`r email</h3>
                        <div className="col-md-12 col-12">
                            <div className={styles.start_btn}>
                                <button type="submit" className={styles.btn_start} onClick={() => onStart()}>Start with Vaata</button>
                            </div>
                        </div>
                    </div>
                    <img src={require('../../../assets/images/dots.svg').default}
                        alt=""
                        className={styles.dots2_popup}
                    />
                </div>
            </div>
            )}
            <div className={`${styles.form_billing_main} ${styles.form_billing_mobile}`}>
                {/* <Carousel /> */}
                <Carousel slide={false}>
                    <Carousel.Item>
                        <div className={styles.col}>
                            <div className={`card ${styles.card_marketting}`}>
                                <div className={`${styles.pricing_head} ${styles.price_heading}`}>
                                    <h5>Private</h5>
                                    <p>$7</p>
                                </div>

                                <div className={styles.price_detail}>
                                    <hr className={styles.pricing_hr}></hr>
                                    <p>Multiaccount Option</p>
                                    <p>Pay Monthly Fees</p>
                                    <p>Membership Status</p>
                                    <p>Memberships: Rewards</p>
                                    <p>- Coupons</p>
                                    <p>- Points</p>
                                    <p>- 1 Free Product Sellings</p>
                                </div>
                                <div className={styles.price_btn}>
                                    <button type="submit" className={`${styles.choose_btn} ${styles.btn_private}`}>Choose Private</button>
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={styles.col}>
                            <div className={`card ${styles.card_marketting}`}>
                                <div className={`${styles.pricing_head} ${styles.price_heading_plus}`}>
                                    <h5>Private Plus</h5>
                                    <p>$14</p>
                                </div>

                                <div className={styles.price_detail}>
                                    <hr className={styles.pricing_hr}></hr>
                                    <p>Multiaccount Option</p>
                                    <p>Pay Monthly Fees</p>
                                    <p>Membership Status</p>
                                    <p>Memberships: Rewards</p>
                                    <p>- Coupons</p>
                                    <p>- Points</p>
                                    <p>- 2 Free Product Sellings</p>
                                    <p>Create Bookings</p>
                                </div>
                                <div className={styles.price_btn}>
                                    <button type="submit" className={`${styles.choose_btn} ${styles.btn_plus}`}>Choose Private Plus</button>
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={styles.col}>
                            <div className={`card ${styles.card_marketting}`}>
                                <div className={`${styles.pricing_head} ${styles.price_heading_commercial}`}>
                                    <h5>Commercial</h5>
                                    <p>$47</p>
                                </div>

                                <div className={styles.price_detail}>
                                    <hr className={styles.pricing_hr}></hr>
                                    <p>Multiaccount Option</p>
                                    <p>Pay Monthly Fees</p>
                                    <p>Membership Status</p>
                                    <p>Memberships: Rewards</p>
                                    <p>- Coupons</p>
                                    <p>- Points</p>
                                    <p>- 2 Free Product Sellings</p>
                                    <p>Create Bookings</p>
                                    <p>Create Coupons</p>
                                    <p>5% of Marketing</p>
                                </div>
                                <div className={styles.price_btn}>
                                    <button type="submit" className={`${styles.choose_btn} ${styles.btn_commercial}`}>Choose Commerical</button>
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={styles.col}>
                            <div className={`card ${styles.card_marketting}`}>
                                <div className={`${styles.pricing_head} ${styles.price_heading_startup}`}>
                                    <h5>Startup</h5>
                                    <p>$27</p>
                                    <h6>Company is not older than 15 months</h6>
                                </div>

                                <div className={styles.price_detail}>
                                    <hr className={styles.pricing_hr}></hr>
                                    <p>Multiaccount Option</p>
                                    <p>Pay Monthly Fees</p>
                                    <p>Membership Status</p>
                                    <p>Memberships: Rewards</p>
                                    <p>- Coupons</p>
                                    <p>- Points</p>
                                    <p>- 2 Free Product Sellings</p>
                                    <p>Create Coupons</p>
                                    <p>10% of Marketing Fees Discount</p>
                                </div>
                                <div className={styles.price_btn}>
                                    <button type="submit" className={`${styles.choose_btn} ${styles.btn_startup}`}>Choose Startup</button>
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className={`${styles.later_btn} ${styles.later_btn_mobile}`}>
                    <button type="submit" onClick={() => openPopup()} className={styles.btn_later}>Choose later</button>
                </div>
            </div>
        </>

    );
};

export default ChoosePlan;
