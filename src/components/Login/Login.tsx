import React, { useState } from "react";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from '.././Login/Login.module.css';

type Props = {}

const Login: React.FC<Props> = () => {
    let navigate: NavigateFunction = useNavigate();

    const [passwordType, setPasswordType] = useState("password");
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const initialValues: {
        username: string;
        password: string;
    } = {
        username: "",
        password: "",
    };

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
    });

    const handleLogin = (formValue: { username: string; password: string }) => {
        console.log('1234');

        const { username, password } = formValue;

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
        <div className={styles.form}>
            <img src={require('../../assets/images/dots.svg').default}
                alt=""
                className={styles.dots1}
            />
            <div className={styles.formBody}>

                <h1 className={styles.h1}>Welcome Back</h1>
                <hr className={styles.rectangle}></hr>
                <p className={styles.info}>To keep connected with us,<br></br>please login with your personal info</p>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="form-group">
                                <label className={styles.email}>Email or nickname</label>
                                <Field name="username" type="text" className={
                                    `form-control ${styles.form_input}` +
                                    (errors.username && touched.username ? ' is-invalid' : '')
                                } />
                                <ErrorMessage
                                    name="username"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>

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

                            <div className="form-group">
                                <button type="submit" className={styles.loginBtn}>
                                    <span className={styles.login}>Login</span>
                                </button>
                            </div>
                            <div className={`row ${styles.formCheck}`}>
                                {/* <div className="form-group w-100 d-flex align-items-center">
                                    <Field name="keep" className={styles.checkbox} type="checkbox"/>
                                    <label className={styles.keep}>Keep me loginned</label>
                                </div> */}
                                <label className={styles.container_check}>Keep me loginned
                                    <Field type="checkbox" name="keep" className={styles.checkbox} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <div className="form-group w-100">
                                    <label className={styles.forgot}><a href="/forgot-password" className={styles.forgotPwd}>Forgot Password?</a></label>
                                </div>
                            </div>
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
    );
};

export default Login;
