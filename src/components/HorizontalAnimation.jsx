import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext';

const HorizontalAnimation = () => {
    const [language, setLanguage] = useContext(LanguageContext);

    return (
        <section className="horizContainer">
            <div className='horizBox'> <span>{language === 'az' ? '* Biz Burgeri sevirik * BİZ FASTFODU SEVİRİK' : ' * We Love Burger * WE LOVE FASTFOOD '}
            </span><span>{language === 'az' ? '* Biz Burgeri sevirik * BİZ FASTFODU SEVİRİK' : ' * We Love Burger * WE LOVE FASTFOOD '}</span><span>{language === 'az' ? '* Biz Burgeri sevirik * BİZ FASTFODU SEVİRİK' : ' * We Love Burger * WE LOVE FASTFOOD '}</span></div>
        </section>
    )
}

export default HorizontalAnimation