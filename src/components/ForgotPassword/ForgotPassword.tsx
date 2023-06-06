import React, { useState } from "react";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from '.././ForgotPassword/ForgotPassword.module.css';

type Props = {}

const ForgotPassword: React.FC<Props> = () => {
    let navigate: NavigateFunction = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const initialValues: {
        username: string;
        password: string;
    } = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
    });

    const handleLogin = (formValue: { username: string; password: string }) => {
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

                <h1 className={styles.h1}>Forgot Password?</h1>
                <hr className={styles.rectangle}></hr>
                <p className={styles.info}>Please enter your username or email address. You will receive a link to create a new password via email.</p>
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
                            <div className="form-group">
                                <button type="submit" className={styles.mailBtn}>
                                    <span className={styles.mail}>Send email</span>
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

export default ForgotPassword;
