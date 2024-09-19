import React, { useContext, useState } from 'react';
import { CartContext } from '../../CartContext';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const [userId, setUserId] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);

    // Calculate total amount based on cart items
    React.useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotalAmount(total);
    }, [cartItems]);

    const handleCheckout = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
                },
                body: JSON.stringify({
                    userId,
                    products: cartItems.map(item => item.id), // Assuming each item has an id property
                    totalAmount,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Order placed successfully!');
                // Optionally clear cart or redirect to order history
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Checkout</h2>
            <form onSubmit={handleCheckout}>
                <input
                    type="text"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="border p-2 mb-4 w-full"
                    required
                />
                <p>Total Amount: ${totalAmount}</p>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default Checkout;
