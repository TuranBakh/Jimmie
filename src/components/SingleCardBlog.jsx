import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const SingleCardBlog = ({ id, title, desc, photo, day, month }) => {
    const [language, setLanguage] = useContext(LanguageContext);

    return (

        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="blog">
                <div className="blogCard">
                    <img src={photo} alt='' />
                    <h6 className='blogDate'>{day}<br />{month} </h6>
                </div>
                <div className="blogContent">
                    <h5>{title}</h5>
                    <p style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>{desc}</p>
                    <Link to={`/blogpage/${id}`}  >
                        <h6>{language === 'az' ? 'DAHA ÇOX' : 'READ MORE'}</h6>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SingleCardBlog;


















