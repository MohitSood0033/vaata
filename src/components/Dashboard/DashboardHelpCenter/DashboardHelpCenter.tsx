import React, { useState } from 'react'
import styles from './DashboardHelpCenter.module.css'
import CommonDashHeader from 'components/Shared/CommonDashHeader/CommonDashHeader'
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter'

const DashboardHelpCenter = () => {
    const [callPopup, setCallPopup] = useState<boolean>(false);
    const [callBtn, setCallBtn] = useState<boolean>(false);
    const [viewAll, setViewAll] = useState<boolean>(false);
    const [accordionOne, setAccordionOne] = useState<boolean>(false);
    const [accordionTwo, setAccordionTwo] = useState<boolean>(false);
    const [accordionThree, setAccordionThree] = useState<boolean>(false);
    const [accordionFour, setAccordionFour] = useState<boolean>(false);
    const [accordionFive, setAccordionFive] = useState<boolean>(false);
    const [solution, setSolution] = useState<boolean>(false);
    const [help, setHelp] = useState<boolean>(false);
    const [needHelp, setNeedHelp] = useState<boolean>(false);
    const [chatBox, setChatBox] = useState<boolean>(false);
    const [chatIcon, setChatIcon] = useState<boolean>(false);

    return (
        <div className={styles.main_dashboardWrap}>
            <CommonDashHeader />

            {/* home top area */}
            {!help && <div className={styles.home_top}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-6 col-12'>
                            <div className={styles.home_topLeft}>
                                <h2>Help Center</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {/* home top area */}

            {!help && <div className={styles.market_itemWrap}>
                <div className='container-fluid'>
                    {!viewAll && <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className={styles.help_searchWrap}>
                                                <div className={styles.help_search}>
                                                    <h2>Hello, how we can help you</h2>
                                                    <p>Search for a question, or choose topic</p>
                                                    <div className={styles.help_searchBox}>
                                                        <div className={styles.search}>
                                                            <img src={require('../../../assets/images/search-1.svg').default}
                                                                alt=""
                                                            />
                                                            <input type="text" className={styles.form_control_feedback} placeholder="Just type what are you looking for" />
                                                            <button className={styles.search_btn}>Search</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className={styles.title_h2}>
                                                <h2>Popular Topics</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-sm-3'>
                                            <div className={styles.topic_box}>
                                                <h3>Icon</h3>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?
                                                    <br />
                                                    Is it possible to pay by card
                                                    <br />
                                                    How can I pay for my order?
                                                </p>
                                                <a href='javascript:void(0)' onClick={() => { setViewAll(true) }}>View All</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className={styles.topic_box}>
                                                <h3>Icon</h3>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?
                                                    <br />
                                                    Is it possible to pay by card
                                                    <br />
                                                    How can I pay for my order?
                                                </p>
                                                <a href='javascript:void(0)'>View All</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className={styles.topic_box}>
                                                <h3>Icon</h3>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?
                                                    <br />
                                                    Is it possible to pay by card
                                                    <br />
                                                    How can I pay for my order?
                                                </p>
                                                <a href='javascript:void(0)'>View All</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className={styles.topic_box}>
                                                <h3>Icon</h3>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?
                                                    <br />
                                                    Is it possible to pay by card
                                                    <br />
                                                    How can I pay for my order?
                                                </p>
                                                <a href='javascript:void(0)'>View All</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row mt-4'>
                                        <div className='col-sm-3'>
                                            <div className={styles.topic_box}>
                                                <h3>Icon</h3>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?
                                                    <br />
                                                    Is it possible to pay by card
                                                    <br />
                                                    How can I pay for my order?
                                                </p>
                                                <a href='javascript:void(0)'>View All</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className={styles.topic_box}>
                                                <h3>Icon</h3>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?
                                                    <br />
                                                    Is it possible to pay by card
                                                    <br />
                                                    How can I pay for my order?
                                                </p>
                                                <a href='javascript:void(0)'>View All</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className={styles.topic_box}>
                                                <h3>Icon</h3>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?
                                                    <br />
                                                    Is it possible to pay by card
                                                    <br />
                                                    How can I pay for my order?
                                                </p>
                                                <a href='javascript:void(0)'>View All</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className={styles.topic_box}>
                                                <h3>Icon</h3>
                                                <h2>Lorem Ipsum</h2>
                                                <p>Is it possible to pay by card upon receipt?
                                                    <br />
                                                    Is it possible to pay by card
                                                    <br />
                                                    How can I pay for my order?
                                                </p>
                                                <a href='javascript:void(0)'>View All</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>}

                    {viewAll && <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className={styles.help_searchWrap}>
                                                <div className={styles.help_search}>
                                                    <h2>Lorem Ipsum</h2>
                                                    <p>Search for a question, or choose another topic</p>
                                                    <div className={styles.help_searchBox}>
                                                        <div className={styles.search}>
                                                            <img src={require('../../../assets/images/search-1.svg').default}
                                                                alt=""
                                                            />
                                                            <input type="text" className={styles.form_control_feedback} placeholder="Just type what are you looking for" />
                                                            <button className={styles.search_btn}>Search</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className={styles.help_accordion}>
                                                {accordionOne ? <img className={styles.img_dot} src={require('../../../assets/images/subpoint-active.svg').default}
                                                    alt=""
                                                /> :
                                                    <img className={styles.img_dot} src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                        alt=""
                                                    />}
                                                <div className={styles.help_accordion_title}>
                                                    <h2>Yes but if you Pixel perfect screen.</h2>
                                                    <div>
                                                        {accordionOne ? <img src={require('../../../assets/images/minus-a.png')}
                                                            alt=""
                                                            onClick={() => { setAccordionOne(false) }}
                                                        /> :
                                                            <img src={require('../../../assets/images/Plus_active.png')}
                                                                alt=""
                                                                onClick={() => { setAccordionOne(true) }}
                                                            />}
                                                    </div>
                                                </div>
                                                {accordionOne && <div className={styles.help_accordion_text}>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                        It has survived not only five centuries, but also the leap into electronic typesetting,
                                                        remaining essentially unchanged.</p>
                                                </div>}
                                            </div>
                                            <div className={styles.help_accordion}>
                                                {accordionTwo ? <img className={styles.img_dot} src={require('../../../assets/images/subpoint-active.svg').default}
                                                    alt=""
                                                /> :
                                                    <img className={styles.img_dot} src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                        alt=""
                                                    />}
                                                <div className={styles.help_accordion_title}>
                                                    <h2>Yes but if you Pixel perfect screen.</h2>
                                                    {accordionTwo ? <img src={require('../../../assets/images/minus-a.png')}
                                                        alt=""
                                                        onClick={() => { setAccordionTwo(false) }}
                                                    /> :
                                                        <img src={require('../../../assets/images/Plus_active.png')}
                                                            alt=""
                                                            onClick={() => { setAccordionTwo(true) }}
                                                        />}
                                                </div>
                                                {accordionTwo && <div className={styles.help_accordion_text}>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                        It has survived not only five centuries, but also the leap into electronic typesetting,
                                                        remaining essentially unchanged.</p>
                                                </div>}
                                            </div>
                                            <div className={styles.help_accordion}>
                                                {accordionThree ? <img className={styles.img_dot} src={require('../../../assets/images/subpoint-active.svg').default}
                                                    alt=""
                                                /> :
                                                    <img className={styles.img_dot} src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                        alt=""
                                                    />}
                                                <div className={styles.help_accordion_title}>
                                                    <h2>Yes but if you Pixel perfect screen.</h2>
                                                    {accordionThree ? <img src={require('../../../assets/images/minus-a.png')}
                                                        alt=""
                                                        onClick={() => { setAccordionThree(false) }}
                                                    /> :
                                                        <img src={require('../../../assets/images/Plus_active.png')}
                                                            alt=""
                                                            onClick={() => { setAccordionThree(true) }}
                                                        />}
                                                </div>
                                                {accordionThree && <div className={styles.help_accordion_text}>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                        It has survived not only five centuries, but also the leap into electronic typesetting,
                                                        remaining essentially unchanged.</p>
                                                </div>}
                                            </div>
                                            <div className={styles.help_accordion}>
                                                {accordionFour ? <img className={styles.img_dot} src={require('../../../assets/images/subpoint-active.svg').default}
                                                    alt=""
                                                /> :
                                                    <img className={styles.img_dot} src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                        alt=""
                                                    />}
                                                <div className={styles.help_accordion_title}>
                                                    <h2>Yes but if you Pixel perfect screen.</h2>
                                                    {accordionFour ? <img src={require('../../../assets/images/minus-a.png')}
                                                        alt=""
                                                        onClick={() => { setAccordionFour(false) }}
                                                    /> :
                                                        <img src={require('../../../assets/images/Plus_active.png')}
                                                            alt=""
                                                            onClick={() => { setAccordionFour(true) }}
                                                        />}
                                                </div>
                                                {accordionFour && <div className={styles.help_accordion_text}>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                        It has survived not only five centuries, but also the leap into electronic typesetting,
                                                        remaining essentially unchanged.</p>
                                                </div>}
                                            </div>
                                            <div className={styles.help_accordion}>
                                                {accordionFive ? <img className={styles.img_dot} src={require('../../../assets/images/subpoint-active.svg').default}
                                                    alt=""
                                                /> :
                                                    <img className={styles.img_dot} src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                        alt=""
                                                    />}
                                                <div className={styles.help_accordion_title}>
                                                    <h2>Yes but if you Pixel perfect screen.</h2>
                                                    {accordionFive ? <img src={require('../../../assets/images/minus-a.png')}
                                                        alt=""
                                                        onClick={() => { setAccordionFive(false) }}
                                                    /> :
                                                        <img src={require('../../../assets/images/Plus_active.png')}
                                                            alt=""
                                                            onClick={() => { setAccordionFive(true) }}
                                                        />}
                                                </div>
                                                {accordionFive && <div className={styles.help_accordion_text}>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                        It has survived not only five centuries, but also the leap into electronic typesetting,
                                                        remaining essentially unchanged.</p>
                                                </div>}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>}

                    <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className={styles.market_itemBox}>
                                <div className={styles.itemBox_main}>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className={styles.get_helpRow}>
                                                <h2>Contact Vaata Customer Service</h2>
                                                <div className={styles.get_helpbtn}>
                                                    <button className={styles.helpbtn} onClick={() => { setHelp(true) }}>Get Help</button>
                                                    <div onClick={() => { setCallBtn(!callBtn) }}>
                                                        {callBtn ? <img src={require('../../../assets/images/close-icon.png')}
                                                            alt=""
                                                            onClick={() => { setCallPopup(false) }}
                                                        /> :
                                                            <img src={require('../../../assets/images/help-icon.png')}
                                                                alt=""
                                                                onClick={() => { setCallPopup(true); }}
                                                            />}
                                                    </div>
                                                    {callPopup && <div className={styles.help_popup}>
                                                        <div className={styles.pop_title}>
                                                            <h2>
                                                                <img src={require('../../../assets/images/pop-phone.png')}
                                                                    alt=""
                                                                />
                                                                Order a Call
                                                            </h2>
                                                        </div>
                                                        <div className={styles.pop_form}>
                                                            <p>Enter the phone number <br /> and we will call back to you soon</p>
                                                            <div className={styles.help_form}>
                                                                <form>
                                                                    <div className={`form-group ${styles.form_group}`}>
                                                                        <div className='row'>
                                                                            <div className='col-sm-12'>
                                                                                <label htmlFor="" >Phone Number</label>
                                                                            </div>
                                                                            <div className='col-sm-3'>
                                                                                <select className={`form-control ${styles.form_control}`}>
                                                                                    <option>+380</option>
                                                                                    <option>+380</option>
                                                                                    <option>+380</option>
                                                                                    <option>+380</option>
                                                                                    <option>+380</option>
                                                                                    <option>+380</option>
                                                                                    <option>+380</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className='col-sm-9'>
                                                                                <input type="text" className={`form-control ${styles.form_control}`} placeholder="98 78 67 675" id="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={`form-group ${styles.form_group}`}>
                                                                        <div className='row'>
                                                                            <div className='col-sm-12'>
                                                                                <label htmlFor="" >In what time you will be available to speak?</label>
                                                                            </div>
                                                                            <div className='col-sm-6'>
                                                                                <select className={`form-control ${styles.form_control}`}>
                                                                                    <option>12 hours</option>
                                                                                    <option>12 hours</option>
                                                                                    <option>12 hours</option>
                                                                                    <option>12 hours</option>
                                                                                    <option>12 hours</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className='col-sm-6'>
                                                                                <select className={`form-control ${styles.form_control}`}>
                                                                                    <option>44 Minutes</option>
                                                                                    <option>44 Minutes</option>
                                                                                    <option>44 Minutes</option>
                                                                                    <option>44 Minutes</option>
                                                                                    <option>44 Minutes</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button className={styles.popup_btn}>Order a Call</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

            {help && <div className={styles.helpCenter_wrap}>
                <div className=''>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className={styles.bread_crumbs}>
                                <ul>
                                    <li><a onClick={() => (setHelp(false))}>Help Center {'>'}</a></li>
                                    <li><p>Vaata Customer Service</p></li>
                                </ul>
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
                                    <h2>Vaata Customer Service</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* home top area */}
                <div className={styles.market_itemWrap}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className={styles.market_itemBox}>
                                    <div className={styles.itemBox_main}>
                                       {!needHelp && <div>
                                            <div className='row'>
                                                <div className='col-sm-12'>
                                                    <div className={styles.we_helpMain}>
                                                        <div className={styles.we_help}>
                                                            <h2>How can we help?</h2>
                                                            <p>We’re committed to finding the answers you need as quickly as possible.
                                                                Please tell us a little about what you need help with.</p>
                                                            <div className={styles.we_helpForm}>
                                                                <form>
                                                                    <div className={`form-group ${styles.form_group}`}>
                                                                        <label htmlFor="">Question</label>
                                                                        <textarea className={`form-control ${styles.form_control}`} placeholder="The bristles are relatively soft and should not damage the decals on an RV Camper. The brush bristles do not rotate so the amount of brush pressure placed on your decals is up to you to apply. The cleaningprocess on the hand wash brush is primarily controlled by the two rotating sprayer heads inside of the head of the" id="" />
                                                                        <small className={styles.word_count}>100/500</small>
                                                                    </div>
                                                                    {!solution && <button className={styles.btn} onClick={() => { setSolution(true) }}>Continue</button>}
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {solution && <div className='row'>
                                                <div className='col-sm-12'>
                                                    <div className={` ${styles.title_h2} ${styles.title1_h2}`}>
                                                        <h2>Solution</h2>
                                                    </div>
                                                </div>
                                                <div className='col-sm-12'>
                                                    <div className={styles.help_accordion}>
                                                        {accordionOne ? <img className={styles.img_dot} src={require('../../../assets/images/subpoint-active.svg').default}
                                                            alt=""
                                                        /> :
                                                            <img className={styles.img_dot} src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                                alt=""
                                                            />}
                                                        <div className={styles.help_accordion_title}>
                                                            <h2>Yes but if you Pixel perfect screen.</h2>
                                                            <div>
                                                                {accordionOne ? <img src={require('../../../assets/images/minus-a.png')}
                                                                    alt=""
                                                                    onClick={() => { setAccordionOne(false) }}
                                                                /> :
                                                                    <img src={require('../../../assets/images/Plus_active.png')}
                                                                        alt=""
                                                                        onClick={() => { setAccordionOne(true) }}
                                                                    />}
                                                            </div>
                                                        </div>
                                                        {accordionOne && <div className={styles.help_accordion_text}>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                                                remaining essentially unchanged.</p>
                                                            <button className={styles.solve_btn}>Solved! This Answers my Questions</button>
                                                        </div>}
                                                    </div>
                                                    <div className={styles.help_accordion}>
                                                        {accordionTwo ? <img className={styles.img_dot} src={require('../../../assets/images/subpoint-active.svg').default}
                                                            alt=""
                                                        /> :
                                                            <img className={styles.img_dot} src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                                alt=""
                                                            />}
                                                        <div className={styles.help_accordion_title}>
                                                            <h2>Yes but if you Pixel perfect screen.</h2>
                                                            {accordionTwo ? <img src={require('../../../assets/images/minus-a.png')}
                                                                alt=""
                                                                onClick={() => { setAccordionTwo(false) }}
                                                            /> :
                                                                <img src={require('../../../assets/images/Plus_active.png')}
                                                                    alt=""
                                                                    onClick={() => { setAccordionTwo(true) }}
                                                                />}
                                                        </div>
                                                        {accordionTwo && <div className={styles.help_accordion_text}>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                                                remaining essentially unchanged.</p>
                                                            <button className={styles.solve_btn}>Solved! This Answers my Questions</button>
                                                        </div>}
                                                    </div>
                                                    <div className={styles.help_accordion}>
                                                        {accordionThree ? <img className={styles.img_dot} src={require('../../../assets/images/subpoint-active.svg').default}
                                                            alt=""
                                                        /> :
                                                            <img className={styles.img_dot} src={require('../../../assets/images/Subpoint-pasive.svg').default}
                                                                alt=""
                                                            />}
                                                        <div className={styles.help_accordion_title}>
                                                            <h2>Yes but if you Pixel perfect screen.</h2>
                                                            {accordionThree ? <img src={require('../../../assets/images/minus-a.png')}
                                                                alt=""
                                                                onClick={() => { setAccordionThree(false) }}
                                                            /> :
                                                                <img src={require('../../../assets/images/Plus_active.png')}
                                                                    alt=""
                                                                    onClick={() => { setAccordionThree(true) }}
                                                                />}
                                                        </div>
                                                        {accordionThree && <div className={styles.help_accordion_text}>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                                                remaining essentially unchanged.</p>
                                                            <button className={styles.solve_btn}>Solved! This Answers my Questions</button>
                                                        </div>}
                                                    </div>
                                                </div>

                                                <div className='col-sm-12'>
                                                    <div className={styles.acc_btns}>
                                                        <button className={styles.still_btn} onClick={() => { setNeedHelp(true) }}>I Still Need Help</button>
                                                        <button className={styles.solve_btn}>Solved</button>
                                                    </div>
                                                </div>
                                            </div>}
                                        </div>}
                                        {needHelp && <div className='row'>
                                            <div className='col-sm-12'>
                                                <div className={styles.we_helpMain}>
                                                    <div className={styles.we_help}>
                                                        <h2>How would you like to contact us?</h2>
                                                        <p>We’re committed to finding the answers you need as quickly as possible.
                                                            Please tell us a little about what you need help with.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-sm-12'>
                                                <div className={styles.contact_boxes}>
                                                    <div className='row'>
                                                        <div className='col-sm-4'>
                                                            <div className={styles.contact_box}>
                                                                <h3>Chat</h3>
                                                                <p>Chat directly with a support agent.</p>
                                                                <a href='#!' onClick={() => { setChatIcon(true) }}>Chat Now</a>
                                                            </div>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <div className={styles.contact_box}>
                                                                <h3>Phone</h3>
                                                                <p>Speak with a support agent. Mon-Fri 24 Hours.</p>
                                                                <a href='#!'>Call Now</a>
                                                            </div>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <div className={styles.contact_box}>
                                                                <h3>Email</h3>
                                                                <p>We will be in touch as soon as possible.</p>
                                                                <a href='#!'>Email Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {chatIcon && <div className='col-sm-12'>
                                                <div className={styles.chat_box}>
                                                    <div className={styles.chat_icon}>
                                                        <img src={require('../../../assets/images/chat-icon.png')}
                                                            alt="" className={styles.chat_img}
                                                            onClick={() => { setChatBox(!chatBox) }}
                                                        />
                                                        <span>1</span>
                                                    </div>
                                                    {chatBox && <div className={` ${styles.help_popup} ${styles.chat_popup}`}>
                                                        <div className={styles.pop_title}>
                                                            <h2>
                                                                Chat
                                                            </h2>
                                                        </div>
                                                        <div className={` ${styles.pop_form} ${styles.chat_form}`}>
                                                            <div className={styles.chat_profile}>
                                                                <div className={styles.chat_profile_img}>
                                                                    <img src={require('../../../assets/images/chat-profile.png')}
                                                                        alt="" className={styles.user_img}
                                                                    />
                                                                    <img src={require('../../../assets/images/chat-active.png')}
                                                                        alt="" className={styles.user_active}
                                                                    />
                                                                </div>
                                                                <div className={styles.user_name}>
                                                                    <p>Mike Zimovik
                                                                        <br />
                                                                        <span>Available</span>
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className={styles.chat_boxeMain}>
                                                                <div className={styles.chat_boxe1}>
                                                                    <p>Welcome to Haus Of Polish! We are a full service nail salon and boutique
                                                                        beauty destination that offers premium products, one-time use pedi kits,</p>
                                                                    <span>10:18</span>
                                                                </div>
                                                                <div className={styles.chat_boxe2}>
                                                                    <p>Welcome to Haus Of Polish! We are a service nail salon
                                                                        and boutique beauty destination</p>
                                                                    <span>10:19</span>
                                                                </div>
                                                            </div>

                                                            <div className={styles.reply_box}>
                                                                <img src={require('../../../assets/images/paste-image.png')}
                                                                    alt="" className={styles.paste_img}
                                                                />
                                                                <input type="text" className={styles.msg_input} placeholder="Type here" />
                                                                <img src={require('../../../assets/images/sent-mail.png')}
                                                                    alt="" className={styles.send_img}
                                                                />
                                                            </div>

                                                        </div>
                                                    </div>}
                                                </div>
                                            </div>}

                                        </div>}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>}
            {/* about box */}
            <CommonFooter />
            {/* about box end */}
        </div>
    )
}

export default DashboardHelpCenter