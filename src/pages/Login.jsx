import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';


const Login = () => {
  const [language, setLanguage] = useContext(LanguageContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminEmail = 'admin@test.com';
    const adminPassword = 'admin123';

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === email && user.password === password);

    if (email === adminEmail && password === adminPassword) {
      console.log('Admin login successful');
      localStorage.setItem('isLoggedIn', true); 
      localStorage.setItem('isAdmin', true); 
      localStorage.setItem('username', 'Admin');
      navigate('/dashboard');
  } else if (user) {
      console.log('User login successful');
      localStorage.setItem('isLoggedIn', true); 
      localStorage.setItem('username', user.name);
      localStorage.removeItem('isAdmin');
      navigate('/');
  } else {
      setError(language === 'az' ? 'E-poçt və ya şifrə səhvdir' : 'Email or password is incorrect');
  }
  };

  return (
    <div className='login'>
      <div className="containeru">
        <div className="row">
          <div className="col-md-7 col-lg-7 text-center">
            <img src="../../src/assets/img/Login-amico.png" className='loginimg' alt="login" />
          </div>
          <div className="col-md-5 col-lg-5">
            <div className="loginform">
              <div className="form-box">
                <div className="header">
                  <h4 className="user"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                  <br />
                  <div className="buttonBox">
                  <Link to='/login' className="logbtn">{language === 'az' ? 'Daxil ol' : 'Sign In'}</Link>
                  <Link to='/register' className="btn">{language === 'az' ? 'Qeydiyyat' : 'Sign Up'}</Link>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><i className="fa fa-user icons"></i></span>
                    <input type="email" className="form-control" placeholder={language === 'az' ? "E-poçt" : "Email"} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><i className="fa fa-lock icons"></i></span>
                    <input type="password" className="form-control" placeholder={language === 'az' ? 'Şifrə' : "Password"} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  {error && <p className="text-danger">{error}</p>} <br />
                  <button type="submit" className="btn">{language === 'az' ? 'Daxil ol' : 'Sign In'}</button>
                </form>
                <br />
                <p className='text-light'>{language === 'az' ? 'Üzv deyilsiniz?' : 'Not a member?'}<Link to='/register'>{language === 'az' ? ' İndi qeydiyyatdan keçin' : ' Signup now'}</Link></p>
                <div className="social">
                  <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                  <a href="https://x.com/"><i className="fab fa-twitter-square"></i></a>
                  <a href="https://google.com/"><i className="fab fa-google"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
