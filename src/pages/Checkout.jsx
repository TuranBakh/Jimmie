import React, { useContext, useState } from 'react'
import Cards from 'react-credit-cards-2'
import { LanguageContext } from "../context/LanguageContext";
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
    
    const navigate = useNavigate();

    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const expiry_format = (value) => {
        const expdate = value;
        const expDateFormatter =
            expdate.replace(/\//g, "").substring(0, 2) +
            (expdate.length > 3 ? "/" : "") +
            expdate.replace(/\//g, "").substring(2, 4);

        return expDateFormatter;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'number' && value.length <= 16) {
            setState({ ...state, [name]: value });
        } else if (name === 'expiry' && value.length <= 4) {
            setState({ ...state, [name]: value });
        } else if (name === 'cvc' && value.length <= 4) {
            setState({ ...state, [name]: value });
        } else if (name === 'name') {
            setState({ ...state, [name]: value });
        }
    };

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    };


    const [language, setLanguage] = useContext(LanguageContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/complete');
    };

    return (
        <div className='checkout'>
            <div className="container">
                <h1 className="text-center">{language === 'az' ? 'Sifarişi tamamlayın' : 'Complete the order'}</h1>
                <div className="row">
                    <div className='col-sm-12 col-md-12 col-lg-12 '>
                        <form onSubmit={handleSubmit} >
                            <div className='form mb-5'>
                                <h3>{language === 'az' ? 'Şəxsi məlumatlar' : 'Personal information'}</h3>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label"><b><span>*</span>{language === 'az' ? ' Ad' : ' Name'}:</b></label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder={language === 'az' ? 'Ad' : 'Name'} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput2" className="form-label"><b><span>*</span>{language === 'az' ? ' Soyad' : ' Surname'}:</b></label>
                                    <input type="text" className="form-control" id="exampleFormControlInput2" placeholder={language === 'az' ? 'Soyad' : 'Surname'} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput3" className="form-label"><b><span>*</span>{language === 'az' ? ' E-poçt' : ' Email'}:</b></label>
                                    <input type="email" className="form-control" id="exampleFormControlInput3" placeholder={language === 'az' ? 'E-poçt' : 'Email'} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput4" className="form-label"><b><span>*</span>{language === 'az' ? ' Nömrə' : ' Phone'}:</b></label>
                                    <input type="tel" className="form-control" id="exampleFormControlInput4" placeholder={language === 'az' ? 'Nömrə' : 'Phone'} required />
                                </div>
                            </div>
                            <div className='form mb-5'>
                                <h3>{language === 'az' ? 'Çatdırılma ünvanı' : 'Delivery address'}</h3>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput7" className="form-label"><b><span>*</span> {language === 'az' ? ' Şəhər' : ' City'}:</b></label>
                                    <input type="text" className="form-control" id="exampleFormControlInput7" placeholder={language === 'az' ? 'Şəhər' : 'City'} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput7" className="form-label"><b><span>*</span> {language === 'az' ? ' Ünvan' : ' Address'}:</b></label>
                                    <input type="text" className="form-control" id="exampleFormControlInput7" placeholder={language === 'az' ? 'Ünvan' : 'Address'} required />
                                </div>
                                <div className="mb-3">

                                    <label htmlFor="exampleFormControlInput6" className="form-label"><b>{language === 'az' ? ' Qeyd' : ' Note'}:</b></label>
                                    <input type="text" className="form-control" id="exampleFormControlInput6" placeholder={language === 'az' ? 'Qeyd' : 'Note'} />
                                </div>
                            </div>
                            <div className='form mb-5'>
                                <h3>{language === 'az' ? ' Ödəniş' : ' Payment'}</h3>
                                <Cards
                                    number={state.number}
                                    expiry={state.expiry}
                                    cvc={state.cvc}
                                    name={state.name}
                                    focused={state.focus}
                                />
                                <div className="mb-3 mt-4">
                                    <label htmlFor="exampleFormControlInput8" className="form-label"><b><span>*</span> {language === 'az' ? ' Kart nömrəsi' : ' Card number'}:</b></label>
                                    <input type="text" name="number" className="form-control" value={state.number} onChange={handleInputChange} onFocus={handleInputFocus} required id="exampleFormControlInput8" placeholder={language === 'az' ? ' Kart nömrəsi' : ' Card number'} />
                                </div>
                                <div className="mt-3">
                                    <div className="mb-3">

                                        <label htmlFor="exampleFormControlInput9" className="form-label"><b><span>*</span>{language === 'az' ? ' Ad' : ' Name'}:</b></label>
                                        <input type="text" name="name" className="form-control" id="exampleFormControlInput9" placeholder={language === 'az' ? 'Ad' : 'Name'} required value={state.name}
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus} />
                                    </div>
                                    <div className="row">
                                        <div className="col-6 mb-3">
                                            <label htmlFor="exampleFormControlInput10" className="form-label"><b><span>*</span>{language === 'az' ? ' Tarix' : ' Expiry'}:</b></label>
                                            <input type="text" name="expiry" className="form-control" id="exampleFormControlInput10" placeholder={language === 'az' ? 'Tarix' : 'Expiry'} required value={state.expiry}
                                                onChange={handleInputChange}
                                                onFocus={handleInputFocus} />

                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="exampleFormControlInput11" className="form-label"><b><span>*</span>CVC:</b></label>
                                            <input type="text" name="cvc" className="form-control" id="exampleFormControlInput11" placeholder="CVC" required onChange={handleInputChange}
                                                onFocus={handleInputFocus} value={state.cvc}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button type='submit' className="btn btn-dark">{language === 'az' ? 'Təsdiq edin' : 'Confirm'}</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4'>
                       
            

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;