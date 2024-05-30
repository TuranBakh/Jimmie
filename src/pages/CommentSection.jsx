import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from "../context/LanguageContext";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [commenterName, setCommenterName] = useState('');
  const [language] = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setCommenterName(event.target.value);
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      const currentDate = new Date().toLocaleDateString(); 
      const newCommentObject = {
        text: newComment,
        commenter: commenterName || 'Anonymous', 
        date: currentDate,
      };
      setComments([...comments, newCommentObject]);
      setNewComment('');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className='comment'>
      <ul>
      <li >
            <h3><b>Turan</b></h3> - 5/23/2024<br />
            <p id='commentbody'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, magni! Deserunt autem quo cum recusandae nobis in rerum accusamus, temporibus cumque quidem. Vero aliquam excepturi vitae neque at illum eaque.</p>
            <br />
          </li>
        {comments.map((i, c) => (
          <li key={c}>
            <h3><b>{i.commenter}</b></h3> - {i.date}<br />
            <p id='commentbody'> {i.text}</p>
            <br />
          </li>
        ))}
      </ul>
      <div className="comment-section">
      <form onSubmit={handleSubmit}>
        <div className='formBox'><input
          type="text"
          value={commenterName}
          onChange={handleNameChange}
          placeholder={language === 'az' ? '*Adınız' : '*Your name'}
          required
        />
        <input
          type="text"
         
          placeholder={language === 'az' ? '*E-poçt' : '*Email'}
          required
        /></div>
        <br />
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder={language === 'az' ? '*Şərhinizi buraya yazın...' : '*Write your comment here...'}
          required
        />
        <br />
        <button type="submit" className='btn'>{language === 'az' ? 'Göndər' : 'Submit'}</button>
      </form></div>
    </div>
  );
};

export default CommentSection;
