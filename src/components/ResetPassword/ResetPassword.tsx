import React, { useState } from "react";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from '.././ResetPassword/ResetPassword.module.css';

type Props = {}

const ResetPassword: React.FC<Props> = () => {
    let navigate: NavigateFunction = useNavigate();

    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const initialValues: {
        password: string;
        confirmPassword: string;
    } = {
        password: "",
        confirmPassword: "",
    };

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const toggleConfirmPassword = () => {
        if (confirmPasswordType === "password") {
            setConfirmPasswordType("text")
            return;
        }
        setConfirmPasswordType("password")
    }

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), ""], 'Confirm Password does not match'),
    });

    const handleLogin = (formValue: { password: string; confirmPassword: string }) => {
        const { password, confirmPassword } = formValue;

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

    // return (
    //     <div className="col-12">
    //         <img src={require('../../assets/images/Logo.svg').default}
    //             alt=""
    //             className="logo"
    //         />
    //         <div className="wrapper">
    //             <img src={require('../../assets/images/dots.svg').default}
    //                 alt=""
    //                 className="dots1"
    //             />

    //             <div className="">
    //                 <header>Welcome Back</header>
    //                 <hr></hr>
    //             </div>


    //             <img src={require('../../assets/images/dots.svg').default}
    //                 alt=""
    //                 className="dots2"
    //             />
    //         </div>
    //     </div>
    // );

    return (
        <div>
        <img src={require('../../assets/images/back-btn.svg').default}
                alt=""
                className={styles.backbtn}
                onClick={() => navigate(-1)}
            />
        <div className={styles.form}>
                <img src={require('../../assets/images/dots.svg').default}
                    alt=""
                    className={styles.dots1}
                />

            <div className={styles.formBody}>

                <h1 className={styles.h1}>Reset Password?</h1>
                <hr className={styles.rectangle}></hr>
                <p className={styles.info}>Please enter new password</p>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="form-group position-relative">
                                <label className={styles.password}>New Password</label>
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
                                        className={styles.eye_icon}/>}
                                        </button>
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="form-group position-relative">
                                <label className={styles.password}>Confirm Password</label>
                                <Field name="confirmPassword" type={confirmPasswordType} className={
                                    `form-control ${styles.form_input}` +
                                    (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')
                                } />
                                <button onClick={toggleConfirmPassword}
                                    className={styles.eye_btn}>
                                    {confirmPasswordType === "password" ? <img src={require('../../assets/images/invisible.svg').default}
                                        alt=""
                                        className={styles.eye_icon} /> : <img src={require('../../assets/images/visible.svg').default}
                                            alt=""
                                            className={styles.eye_icon} />}
                                </button>
                                <ErrorMessage
                                    name="confirmPassword"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="form-group">
                                <button type="submit" className={styles.loginBtn}>
                                    <span className={styles.login}>Save Changes</span>
                                </button>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="row justify-content-center">
                                <div className="form-group">
                                    <label className={styles.acc}>Don`t have an account? <a href="/signup" className={styles.signUp}>Sign Up</a></label>
                                </div>
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
                <img src={require('../../assets/images/dots.svg').default}
                    alt=""
                    className={styles.dots2}
                />
            </div>
        </div>
    );
};

export default ResetPassword;
