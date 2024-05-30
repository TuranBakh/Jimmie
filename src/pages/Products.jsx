import React, { useContext, useState } from 'react';
import SingleCard from '../components/SingleCard';
import Data from '../database/data.json';
import { LanguageContext } from '../context/LanguageContext';

const Products = () => {
  const [filterData, setFilterData] = useState(Data);
  const [language] = useContext(LanguageContext);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortCriteria, setSortCriteria] = useState('');

  const uniqueCategories = [...new Set(Data.map(item => item.category[language]))];

  const filterResult = (categoryItem) => {
    setSelectedCategory(categoryItem);
    if (categoryItem === 'All') {
      setFilterData(Data);
    } else {
      const result = Data.filter((i) => i.category[language] === categoryItem);
      setFilterData(result);
    }
  };

  const handlePriceFilter = () => {
    let filteredData = Data;

    if (selectedCategory !== 'All') {
      filteredData = filteredData.filter((item) => item.category[language] === selectedCategory);
    }

    if (minPrice !== '') {
      filteredData = filteredData.filter((item) => item.price >= parseInt(minPrice));
    }
    if (maxPrice !== '') {
      filteredData = filteredData.filter((item) => item.price <= parseInt(maxPrice));
    }
    setFilterData(filteredData);
  };

  const handleSort = (e) => {
    const criteria = e.target.value;
    setSortCriteria(criteria);
    let sortedData = [...filterData];

    switch (criteria) {
      case 'priceAsc':
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case 'nameAsc':
        sortedData.sort((a, b) => a.name[language].localeCompare(b.name[language]));
        break;
      case 'nameDesc':
        sortedData.sort((a, b) => b.name[language].localeCompare(a.name[language]));
        break;
      default:
        break;
    }
    setFilterData(sortedData);
  };

  const clearFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setSelectedCategory('All');
    setFilterData(Data);
    setSortCriteria('');
  };

  return (
    <div className="products">
      <h1>{language === 'az' ? 'İndi sifariş et və ye!' : 'Order And Eat Now!'}</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3">
            <div className="filterCategory">
              <h3>{language === 'az' ? 'Kateqoriya' : 'Category'}</h3>
              <ul>
                <li className={selectedCategory === 'All' ? 'active' : ''} onClick={() => { filterResult('All'); }}>
                  {language === 'az' ? 'Hamısı' : 'All'} ({Data.length})
                </li>
                {uniqueCategories.map((category, index) => (
                  <li key={index} className={selectedCategory === category ? 'active' : ''} onClick={() => { filterResult(category) }}>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="priceFilter">
              <h3>{language === 'az' ? 'Qiymət' : 'Price'}</h3>
              <div className="inputBox">
                <input type="text" id="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="min" />
                <span>-</span>
                <input type="text" id="maxPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="max" />
                <button className="btn" onClick={handlePriceFilter}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
            <div className="sortFilter">
              <h3>{language === 'az' ? 'Sırala' : 'Sort By'}</h3>
              <select onChange={handleSort} value={sortCriteria} className='dropdown'>
                <option value="">{language === 'az' ? 'Sırala' : 'Sort By'}</option>
                <option value="priceAsc">{language === 'az' ? 'Ən ucuzdan' : 'Price: Least to Most'}</option>
                <option value="priceDesc">{language === 'az' ? 'Ən bahadan' : 'Price: Most to Least'}</option>
                <option value="nameAsc">{language === 'az' ? 'A-dan Z-yə' : 'Name: A to Z'}</option>
                <option value="nameDesc">{language === 'az' ? 'Z-dən A-ya' : 'Name: Z to A'}</option>
              </select>
            </div>
            <div className="clearSortFilter pb-3">
              <button className="btn" onClick={clearFilters}>{language === 'az' ? 'Filtrləri sil' : 'Clear Filters'}</button>
            </div>
          </div>
          <div className="col-sm-12 col-md-9 col-lg-9 productItem">
            {filterData.length === 0 ? (
              <h1>{language === 'az' ? 'Məhsul yoxdur' : 'No products'}</h1>
            ) : (
              filterData.map(item => (
                <SingleCard
                  allData={item}
                  key={item.id}
                  id={item.id}
                  name={item.name[language]}
                  title={item.title[language]}
                  desc={item.desc[language]}
                  price={item.price}
                  photo={item.photo}
                  bgphoto={item.bgphoto}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
