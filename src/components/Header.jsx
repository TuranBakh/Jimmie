import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Data from '../database/data.json';
import { useCart } from 'react-use-cart';
import { ModeContext } from '../context/ModeContext';
import { LanguageContext } from '../context/LanguageContext';
import { useWishlist } from 'react-use-wishlist';

const Header = () => {
  const [mode, setMode] = useContext(ModeContext);
  const [language, setLanguage] = useContext(LanguageContext);
  const [keyword, setKeyword] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    const isWeekend = currentDay === 0 || currentDay === 6;
    if ((currentDay >= 1 && currentDay <= 5 && currentHour >= 8 && currentHour < 23) || (isWeekend && currentHour >= 8 && currentHour < 22)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setKeyword(keyword);
  };

  return (
    <>
      {/* =============== HEADER 1 START =============== */}
      <header className="header1">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="contentbox">
              <div className="leftside">
                <div className="hoveritem">
                  <i className="fa-solid fa-clock" />
                  <Link to='contactus' style={{ textDecoration: 'none' }}>
                    {isOpen ? (
                      <span>{language === 'az' ? 'Açıqdır' : 'Open Now'}</span>
                    ) : (
                      <span>{language === 'az' ? 'Bağlıdır' : 'Closed Now'}</span>
                    )}
                  </Link>
                </div>
                <div className="hoveritem">
                  <i className="fa-solid fa-location-dot displaynone" />
                  <Link to='contactus' style={{ textDecoration: 'none' }} className='displaynone'>
                    <span>{language === 'az' ? 'Sizə yaxın restoranı seçin' : 'Choose your location'}</span>
                  </Link>
                </div>
                <div className="hoveritem">
                  <i className="fa-solid fa-phone displaynone" />
                  <a href="tel:+3045558473" style={{ textDecoration: 'none' }} className='displaynone'>
                    <span>+304 555 8473</span>
                  </a>
                </div>
              </div>
              <div className="rightside">
                <button type="button" className='headerBtn hoveritem' onClick={() => {
                  const newMode = mode === "light" ? 'dark' : 'light';
                  setMode(newMode);
                  localStorage.setItem('mode', newMode);
                }}>
                  {mode === "light" ? <i className="fa-regular fa-lightbulb"></i> : <i className="fa-solid fa-lightbulb"></i>}
                </button>
                <div className="dropdown">
                  <button className="headerBtn dropdown-toggle hoveritem" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-language"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" type="button" onClick={() => {
                        setLanguage('az');
                        localStorage.setItem('language', 'az');
                      }}>Azərbaycanca</button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button" onClick={() => {
                        setLanguage('en');
                        localStorage.setItem('language', 'en');
                      }}>English</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* =============== HEADER 2 START =============== */}
      <header className='header2'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="headerlogo">
              <Link to='/'>
                {mode === "light" ? (
                  <img src="../../src/assets/img/logo-black.png" alt='logo' />
                ) : (
                  <img src="../../src/assets/img/logo-light.svg" alt='logo' />
                )}
              </Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-solid fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a href="/">{language === 'az' ? 'Ana Səhifə' : 'Home'}</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle dropbtn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {language === 'az' ? 'Səhifələr' : 'Pages'}
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/aboutus">{language === 'az' ? 'Haqqımızda' : 'About Us'}</a></li>
                    <li><a className="dropdown-item" href="/ourteam">{language === 'az' ? 'Komandamız' : 'Our Team'}</a></li>
                    <li><a className="dropdown-item" href="/contactus">{language === 'az' ? 'Əlaqə' : 'Contact Us'}</a></li>
                    <li><a className="dropdown-item" href="/faq">FAQ</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="/products">{language === 'az' ? 'Menyu' : 'Menu'}</a>
                </li>
                <li className="nav-item">
                  <Link to="/blogpage">{language === 'az' ? 'Bloq' : 'Blog'}</Link>
                </li>
              </ul>
              <div className='py-2'>
                <button type="button" className="modalBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Jimmie</h1>
                        <button type="button" className='closeBtn' data-bs-dismiss="modal" aria-label="Close">
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="input-group mb-3">
                          <input type="text" className="form-control" placeholder={language === 'az' ? 'Axtar' : 'Search'} aria-label="Search" onChange={handleSearch} />
                        </div>
                        <ul className="list-group">
                          {Data.filter(i => {
                            const name = i.name[language].toLowerCase();
                            return name.includes(keyword);
                          }).map(i => (
                            <button type="button" style={{ border: "none", background: 'none' }} className="btn liButton" data-bs-dismiss="modal" key={i.id}>
                              <Link to={`/products/${i.id}`} key={i.id} className="list-group-item d-flex justify-content-between align-items-center modalLi">
                                {i.name[language]}
                                <img src={i.photo} width={70} alt="" />
                              </Link>
                            </button>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to='/wishlist' type="button" className="btn modalBtn ms-1 position-relative">
                  <i className="fa-solid fa-heart"></i>
                  <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                    {totalWishlistItems}
                  </span>
                </Link>
                <Link to="/cart" type="button" className="btn modalBtn position-relative">
                  <i className="fa-solid fa-bag-shopping"></i>
                  <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                  </span>
                </Link>
              </div>

              {localStorage.getItem('username') === null ? (
                <Link to='/login' className='logbtn'>
                  {language === 'az' ? 'Daxil ol' : 'Log In'}
                </Link>
              ) : (
                <h6>
                  Welcome, {localStorage.getItem('username')}
                  <button className='logbtn' onClick={() => { localStorage.removeItem('username'); navigate('/'); localStorage.setItem('isLoggedIn', false) }}>
                    Log out
                  </button>
                </h6>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
