import React, { useContext } from 'react'
import HorizontalAnimation from '../components/HorizontalAnimation'
import { LanguageContext } from '../context/LanguageContext';

const ContactUs = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    <>
      <div className="contactUs">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 contactImg contactSec" ><img src="../../src/assets/img/Directions-bro.png" alt="" /></div>
          <div className="col-sm-12 col-md-6 col-lg-6 contactContext contactSec">
            <h1>{language === 'az' ? 'Ünvanlarımız' : ' Our Locations  '}
            </h1>
            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <h2>New York</h2>
                <a href="https://maps.app.goo.gl/TgepktWhpA2HPHhq5" target="_blank"> 561 Wilson Ave, NY 11207</a>
                <a href="mailto:jimmy@gmail.com" target="_blank" > jimmy@gmail.com</a>
                <a href="tel:(602) 867-1010" >(602) 867-1010</a>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <h2>Florida</h2>
                <a href="https://maps.app.goo.gl/LJJXfkCvuALetcqR7" target="_blank"> 5135 International Dr, FL 32819</a>
                <a href="mailto:jimmy@gmail.com" target="_blank"> jimmy@gmail.com</a>
                <a href="tel:(358) 867-1010">(358) 867-1010</a>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <h2>New York</h2>
                <a href="https://maps.app.goo.gl/TgepktWhpA2HPHhq5" target="_blank"> 561 Wilson Ave, NY 11207</a>
                <a href="mailto:jimmy@gmail.com" target="_blank" > jimmy@gmail.com</a>
                <a href="tel:(602) 867-1010" >(602) 867-1010</a>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <h2>Florida</h2>
                <a href="https://maps.app.goo.gl/LJJXfkCvuALetcqR7" target="_blank"> 5135 International Dr, FL 32819</a>
                <a href="mailto:jimmy@gmail.com" target="_blank"> jimmy@gmail.com</a>
                <a href="tel:(358) 867-1010">(358) 867-1010</a>
              </div>
            </div>
          </div>
        </div>
        <HorizontalAnimation />
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 contactSec contactUs getInTouch " >
            <h1> {language === 'az' ? 'Bizimlə əlaqə saxlayın' : 'Get In Touch'}</h1>
            <div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder={language === 'az' ? 'Ad' : 'Name'} />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows={3} defaultValue={""} placeholder={language === 'az' ? 'Mesajınız' : 'Message'} />
              </div>
              <div className="mb-3">
                <button type='submit' className='btn'>{language === 'az' ? 'GÖNDƏR' : 'SUBMİT'}</button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 contactSec contactMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24679.131385594865!2d-81.4729247027097!3d28.46726996732115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77f1d43922a21%3A0xd23b9db56a30b8f8!2sJimmy's%20Pizza!5e0!3m2!1str!2spl!4v1711369488453!5m2!1str!2spl" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>

    </>
  )
}

export default ContactUs