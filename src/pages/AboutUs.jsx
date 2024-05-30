import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext';

const AboutUs = () => {
  const [language, setLanguage] = useContext(LanguageContext);


  return (
    <>
      <div className="aboutUs">
        <h1>{language === 'az' ? 'Haqqımızda' : 'About Us'}</h1>
        <div className="container">
          <div className='line'>
          </div>
          <div className='contentFirst'><h2>{language === 'az' ? 'Şəhərdə ilk vaxtlar' : 'New Kid In Town'}</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
          <div className='displaynone'></div>
          <div className='yearFirst'>
            <div className='icon'><i className="fa-solid fa-arrow-right"></i><h3>{language === 'az' ? '1980-ci illər' : '1980s'}</h3></div>
          </div>
          <div className='imgFirst'><img src="../../src/assets/img/p4-img-1.png" alt="" /></div>


          <div className='imgSecond'><img src="../../src/assets/img/p4-img-2.png" alt="" /></div>
          <div className='yearSecond'>
            <div className='icon'><i className="fa-solid fa-arrow-right arrowright"></i><h3>{language === 'az' ? '1990-cı illər' : '1990s'}</h3> <i className="fa-solid fa-arrow-left arrowleft"></i></div>
          </div>
          <div className='displaynone'></div>
          <div className='contentSecond'><h2> {language === 'az' ? 'Xoş yeməklər' : 'Welcome Meals'}</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>


          <div className='contentThird'><h2>{language === 'az' ? 'Xüsusi çatdırılma' : 'Special Delivery'}</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
          <div className='displaynone'></div>
          <div className='yearThird'>
            <div className='icon'> <i className="fa-solid fa-arrow-right"></i><h3>{language === 'az' ? '2000-ci illər' : '2000s'}</h3></div>
          </div>
          <div className='imgThird'><img src="../../src/assets/img/p4-img-3.png" alt="" /></div>
        </div>
      </div>
    </>)
}

export default AboutUs