import { NavigateFunction, useNavigate } from 'react-router-dom';
import styles from '.././CommonFooter/CommonFooter.module.css';

const CommonFooter = () => {
    let navigate: NavigateFunction = useNavigate();
  return (
   <main>
          {/* about box */}
          <section className={`${styles.threeBox_wrap} ${styles.box_footer}`}>
              <div className='container-fluid'>
                  <div className={`row mt-4 ${styles.footer_row}`}>
                      <div className="col">
                          <div>
                              <div className={styles.aboutBox_title}>
                                  <img src={require('../../../assets/images/Logo.svg').default}
                                      alt=""
                                  />
                              </div>
                          </div>
                      </div>
                      <div className="col">
                          <div className={styles.footer_heading1}>
                              <p>Home</p>
                              <p>Marketplace</p>
                              <p>Booking</p>
                              <p>Deals</p>
                          </div>
                      </div>
                      <div className="col d-xl-flex d-lg-flex d-md-flex d-sm-none d-none">
                          <div className={styles.footer_heading2}>
                              <p>Electronics</p>
                              <p>Home & Garden</p>
                              <p>Fashion</p>
                              <p>Auto parts $ Accessories</p>
                              <p>Musical instruments & Gear</p>
                              <p>Sport Goods</p>
                              <p>Toys & Hobbies</p>
                              <p>Other categories</p>
                          </div>
                      </div>
                      <div className="col">
                          <div className={styles.footer_heading3}>
                              <p onClick={() => navigate('/home/philosophy')}>Philosophy</p>
                              <p>Terms of use & Privacy policy</p>
                              <p>Solutions</p>
                              <p>Blog</p>
                              <p>Help Center</p>
                              <p>FAQ</p>
                          </div>
                      </div>
                      <div className="col">
                          <div className={styles.aboutBox_title}>
                              <h2>
                                  Subscribe to our news
                              </h2>
                          </div>
                          <div className={styles.cateBox_list}>
                              <input type='text' className={styles.subscribe} name='subscribe_news' placeholder='Example@mail.com' />

                          </div>
                          <div className={styles.cateBox_list}>
                              <button className={styles.subscribe_btn}>Subscribe</button>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* about box end */}
   </main>
  )
}

export default CommonFooter