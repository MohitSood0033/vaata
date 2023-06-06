import React, { useState } from 'react'
import styles from './DashboardPublicProfile.module.css';
import CommonDashHeader from 'components/Shared/CommonDashHeader/CommonDashHeader';
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const DashboardNewMember = () => {
    let navigate: NavigateFunction = useNavigate();
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState<any>([]);
    const [list, setList] = useState([{
        id: "1",
        name: "Ask for Change"
    },
    {
        id: "2",
        name: "Buy a Goods"
    },
    {
        id: "3",
        name: "Book a Visits"
    }]);

    const handleSelectAll = (e: any) => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map((li: any) => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = (e: any) => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter((item: any) => item !== id));
        }
    };

    return (
        <div className={styles.main_dashboardWrap}>
            <CommonDashHeader />

            <div className={styles.helpCenter_wrap}>
                <div className=''>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className={styles.bread_crumbs}>
                                <ul>
                                    <li><a href='#!'>Home {'>'}</a></li>
                                    <li><a href='#!'>Public Profile {'>'}</a></li>
                                    <li><p>Add Member</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home top area */}
            <div className={styles.home_top}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-6 col-12'>
                            <div className={styles.home_topLeft}>
                                <h2>Public Profile</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home top area */}

            <div className={styles.profile_wrap}>
                <div className='container-fluid'>
                    {/*  */}

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.profile_left}>
                                                <div className={styles.profile}>
                                                    <img src={require('../../../assets/images/profile-pic.png')}
                                                        alt="" className={styles.img} />
                                                    <h1>Andrew Tane</h1>
                                                    <a onClick={() => navigate('/dashboard/edit-profile')} className={styles.btn}>Edit Profile</a>
                                                </div>
                                                <div className={styles.profile_boxes}>
                                                    <div className={styles.box}>
                                                        <p>1234</p>
                                                        <span>Items Sold</span>
                                                    </div>
                                                    <div className={styles.box}>
                                                        <p>3345</p>
                                                        <span>Follow</span>
                                                    </div>
                                                    <div className={styles.box}>
                                                        <p>456</p>
                                                        <span>Followed</span>
                                                    </div>
                                                    <div className={styles.box}>
                                                        <p>0</p>
                                                        <span>No-Shows</span>
                                                    </div>
                                                </div>

                                                <div className={styles.verify_row}>
                                                    <div className={styles.verify}>
                                                        <img src={require('../../../assets/images/verify.png')}
                                                            alt="" className={styles.img} />
                                                        <div className={styles.verify_text}>
                                                            <span>Verify Level</span>
                                                            <p>Uploaded a Billing address</p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.verify}>
                                                        <img src={require('../../../assets/images/membership.png')}
                                                            alt="" className={styles.img} />
                                                        <div className={styles.verify_text}>
                                                            <span>Membership Status</span>
                                                            <p>Commercial, since Jan 03, 2017</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.address_box}>
                                                    <div className={styles.address_row}>
                                                        <img src={require('../../../assets/images/location.png')}
                                                            alt="" className={styles.img} />
                                                        <p>Rivne, Liberty 33 Street, Ukraine, 33000</p>
                                                    </div>
                                                    <div className={styles.address_row}>
                                                        <img src={require('../../../assets/images/telephone.png')}
                                                            alt="" className={styles.img} />
                                                        <p>+1 545 767 9876</p>
                                                    </div>
                                                    <div className={styles.address_row}>
                                                        <img src={require('../../../assets/images/email-passive.png')}
                                                            alt="" className={styles.img} />
                                                        <p>xyz@gmail.com</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-8'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.new_memberTitle}>
                                                <h2>
                                                    New Member
                                                </h2>
                                            </div>
                                            <div className={styles.profile_edit}>
                                                <div className={styles.profile_upload}>
                                                    <div className={styles.upload_img}>
                                                        <img src={require('../../../assets/images/upload-usr.png')}
                                                            alt="" className={styles.img1} />
                                                        <img src={require('../../../assets/images/plus.svg').default}
                                                            alt="" className={styles.img2} />
                                                    </div>
                                                    <p>Drag & Drop <br></br> Client Profile Photo</p>
                                                    <a href='#!'>Upload</a>
                                                </div>
                                                <div className={styles.profile_form}>
                                                    <form>
                                                        <div className='row'>
                                                            <div className='col-md-5'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">Member Name</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="Jonathan Smith" id="" />
                                                                    {/* <small className={styles.word_count}>11/40</small> */}
                                                                </div>
                                                            </div>
                                                            <div className='col-md-4'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">Street</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="Liberty" id="" />
                                                                    {/* <small className={styles.word_count}>11/40</small> */}
                                                                </div>
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">Number</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="4" id="" />
                                                                    {/* <small className={styles.word_count}>11/40</small> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-5'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">Member Surname</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="Tane" id="" />
                                                                    {/* <small className={styles.word_count}>11/40</small> */}
                                                                </div>
                                                            </div>
                                                            <div className='col-md-4'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">City</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="London" id="" />
                                                                    {/* <small className={styles.word_count}>11/40</small> */}
                                                                </div>
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">Postcode</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="123456" id="" />
                                                                    {/* <small className={styles.word_count}>11/40</small> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-3'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="">Phone Number</label>
                                                                    <select className={`form-control ${styles.form_control} ${styles.Condition_select}`}>
                                                                        <option>+380</option>
                                                                        <option>+380</option>
                                                                        <option>+380</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-4'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="" className='invisible'>Phone Number</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="98 78 67 675" id="" />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="" className=''>Country</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="Ukraine" id="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-5'>
                                                                <div className={`form-group ${styles.form_group}`}>
                                                                    <label htmlFor="" className=''>Email Address</label>
                                                                    <input type="text" className={`form-control ${styles.form_control}`} placeholder="xuz@gmail.com" id="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className={`form-group ${styles.form_groupCheck}`}>
                                                        <div className={styles.groupCheck_row}>
                                                            <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                <p>Permissions</p>
                                                                <label className={styles.container_check}>
                                                                    Select All
                                                                    <input className={styles.checkbox}
                                                                        type="checkbox"
                                                                        name="selectAll"
                                                                        id="selectAll"
                                                                        onClick={handleSelectAll}
                                                                        checked={isCheckAll}
                                                                    />
                                                                    <span className={styles.checkmark}></span>
                                                                </label>
                                                            </div>
                                                            {list.map(({ id, name }) => (
                                                                <div className={`${styles.Check_row} ${styles.member_Check_row}`}>
                                                                    <p className={styles.p_dark}>{name}</p>
                                                                    <label className={styles.container_check}>
                                                                        <input className={styles.checkbox}
                                                                            key={id}
                                                                            type="checkbox"
                                                                            name={name}
                                                                            id={id}
                                                                            onClick={handleClick}
                                                                            checked={isCheck.includes(id)}
                                                                        />
                                                                        <span className={styles.checkmark}></span>
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row align-items-center'>
                                                <div className='col-md-12'>
                                                    <div className={`form-group ${styles.form_group}`}>
                                                        <div className={styles.form_groupBtn}>
                                                            <button className={styles.Btn1} onClick={() => navigate('/dashboard/public-profile')}>Cancel</button>
                                                            <button className={styles.Btn2}>Save Member</button>
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
            {/* about box */}

            <hr></hr>

            <CommonFooter />
            {/* about box end */}
        </div >
    )
}

export default DashboardNewMember