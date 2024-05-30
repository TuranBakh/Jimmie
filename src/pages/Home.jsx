import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext';
import HorizontalAnimation from '../components/HorizontalAnimation'
import { Link } from 'react-router-dom'

import Data from '../database/data.json'


const Home = () => {
    const [language, setLanguage] = useContext(LanguageContext);
    const [randomData, setRandomData] = useState([]);
    useEffect(() => {
      const randomItems = getRandomItems(Data, 8);
      setRandomData(randomItems);
    }, []);
    const getRandomItems = (array, count) => {
      const shuffled = array.sort(() => 0.9 - Math.random());
      return shuffled.slice(0, count);
    };
        return (
        <>
            {/* =============== SECTION 1 START =============== */}
            <section className="sec1">
                    <div className="row">
                        <div className="col-6 ">
                            <h1>{language === 'az' ? 'TƏSƏVVÜR ETDİYİNİZ DAD' : 'ANY TASTE YOU IMAGINE'}</h1>
                            <div >
                                <div><Link to='products' type="button" id='heroBtn' className="btn">{language === 'az' ? 'İNDİ SİFARİŞ EDİN' : 'ORDER NOW'}</Link></div>
                            </div>
                        </div>
                        <div className="col-6 blobElement  slide-in-fwd-center">
                            <img src="../../src/assets/img/burger.webp" alt='' />
                        </div>
                </div>
            </section>
            {/* =============== SECTION 3 START =============== */}
            < section className="sec3" >
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="imgBox">
                            <img src="../../src/assets/img/h1-img-left-section.jpg" alt='' />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <div className="contentBox">
                            <h2>{language === 'az' ? 'Aşağı qiymətə' : 'Pick Your Meal '}<br />{language === 'az' ? 'yeməklərinizi seçin' : 'For A Low Price'}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore.</p>
                            <div><Link to='products' type="button" className="btn">{language === 'az' ? 'İNDİ SİFARİŞ EDİN' : 'ORDER NOW'}</Link></div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <div className="contentBox">
                            <h2>{language === 'az' ? 'Günün fürsəti' : 'Deal Of The Day'}</h2>
                            <div className='listItem'><i className="fa-solid fa-check"></i> <p>{language === 'az' ? 'İkiqat Cheeseburger ilə kartof qızartması' : 'Double Cheesburger with the fries'}</p></div>
                            <div className='listItem'><i className="fa-solid fa-check"></i> <p>{language === 'az' ? 'Royal burger ilə  pendirli böyük kartof qızartması ' : 'Royal with chess and big fries'}</p></div>
                            <div className='listItem'><i className="fa-solid fa-check"></i> <p>{language === 'az' ? 'Bekon burger ilə salat' : 'Bacon burger with salads'}</p></div>
                            <div><Link to='products' type="button" className="btn">{language === 'az' ? 'İNDİ SİFARİŞ EDİN' : 'ORDER NOW'}</Link></div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="imgBox">
                            <img src="../../src/assets/img/h1-img-right-section.jpg" alt='' />
                        </div>
                    </div>
                </div>
            </ section >
             {/* =============== SECTION 2 START =============== */}
             <section className='sec2'>
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-3 col-lg3">
                        <div className="logo">
                            <img src="../../src/assets/img/client-red-01.png" alt='' />
                        </div>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg3">
                        <div className="logo">
                            <img src="../../src/assets/img/client-red-2.png" alt='' />
                        </div>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg3">
                        <div className="logo">
                            <img src="../../src/assets/img/client-red-03.png" alt='' />
                        </div>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg3">
                        <div className="logo">
                            <img src="../../src/assets/img/client-red-4.png" alt='' />
                        </div>
                    </div>
                </div>
            </section>
            {/* =============== SECTION 4 START =============== */}
            <section className="sec4" >
                <div className="container">
                {randomData.map((item, index) => ( <div className="productCard"  key={index}>
                        <div className="cardText">
                            <h2>{item.name[language]}</h2>
                            <p>{item.desc[language]}</p>
                        </div>
                        <div className="cardText2">
                            <h4>{item.price}$</h4>
                        </div>
                        <img src={item.photo} alt='' className='image frontImg' />
                        <img src={item.bgphoto} className='image backImg' />
                        <Link to='products'>
                           <h6 className='hoverText'>{language === 'az' ? '+ DAHA ÇOX' : ' + READ MORE'}</h6>
                        </Link>
                    </div>   ))}
                </div>
            </section >
            {/* =============== HORİZONTAL ANİMATİON START =============== */}
            < HorizontalAnimation />
            {/* =============== SECTION 5 START =============== */}
            < section className="sec5" >
                <div className="containers">
                    <div className="leftside">
                        <img src="../../src/assets/img/h1-left-form.jpg" alt='' />
                    </div>
                    <div className="rightside">
                        <h2>{language === 'az' ? 'Öncədən sifariş edin' : 'Order Ahead'}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                        <input type="email" placeholder="Email" />
                        <div><button type="button" className="btn btn-success">{language === 'az' ? 'GÖNDƏR' : 'SUBMIT'}</button></div>
                    </div>
                </div>
            </ section>
            {/* =============== SECTION 6 START =============== */}
            < section className="sec6" >
                <div className="container">
                    <div className="content">
                        <h2>{language === 'az' ? 'Yeməklər haqqında hər şey' : 'Blog All About Food'}</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="blog">
                                <div className="blogCard">
                                    <img src="../../src/assets/img/blog-h1-img-1.jpg" alt='' />
                                    <h6 className='blogDate'>22 <br />{language === 'az' ? 'Dek' : 'Dec'}</h6>
                                </div>
                                <div className="blogContent">
                                    <h5>{language === 'az' ? 'Toyuq Burger' : 'Chicken Burger'}</h5>
                                    <p style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat</p>
                                    <Link to='blogpage' >
                                        <h6>{language === 'az' ? 'DAHA ÇOX' : 'READ MORE'}</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="blog">
                                <div className="blogCard">
                                    <img src="../../src/assets/img/footer-img-2.jpg" alt='' />
                                    <h6 className='blogDate'>22 <br />{language === 'az' ? 'Dek' : 'Dec'}</h6>
                                </div>
                                <div className="blogContent">
                                    <h5>{language === 'az' ? 'Bütün Yeməklər' : 'Whole Meal'}</h5>
                                    <p>Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat</p>
                                    <Link to='blogpage' >
                                        <h6>{language === 'az' ? 'DAHA ÇOX' : 'READ MORE'}</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="blog">
                                <div className="blogCard">
                                    <img src="../../src/assets/img/blog-h1-img-03.jpg" alt='' />
                                    <h6 className='blogDate'>22 <br />{language === 'az' ? 'Dek' : 'Dec'}</h6>
                                </div>
                                <div className="blogContent">
                                    <h5>{language === 'az' ? 'Royal Pendiri' : 'Royal Cheese'}</h5>
                                    <p>Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat</p>
                                    <Link to='blogpage' >
                                        <h6>{language === 'az' ? 'DAHA ÇOX' : 'READ MORE'}</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ section>
            {/* =============== SECTION 7 START =============== */}
            < section className="sec7" >
                <div className="content">
                    <div className="centered">
                        <h2>Special <br /><span>Burger</span></h2>
                    </div>
                </div>
            </ section>
            {/* =============== SECTION 8 START =============== */}
            <section section className="sec8" >
                <div className="container">
                    <div className="content">
                        <h2>Our Main Chefs</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="team">
                                <div className="teamCard">
                                    <img src="../../src/assets/img/team-1.png" />
                                    <ul className="social">
                                        <li><a href="#"><i className="fab fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <div className="teamContent">
                                    <h5>Russel Crown</h5>
                                    <p>{language === 'az' ? 'Baş aşpaz' : 'Main Chef'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="team">
                                <div className="teamCard">
                                    <img src="../../src/assets/img/team-2.png" />
                                    <ul className="social">
                                        <li><a href="#"><i className="fab fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <div className="teamContent">
                                    <h5>Ari Edely</h5>
                                    <p>{language === 'az' ? 'Baş aşpaz köməkçisi' : 'Chef Assistant'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="team">
                                <div className="teamCard">
                                    <img src="../../src/assets/img/team-3.png" />
                                    <ul className="social">
                                        <li><a href="#"><i className="fab fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <div className="teamContent">
                                    <h5>Lana Mary</h5>
                                    <p> {language === 'az' ? 'Sos ustası' : 'Sauce chef'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* =============== SECTION 9 START =============== */}
            < section className="sec9" >
                <div className="containers">
                    <div className='order'>
                        <span>150</span>
                        <p>{language === 'az' ? 'Ən çox sifarişlər' : 'Max. Orders'}</p>
                    </div>
                    <div className='hour'>
                        <span>24</span>
                        <p>{language === 'az' ? 'Saat' : 'Hours'}</p>
                    </div>
                    <div className='chef'>
                        <span>15</span>
                        <p>{language === 'az' ? 'Aşpaz' : 'Chefs'}</p>
                    </div>
                    <div className='delivery'>
                        <span>95</span>
                        <p>{language === 'az' ? 'Çatdırılma' : 'Delivery'}</p>
                    </div>
                    <div className='coupon'>
                        <span>55</span>
                        <p>{language === 'az' ? 'Kuponlar' : 'Coupons'}</p>
                    </div>
                </div>
            </ section>
            {/* =============== SECTION 10 START =============== */}
            < section className="sec10" >
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="leftside">
                                <h2>{language === 'az' ? 'Möhtəşəm' : 'Pasta With '}<br />{language === 'az' ? 'dadlı makaron' : 'Greate Taste'}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore adipiscing eli sed do eiusmod.</p>
                                <div className='btnBox'>
                                    <Link to='products'  type="button" className="btn">{language === 'az' ? 'İNDİ SİFARİŞ EDİN' : 'ORDER NOW'}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="rightside">
                                <img src="../../src/assets/img/h1-side-right.png" alt='' />
                                <div className="top-left">
                                    <h1 className="text_shadows text_anim1 p-3">Yum!</h1>
                                </div>
                                <div className="centered">
                                    <h3 className="text_shadows text_anim2  p-3">Yum!</h3>
                                </div>
                                <div className="bottom-left">
                                    <h5 className="text_shadows text_anim3  p-3">Yum!</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ section>
            {/* =============== SECTION 11 START =============== */}
            < section className='sec11' >
                <div className='bgImg1'>
                    <img src="../../src/assets/img/h1-review-1.jpg" alt='' className='mainImg' />
                </div>
                <div className="review2">
                    <img src=".../../src/assets/img/review-h1-2.png" alt='' className='img-fluid' />
                    <h4>Layla Fridich</h4>
                    <div> <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='bgImg1' >
                    <img src="../../src/assets/img/h1-review-2.jpg" alt='' className='mainImg' />
                </div>
                <div className="review2">
                    <img src="../../src/assets/img/review-h1-1.png" alt='' className='img-fluid' />
                    <h4>Leo Boyle</h4>
                    <div> <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='bgImg1'>
                    <img src="../../src/assets/img/h1-review-03.jpg" alt='' className='mainImg' />
                </div>
                <div className="review2">
                    <img src="../../src/assets/img/revies-h1-2.png" alt='' className='img-fluid' />
                    <h4>Alex Summit</h4>
                    <div> <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </ section>
            {/* =============== HORİZONTAL ANİMATİON START =============== */}
            < HorizontalAnimation />
        </>
    )
}

export default Home