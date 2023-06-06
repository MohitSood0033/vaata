import React, { useState } from "react";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from '.././BusinessInfo/BusinessInfo.module.css';
import worldZone from '../../../assets/JsonData/countryPhoneCodes.json';

type Props = {}

const BusinessInfo= (props: any) => {
    let navigate: NavigateFunction = useNavigate();
    const [popUpVisibble, setpopUpVisibble] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [Private, setPrivate] = useState(true);
    const [Business, setBusiness] = useState(false);
    const [message, setMessage] = useState<string>("");
    const [hiddenTypeGov, sethiddenTypeGov] = useState(true);
    const [hiddenTypeVat, sethiddenTypeVat] = useState(true);
    const [hiddenTypeSign, sethiddenTypeSign] = useState(true);
    const [VerifyAccountTab, setVerifyAccountTab] = useState(false);
    const [FormInfoTab, setFormInfoTab] = useState(false);

    const result = worldZone.filter(
        (thing, index, self) =>
            index ===
            self.findIndex((t) => t.code === thing.code)
    );

    const initialValues: {
        businessType: string;
        businessField: string;
        industry: string;
        store: string;
        street: string;
        number: string;
        city: string;
        postCode: string;
        country: string;
        phNo: string;
        gov: string;
        vat: string;
        sign: string;
    } = {
        businessType: "",
        businessField: "",
        industry: "",
        store: "",
        street: "",
        number: "",
        city: "",
        postCode: "",
        country: "",
        phNo: "",
        gov: "",
        vat: "",
        sign: ""
    };

    const initialValues1: {
        firstname: string;
        lastname: string;
        gender: string;
    } = {
        firstname: "",
        lastname: "",
        gender: "",
    };

    const toggleGov = () => {
        if (hiddenTypeGov === true) {
            sethiddenTypeGov(false)
            return;
        }
        sethiddenTypeGov(true)
    }

    const toggleVat = () => {
        if (hiddenTypeVat === true) {
            sethiddenTypeVat(false)
            return;
        }
        sethiddenTypeVat(true)
    }
    const toggleSign = () => {
        if (hiddenTypeSign === true) {
            sethiddenTypeSign(false)
            return;
        }
        sethiddenTypeSign(true)
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
        if (value == 'private') {
            setPrivate(true)
            setBusiness(false)
        }
        else if (value == 'business') {
            setPrivate(false)
            setBusiness(true)
        }
    };

    const onClose = () => {
        setpopUpVisibble(false)
    }
    const handleClose = () => {
        // setpopUpVisibble(false)
    }

    const goBack = () => {
        navigate(-1)
    }


    const openPopup = () => {
        console.log(result);
        setpopUpVisibble(true)
    };

    const validationSchema = Yup.object().shape({
        businessType: !Business ? Yup.string() : Yup.string()
            .required('Business Type is required'),
        businessField: !Business ? Yup.string() : Yup.string()
            .required('Business Field is required'),
        industry: !Business ? Yup.string() : Yup.string()
            .required('industry is required'),
        store: !Business ? Yup.string() : Yup.string()
            .required('Store is required'),
        street: Yup.string()
            .required('Street is required'),
        number: Yup.string()
            .required('Number is required'),
        city: Yup.string()
            .required('City is required'),
        postCode: Yup.string()
            .required('Postcode is required'),
        country: Yup.string()
            .required('Country is required'),
        phNo: Yup.string()
            .required('Phone Number is required')
            .min(10, 'Phone Number must be at least 10 characters'),
        gov: !Business || hiddenTypeGov ? Yup.string() : Yup.string()
            .required('Register of Government is required'),
        vat: !Business || hiddenTypeVat ? Yup.string() : Yup.string()
            .required('VAT Liable is required'),
        sign: !Business || hiddenTypeSign ? Yup.string() : Yup.string()
            .required('Authorized to Sign is required'),
    });

    const validationSchema1 = Yup.object().shape({
        firstname: popUpVisibble ? Yup.string() : Yup.string()
            .required('First name is required'),
        lastname: popUpVisibble ? Yup.string() : Yup.string()
            .required('Last name is required'),
        gender: popUpVisibble ? Yup.string() : Yup.string()
            .required('Gender is required'),
    });

    const handleContinue = (formValue: { businessType: string; businessField: string }) => {
        const { businessType, businessField } = formValue;
        console.log('1234');

        setMessage("");
        setLoading(true);
        // setVerifyAccountTab(true);
        // props.sendData(!VerifyAccountTab)
        navigate('/signup/verify-account')

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

    const handleAdd = (formValue: { firstname: string; lastname: string }) => {
        console.log('1234');

        const { firstname, lastname } = formValue;

        setMessage("");
        setLoading(true);
        setpopUpVisibble(false);

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
                                    <img src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                        alt=""
                                        className={styles.active}
                                    />
                                    <img src={require('../../../assets/images/2.svg').default}
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
                            <h2>Sign Up <br></br> <small>Business Info</small></h2>
                        </div>
                        <div className={styles.mobile_steps_right}>
                            <p><span className={styles.count_1}>1</span><span className={styles.count_2}>/2</span></p>
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
            <div hidden={VerifyAccountTab} className={styles.form}>
                <div className={styles.formBody}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleContinue}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="row">
                                    <div className="col-md-6 col-6">
                                        <Field as="button" name="private" type="button" onClick={() => handleClick('private')}
                                            className={Private ? styles.pill_btn_1 : styles.pill_btn}>Private</Field>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <Field as="button" type="button" name="business" className={Business ? styles.pill_btn_1 : styles.pill_btn}
                                            onClick={() => handleClick('business')}>Business</Field>
                                    </div>
                                </div>
                                <div hidden={!Business} className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className={styles.password}>Select Business Type</label>
                                            <br></br>
                                            <div className="row">
                                                <div className="col-md-12 col-12">
                                                    <Field as="select" name="businessType">
                                                        <option hidden>Select Business Type</option>
                                                                    <option value="Commercial">Commercial</option>
                                                        
                                                    </Field>
                                                    {errors.businessType &&
                                                        touched.businessType &&
                                                        <div className={styles.inputFeedback}>
                                                            {errors.businessType}
                                                        </div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div hidden={!Business} className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label className={styles.password}>Select the Business Field</label>
                                            <br></br>
                                            <div className="row">
                                                <div className="col-md-12 col-12">
                                                    <Field as="select" name="businessField">
                                                        <option hidden>Select the Business Field</option>
                                                                    <option value="Design">Design</option>
                                                    </Field>
                                                    {errors.businessField &&
                                                        touched.businessField &&
                                                        <div className={styles.inputFeedback}>
                                                            {errors.businessField}
                                                        </div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label className={styles.email_1}>Select Business Field / department of industry</label>
                                            <Field as="select" name="industry">
                                                <option hidden>Select the Business Field</option>
                                                            <option value="Design & Studio">Design & Studio</option>
                                            </Field>
                                            {errors.industry &&
                                                touched.industry &&
                                                <div className={styles.inputFeedback}>
                                                    {errors.industry}
                                                </div>}
                                        </div>
                                    </div>
                                </div>
                                <div hidden={!Business} className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className={styles.password}>Name of Store</label>
                                            <br></br>
                                            <div className="row">
                                                <div className="col-md-12 col-12">
                                                    <Field name="store" type="text" className={
                                                        `form-control ${styles.form_input}` +
                                                        (errors.store && touched.store ? ' is-invalid' : '')
                                                    } />
                                                    <ErrorMessage
                                                        name="store"
                                                        component="div"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-8 col-8">
                                                    <label className={styles.password}>Street</label>
                                                    <br></br>
                                                    <Field name="street" type="text" className={
                                                        `form-control ${styles.form_input}` +
                                                        (errors.street && touched.street ? ' is-invalid' : '')
                                                    } />
                                                    <ErrorMessage
                                                        name="street"
                                                        component="div"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                                <div className="col-md-4 col-4">
                                                    <label className={styles.password}>Number</label>
                                                    <br></br>
                                                    <Field name="number" type="text" className={
                                                        `form-control ${styles.form_input}` +
                                                        (errors.number && touched.number ? ' is-invalid' : '')
                                                    } />
                                                    <ErrorMessage
                                                        name="number"
                                                        component="div"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-8 col-8">
                                                    <label className={styles.password}>City</label>
                                                    <br></br>
                                                    <Field name="city" type="text" className={
                                                        `form-control ${styles.form_input}` +
                                                        (errors.city && touched.city ? ' is-invalid' : '')
                                                    } />
                                                    <ErrorMessage
                                                        name="city"
                                                        component="div"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                                <div className="col-md-4 col-4">
                                                    <label className={styles.password}>Postcode</label>
                                                    <br></br>
                                                    <Field name="postCode" type="text" className={
                                                        `form-control ${styles.form_input}` +
                                                        (errors.postCode && touched.postCode ? ' is-invalid' : '')
                                                    } />
                                                    <ErrorMessage
                                                        name="postCode"
                                                        component="div"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label className={styles.password}>Country</label>
                                            <br></br>
                                            <div className="row">
                                                <div className="col-md-12 col-12">
                                                    <Field as="select" name="country">
                                                        <option hidden>Country</option>
                                                        {worldZone.map((options) => (
                                                            <option key={options.country} value={options.country}>
                                                                {options.country}
                                                            </option>
                                                        ))}
                                                    </Field>
                                                    {errors.country &&
                                                        touched.country &&
                                                        <div className={styles.inputFeedback}>
                                                            {errors.country}
                                                        </div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label className={styles.password}>Phone Number</label>
                                            <br></br>
                                            <div className="row">
                                                <div className="col-md-5 col-5">
                                                    <Field as="select" name="phone">
                                                        {result.map((options) => (
                                                            <option key={options.code} value={options.code}>
                                                                +{options.code}
                                                            </option>
                                                        ))}
                                                    </Field>
                                                    {/* {errors.phNo &&
                                                        touched.phNo &&
                                                        <div className={styles.inputFeedback}>
                                                            {errors.phNo}
                                                        </div>} */}
                                                </div>
                                                <div className="col-md-7 col-7">
                                                    <Field name="phNo" type="text" className={
                                                        `form-control ${styles.form_input}` +
                                                        (errors.phNo && touched.phNo ? ' is-invalid' : '')
                                                    } />
                                                    <ErrorMessage
                                                        name="phNo"
                                                        component="div"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div hidden={!Business} className="row">
                                    <div className="col-md-6 col-10">
                                        <div className="form-group">
                                            <label className={styles.password}>Are you register of Government ?</label>
                                            <Field name="gov" type="text" hidden={hiddenTypeGov} className={
                                                `form-control ${styles.form_input}` +
                                                (errors.gov && touched.gov ? ' is-invalid' : '')
                                            } />
                                            <ErrorMessage
                                                name="gov"
                                                component="div"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-2">
                                        <div className="form-group">
                                            <button onClick={toggleGov}
                                                className={styles.toggle_btn}>
                                                {hiddenTypeGov === false ? <img src={require('../../../assets/images/switch-on.svg').default}
                                                    alt=""
                                                    className={styles.off}
                                                /> : <img src={require('../../../assets/images/switch-off.svg').default}
                                                    alt=""
                                                    className={styles.off}
                                                />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div hidden={!Business} className="row">
                                    <div className="col-md-6 col-10">
                                        <div className="form-group">
                                            <label className={styles.password}>Are you VAT Liable ?</label>
                                            <Field name="vat" type="text" hidden={hiddenTypeVat} className={
                                                `form-control ${styles.form_input}` +
                                                (errors.vat && touched.vat ? ' is-invalid' : '')
                                            } />
                                            <ErrorMessage
                                                name="vat"
                                                component="div"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-2">
                                        <div className="form-group">
                                            <button onClick={toggleVat}
                                                className={styles.toggle_btn}>
                                                {hiddenTypeVat === false ? <img src={require('../../../assets/images/switch-on.svg').default}
                                                    alt=""
                                                    className={styles.off}
                                                /> : <img src={require('../../../assets/images/switch-off.svg').default}
                                                    alt=""
                                                    className={styles.off}
                                                />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div hidden={!Business} className="row">
                                    <div className="col-md-6 col-10">
                                        <div className="form-group">
                                            <label className={styles.password}>Are you Authorized to Sign ?</label>
                                            <br></br>
                                            {/* <Field name="sign" type="text" hidden={hiddenTypeSign} className={
                                                `form-control ${styles.form_input}` +
                                                (errors.sign && touched.sign ? ' is-invalid' : '')
                                            } />
                                            <ErrorMessage
                                                name="sign"
                                                component="div"
                                                className="invalid-feedback"
                                            /> */}
                                            <div hidden={!hiddenTypeSign} className={styles.plus_circleMain}>
                                                <div className={styles.popup_info}>
                                                    <p>John Doe<span><img src={require('../../../assets/images/close.svg').default}
                                                        alt=""
                                                        onClick={() => handleClose()}
                                                        className={styles.close}
                                                    /></span></p>
                                                </div>
                                                <div className={styles.plus_circle}>
                                                    <img src={require('../../../assets/images/subpoint-active.svg').default}
                                                        alt=""
                                                        onClick={() => openPopup()}
                                                        className={styles.active_popup}
                                                    />
                                                    <img src={require('../../../assets/images/plus.svg').default}
                                                        alt=""
                                                        onClick={() => openPopup()}
                                                        className={styles.plus}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-2">
                                        <div className="form-group">
                                            <button onClick={toggleSign}
                                                className={styles.toggle_btn}>
                                                {hiddenTypeSign === false ? <img src={require('../../../assets/images/switch-on.svg').default}
                                                    alt=""
                                                    className={styles.off}
                                                /> : <img src={require('../../../assets/images/switch-off.svg').default}
                                                    alt=""
                                                    className={styles.off}
                                                />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-12"></div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <button type="submit" className={styles.loginBtn}>
                                                <span className={styles.login}>Continue</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12"></div>
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
                    {popUpVisibble &&
                        (<div className={styles.form_popup}>
                            <div className={styles.form_popup_sub}>
                                <img src={require('../../../assets/images/dots.svg').default}
                                    alt=""
                                    className={styles.dots1_popup}
                                />
                                <img src={require('../../../assets/images/close.svg').default}
                                    alt=""
                                    onClick={() => onClose()}
                                    className={styles.popup_close}
                                />
                                <div className={styles.formBody_popup}>

                                    <h1 className={styles.h1_popup}>Are You Authorized to Sign?</h1>
                                    <hr className={styles.rectangle}></hr>
                                    <Formik
                                        initialValues={initialValues1}
                                        validationSchema={validationSchema1}
                                        onSubmit={handleAdd}
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
                                                        <div className="form-group">
                                                            <label className={styles.email}>Last name</label>
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

                                                    <div className="col-md-12 col-12">
                                                        <div className="form-group">
                                                            <label className={styles.email}>Gender</label>
                                                            <Field as="select" name="gender">
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                            </Field>
                                                            {errors.gender &&
                                                                touched.gender &&
                                                                <div className={styles.inputFeedback}>
                                                                    {errors.gender}
                                                                </div>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className={styles.loginBtn}>
                                                        <span className={styles.login}>Add</span>
                                                    </button>
                                                </div>
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
                                <img src={require('../../../assets/images/dots.svg').default}
                                    alt=""
                                    className={styles.dots2_popup}
                                />
                            </div>
                        </div>
                        )}
                </div>
            </div>
                        <img src={require('../../../assets/images/dots.svg').default}
                            alt=""
                            className={styles.dots3}
                        />
                        <img src={require('../../../assets/images/dots.svg').default}
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

export default BusinessInfo;
