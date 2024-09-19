import React, { useContext } from 'react';
import { CartContext } from '../../CartContext'; // Importing the CartContext to access cart state and actions

const Cart = () => {
    // Using useContext to get cartItems and removeFromCart function from CartContext
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? ( // Checking if the cart is empty
                <p>Your cart is empty.</p>
            ) : (
                // Mapping through cartItems to display each item
                cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center border-b py-2">
                        <span>{item.name}</span>
                        <button 
                            onClick={() => removeFromCart(item.id)} // Calling removeFromCart with the item's id when button is clicked
                            className="bg-red-500 text-white px-3 py-1 rounded">
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
