import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik, } from "formik"
import { NavigateFunction, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import styles from "../FormInfo/FormInfo.module.css"
import ChoosePlan from "../ChoosePlan/ChoosePlan";
import worldZone from '../../../assets/JsonData/countryPhoneCodes.json';

type Props = {}

const FormInfo: React.FC<Props> = () => {
  let navigate: NavigateFunction = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [hiddenAddressCheck, sethiddenAddressCheck] = useState(false);
  const [ChoosePlanTab, setChoosePlanTab] = useState(false);


  const result = worldZone.filter(
    (thing, index, self) =>
      index ===
      self.findIndex((t) => t.code === thing.code)
  );

  const toggleAddress = () => {
    if (hiddenAddressCheck === false) {
      sethiddenAddressCheck(true)
      return;
    }
    sethiddenAddressCheck(false)
  }

  const initialValues: {
    firstname: string;
    lastname: string;
    nickname: string;
    date: string;
    month: string;
    year: string;
    number: string;
    postCode: string;
    phNo: string;
    street: string;
    country: string;
    city: string;
  } = {
    firstname: "",
    lastname: "",
    nickname: "",
    date: "",
    month: "",
    year: "",
    number: "",
    postCode: "",
    phNo: "",
    street: "",
    country: "",
    city: "",
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

  const goBack = () => {
    navigate(-1)
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
    street: Yup.string()
      .required('Street is required'),
    number: Yup.string()
      .required('Number is required'),
    phNo: Yup.string()
      .required('Phone Number is required')
      .min(10, 'Phone Number must be at least 10 characters'),
    city: Yup.string()
      .required('City is required'),
    postCode: Yup.string()
      .required('Postcode is required'),
    country: Yup.string()
      .required('Country is required'),
  });

  const handleFinish = () => {
    console.log('1234');

    setMessage("");
    setLoading(true);
    setChoosePlanTab(true)
    // login(username, password).then(
    //     () => {
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
                    <img src={require('../../../assets/images/subpoint-active.svg').default}
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
                <h2>Sign Up <br></br> <small>Payment Address</small></h2>
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
              <div hidden={ChoosePlanTab} className={styles.main_container}>
                <div className="1strow">
                  <div className={styles.form1}>
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
                        Use same address
                        <span onClick={toggleAddress}>
                          {hiddenAddressCheck === false ? <img src={require('../../../assets/images/switch-off.svg').default}
                            alt=""
                            className={styles.active_checkbox}
                          /> : <img src={require('../../../assets/images/switch-on.svg').default}
                            alt=""
                              className={styles.active_checkbox}
                          />}
                        </span>
                      </p>
                    </div>
                    <div className={styles.btndiv}>
                      <button className={styles.btn}>Change</button>
                    </div>
                  </div>
                </div>

                <div className="formcontainer">
                  <div className={styles.form2}>

                    <div className={styles.formBody}>

                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleFinish}
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
                                <div className="form-group position-relative">
                                  <label className={styles.password}>Country</label>
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
                            <div className="row">
                              <div className="col-md-3 col-12"></div>
                              <div className="col-md-6 col-12">
                                <div className="form-group">
                                  <button type="submit" className={styles.loginBtn}>
                                    <span className={styles.login}>Finish</span>
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
                </div>

              </div>
              <div hidden={!ChoosePlanTab}>
                <ChoosePlan />
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

export default FormInfo;