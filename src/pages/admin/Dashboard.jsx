import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeBlogFromDatabase } from '../../manager/action/blogAction';
import { LanguageContext } from '../../context/LanguageContext';

const Dashboard = () => {
    const data = useSelector(p => p);
    const dispatch = useDispatch();
    const [language] = useContext(LanguageContext);
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const isAdmin = localStorage.getItem('isAdmin');

        if (isLoggedIn !== 'true') {
            navigate('/login');
        } else if (isAdmin !== 'true') {
            navigate('/error');
        }
    }, []);

    return (
        <div className='dashboard'>
            <div className="container">
                <h1 className='text-center my-4'>{language === 'az' ? 'İdarə paneli' : 'Dashboard'}</h1>
                <div className="tablebox">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">№</th>
                                <th scope="col">{language === 'az' ? 'Başlıq' : 'Title'}</th>
                                <th scope="col">{language === 'az' ? 'Təsvir' : 'Description'}</th>
                                <th scope="col">{language === 'az' ? 'Şəkil' : 'Photo'}</th>
                                <th scope="col">{language === 'az' ? 'Gün' : 'Day'}</th>
                                <th scope="col">{language === 'az' ? 'Ay' : 'Month'}</th>
                                <th scope="col">{language === 'az' ? 'Redaktə' : 'Edit'}</th>
                                <th scope="col">{language === 'az' ? 'Sil' : 'Delete'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, c) => (
                                <tr key={item.id}>
                                    <th scope="row">{c + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.photo}</td>
                                    <td>{item.day}</td>
                                    <td>{item.month}</td>
                                    <td><Link to={`/dashboard/edit/${item.id}`} className='btn edit'><i className="fa-solid fa-pen"></i></Link></td>
                                    <td><button className='btn edit' onClick={() => { dispatch(removeBlogFromDatabase(item.id)) }}>X</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Link to="/dashboard/addblog" className='btn  my-3'>{language === 'az' ? 'Bloq əlavə edin ' : 'Add blog'}</Link>
            </div>
        </div>
    );
}

export default Dashboard;
