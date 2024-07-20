import React, { useState } from 'react';
import ProductList from '../components/ProductList';

function Home() {
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [numProducts, setNumProducts] = useState(10);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
  const min = parseFloat(minPrice);
  const max = parseFloat(maxPrice);

 
  if (isNaN(min) || isNaN(max)) {
    alert('Please enter valid numbers for price.');
    return;
  }

  if (min > max) {
    alert('Minimum price cannot be greater than maximum price.');
    return;
  }

  
  setCompany(company.trim()); 
  setCategory(category.trim()); 
  setNumProducts(numProducts > 0 ? numProducts : 10); 
  setMinPrice(min);
  setMaxPrice(max);
  };

  return (
    <div>
      <h1>E-commerce Product Comparison</h1>
      <div>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter company"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
        />
        <input
          type="number"
          value={numProducts}
          onChange={(e) => setNumProducts(e.target.value)}
          placeholder="Number of products"
        />
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min price"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max price"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ProductList company={company} category={category} numProducts={numProducts} minPrice={minPrice} maxPrice={maxPrice} />
    </div>
  );
}

export default Home;
