import React, { useEffect, useState } from 'react'
import styles from './CommonDashHeader.module.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const CommonDashHeader = (props: any) => {

    let navigate: NavigateFunction = useNavigate();
    const [dashboard, setDashboard] = useState<boolean>(false);
    const [settings, setSettings] = useState<boolean>(false);
    const [marketplace, setMarketplace] = useState<boolean>(false);
    const [booking, setBooking] = useState<boolean>(false);
    const [helpCenter, setHelpCenter] = useState<boolean>(false);
    const [dropValue, setDropValue] = useState<any>();
    const [dropdown, setDropdown] = useState<boolean>(false);

    useEffect(() => {
        if (window.location.pathname == '/dashboard') {
            setDashboard(true);
            setSettings(false);
            setMarketplace(false)
            setBooking(false);
            setHelpCenter(false)
        }
        if (window.location.pathname == '/dashboard/settings') {
            setDashboard(false);
            setSettings(true);
            setMarketplace(false);
            setBooking(false);
            setHelpCenter(false)
        }
        if(window.location.pathname == '/dashboard/marketplace'){
            setDashboard(false);
            setSettings(false);
            setMarketplace(true);
            setBooking(false);
            setHelpCenter(false)
        }
        if (window.location.pathname == '/dashboard/booking' || window.location.pathname == '/dashboard/booking/create-visit'){
            setDashboard(false);
            setSettings(false);
            setMarketplace(false);
            setBooking(true)
            setHelpCenter(false)
        }
        if(window.location.pathname == '/dashboard/help-center'){
            setDashboard(false);
            setSettings(false);
            setMarketplace(false);
            setBooking(false)
            setHelpCenter(true)

        }
    })
   
    const handleClick = (value: any) => {
        if (value == 'home') {
            setDropValue('home')
        }
        if (value == 'basket') {
            setDropValue('basket')
        }
        if (value == 'dashboard') {
            setDropValue('dashboard')
        }
        if (value == 'publicProfile') {
            setDropValue('publicProfile')
            navigate('/dashboard/public-profile')
        }
        if (value == 'messenger') {
            setDropValue('messenger')
        }
        if (value == 'helpCenter') {
            setDropValue('helpCenter')
        }
    }

  return (
      <div className={styles.header_wrap}>
          <div className='container-fluid'>
              <div className='row'>
                  <div className='col-md-2 col-6'>
                      <div className={styles.logo}>
                      </div>
                  </div>
                  <div className='col-md-8 col-8'>
                      <div className={styles.nav_contant}>
                          <div className={styles.navbar}>
                              <ul>
                                  <li className={dashboard ? styles.active : styles.inactive}>
                                      <a onClick={() => { navigate('/dashboard');  }}>
                                          {dashboard ? <img src={require('../../../assets/images/dashboad-active.png')}
                                              alt=""
                                              className={styles.img}
                                          /> :
                                          <img src={require('../../../assets/images/dashboad-pasive.png')}
                                              alt=""
                                              className={styles.img}
                                          /> }
                                          <span>Dashboard</span>
                                      </a>
                                  </li>
                                  <li className={booking ? styles.active : styles.inactive}>
                                      <a onClick={() => { navigate('/dashboard/booking'); }}>
                                          <img src={require('../../../assets/images/bookmark-ribbon.png')}
                                              alt=""
                                              className={styles.img}
                                          />
                                          <span>Bookings</span>
                                      </a>
                                  </li>
                                  <li className={marketplace ? styles.active : styles.inactive}>
                                      <a onClick={() => { navigate('/dashboard/marketplace') }}>
                                          <img src={require('../../../assets/images/bookmark-ribbon.png')}
                                              alt=""
                                              className={styles.img}
                                          />
                                          <span>Marketplace</span>
                                      </a>
                                  </li>
                                  <li className={settings ? styles.active : styles.inactive}>
                                      <a onClick={() => { navigate('/dashboard/settings') }}>
                                         {settings ? <img src={require('../../../assets/images/settings-active.png')}
                                              alt=""
                                              className={styles.img}
                                          /> :
                                          <img src={require('../../../assets/images/settings-pasive.png')}
                                              alt=""
                                              className={styles.img}
                                          />}
                                          <span>Settings</span>
                                      </a>
                                  </li>
                                  <li className={helpCenter ? styles.active : styles.inactive}>
                                      <a onClick={() => { navigate('/dashboard/help-center') }}>
                                          <img src={require('../../../assets/images/rating-pasive.png')}
                                              alt=""
                                              className={styles.img}
                                          />
                                          <span>Help Center</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className='col-md-2 col-6'>
                      <div className={styles.nav_profile}>
                          <div className={styles.dropdown_main}>
                              <button className={styles.dropdown_btn}>
                                  <img src={require('../../../assets/images/Profile.png')}
                                      onClick={() => { setDropdown(!dropdown) }}
                                      alt=""
                                      className={styles.img}
                                  />
                              </button>
                              {dropdown && <div className={styles.dropdown_menu}>
                                  <a className={dropValue === 'home' ? styles.dropdown_item_active : styles.dropdown_item} onClick={() => { handleClick('home') }}>Home</a>
                                  <a className={dropValue === 'basket' ? styles.dropdown_item_active : styles.dropdown_item} onClick={() => { handleClick('basket') }}>Basket</a>
                                  <a className={dropValue === 'dashboard' ? styles.dropdown_item_active : styles.dropdown_item} onClick={() => { handleClick('dashboard') }}>Dashboard</a>
                                  <a className={dropValue === 'publicProfile' ? styles.dropdown_item_active : styles.dropdown_item} onClick={() => { handleClick('publicProfile') }}>Public Profile</a>
                                  <a className={dropValue === 'messenger' ? styles.dropdown_item_active : styles.dropdown_item} onClick={() => { handleClick('messenger') }}>Messenger</a>
                                  <a className={dropValue === 'helpCenter' ? styles.dropdown_item_active : styles.dropdown_item} onClick={() => { handleClick('helpCenter') }}>Help Center</a>
                                  <a className={styles.dropdown_signOut}>Sign Out</a>
                              </div>}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CommonDashHeader