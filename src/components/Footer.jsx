import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ModeContext } from '../context/ModeContext';
import { LanguageContext } from '../context/LanguageContext';

const Footer = () => {
    const [mode, setMode] = useContext(ModeContext);
    const [language, setLanguage] = useContext(LanguageContext);


    return (
        <>
            <footer>
                <div className="container">
                    <Link to='/' className='logoBox'>
                        {mode === "light" ? <img className='logo' src="../../src/assets/img/logo-black.png" alt='logo' /> : <img className='logo' src="../../src/assets/img/logo-light.svg" alt='logo' />}
                    </Link>
                    <p className='fisrtCol1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt.</p>
                    <p className="pReserved">{language === 'az' ? '© 2023 Qode Interactive, Bütün hüquqlar qorunur' : '© 2023 Qode Interactive, All Rights Reserved'}</p>

                    <h5 className='title1'>{language === 'az' ? 'Dayan və De ki, Salam!' : 'Stop By And Say, Hi!'}</h5>
                    <div className="secondCol1">
                        <a href="https://maps.app.goo.gl/TgepktWhpA2HPHhq5" target="_blank"> 561 Wilson Ave, NY 11207.</a>
                        <a href="mailto:jimmy@gmail.com" target="_blank" > jimmy@gmail.com</a>
                        <a href="tel:(602) 867-1010" >(602) 867-1010</a>
                    </div>
                    <div className="secondCol2">
                        <a href="https://maps.app.goo.gl/LJJXfkCvuALetcqR7" target="_blank">5135 International Dr, FL 32819</a>
                        <a href="mailto:jimmy@gmail.com" target="_blank"> jimmy@gmail.com</a>
                        <a href="tel:(358) 867-1010">(358) 867-1010</a>
                    </div>

                    <h5 className='title2'>{language === 'az' ? 'İş saatları' : 'Opening Hours'}</h5>
                    <div className="thirdCol1">
                        <div className='hoursBox'>
                            <div>{language === 'az' ? 'Həftə içi' : 'Mon-Fri'}</div>
                            <div className='dotted'></div>
                            <div>08:00-23:00</div>
                        </div>
                        <div className='hoursBox'>
                            <div>{language === 'az' ? 'Şənbə' : 'Saturday'}</div>
                            <div className='dotted'></div>
                            <div>08:00-22:00</div>
                        </div>
                        <div className='hoursBox'>
                            <div>{language === 'az' ? 'Bazar' : 'Sunday'}</div>
                            <div className='dotted'></div>
                            <div>08:00-23:40</div>
                        </div>
                    </div>
                    <div className="socialMedia">
                        <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-square-facebook" /></a>
                        <a href="https://www.twitter.com/" target="_blank"><i className="fa-brands fa-square-twitter" /></a>
                        <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin" /></a>
                    </div>


                    <h5 className='title3'>{language === 'az' ? 'Bizi izləyin' : 'Follow Us'}</h5>
                    <div className="fourthCol1">
                        <img src="../../src/assets/img/insta-footer.jpg" alt className="footerimg" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer