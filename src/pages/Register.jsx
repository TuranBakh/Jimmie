import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const Register = () => {
  const [language, setLanguage] = useContext(LanguageContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const emailExists = existingUsers.some(user => user.email === email);

    if (emailExists) {
      setError(language === 'az' ? 'E-poçt ünvanı artıq istifadə olunur' : 'Email address is already in use') ;
      return;
    }
    const userData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
    if (userData.password !== userData.confirmPassword) {
      setError(language === 'az' ? 'Şifrələr uyğun deyil' : 'Passwords do not match');
    } else {
      existingUsers.push(userData);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      console.log('Registration Successful', userData);
      localStorage.setItem('username', name);
      localStorage.setItem('isLoggedIn', true);
      navigate('/');
    }
  };

  return (
    <div className='register'>
      <div className="containeru">
        <div className="row">
          <div className="col-md-7 col-lg-7 text-center">
            <img src="../../src/assets/img/Login-amico.png" className='registerimg' alt="register" />
          </div>
          <div className="col-md-5 col-lg-5">
            <div className="registerform">
              <div className="form-box">
                <div className="header">
                  <h4 className="user"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4> <br />
                  <div className="buttonBox">
                  <Link to='/login' className="btn">{language === 'az' ? 'Daxil ol' : 'Sign In'}</Link>
                  <Link to='/register' className="logbtn">{language === 'az' ? 'Qeydiyyat' : 'Sign Up'}</Link>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fa fa-user icons"></i></span>
                  <input type="text" className="form-control" placeholder={language === 'az' ? 'Ad' : 'Name'} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-at icons"></i></span>
                    <input type="email" className="form-control" placeholder={language === 'az' ? 'E-poçt' : 'Email'} onChange={(e) => setEmail(e.target.value)}  required/>
                  </div>
                  <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-lock icons"></i></span>
                    <input type="password" className="form-control" placeholder={language === 'az' ? 'Şifrə' : 'Password'}  onChange={(e) => setPassword(e.target.value)}  required/>
                  </div>
                  <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-lock icons"></i></span>
                    <input type="password" className="form-control" placeholder={language === 'az' ? 'Şifrəni təsdiqləyin' : 'Confirm password'} onChange={(e) => setConfirmPassword(e.target.value)}  required/>
                  </div>
                  {error && <p className="text-danger">{error}</p>} <br />
                  <button type="submit" className="confirmBtn">{language === 'az' ? 'Qeydiyyatdan keçin' : 'Sign up'}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
