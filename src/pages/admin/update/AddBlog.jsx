
import React from 'react'
import BlogForm from '../BlogForm'
import { useDispatch } from 'react-redux';
import { addBlogToDatabase } from '../../../manager/action/blogAction';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  return (
    <div>
        <BlogForm onFormSubmit={fd=>{
            dispatch(addBlogToDatabase(fd));
            navigate('/dashboard');
        }}/>
    </div>
  )
}

export default AddBlog
