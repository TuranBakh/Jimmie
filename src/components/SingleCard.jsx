import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import { LanguageContext } from '../context/LanguageContext';




const SingleCard = ({ allData, id, name, desc, price, photo, bgphoto }) => {
    const { addWishlistItem } = useWishlist();
    const { addItem } = useCart();
    const [language, setLanguage] = useContext(LanguageContext);

    return (
        <>
            <div className="card singleCard">
                <div className="imgBox">
                    <img src={allData.bgphoto} className="backImg" alt="..." />
                    <img src={allData.photo} className="image" alt="..." />
                </div>
                <div className="card-body cardText">
                    <Link to={`/products/${id}`} >
                        <h2>{allData.name[language]}</h2>
                    </Link>
                    <p>{allData.desc[language]}</p>
                    <div className="hoverItem">
                        <h4>{allData.price}$</h4>
                        <Link to={`/products/${id}`}  >
                            <h6>{language === 'az' ? '+ DAHA ÇOX' : '  + READ MORE'}</h6>
                        </Link>
                    </div>
                    <div className='cardButton1'>
                        <button onClick={() => addWishlistItem(allData)}>
                        <i className="fa-solid fa-heart-circle-plus"></i>
                        </button>
                    </div>
                    <div className='cardButton2'>
                        <button onClick={() => addItem(allData)}>
                            <i className="fa-solid fa-cart-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SingleCard