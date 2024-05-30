import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../context/LanguageContext';

const Error = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    <div className='notFoundPage'>
        <img src="../../src/assets/img/404error.png" alt="" />
        <h1>404 ERROR</h1>
    <p>{language === 'az' ? 'Axtardığınız səhifə mövcud deyil. O, köçürülmüş və ya tamamilə silinmiş ola bilər. Lütfən, başqa səhifəni axtarmağa cəhd edin və ya axtardığınızı tapmaq üçün vebsaytın əsas səhifəsinə qayıdın.' : 'The page you are looking for doesn\'t exist. It may have been moved or removed altogether. Please try searching for some other page, or return to the website\'s homepage to find what you\'re looking for.'}</p>
    <Link to="/" type="button" className="btn btn-success">{language === 'az' ? 'ANA SƏHİFƏYƏ KEÇİN' : 'BACK TO HOME'}</Link>
    </div>
  )
}

export default Error