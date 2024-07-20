import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList( {company, category, numProducts, minPrice, maxPrice }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/${company}/categories/${category}/products`, {
            params: { top: numProducts,minPrice: minPrice,maxPrice: maxPrice }
          });
          
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);    
    };

    if (company && category) {
      fetchProducts();
    }
  }, [company, category, numProducts, minPrice, maxPrice]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
