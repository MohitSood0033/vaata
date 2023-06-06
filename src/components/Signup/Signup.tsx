import React, { useState } from "react";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from '.././Signup/Signup.module.css';

type Props = {}

const Signup: React.FC<Props> = () => {
    let navigate: NavigateFunction = useNavigate();
    
    const [passwordType, setPasswordType] = useState("password");
    const [passwordConfirmType, setPasswordConfirmType] = useState("password");
    const [loading, setLoading] = useState<boolean>(false);
    const [Male,setMale] = useState(true);
    const [Female, setFemale] = useState(false);
    const [More, setMore] = useState(false);
    const [NonBinary, setNonBinary] = useState(false);
    const [Non, setNon] = useState(false);
    const [BusinessInfoTab, setBusinessInfoTab] = useState(false);
    const [VerifyAccountTab, setVerifyAccountTab] = useState(false);
    const [FormInfoTab, setFormInfoTab] = useState(false);
    const [FormInfoTab2, setFormInfoTab2] = useState(false);
    const [Custom, setCustom] = useState(false);
    const [message, setMessage] = useState<string>("");

    const initialValues: {
        firstname: string;
        lastname: string;
        nickname: string;
        date: string;
        month: string;
        year: string;
        // youGen: string;
        email: string;
        emailConfirm: string;
        password: string;
        passwordConfirm: string;
    } = {
        firstname: "",
        lastname: "",
        nickname: "",
        date: "",
        month: "",
        year: "",
        // youGen: "",
        email: "",
        emailConfirm: "",
        password: "",
        passwordConfirm: ""
    };
                     
    const years = (back: any) => {
        const year = new Date().getFullYear();
        return Array.from({ length: back }, (v, i) => year - back + i + 1);
    }
    const months = () => {
        var monthsArray = [];
        for (var i = 1; i <= 12; i++) {
            monthsArray.push(i);
        }
        return monthsArray
    }
    const dates = () => {
        var datesArray = [];
        for (var i = 1; i <= 31; i++) {
            datesArray.push(i);
        }
        return datesArray
    }

    const handleClick = (value: any) => {
        console.log(value);
        if (value == 'male') {
            setMale(true);
            setFemale(false)
            setNonBinary(false)
            setNon(false)
            setCustom(false)
        }
        else if (value == 'female') {
            setMale(false);
            setFemale(true)
            setNonBinary(false)
            setNon(false)
            setCustom(false)
        }
        else if (value == 'non-binary') {
            setMale(false)
            setFemale(false)
            setNonBinary(true)
            setNon(false)
            setCustom(false)
        }
        else if (value == 'non') {
            setMale(false)
            setFemale(false)
            setNonBinary(false)
            setNon(true)
            setCustom(false)
        }
        else if (value == 'custom') {
            setMale(false)
            setFemale(false)
            setNonBinary(false)
            setNon(false)
            setCustom(true)
        }
    };


    const handleMoreClick = () => {
        setMore(true)
    }

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return; 
        }
        setPasswordType("password")
    }
    const togglePasswordConfirm = () => {
        if (passwordConfirmType === "password") {
            setPasswordConfirmType("text")
            return;
        }
        setPasswordConfirmType("password")
    }

    const validationSchema = Yup.object().shape({
        firstname: Yup.string()
            .required('Firstname is required'),
        lastname: Yup.string()
            .required('Lastname is required'),
        nickname: Yup.string()
            .required('Nickname is required'),
        date: Yup.string()
            .required('Date is required'),
        month: Yup.string()
            .required('Month is required'),
        year: Yup.string()
            .required('Year is required'),
        youGen: !Custom ? Yup.string() : Yup.string()
            .required('Gender is required'),
        email: Yup.string()
            .required('Email is required'),
        emailConfirm: Yup.string()
            .required('Email Confirm is required')
            .oneOf([Yup.ref('email'), ""], 'Confirm Email does not match'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        passwordConfirm: Yup.string()
            .required('Password Confirm is required')
            .oneOf([Yup.ref('password'), ""], 'Confirm Password does not match'),
    });

    const handleNext = (formValue: { email: string; password: string }) => {
        console.log('1234');

        const { email, password } = formValue;

        setMessage("");
        setLoading(true);
        // setBusinessInfoTab(true)
        navigate('/signup/business-info')
        // login(username, password).then(
        //     () => {
        //         window.location.reload();
        //     },
        //     (error) => {
        //         const resMessage =
        //             (error.response &&
        //                error.response.data &&
        //                error.response.data.message) ||x
        //             error.message ||
        //             error.toString();
        //         setLoading(false);
        //         setMessage(resMessage);
        //     }
        // );
    };

    const sendData = (VerifyAccountTab: any) => {
        console.log(VerifyAccountTab);
        setVerifyAccountTab(VerifyAccountTab)
    }
    const sendFormInfoData = (FormInfoTab: any) => {
        console.log(FormInfoTab);
        setFormInfoTab(FormInfoTab)
    }
    const sendFormInfoData2 = (FormInfoTab2: any) => {
        console.log(FormInfoTab2);
        setFormInfoTab2(FormInfoTab2)
    }
            
    return (
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
                                    <img src={require('../../assets/images/subpoint-active.svg').default}
                                        alt=""
                                        className={styles.active}
                                    />
                                    <img src={require('../../assets/images/1.svg').default}
                                        alt=""
                                        className={styles.one}
                                    />
                                </span>
                                Create an Account
                            </h5>
                            <p>
                                <span>
                                    <img src={require('../../assets/images/subpoint-active.svg').default}
                                        alt=""
                                        className={styles.active}
                                    />
                                </span>
                                User Info
                            </p>
                            <p>
                                <span>
                                    {/* <img src={require('../../assets/images/subpoint-active.svg').default}
                                        alt=""
                                        className={styles.active}
                                    /> */}
                                    <img src={require('../../assets/images/Subpoint-pasive.svg').default}
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
                                    <img src={require('../../assets/images/Subpoint-pasive.svg').default}
                                        alt=""
                                        className={styles.active}
                                    />
                                    
                                    <img src={require('../../assets/images/2.svg').default}
                                        alt=""
                                        className={styles.two}
                                    />
                                    
                                </span>
                                Verify an Account
                            </h5>
                            <p>
                                <span>
                                    <img src={require('../../assets/images/Subpoint-pasive.svg').default}
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
                            <h2>Sign Up <br></br> <small>User Info</small></h2>
                        </div>
                        <div className={styles.mobile_steps_right}>
                            <p><span className={styles.count_1}>1</span><span className={styles.count_2}>/2</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 col-sm-12 col-12">
                    <div className={`card ${styles.card}`}>
                        <img src={require('../../assets/images/back-btn.svg').default}
                            alt=""
                            className={styles.backbtn}
                            onClick={() => navigate(-1)}
                        />
                        <img src={require('../../assets/images/dots.svg').default}
                            alt="" 
                            className={styles.dots1}
                        />
                        <img src={require('../../assets/images/dots.svg').default}
                            alt=""
                            className={styles.dots2}
                        />
                        <div className={styles.form}>

                            <div className={styles.formBody}>
                             
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleNext}
                                >
                                    {({ errors, touched }) => (
                                        <Form>
                                            <div className="row">
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <label className={styles.email}>First name</label>
                                                        <Field name="firstname" type="text" className={
                                                            `form-control ${styles.form_input}` +
                                                            (errors.firstname && touched.firstname ? ' is-invalid' : '')
                                                        } />
                                                        <ErrorMessage
                                                            name="firstname"
                                                            component="div"
                                                            className="invalid-feedback"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group position-relative">
                                                        <label className={styles.password}>Last name</label>
                                                        <Field name="lastname" type="text" className={
                                                            `form-control ${styles.form_input}` +
                                                            (errors.lastname && touched.lastname ? ' is-invalid' : '')
                                                        } />
                                                        <ErrorMessage
                                                            name="lastname"
                                                            component="div"
                                                            className="invalid-feedback"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <label className={styles.password}>Birthdate:</label>
                                                        <br></br>
                                                        <div className="row">
                                                            <div className="col-md-4 col-4">
                                                                <Field as="select" name="date">
                                                                    <option hidden>Date</option>
                                                                    {dates().map((options) => (
                                                                        <option key={options} value={options}>
                                                                            {options}
                                                                        </option>
                                                                    ))}
                                                                </Field>
                                                                {errors.date &&
                                                                    touched.date &&
                                                                    <div className={styles.inputFeedback}>
                                                                        {errors.date}
                                                                    </div>}
                                                            </div>
                                                            <div className="col-md-4 col-4">
                                                                <Field as="select" name="month">
                                                                    <option hidden>Month</option>
                                                                    {months().map((options) => (
                                                                        <option key={options} value={options}>
                                                                            {options}
                                                                        </option>
                                                                    ))}
                                                                </Field>
                                                                {errors.month &&
                                                                    touched.month &&
                                                                    <div className={styles.inputFeedback}>
                                                                        {errors.month}
                                                                    </div>}
                                                            </div>

                                                            <div className="col-md-4 col-4">
                                                                <Field as="select" name="year">
                                                                    <option hidden>Year</option>
                                                                    {years(50).map((options) => (
                                                                        <option key={options} value={options}>
                                                                            {options}
                                                                        </option>
                                                                    ))}
                                                                </Field>
                                                                {errors.year &&
                                                                    touched.year &&
                                                                    <div className={styles.inputFeedback}>
                                                                        {errors.year}
                                                                    </div>}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <label className={styles.email}>Nickname</label>
                                                        <Field name="nickname" type="text" className={
                                                            `form-control ${styles.form_input}` +
                                                            (errors.nickname && touched.nickname ? ' is-invalid' : '')
                                                        } />
                                                        <ErrorMessage
                                                            name="nickname"
                                                            component="div"
                                                            className="invalid-feedback"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 col-12">
                                                    <div className="form-group">
                                                        <label className={styles.email}>Gender</label>
                                                        <br></br>
                                                        <div className="row">
                                                            <div className="col-md-4 col-4">
                                                                <Field as="button" name="male" type="button" onClick={() => handleClick('male')}
                                                                    className={Male ? styles.pill_btn_1 : styles.pill_btn}>Male</Field>
                                                            </div>
                                                            <div className="col-md-4 col-4">
                                                                <Field as="button" type="button" name="female" className={Female ? styles.pill_btn_1 : styles.pill_btn}
                                                                    onClick={() => handleClick('female')}>Female</Field>
                                                            </div>
                                                            <div className="col-md-4 col-4">
                                                                <Field as="button" type="button" name="more" onClick={() => handleMoreClick()}
                                                                    className={More ? styles.pill_btn_1 : styles.pill_btn}>More</Field>
                                                            </div>
                                                        </div>
                                                        {/* <ErrorMessage
                                                            name="nickname"
                                                            component="div"
                                                            className="invalid-feedback"
                                                        />  */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 col-12">
                                                    <div className="form-group">

                                                        <div hidden={!More} className="row">
                                                            <div className="col-md-4 col-4">
                                                                <Field as="button" type="button" name="non-binary" onClick={() => handleClick('non-binary')}
                                                                    className={NonBinary ? styles.pill_btn_1 : styles.pill_btn}>Non Binary</Field>
                                                            </div>
                                                            <div className="col-md-4 col-4">
                                                                <Field as="button" type="button" name="non" onClick={() => handleClick('non')}
                                                                    className={Non ? styles.pill_btn_1 : styles.pill_btn}>Non</Field>
                                                            </div>
                                                            <div className="col-md-4 col-4">
                                                                <Field as="button" type="button" name="custom" onClick={() => handleClick('custom')}
                                                                    className={Custom ? styles.pill_btn_1 : styles.pill_btn}>Custom</Field>
                                                            </div>
                                                        </div>
                                                        {/* <ErrorMessage
                                                            name="nickname"
                                                            component="div"
                                                            className="invalid-feedback"
                                                        />  */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div hidden={!Custom} className="row">
                                                <div className="col-md-12 col-12">
                                                    <div className="form-group">
                                                        <label className={styles.email}>What`s you`r Gender</label>
                                                        <Field name="youGen" type="text" className={
                                                            `form-control ${styles.form_input}` 
                                                            // + (errors.youGen && touched.youGen ? ' is-invalid' : '')
                                                        } />
                                                        <ErrorMessage
                                                            name="youGen"
                                                            component="div"
                                                            className="invalid-feedback"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <label className={styles.email}>Email</label>
                                                        <Field name="email" type="text" className={
                                                            `form-control ${styles.form_input}` +
                                                            (errors.email && touched.email ? ' is-invalid' : '')
                                                        } />
                                                        <ErrorMessage
                                                            name="email"
                                                            component="div"
                                                            className="invalid-feedback"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <label className={styles.email}>Email Confirm</label>
                                                        <Field name="emailConfirm" type="text" className={
                                                            `form-control ${styles.form_input}` +
                                                            (errors.emailConfirm && touched.emailConfirm ? ' is-invalid' : '')
                                                        } />
                                                        <ErrorMessage
                                                            name="emailConfirm"
                                                            component="div"
                                                            className="invalid-feedback"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group position-relative">
                                                        <label className={styles.password}>Password</label>
                                                        <Field name="password" type={passwordType} className={
                                                            `form-control ${styles.form_input}` +
                                                            (errors.password && touched.password ? ' is-invalid' : '')
                                                        } />
                                                        <button onClick={togglePassword}

                                                            className={styles.eye_btn}>
                                                            {passwordType === "password" ? <img src={require('../../assets/images/invisible.svg').default}
                                                                alt=""
                                                                className={styles.eye_icon} /> : <img src={require('../../assets/images/visible.svg').default}
                                                                    alt=""
                                                                    className={styles.eye_icon} />}
                                                        </button>
                                                        <ErrorMessage
                                                            name="password"
                                                            component="div"
                                                            className="invalid-feedback"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6 col-12">
                                                    <div className="form-group position-relative">
                                                        <label className={styles.password}>Password Confirm</label>
                                                        <Field name="passwordConfirm" type={passwordConfirmType} className={
                                                            `form-control ${styles.form_input}` +
                                                            (errors.passwordConfirm && touched.passwordConfirm ? ' is-invalid' : '')
                                                        } />
                                                        <button onClick={togglePasswordConfirm}

                                                            className={styles.eye_btn}>
                                                            {passwordConfirmType === "password" ? <img src={require('../../assets/images/invisible.svg').default}
                                                                alt=""
                                                                className={styles.eye_icon} /> : <img src={require('../../assets/images/visible.svg').default}
                                                                    alt=""
                                                                    className={styles.eye_icon} />}
                                                        </button>
                                                        <ErrorMessage
                                                            name="passwordConfirm"
                                                            component="div"
                                                            className="invalid-feedback"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 col-12"></div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <button type="submit" className={styles.loginBtn}>
                                                            <span className={styles.login}>Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-12"></div>
                                            {/* <div className="row justify-content-center">
                                                    <div className="form-group">
                                                        <label className={styles.acc}>Don`t have an account? <a href="/signup" className={styles.signUp}>Sign Up</a></label>
                                                    </div>
                                                </div> */}
                                            {message && (
                                                <div className="form-group">
                                                    <div className="alert alert-danger" role="alert">
                                                        {message}
                                                    </div>
                                                </div>
                                            )}
                                      </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        {/* <div hidden={!BusinessInfoTab}>
                            <BusinessInfo sendData={sendData} />
                        </div> */}
                        {/* <div hidden={!VerifyAccountTab}>
                            <VerifyAccount sendFormInfoData={sendFormInfoData} sendFormInfoData2={sendFormInfoData2} />
                        </div>
                        <div hidden={!FormInfoTab}>
                            <FormInfo />
                        </div>
                        <div hidden={!FormInfoTab2}>
                            <FormInfo2 />
                        </div> */}
                        <img src={require('../../assets/images/dots.svg').default}
                            alt=""
                            className={styles.dots3}
                        />
                        <img src={require('../../assets/images/dots.svg').default}
                            alt=""
                            className={styles.dots4}
                        />
                    </div>
                                                                   
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

                </div>
            </div>
        </div>
    );
};

export default Signup;