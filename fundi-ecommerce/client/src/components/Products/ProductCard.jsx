import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-2">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
