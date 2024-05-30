
import { useContext, useState } from 'react';
import { Col, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LanguageContext } from '../../context/LanguageContext';

function BlogForm({ onFormSubmit, editblog }) {
    const [formTitle, setFormTitle] = useState(editblog?editblog.title:'');
    const [formDesc, setFormDesc] = useState(editblog?editblog.desc:'');
    const [formPhoto, setFormPhoto] = useState(editblog?editblog.photo:'');
    const [formDay, setFormDay] = useState(editblog?editblog.day:'');
    const [formMonth, setFormMonth] = useState(editblog?editblog.month:'');
    const [language] = useContext(LanguageContext);
   
    const FormSubmit = (e) => {
        e.preventDefault();
        if (!formTitle && !formDesc && !formPhoto && !formDay && !formMonth) {
            alert('please fill input')
        } else {
            onFormSubmit({
                title: formTitle,
                desc: formDesc,
                photo: formPhoto,
                day: formDay,
                month: formMonth
            })
        }
    }


    return (
        <div className="d-flex align-items-center justify-content-center flex-column blogform">
            <h1 className='my-3'>{language === 'az' ? 'Bloq əlavə edin' : ' Add Blog'}</h1>
            <Col md={4}>
                <Form onSubmit={FormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{language === 'az' ? 'Başlıq' : 'Title'}<span className='text-danger'>*</span></Form.Label>
                        <Form.Control value={formTitle} type="text" placeholder={language === 'az' ? 'Başlıq yazın' : 'Type title'} onChange={e => setFormTitle(e.target.value)} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{language === 'az' ? 'Şəkil' : 'Photo'}<span className='text-danger'>*</span></Form.Label>
                        <Form.Control value={formPhoto} type="text" placeholder="URL" onChange={e => setFormPhoto(e.target.value)} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{language === 'az' ? 'Gün' : 'Day'}<span className='text-danger'>*</span></Form.Label>
                        <Form.Control value={formDay} type="text" placeholder={language === 'az' ? 'Günü yazın' : 'Type day'} onChange={e => setFormDay(e.target.value)} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{language === 'az' ? 'Ay' : 'Month'}<span className='text-danger'>*</span></Form.Label>
                        <Form.Control value={formMonth} type="text" placeholder={language === 'az' ? 'Ayı yazın' : 'Type month'} onChange={e => setFormMonth(e.target.value)} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>{language === 'az' ? 'Təsvir' : 'Description'}<span className='text-danger'>*</span></Form.Label>
                        <FloatingLabel controlId="floatingTextarea2">
                            <Form.Control
                                as="textarea"

                                style={{ height: '100px' }}
                                onChange={e => setFormDesc(e.target.value)}
                                value={formDesc}
                            />
                        </FloatingLabel>
                    </Form.Group>

                    <Button className='btn' type="submit">
                    {language === 'az' ? 'Əlavə et' : 'Add'}
                    </Button>
                </Form>
            </Col>
        </div>
    );
}

export default BlogForm;
