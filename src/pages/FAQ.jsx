import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext';

const FAQ = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    <section className='faq'>
      <div className="row">
        <div className="col-12">
          <div className="faqImg">
            <img src="../../src/assets/img/FAQs-cuate.png" alt='faq page' className="footerimg" />
          </div>
        </div>
        <div className="col-sm-12  col-md-9 col-lg-9 faqAccarddion">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                 {language === 'az' ? 'Necə sifariş edə bilərəm?' : ' How Can I Order?'}
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Ipsum ut debitis ab aut saepe. Iure placeat repellat repudiandae sit omnis necessitatibus magni culpa. Itaque corporis est consequuntur pariatur ut velit. Eveniet est ratione molestia placeat repellat.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  {language === 'az' ? 'Çatdırılma postu nədir?' : 'Whats A Delivery Post?'}
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Ipsum ut debitis ab aut saepe. Iure placeat repellat repudiandae sit omnis necessitatibus magni culpa. Itaque corporis est consequuntur pariatur ut velit. Eveniet est ratione molestia placeat repellat..</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                {language === 'az' ? 'Sizi harada tapa bilərəm?' : 'Where Can I Find You?'}
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Ipsum ut debitis ab aut saepe. Iure placeat repellat repudiandae sit omnis necessitatibus magni culpa. Itaque corporis est consequuntur pariatur ut velit. Eveniet est ratione molestia placeat repellat.</div>
              </div>
            </div>
            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                {language === 'az' ? 'Çatdırılma qiyməti nə qədərdir?' : 'How Much Delivery Cost?'}
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Ipsum ut debitis ab aut saepe. Iure placeat repellat repudiandae sit omnis necessitatibus magni culpa. Itaque corporis est consequuntur pariatur ut velit. Eveniet est ratione molestia placeat repellat.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                {language === 'az' ? 'Xüsusi təkliflərimiz nələrdir?' : 'What Is Our Special Offers?'} 
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Ipsum ut debitis ab aut saepe. Iure placeat repellat repudiandae sit omnis necessitatibus magni culpa. Itaque corporis est consequuntur pariatur ut velit. Eveniet est ratione molestia placeat repellat..</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                {language === 'az' ? 'Ən yaxşı seçimimiz nədir?' : 'What Is Our Best Choice?'}  
                </button>
              </h2>
              <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Ipsum ut debitis ab aut saepe. Iure placeat repellat repudiandae sit omnis necessitatibus magni culpa. Itaque corporis est consequuntur pariatur ut velit. Eveniet est ratione molestia placeat repellat.</div>
              </div>
            </div>
            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                {language === 'az' ? 'Vegan yeməklərimiz varmı?' : ' Do We Have A Vegan Meals?'}                  
                </button>
              </h2>
              <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Ipsum ut debitis ab aut saepe. Iure placeat repellat repudiandae sit omnis necessitatibus magni culpa. Itaque corporis est consequuntur pariatur ut velit. Eveniet est ratione molestia placeat repellat.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                       {language === 'az' ? 'Çatdırılmanın saatları' : ' Delivery Working Hours'}    
                </button>
              </h2>
              <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Ipsum ut debitis ab aut saepe. Iure placeat repellat repudiandae sit omnis necessitatibus magni culpa. Itaque corporis est consequuntur pariatur ut velit. Eveniet est ratione molestia placeat repellat..</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12  col-md-3 col-lg-3 leftSide">
          <div>
            <h2>{language === 'az' ? 'Bilməli olduğunuz hər şey' : 'Everything You Need To Know'}
              </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
          </div>
          <div>
            <h2>{language === 'az' ? 'Müştəri xidməti' : 'Customer Support'}</h2>
            <a href="tel:(602) 867-1010" >(602) 867-1010</a>
            <a href="mailto:jimmy@gmail.com" className='margin' target="_blank"> jimmy@gmail.com</a>
          </div>
          <div className='imgBox'>
            <img src="../../src/assets/img/faq-sidebar-1.png" alt="sidebar" />
          </div>
          <div className='imgBox'>
            <img src="../../src/assets/img/faq-sidebar-2.png" alt="sidebar" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ