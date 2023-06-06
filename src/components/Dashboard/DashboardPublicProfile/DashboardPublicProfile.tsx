import CommonDashHeader from 'components/Shared/CommonDashHeader/CommonDashHeader';
import styles from './DashboardPublicProfile.module.css';
import React, { useState } from 'react'
import CommonFooter from 'components/Shared/CommonFooter/CommonFooter';
import ReactApexChart from 'react-apexcharts';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const DashboardPublicProfile = () => {
  let navigate: NavigateFunction = useNavigate();
  const [tabVal, setTabVal] = useState<any>('average');
  const [newMem, setNewMem] = useState<boolean>(false);
  const [editMem, setEditMem] = useState<boolean>(false);
  const [array] = useState<any>(["Ask for Change", "Buy a Goods", "Book a Visits"]);
  const [toggleCheckbox] = useState<any>([]);
  const [prop, setProp] = useState<boolean>(false);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [publicSeries] = useState<any>([{
    data: [67, 22, 0, 10, 1]
  }])
  const [publicProfile] = useState<any>({
    chart: {
      toolbar: {
        show: false,
        autoSelected: 'pan'
      },
      type: 'bar',
      height: 350
    },
    colors: ['#FB3B71'],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -8,
      style: {
        fontSize: '14px',
        colors: ['#fff']
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        },
      }
    },
    title: {
      text: 'Average Review',
      style: {
        fontSize: '16px',
      }
    },
    xaxis: {
      categories: ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      }
    },
    yaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    }
  })
  const [saleSeries] = useState<any>([50, 25, 25])

  const [mySale] = useState<any>({
    chart: {
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FB3B71', '#B246CE', '#21CBB8'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 400
        },
        legend: {
          show: false
        }
      }
    }],
    labels: ["Marketplace", "Booking", "Deals"],
    stroke: {
      show: true,
      width: 10,
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'top',
      floating: false,
      fontSize: '14px',
      fontFamily: 'Helvetica, Arial',
      fontWeight: 400,
      customLegendItems: [],
      labels: {
        colors: ['#c0c0c0'],
        useSeriesColors: false
      },
      markers: {
        width: 18,
        height: 18,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 20
      },
      onItemClick: {
        toggleDataSeries: true
      },
      onItemHover: {
        highlightDataSeries: true
      },
    }
  })

  const [donateSeries] = useState<any>([{
    data: [{
      x: 'Jan',
      y: 2
    },
    {
      x: 'Feb',
      y: 7
    },
    {
      x: 'Mar',
      y: 22
    },
    {
      x: 'Apr',
      y: 22
    },
    {
      x: 'May',
      y: 22
    },
    {
      x: 'Jun',
      y: 22
    },
    {
      x: 'Jul',
      y: 22
    },
    {
      x: 'Aug',
      y: 22
    },
    {
      x: 'Sep',
      y: 22
    },
    {
      x: 'Oct',
      y: 22
    },
    {
      x: 'Nov',
      y: 22
    },
    {
      x: 'Dec',
      y: 22
    },
    ],
  }])

  const [donatePot] = useState<any>({
    chart: {
      id: 'donate-pot',
      toolbar: {
        show: false,
        autoSelected: 'pan'
      },
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 5,
      hover: {
        size: 9
      }
    },
    stroke: {
      curve: "straight",
    },
    colors: ['#FB3B71'],
    yaxis: {
      min: 0,
      max: 80,
      opposite: true,
      tickAmount: 4,
      labels: {
        show: true,
        align: 'right',
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    grid: {
      strokeDashArray: 7,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        },
      }
    },
    title: {
      text: 'Total Donate',
      style: {
        fontSize: '16px',
      }
    },
    subtitle: {
      text: '$6677.99',
      style: {
        fontSize: '24px',
      }
    }
  })

  const handleCheckbox = (value: any, i: any) => {
    console.log(value);

    const index = toggleCheckbox.indexOf(i)
    if (toggleCheckbox.includes(i)) {
      toggleCheckbox.splice(index, 1)
    } else {
      toggleCheckbox.push(i)
    }
    setProp(!prop)
  }

  return (
    <div className={styles.main_dashboardWrap}>
      <CommonDashHeader />

      {/* home top area */}
      <div className={styles.home_top}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6 col-sm-6 col-12'>
              <div className={styles.home_topLeft}>
                <h2>Public Profile</h2>
                <a href='#!'>Commercial</a>
              </div>
            </div>
            <div className='col-md-6 col-sm-6 col-12'>
              <div className={`text-right ${styles.home_topRight}`}>
                <a href='#!'>Back to Home</a>
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
                      <div className={styles.profile_right}>

                        <div className={`${styles.topTab}`}>
                          <a className={tabVal === 'average' ? styles.active : styles.inactive} onClick={() => { setTabVal('average') }}>Average Review</a>
                          <a className={tabVal === 'family' ? styles.active : styles.inactive} onClick={() => { setTabVal('family') }}>Family Members</a>
                          <a className={tabVal === 'open' ? styles.active : styles.inactive} onClick={() => { setTabVal('open') }}>Open Items</a>
                          <a className={tabVal === 'blacklist' ? styles.active : styles.inactive} onClick={() => { navigate('/dashboard/blacklist') }}>Blacklist</a>
                        </div>

                        {tabVal === 'average' && <div className={`${styles.tab_main}`}>
                          <div className={`${styles.topTab} ${styles.progress_tab}`}>
                            <p>Duration:</p>
                            <a href='#!'>Day</a>
                            <a href='#!'>Week</a>
                            <a href='#!'>Month</a>
                            <a href='#!'>Year</a>
                            <a href='#!'>All Time</a>
                          </div>

                          <div className={styles.review_wrap}>
                            <div className={styles.rating_box}>
                              <h2>4.0</h2>
                              <small>99.2%</small>
                              <div className={styles.rating}>
                                <img src={require('../../../assets/images/rating-active.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/rating-active.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/rating-active.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/rating-active.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/rating-active.svg').default}
                                  alt=""
                                />
                              </div>
                              <p>Average Review</p>
                              <span>67 Ratings</span>
                            </div>
                            <div className={styles.progress_box}>
                              <ReactApexChart options={publicProfile} series={publicSeries} type="bar" height={250} width={600} />
                            </div>
                          </div>

                          <div className={styles.reviewSearch_wrap}>
                            <div className={styles.help_searchBox}>
                              <div className={styles.search}>
                                <img src={require('../../../assets/images/search-1.svg').default}
                                  alt=""
                                />
                                <input type="text" className={styles.form_control_feedback} placeholder="Search Family Member" />
                              </div>
                            </div>
                          </div>

                          <div className={styles.member_wrap}>
                            <div className={styles.member_row}>
                              <div className={styles.member_colLeft}>
                                <img src={require('../../../assets/images/member-profile.png')}
                                  alt=""
                                />
                                <p>Antory Morris
                                  <small>Permissions to - Ask a Change, Book a visits</small>
                                </p>
                              </div>
                              <div className={styles.member_colRight}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.member_row}>
                              <div className={styles.member_colLeft}>
                                <img src={require('../../../assets/images/member-profile.png')}
                                  alt=""
                                />
                                <p>Andrew Tane
                                  <small>Permissions to - Ask a Change, Buy a Goods, Book a visits</small>
                                </p>
                              </div>
                              <div className={styles.member_colRight}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.member_row}>
                              <div className={styles.member_colLeft}>
                                <img src={require('../../../assets/images/member-profile.png')}
                                  alt=""
                                />
                                <p>Bogdan Smith
                                  <small>No Permissions</small>
                                </p>
                              </div>
                              <div className={styles.member_colRight}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.member_row}>
                              <div className={styles.member_colLeft}>
                                <img src={require('../../../assets/images/member-profile.png')}
                                  alt=""
                                />
                                <p>Brett Bishep
                                  <small>Permissions to - Ask a Change, Book a visits</small>
                                </p>
                              </div>
                              <div className={styles.member_colRight}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.member_row}>
                              <div className={styles.member_colLeft}>
                                <img src={require('../../../assets/images/member-profile.png')}
                                  alt=""
                                />
                                <p>Cyla Matthews
                                  <small>Permissions to - Ask a Change, Buy a Goods, Book a visits</small>
                                </p>
                              </div>
                              <div className={styles.member_colRight}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.member_row}>
                              <div className={styles.member_colLeft}>
                                <img src={require('../../../assets/images/member-profile.png')}
                                  alt=""
                                />
                                <p>Cyla Matthews
                                  <small>No Permissions</small>
                                </p>
                              </div>
                              <div className={styles.member_colRight}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.member_row}>
                              <div className={styles.member_colLeft}>
                                <img src={require('../../../assets/images/member-profile.png')}
                                  alt=""
                                />
                                <p>Cyla Matthews
                                  <small>Permissions to - Book a visits</small>
                                </p>
                              </div>
                              <div className={styles.member_colRight}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>

                          <div className={styles.add_member}>
                            <div className={styles.add_member_row}>
                              <a href='javascript:void(0)' onClick={() => { navigate('/dashboard/add-member') }}>
                                <img src={require('../../../assets/images/Plus_active.png')}
                                  alt=""
                                />
                                Add New Member
                              </a>
                            </div>
                          </div>

                          <div className={`${styles.topTab}`}>
                            <a href='#!'>Marketplace</a>
                            <a href='#!'>Booking</a>
                            <a href='#!'>Deals</a>
                          </div>

                          <div className={styles.reviewSearch_wrap}>
                            <div className={styles.help_searchBox}>
                              <div className={styles.search}>
                                <img src={require('../../../assets/images/search-1.svg').default}
                                  alt=""
                                />
                                <input type="text" className={styles.form_control_feedback} placeholder="Search Item" />
                              </div>
                            </div>
                          </div>

                          <div className={styles.items_wrap}>
                            <div className={styles.item_BoxMain}>
                              <div className={styles.item_imageBox}>
                                <img src={require('../../../assets/images/item-img.png')}
                                  alt=""
                                />
                              </div>
                              <div className={styles.item_textBox}>
                                <h2>Running track EnergyFIT 815</h2>
                                <div className={styles.rating}>
                                  <span>
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                      alt=""
                                    />
                                  </span>
                                  <p>2 product raitings</p>
                                </div>
                                <div className={styles.col_wrap}>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>On Stock</span>
                                      <span className={styles.span_right}>98</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding Price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Fixed price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                  </div>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>Ask for Change</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Buy now</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.item_iconBox}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.item_BoxMain}>
                              <div className={styles.item_imageBox}>
                                <img src={require('../../../assets/images/item-img.png')}
                                  alt=""
                                />
                              </div>
                              <div className={styles.item_textBox}>
                                <h2>Running track EnergyFIT 815</h2>
                                <div className={styles.rating}>
                                  <span>
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                      alt=""
                                    />
                                  </span>
                                  <p>2 product raitings</p>
                                </div>
                                <div className={styles.col_wrap}>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>On Stock</span>
                                      <span className={styles.span_right}>98</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding Price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Fixed price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                  </div>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>Ask for Change</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Buy now</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.item_iconBox}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.item_BoxMain}>
                              <div className={styles.item_imageBox}>
                                <img src={require('../../../assets/images/item-img.png')}
                                  alt=""
                                />
                              </div>
                              <div className={styles.item_textBox}>
                                <h2>Running track EnergyFIT 815</h2>
                                <div className={styles.rating}>
                                  <span>
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                      alt=""
                                    />
                                  </span>
                                  <p>2 product raitings</p>
                                </div>
                                <div className={styles.col_wrap}>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>On Stock</span>
                                      <span className={styles.span_right}>98</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding Price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Fixed price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                  </div>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>Ask for Change</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Buy now</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.item_iconBox}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.item_BoxMain}>
                              <div className={styles.item_imageBox}>
                                <img src={require('../../../assets/images/item-img.png')}
                                  alt=""
                                />
                              </div>
                              <div className={styles.item_textBox}>
                                <h2>Running track EnergyFIT 815</h2>
                                <div className={styles.rating}>
                                  <span>
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                      alt=""
                                    />
                                  </span>
                                  <p>2 product raitings</p>
                                </div>
                                <div className={styles.col_wrap}>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>On Stock</span>
                                      <span className={styles.span_right}>98</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding Price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Fixed price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                  </div>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>Ask for Change</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Buy now</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.item_iconBox}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>

                          <div className={styles.reviewSearch_wrap}>
                            <div className={styles.help_searchBox}>
                              <div className={styles.search}>
                                <img src={require('../../../assets/images/search-1.svg').default}
                                  alt=""
                                />
                                <input type="text" className={styles.form_control_feedback} placeholder="Search by Username or Reason" />
                              </div>
                            </div>
                          </div>

                          <div className={styles.member_wrap}>
                            <div className={styles.member_row}>
                              <div className={styles.member_colLeft}>
                                <img src={require('../../../assets/images/member-profile.png')}
                                  alt=""
                                />
                                <p>Antory Morris
                                  <small>Reason: did something bad(example)</small>
                                </p>
                              </div>
                              <div className={styles.member_colRight}>
                                <img src={require('../../../assets/images/minus-a.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.member_row}>
                              <div className={styles.member_colLeft}>
                                <img src={require('../../../assets/images/member-profile.png')}
                                  alt=""
                                />
                                <p>Andrew Tane
                                  <small>Reason: did something bad(example)</small>
                                </p>
                              </div>
                              <div className={styles.member_colRight}>
                                <img src={require('../../../assets/images/minus-a.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.member_row}>
                              <div className={styles.member_colLeft}>
                                <img src={require('../../../assets/images/member-profile.png')}
                                  alt=""
                                />
                                <p>Bogdan Smith
                                  <small>Reason: did something bad(example)</small>
                                </p>
                              </div>
                              <div className={styles.member_colRight}>
                                <img src={require('../../../assets/images/minus-a.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.member_row}>
                              <div className={styles.member_colLeft}>
                                <img src={require('../../../assets/images/member-profile.png')}
                                  alt=""
                                />
                                <p>Brett Bishep
                                  <small>Reason: did something bad(example)</small>
                                </p>
                              </div>
                              <div className={styles.member_colRight}>
                                <img src={require('../../../assets/images/minus-a.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.member_row}>
                              <div className={styles.member_colLeft}>
                                <img src={require('../../../assets/images/member-profile.png')}
                                  alt=""
                                />
                                <p>Brett Bishep
                                  <small>Reason: did something bad(example)</small>
                                </p>
                              </div>
                              <div className={styles.member_colRight}>
                                <img src={require('../../../assets/images/minus-a.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>

                          <div className={styles.add_member}>
                            <div className={styles.add_member_row}>
                              <a href='#!'>
                                <img src={require('../../../assets/images/Plus_active.png')}
                                  alt=""
                                />
                                Block User
                              </a>
                            </div>
                          </div>
                        </div>}

                        {tabVal === 'family' && <div className={`${styles.tab_main}`}>

                          <div className={styles.member_wrap}>
                            <div className={styles.member_row}>
                              <div className={styles.member_colLeft}>
                                <img src={require('../../../assets/images/member-profile.png')}
                                  alt=""
                                />
                                <p>Antory Morris
                                  <small>Permissions to - Ask a Change, Book a visits</small>
                                </p>
                              </div>
                              <div className={styles.member_colRight}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  onClick={() => { navigate('/dashboard/edit-member') }}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>

                          <div className={styles.add_member}>
                            <div className={styles.add_member_row}>
                              <a href='javascript:void(0)' onClick={() => { navigate('/dashboard/add-member') }}>
                                <img src={require('../../../assets/images/Plus_active.png')}
                                  alt=""
                                />
                                Add New Member
                              </a>
                            </div>
                          </div>

                          <div className={`${styles.topTab}`}>
                            <a href='#!'>Marketplace</a>
                            <a href='#!'>Booking</a>
                            <a href='#!'>Deals</a>
                          </div>

                          <div className={styles.reviewSearch_wrap}>
                            <div className={styles.help_searchBox}>
                              <div className={styles.search}>
                                <img src={require('../../../assets/images/search-1.svg').default}
                                  alt=""
                                />
                                <input type="text" className={styles.form_control_feedback} placeholder="Search Item" />
                              </div>
                            </div>
                          </div>

                          <div className={styles.items_wrap}>
                            <div className={styles.item_BoxMain}>
                              <div className={styles.item_imageBox}>
                                <img src={require('../../../assets/images/item-img.png')}
                                  alt=""
                                />
                              </div>
                              <div className={styles.item_textBox}>
                                <h2>Running track EnergyFIT 815</h2>
                                <div className={styles.rating}>
                                  <span>
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                      alt=""
                                    />
                                  </span>
                                  <p>2 product raitings</p>
                                </div>
                                <div className={styles.col_wrap}>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>On Stock</span>
                                      <span className={styles.span_right}>98</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding Price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Fixed price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                  </div>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>Ask for Change</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Buy now</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.item_iconBox}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.item_BoxMain}>
                              <div className={styles.item_imageBox}>
                                <img src={require('../../../assets/images/item-img.png')}
                                  alt=""
                                />
                              </div>
                              <div className={styles.item_textBox}>
                                <h2>Running track EnergyFIT 815</h2>
                                <div className={styles.rating}>
                                  <span>
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                      alt=""
                                    />
                                  </span>
                                  <p>2 product raitings</p>
                                </div>
                                <div className={styles.col_wrap}>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>On Stock</span>
                                      <span className={styles.span_right}>98</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding Price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Fixed price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                  </div>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>Ask for Change</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Buy now</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.item_iconBox}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.item_BoxMain}>
                              <div className={styles.item_imageBox}>
                                <img src={require('../../../assets/images/item-img.png')}
                                  alt=""
                                />
                              </div>
                              <div className={styles.item_textBox}>
                                <h2>Running track EnergyFIT 815</h2>
                                <div className={styles.rating}>
                                  <span>
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                      alt=""
                                    />
                                  </span>
                                  <p>2 product raitings</p>
                                </div>
                                <div className={styles.col_wrap}>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>On Stock</span>
                                      <span className={styles.span_right}>98</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding Price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Fixed price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                  </div>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>Ask for Change</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Buy now</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.item_iconBox}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.item_BoxMain}>
                              <div className={styles.item_imageBox}>
                                <img src={require('../../../assets/images/item-img.png')}
                                  alt=""
                                />
                              </div>
                              <div className={styles.item_textBox}>
                                <h2>Running track EnergyFIT 815</h2>
                                <div className={styles.rating}>
                                  <span>
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                      alt=""
                                    />
                                  </span>
                                  <p>2 product raitings</p>
                                </div>
                                <div className={styles.col_wrap}>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>On Stock</span>
                                      <span className={styles.span_right}>98</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding Price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Fixed price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                  </div>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>Ask for Change</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Buy now</span>
                                      <span className={styles.span_right}>Available</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.item_iconBox}>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>

                          <div className={`mt-4 ${styles.topTab} ${styles.progress_tab}`}>
                            <p>Show by:</p>
                            <a href='#!'>Day</a>
                            <a href='#!'>Week</a>
                            <a href='#!'>Month</a>
                            <a href='#!'>Year</a>
                            <a href='#!'>All Time</a>
                          </div>

                          <div className={`${styles.earning_row}`}>
                            <div className='row'>
                              <ReactApexChart options={donatePot} series={donateSeries} type="area" height={300} width={400} />
                              <ReactApexChart options={mySale} series={saleSeries} type="donut" height={300} width={400} />
                            </div>
                          </div>

                          <div className={` ${styles.topTab} ${styles.progress_tab}`}>
                            <a href='#!'>Marketplace</a>
                            <a href='#!'>Booking</a>
                            <a href='#!'>Deals</a>
                          </div>

                          <div className={` ${styles.market_boxes}`}>
                            <div className='row'>
                              <div className='col'>
                                <div className={` ${styles.market_box}`}>
                                  <p>4567</p>
                                  <span>Goods added</span>
                                </div>
                              </div>
                              <div className='col'>
                                <div className={` ${styles.market_box}`}>
                                  <p>1235</p>
                                  <span>Completed</span>
                                </div>
                              </div>
                              <div className='col'>
                                <div className={` ${styles.market_box}`}>
                                  <p>234</p>
                                  <span>On Hold</span>
                                </div>
                              </div>
                              <div className='col'>
                                <div className={` ${styles.market_box}`}>
                                  <p>654</p>
                                  <span>Goods Sold</span>
                                </div>
                              </div>
                              <div className='col'>
                                <div className={` ${styles.market_box}`}>
                                  <p>763</p>
                                  <span>Processing</span>
                                </div>
                              </div>
                              <div className='col'>
                                <div className={` ${styles.market_box}`}>
                                  <p>456</p>
                                  <span>Cancelled</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>}

                        {tabVal === 'open' && <div className={`${styles.tab_main}`}>

                          <div className={`mt-4 ${styles.topTab}`}>
                            <a href='#!'>Marketplace</a>
                            <a href='#!'>Booking</a>
                            <a href='#!'>Deals</a>
                          </div>

                          <div className={styles.reviewSearch_wrap}>
                            <div className={styles.help_searchBox}>
                              <div className={styles.search}>
                                <img src={require('../../../assets/images/search-1.svg').default}
                                  alt=""
                                />
                                <input type="text" className={styles.form_control_feedback} placeholder="Search Item" />
                              </div>
                            </div>
                          </div>

                          <div className={styles.booking_accordionWrap}>

                            <div className={styles.accordions_main}>
                              <div className={styles.accordions_title}>
                                <p>For Woman <span>(2)</span></p>
                                <img src={require('../../../assets/images/baseline-up.png')}
                                  alt=""
                                />
                              </div>
                              <div className={styles.accordions_content}>
                                <div className={styles.content_title}>
                                  <div className={styles.content_titleLeft}>
                                    <h2>Acrylic Full Set Pearl/French Extension Tips</h2>
                                    <div className={styles.rating}>
                                      <span>
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                      </span>
                                      <p>2 Book raitings</p>
                                    </div>
                                  </div>
                                  <div className={styles.content_titleRight}>
                                    <p className={styles.time}>30min</p>
                                    <p className={styles.price}>$109</p>
                                    <img src={require('../../../assets/images/notes.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/close-active.png')}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className={styles.content_description}>
                                  <p>Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty
                                    destination that offers premium products, one-time use pedi kits,
                                    over 600 gels, and regular color. Affordable, transparent pricing
                                    is also available. All full sets and fills include desired nail
                                    shapes with up to medium nail length, and a cuticle treatment.
                                    Removals are available with new sets of dips and gel manicures.
                                    Pricing varies on nail art!, Welcome to Haus Of Polish! We are a full service
                                    nail salon and boutique beauty destination that offers premium products,</p>
                                  <a href='#!'>Read More</a>
                                </div>
                              </div>
                              <div className={styles.accordions_content}>
                                <div className={styles.content_title}>
                                  <div className={styles.content_titleLeft}>
                                    <h2>Braids</h2>
                                    <div className={styles.rating}>
                                      <span>
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                      </span>
                                      <p>2 Book raitings</p>
                                    </div>
                                  </div>
                                  <div className={styles.content_titleRight}>
                                    <p className={styles.time}>30min</p>
                                    <p className={styles.price}>$109</p>
                                    <img src={require('../../../assets/images/notes.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/close-active.png')}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className={styles.content_description}>
                                  <p>Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty
                                    destination that offers premium products, one-time use pedi kits,
                                    over 600 gels, and regular color. Affordable, transparent pricing
                                    is also available. All full sets and fills include desired nail
                                    shapes</p>
                                  <a href='#!'>Read More</a>
                                </div>
                              </div>
                            </div>

                            <div className={styles.accordions_main}>
                              <div className={styles.accordions_title}>
                                <p>For Woman <span>(2)</span></p>
                                <img src={require('../../../assets/images/baseline-up.png')}
                                  alt=""
                                />
                              </div>
                              <div className={styles.accordions_content}>
                                <div className={styles.content_title}>
                                  <div className={styles.content_titleLeft}>
                                    <h2>Acrylic Full Set Pearl/French Extension Tips</h2>
                                    <div className={styles.rating}>
                                      <span>
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                        <img src={require('../../../assets/images/rating-active.svg').default}
                                          alt=""
                                        />
                                      </span>
                                      <p>2 Book raitings</p>
                                    </div>
                                  </div>
                                  <div className={styles.content_titleRight}>
                                    <p className={styles.time}>30min</p>
                                    <p className={styles.price}>$109</p>
                                    <img src={require('../../../assets/images/notes.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/close-active.png')}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className={styles.content_description}>
                                  <p>Welcome to Haus Of Polish! We are a full service nail salon and boutique beauty
                                    destination that offers premium products, one-time use pedi kits,
                                    over 600 gels, and regular color. Affordable, transparent pricing
                                    is also available. All full sets and fills include desired nail
                                    shapes</p>
                                  <a href='#!'>Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className={styles.items_wrap}>
                            <div className={styles.item_BoxMain}>
                              <div className={styles.item_imageBox}>
                                <img src={require('../../../assets/images/item-img.png')}
                                  alt=""
                                />
                              </div>
                              <div className={styles.item_textBox}>
                                <h2>Running track EnergyFIT 815</h2>
                                <div className={styles.rating}>
                                  <span>
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                      alt=""
                                    />
                                  </span>
                                  <p>2 product raitings</p>
                                </div>
                                <div className={styles.col_wrap}>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>On Stock</span>
                                      <span className={styles.span_right}>98</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding Price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Fixed price</span>
                                      <span className={`${styles.span_right} ${styles.span_right_red}`}>$334</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={`${styles.item_iconBox} ${styles.item_iconBox_deals}`}>
                                <span className={styles.span_off}>10% Off</span>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.item_BoxMain}>
                              <div className={styles.item_imageBox}>
                                <img src={require('../../../assets/images/item-img.png')}
                                  alt=""
                                />
                              </div>
                              <div className={styles.item_textBox}>
                                <h2>Running track EnergyFIT 815</h2>
                                <div className={styles.rating}>
                                  <span>
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                      alt=""
                                    />
                                  </span>
                                  <p>2 product raitings</p>
                                </div>
                                <div className={styles.col_wrap}>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>On Stock</span>
                                      <span className={styles.span_right}>98</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding Price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Fixed price</span>
                                      <span className={`${styles.span_right} ${styles.span_right_red}`}>$334</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={`${styles.item_iconBox} ${styles.item_iconBox_deals}`}>
                                <span className={styles.span_off}>10% Off</span>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.item_BoxMain}>
                              <div className={styles.item_imageBox}>
                                <img src={require('../../../assets/images/item-img.png')}
                                  alt=""
                                />
                              </div>
                              <div className={styles.item_textBox}>
                                <h2>Running track EnergyFIT 815</h2>
                                <div className={styles.rating}>
                                  <span>
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                      alt=""
                                    />
                                  </span>
                                  <p>2 product raitings</p>
                                </div>
                                <div className={styles.col_wrap}>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>On Stock</span>
                                      <span className={styles.span_right}>98</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding Price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Fixed price</span>
                                      <span className={`${styles.span_right} ${styles.span_right_red}`}>$334</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={`${styles.item_iconBox} ${styles.item_iconBox_deals}`}>
                                <span className={styles.span_off}>10% Off</span>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.item_BoxMain}>
                              <div className={styles.item_imageBox}>
                                <img src={require('../../../assets/images/item-img.png')}
                                  alt=""
                                />
                              </div>
                              <div className={styles.item_textBox}>
                                <h2>Running track EnergyFIT 815</h2>
                                <div className={styles.rating}>
                                  <span>
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/rating-active.svg').default}
                                      alt=""
                                    />
                                    <img src={require('../../../assets/images/paring-passive.svg').default}
                                      alt=""
                                    />
                                  </span>
                                  <p>2 product raitings</p>
                                </div>
                                <div className={styles.col_wrap}>
                                  <div className={styles.col_left}>
                                    <p>
                                      <span className={styles.span_left}>On Stock</span>
                                      <span className={styles.span_right}>98</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Bidding Price</span>
                                      <span className={styles.span_right}>$334</span>
                                    </p>
                                    <p>
                                      <span className={styles.span_left}>Fixed price</span>
                                      <span className={`${styles.span_right} ${styles.span_right_red}`}>$334</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={`${styles.item_iconBox} ${styles.item_iconBox_deals}`}>
                                <span className={styles.span_off}>10% Off</span>
                                <img src={require('../../../assets/images/notes.svg').default}
                                  alt=""
                                />
                                <img src={require('../../../assets/images/close-active.png')}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>



                        </div>}

                        {tabVal === 'blacklist' && <div className={`${styles.tab_main}`}>
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

      <hr></hr>

      {/* about box */}
      <CommonFooter />
      {/* about box end */}
    </div >
  )
}

export default DashboardPublicProfile