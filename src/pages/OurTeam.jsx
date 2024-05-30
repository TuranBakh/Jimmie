import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext';

const OurTeam = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    <>
      <div className="ourTeam">
       <div className="container">
        <h1>{language === 'az' ? 'Komandamızla tanış olun' : 'Meet Our Team'}</h1>
       <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4"> <div className="team">
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
          </div></div>
          <div className="col-sm-12 col-md-4 col-lg-4"> <div className="team">
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
          </div></div>
          <div className="col-sm-12 col-md-4 col-lg-4"> <div className="team">
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
              <p>{language === 'az' ? 'Sos ustası' : 'Sauce chef'}</p>
            </div>
          </div></div>
          <div className="col-sm-12 col-md-4 col-lg-4"> <div className="team">
            <div className="teamCard">
              <img src="../../src/assets/img/user-img-7.png" />
              <ul className="social">
                <li><a href="#"><i className="fab fa-facebook" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
            <div className="teamContent">
              <h5>Sarah Matew</h5>
              <p>{language === 'az' ? 'Şirniyyat ustası' : 'Cake Specialist'}</p>
            </div>
          </div></div>  
          <div className="col-sm-12 col-md-4 col-lg-4"> <div className="team">
            <div className="teamCard">
              <img src="../../src/assets/img/user-img-8.png" />
              <ul className="social">
                <li><a href="#"><i className="fab fa-facebook" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
            <div className="teamContent">
              <h5>Lucky Ginger</h5>
              <p>{language === 'az' ? 'Pizza ustası' : 'Pizza Master'}</p>
            </div>
          </div></div>
          <div className="col-sm-12 col-md-4 col-lg-4"> <div className="team">
            <div className="teamCard">
              <img src="../../src/assets/img/user-img-9.png" />
              <ul className="social">
                <li><a href="#"><i className="fab fa-facebook" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
            <div className="teamContent">
              <h5>Brad Tony</h5>
              <p>{language === 'az' ? 'Pizza ustası' : 'Pizza Master'}</p>
            </div>
          </div></div>
        </div>
       </div>
      </div>
    </>
  )
}

export default OurTeam