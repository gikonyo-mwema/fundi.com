const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');
const { body, validationResult } = require('express-validator');

// GET all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: "Error fetching orders: " + err.message });
    }
});

// POST create a new order with validation
router.post(
    '/',
    [
        body('userId').notEmpty().withMessage('User ID is required'),
        body('products').isArray({ min: 1 }).withMessage('Products should be a non-empty array'),
        body('totalAmount').isFloat({ min: 0 }).withMessage('Total amount should be a positive number')
    ],
    async (req, res) => {
        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { userId, products, totalAmount } = req.body;
        const order = new Order({ userId, products, totalAmount });

        try {
            const newOrder = await order.save();
            res.status(201).json(newOrder);
        } catch (err) {
            res.status(500).json({ message: "Error creating order: " + err.message });
        }
    }
);

module.exports = router;
