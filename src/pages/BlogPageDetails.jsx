import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import database from '../firebase/firebaseConfig';

const BlogPageDetails = () => {
  const { url } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const blogRef = database.ref('blogs/' + url);
      blogRef.on('value', (snapshot) => {
        const data = snapshot.val();
        setBlogDetails(data);
        setLoading(false);
      });
    };

    fetchBlogDetails();
  }, [url]);

  if (loading) {
    return (
      <div className="loading">
        <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="loading GIF" />
      </div>
    );
  }

  if (!blogDetails) {
    return <div className="detailsPage">Blog not found.</div>;
  }

  return (
    <div className="detailsPage">
      <div className="container padding">
        <div className="row detail">
          <div className="col-sm-12 col-md-12 col-lg-12 imgBox2">
            <img className='img1' src={blogDetails.photo} alt={blogDetails.title} />
          </div>
          <div className="col-sm-12 contentBox">
            <h1 className="mb-3 text-center">{blogDetails.title}</h1>
            <p className="mb-3 text-center">{blogDetails.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageDetails;
