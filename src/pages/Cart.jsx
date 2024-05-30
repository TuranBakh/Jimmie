import React, { useContext, useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { LanguageContext } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";

const Cart = () => {
    const [language] = useContext(LanguageContext);
    const {
        isEmpty,
        cartTotal,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    const navigate = useNavigate();

    const [discountCode, setDiscountCode] = useState("");
    const [discountAmount, setDiscountAmount] = useState(0);

    const applyDiscount = () => {
        const validDiscountCode = "D20";

        if (discountCode === validDiscountCode) {
            const discount = (cartTotal * 20) / 100;
            setDiscountAmount(discount);
        } else {
            alert("Invalid discount code");
        }
    };

    useEffect(() => {
        if (discountCode) {
            applyDiscount();
        }
    }, [items]);

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const handleCheckout = () => {
        if (isLoggedIn === 'true') {
            navigate('/checkout'); 
        } else {
            navigate('/login'); 
        }
    };

    if (isEmpty) {
        return (
            <div className="text-center cart">
                <h1>{language === 'az' ? 'Səbətinizdə məhsul yoxdur' : 'Your cart is empty'}</h1>
                <img src="../../src/assets/img/Empty-pana.png" width={500} alt='logo' />
            </div>
        );
    }

    return (
        <div className="cart pb-5">
            <div className="container">
                <h1 className="text-center">{language === 'az' ? 'Məhsul səbəti' : 'Product cart'}</h1>
                <div className="row">
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <Table className="table" striped >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">{language === 'az' ? 'Şəkil' : 'Photo'}</th>
                                    <th scope="col">{language === 'az' ? 'Məhsul' : 'Product'}</th>
                                    <th scope="col">{language === 'az' ? 'Qiymət' : 'Price'}</th>
                                    <th scope="col">{language === 'az' ? 'Miqdar ' : 'Count'}</th>
                                    <th scope="col">{language === 'az' ? 'Sil' : 'Delete'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td><img width={50} src={item.photo} alt={item.name[language]} /></td>
                                        <td>{item.name[language]}</td>
                                        <td>{item.price}$</td>
                                        <td className="countBtn">
                                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn-dec">-</button>
                                            <span className="mx-3">{item.quantity}</span>
                                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn-inc">+</button>
                                        </td>
                                        <td>
                                            <button onClick={() => { removeItem(item.id) }} className="btn-del">X</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 confirmBtn">
                        <div className="total">
                            <h2>{language === 'az' ? 'Sifarişin xülasəsi' : 'Order Summary'}</h2>
                            <div className="totalItem my-4">
                                <h3>{language === 'az' ? 'Ümumi məbləğ' : 'Total of Product'}</h3>
                                <p>{cartTotal.toFixed(2)}$</p>
                            </div>
                            <div className="totalItem my-4">
                                <h3>{language === 'az' ? 'Çatdırılma' : 'Shipping Total'}</h3>
                                <p>9.90$</p>
                            </div>
                            <div className="totalItem my-4">
                                <h3>{language === 'az' ? 'Endirim' : 'Discount'}</h3>
                                <p>{discountAmount.toFixed(2)}$</p>
                            </div>
                            <div className="totalItem linetotal py-2">
                                <h3>{language === 'az' ? 'Yekun məbləğ' : 'Total'}</h3>
                                <p>{(cartTotal - discountAmount + 9.90).toFixed(2)}$</p>
                            </div>
                        </div>
                        <div className="promo total my-2">
                            <h3>{language === 'az' ? 'Endirim kodu' : 'Promo code'}</h3>
                            <div className="input-group my-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={language === 'az' ? 'Daxil edin' : 'Enter'}
                                    aria-describedby="button-addon2"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={applyDiscount}>
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button onClick={handleCheckout} className="btn confirmBtn2">
                            {language === 'az' ? 'Sifarişi tamamlayın' : 'COMPLETE'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
