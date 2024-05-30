import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import { LanguageContext } from '../context/LanguageContext';

const Wishlist = () => {
  const [language] = useContext(LanguageContext);
  const { addItem } = useCart();
  const { isWishlistEmpty, items, removeWishlistItem } = useWishlist();

  if (isWishlistEmpty) {
    return (
      <div className="text-center wishlist">
        <h1>{language === 'az' ? 'İstək siyahınızda məhsul yoxdur' : 'Your wishlist is empty'}</h1>
        <img src="../../src/assets/img/Empty-pana.png" width={500} alt="logo" />
      </div>
    );
  }

  return (
    <div className="wishlist">
      <div className="container">
        <h1 className="text-center my-4">{language === 'az' ? 'İstək siyahı' : 'Wishlist'}</h1>
        <div className="row">
          {items.map((item, count) => (
            <div className="col-sm-12 col-md-4 col-lg-3" key={count}>
              <div className="card singleCard">
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
                      <h6>{language === 'az' ? '+ DAHA ÇOX' : '+ READ MORE'}</h6>
                    </Link>
                  </div>
                  <div className="cardButton1">
                    <button onClick={() => removeWishlistItem(item.id)}>
                      <i className="fa-solid fa-heart-circle-minus"></i>
                    </button>
                  </div>
                  <div className="cardButton2">
                    <button onClick={() => addItem(item)}>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
