import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import Data from '../database/data.json';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';

const Complete = () => {
  const [language] = useContext(LanguageContext);
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    const randomItems = getRandomItems(Data, 4);
    setRandomData(randomItems);
  }, []);

  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div className='complete'>
      <div className="container">
        <h1>{language === 'az' ? 'Sifarişiniz təsdiqləndi!' : 'Your order is confirmed!'}</h1>
        <div className="row">
          <div className='col-sm-12 col-md-6 col-lg-6 context'>
            <p>{language === 'az' ? 'Sifarişiniz üçün təşəkkür edirik! 🎉 Ləzzətli yeməyiniz yoldadır. Dəstəyinizi qiymətləndiririk və ümid edirik ki, hər bir yeməkdən zövq alacaqsınız.' : 'Thank you for your order! 🎉 Your delicious meal is on its way. We appreciate your support and hope you enjoy every bite.'} <b><i>Bon appétit!</i></b></p>
            <Link to='/products' type="button" className="btn">{language === 'az' ? 'İNDİ SİFARİŞ EDİN' : 'ORDER NOW'}</Link>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 imgBox'>
            <img src="../../src/assets/img/Order-food-rafiki.png" alt="" />
          </div>
        </div>
        <h1 className='text-center py-5 randomTitle'>{language === 'az' ? 'Tövsiyə olunur' : 'Recommended'}</h1>
        <div className="row">
          {randomData.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-3" key={index}>
              <div className="card singleCard2">
                <div className="imgBox">
                  <img src={item.bgphoto} className="backImg" alt="..." />
                  <img src={item.photo} className="image" alt="..." />
                </div>
                <div className="card-body cardText">
                  <Link to={`/products/${item.id}`}>
                    <h2>{item.name[language]}</h2>
                  </Link>
                  <p>{item.desc[language]}</p>
                  <div className="hoverItem">
                    <h4>{item.price}$</h4>
                    <Link to={`/products/${item.id}`}>
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
    </div>
  );
}

export default Complete;
