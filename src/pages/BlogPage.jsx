import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import SingleCardBlog from '../components/SingleCardBlog';
import { LanguageContext } from '../context/LanguageContext';

const BlogPage = () => {
    const blog = useSelector(state=>state);
    const [language, setLanguage] = useContext(LanguageContext);

    return (
      <div className="blogpage">

      <div className="container">
        <h1>{language === 'az' ? 'Bloq' : 'Blog'}</h1>
        <div className='row g-3'>
          {blog.map(item=>{
           return <SingleCardBlog key={item.id} id={item.id} title={item.title} desc={item.desc} photo={item.photo} day={item.day} month={item.month}/>
          })}
      </div>
      </div></div>
    )
}

export default BlogPage