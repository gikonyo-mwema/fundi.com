import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5000/api/orders', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            
            if (response.ok) {
                const data = await response.json();
                setOrders(data);
            }
        };
        
        fetchOrders();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Order History</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map(order => (
                    <div key={order._id} className="border-b py-2">
                        <h3>Order ID: {order._id}</h3>
                        <p>Total Amount: ${order.totalAmount}</p>
                        {/* You can add more details about the order here */}
                    </div>
                ))
            )}
        </div>
    );
};

export default OrderHistory;
