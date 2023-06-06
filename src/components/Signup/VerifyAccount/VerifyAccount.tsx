import React, { useState } from "react";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from '.././VerifyAccount/VerifyAccount.module.css';
import Carousel from 'react-bootstrap/Carousel';
import '../../../App.css'
type Props = {}

const VerifyAccount = (props: any) => {
    let navigate: NavigateFunction = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [ChoosePlanTab, setChoosePlanTab] = useState(false);
    const [message, setMessage] = useState<string>("");
    const [hiddenAddressCheck, sethiddenAddressCheck] = useState(false);
    const [hiddenAddressPass, sethiddenAddressPass] = useState(false);
    const [FormInfoTab, setFormInfoTab] = useState(false);
    const [FormInfoTab2, setFormInfoTab2] = useState(false);

    const toggleAddress = () => {
        if (hiddenAddressCheck === false) {
            sethiddenAddressCheck(true)
            return;
        }
        sethiddenAddressCheck(false)
    }
    const toggleAddressPass = () => {
        if (hiddenAddressPass === false) {
            sethiddenAddressPass(true)
            return;
        }
        sethiddenAddressPass(false)
    }

    const goBack = () => {
        navigate(-1)
    }

    const onSelect = (value: any) => {
        console.log(value);

        setMessage("");
        setLoading(true);

        if (value === 1) {
            // props.sendFormInfoData(!FormInfoTab)
            // setFormInfoTab(true)
            navigate('/signup/payment-address')
        }
        if (value === 2) {
            // props.sendFormInfoData2(!FormInfoTab2)
            // setFormInfoTab2(true)
            navigate('/signup/payment-addres')
        }
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

    const sendData = (FormInfoTab: any) => {
        console.log(FormInfoTab);
        setFormInfoTab(FormInfoTab)
    }

    return (
        <>
            <div className={styles.main}>
                <div className="row">
                    <div className="col-md-3 col-12">

                    </div>
                    <div className="col-md-9 col-12">
                        <h1 className={styles.h1}>

                            Sign Up</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-12 d-xl-block d-lg-block d-md-block d-sm-none d-none">

                        <div className={styles.signUp_tab}>
                            <div className={styles.signUp_tabList}>
                                <h5>
                                    <span>
                                        <img src={require('../../../assets/images/subpoint-active.svg').default}
                                            alt=""
                                            className={styles.active}
                                        />
                                        <img src={require('../../../assets/images/1.svg').default}
                                            alt=""
                                            className={styles.one}
                                        />
                                    </span>
                                    Create an Account
                                </h5>
                                <p>
                                    <span>
                                        <img src={require('../../../assets/images/subpoint-active.svg').default}
                                            alt=""
                                            className={styles.active}
                                        />
                                    </span>
                                    User Info
                                </p>
                                <p>
                                    <span>
                                        <img src={require('../../../assets/images/subpoint-active.svg').default}
                                            alt=""
                                            className={styles.active}
                                        />
                                    </span>
                                    Business Info
                                </p>
                            </div>
                            <div className={styles.signUp_tabList}>
                                <h5>
                                    <span>
                                        <img src={require('../../../assets/images/subpoint-active.svg').default}
                                            alt=""
                                            className={styles.active}
                                        />
                                        <img src={require('../../../assets/images/2_white.svg').default}
                                            alt=""
                                            className={styles.two}
                                        />
                                    </span>
                                    Verify an Account
                                </h5>
                                <p>
                                    <span>
                                        <img src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                            alt=""
                                            className={styles.active}
                                        />
                                    </span>
                                    Payment Address
                                </p>
                            </div>
                        </div>
                        <div className={`${styles.left_terms_tab} ${styles.terms_tabD}`}>
                            <div className={styles.terms_tab_main}>
                                <div className={styles.term_login}>
                                    <p>Already have an account ? <a href="/login">Login</a></p>
                                </div>
                                <div className={styles.term_accept}>
                                    <p>By creating an account, you agree<br></br><a href="#!">Terms of Use & Private Policy</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-xl-none d-lg-none d-md-none d-sm-block d-block">
                        <div className={styles.mobile_steps}>
                            <div className={styles.mobile_steps_left}>
                                <h2>Sign Up <br></br> <small>Verify an Account</small></h2>
                            </div>
                            <div className={styles.mobile_steps_right}>
                                <p><span className={styles.count_1}>2</span><span className={styles.count_2}>/2</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12 col-12">
                        <div className={`card ${styles.card}`}>
                            <img src={require('../../../assets/images/back-btn.svg').default}
                                alt=""
                                className={styles.backbtn}
                                onClick={() => goBack()}
                            />
                            <img src={require('../../../assets/images/dots.svg').default}
                                alt=""
                                className={styles.dots1}
                            />
                            <img src={require('../../../assets/images/dots.svg').default}
                                alt=""
                                className={styles.dots2}
                            />
                            <div className={styles.form_billing_main}>
                                <div className={styles.form_billing}>
                                    <div className={styles.imgaebox}>
                                        <img src={require('../../../assets/images/plant.svg').default}
                                            alt=""
                                            className={styles.p_image}
                                        />
                                    </div>
                                    <div className={styles.texts}>
                                        <p className={styles.parahead}>Upload a Billing address</p>
                                        <p className={styles.paratexts}>Good for the enviroment</p>
                                        <p>
                                            <span onClick={toggleAddress}>
                                                {hiddenAddressCheck === false ? <img src={require('../../../assets/images/switch-off.svg').default}
                                                    alt=""
                                                    className={styles.active_billing}
                                                /> : <img src={require('../../../assets/images/switch-on.svg').default}
                                                    alt=""
                                                    className={styles.active_billing}
                                                />}
                                            </span>
                                            Use a same address
                                        </p>
                                    </div>
                                    <div className={styles.btndiv}>
                                        <button onClick={() => onSelect(1)} className={styles.btn}>Select</button>
                                    </div>
                                </div>
                                <div className={styles.form_billing}>
                                    <div className={styles.imgaebox}>
                                        <img src={require('../../../assets/images/plant.svg').default}
                                            alt=""
                                            className={styles.p_image}
                                        />
                                    </div>
                                    <div className={styles.texts}>
                                        <p className={styles.parahead}>Upload a Billing address and Passport</p>
                                        <p className={styles.paratexts}>Good for the enviroment and our choice</p>
                                        <p>
                                            <span onClick={toggleAddressPass}>
                                                {hiddenAddressPass === false ? <img src={require('../../../assets/images/switch-off.svg').default}
                                                    alt=""
                                                    className={styles.active_billing}
                                                /> : <img src={require('../../../assets/images/switch-on.svg').default}
                                                    alt=""
                                                    className={styles.active_billing}
                                                />}
                                            </span>
                                            Use same address
                                        </p>
                                    </div>
                                    <div className={styles.btndiv}>
                                        <button onClick={() => onSelect(2)} className={styles.btn}>Select</button>
                                    </div>
                                </div>
                                <div className={styles.form_billing}>
                                    <div className={styles.imgaebox}>
                                        <img src={require('../../../assets/images/car.svg').default}
                                            alt=""
                                            className={styles.p_image}
                                        />
                                    </div>
                                    <div className={styles.texts}>
                                        <p className={styles.parahead}>Physical Address</p>
                                        <p className={styles.paratexts}>Bad for the enviroment Cost 7$</p>
                                        <p className={`${styles.paratexts}`}>Admin will send brief on physical address a code and after verification of Seller</p>
                                    </div>
                                    <div className={styles.btndiv}>
                                        <button className={styles.btn}>Select</button>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.form_billing_main} ${styles.form_billing_mobile}`}>
                                {/* <Carousel /> */}
                                <Carousel slide={false}>
                                    <Carousel.Item>
                                        <div className={styles.form_billing}>
                                            <div className={styles.imgaebox}>
                                                <img src={require('../../../assets/images/plant.svg').default}
                                                    alt=""
                                                    className={styles.p_image}
                                                />
                                            </div>
                                            <div className={styles.texts}>
                                                <p className={styles.parahead}>Upload a Billing address</p>
                                                <p className={styles.paratexts}>Good for the enviroment</p>
                                                <p>
                                                    <span onClick={toggleAddress}>
                                                        {hiddenAddressCheck === false ? <img src={require('../../../assets/images/switch-off.svg').default}
                                                            alt=""
                                                            className={styles.active_billing}
                                                        /> : <img src={require('../../../assets/images/switch-on.svg').default}
                                                            alt=""
                                                            className={styles.active_billing}
                                                        />}
                                                    </span>
                                                    Use a same address
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.btndiv}>
                                            <button onClick={() => onSelect(1)} className={styles.btn}>Select</button>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={styles.form_billing}>
                                            <div className={styles.imgaebox}>
                                                <img src={require('../../../assets/images/plant.svg').default}
                                                    alt=""
                                                    className={styles.p_image}
                                                />
                                            </div>
                                            <div className={styles.texts}>
                                                <p className={styles.parahead}>Upload a Billing address and Passport</p>
                                                <p className={styles.paratexts}>Good for the enviroment and our choice</p>
                                                <p>
                                                    <span onClick={toggleAddressPass}>
                                                        {hiddenAddressPass === false ? <img src={require('../../../assets/images/switch-off.svg').default}
                                                            alt=""
                                                            className={styles.active_billing}
                                                        /> : <img src={require('../../../assets/images/switch-on.svg').default}
                                                            alt=""
                                                            className={styles.active_billing}
                                                        />}
                                                    </span>
                                                    Use same address
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.btndiv}>
                                            <button onClick={() => onSelect(2)} className={styles.btn}>Select</button>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={styles.form_billing}>
                                            <div className={styles.imgaebox}>
                                                <img src={require('../../../assets/images/car.svg').default}
                                                    alt=""
                                                    className={styles.p_image}
                                                />
                                            </div>
                                            <div className={styles.texts}>
                                                <p className={styles.parahead}>Physical Address</p>
                                                <p className={styles.paratexts}>Bad for the enviroment Cost 7$</p>
                                                <p className={`${styles.paratexts}`}>Admin will send brief on physical address a code and after verification of Seller</p>
                                            </div>
                                        </div>
                                        <div className={styles.btndiv}>
                                            <button className={styles.btn}>Select</button>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <img src={require('../../../assets/images/dots.svg').default}
                                alt=""
                                className={styles.dots3}
                            />
                            <img src={require('../../../assets/images/dots.svg').default}
                                alt=""
                                className={styles.dots4}
                            />
                        </div >

                        <div className={`${styles.left_terms_tab} ${styles.terms_tabM}`}>
                            <div className={styles.terms_tab_main}>
                                <div className={styles.term_login}>
                                    <p>Already have an account? <a href="/login">Login</a></p>
                                </div>
                                <div className={styles.term_accept}>
                                    <p>By creating an account, you agree<br></br><a href="#!">Terms of Use & Private Policy</a></p>
                                </div>
                            </div>
                        </div>

                    </div >
                </div >
            </div >
        </>
    );
};

export default VerifyAccount;
