import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="product-item">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px' }} />
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product._id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

