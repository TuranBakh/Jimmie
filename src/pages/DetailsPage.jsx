import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '../database/data.json'
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import { LanguageContext } from '../context/LanguageContext';
import CommentSection from './CommentSection';

const DetailsPage = () => {
  const [language, setLanguage] = useContext(LanguageContext);
  const { url } = useParams();
  const productDetails = Data.find(p => p.id == url);
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist()
  const [randomData, setRandomData] = useState([]);
  useEffect(() => {
    const randomItems = getRandomItems(Data, 4);
    setRandomData(randomItems);
  }, []);
  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const [activeTab, setActiveTab] = useState('descBox');



  return (
    <><div className="detailsPage">
      <div className="container padding">
        {productDetails === undefined ? <div className="loading"><img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="loading GIF" /></div> :
          <div className="row detail">
            <div className="col-sm-12 col-md-5 col-lg-5 imgBox2">
              <img className='img1' src={productDetails.photo} alt={productDetails.name} />
              <img className='img2' src={productDetails.bgphoto} alt={productDetails.name} />

            </div>
            <div className="col-sm-12 col-md-7 col-lg-6 contentBox">
              <h1 className="mb-3">{productDetails.name[language]}</h1>
              <h2 className="mb-3">{productDetails.price}$</h2>
              <p className="my-4">{productDetails.title[language]}</p>
              <div >
                <button onClick={() => addWishlistItem(productDetails)} className='btn me-2'><i className="fa-solid fa-heart-circle-plus"></i></button>
                <button onClick={() => addItem(productDetails)} className='btn me-2'>{language === 'az' ? 'SƏBƏTƏ ƏLAVƏ ET' : 'ADD TO CART'}</button>

              </div>
            </div>
          </div>
        }

        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className='infoBox'>
            <div onClick={() => setActiveTab('descBox')} className={activeTab === 'descBox' ? 'active' : ''}>
              <h2>{language === 'az' ? 'Təsvir' : 'Description'}</h2>
            </div>
            <div onClick={() => setActiveTab('additionalInfo')} className={activeTab === 'additionalInfo' ? 'active' : ''}> <h2>{language === 'az' ? 'Əlavə məlumatlar' : ' Additional information'}</h2>
            </div>
            <div onClick={() => setActiveTab('comment')} className={activeTab === 'comment' ? 'active' : ''}> <h2>{language === 'az' ? 'Şərhlər' : ' Review'}</h2>
            </div>
          </div>
          <div className="activeBox">
            {activeTab === 'descBox' && <p>{productDetails.description[language]}</p>}
            {activeTab === 'additionalInfo' &&
              <div className='d-flex flex-column '>
                <div className='d-flex flex-row align-items-center'><h3 >{language === 'az' ? 'Çəki' : 'Weight'}: <span>{productDetails.weight}</span></h3></div>
                <div className='d-flex flex-row align-items-center mt-2'><h3>{language === 'az' ? 'Ölçülər' : 'Dimensions'}:<span>{productDetails.dimensions}</span></h3></div>
              </div>
            }
            {activeTab === 'comment' &&  <CommentSection />}
          </div>
        </div>
        <h1 className='text-center py-5 randomTitle'>{language === 'az' ? 'Əlaqəli məhsullar' : 'Related Products'}</h1>
        <div className="row complete">
          {randomData.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-3" key={index} >
              <div className="card singleCard2 " >
                <div className="imgBox">
                  <img src={item.bgphoto} className="backImg" alt="..." />
                  <img src={item.photo} className="image" alt="..." />
                </div>
                <div className="card-body cardText">
                  <Link to={`/products/${item.id}`} >
                    <h2>{item.name[language]}</h2>
                  </Link>
                  <p>{item.desc[language]}</p>
                  <div className="hoverItem">
                    <h4>{item.price}$</h4>
                    <Link to={`/products/${item.id}`} >
                      <h6>{language === 'az' ? '+ DAHA ÇOX' : '  + READ MORE'}</h6>
                    </Link>
                  </div>
                  <div className='cardButton1'>
                    <button onClick={() => addWishlistItem(item)}>
                      <i className="fa-solid fa-heart-circle-plus"></i>
                    </button>
                  </div>
                  <div className='cardButton2'>
                    <button onClick={() => addItem(item)}>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </button>
                  </div>
                </div>
              </div >
            </div>
          ))}
        </div>
      </div>

      {/* Render h1 with onClick handler */}

    </div >
    </>


  )
}

export default DetailsPage
