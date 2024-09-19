const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const { body, validationResult } = require('express-validator');

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: "Error fetching products: " + err.message });
    }
});

// POST a new product with validation and image upload to Cloudinary
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Product name is required'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('image').notEmpty().withMessage('Product image is required'),
    body('description').isLength({ min: 10 }).withMessage('Description must be at least 10 characters long')
  ],
  async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, price, image, description } = req.body;

    try {
      // Upload the image to Cloudinary
      const uploadResponse = await cloudinary.uploader.upload(image, {
        folder: 'products',
      });

      const product = new Product({
        name,
        price,
        image: uploadResponse.secure_url, // Save the Cloudinary URL
        description
      });

      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(500).json({ message: "Error creating product: " + err.message });
    }
  }
);


// POST a new product with validation
router.post(
    '/',
    [
        body('name').notEmpty().withMessage('Product name is required'),
        body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
        body('image').notEmpty().withMessage('Product image is required'),
        body('description').isLength({ min: 10 }).withMessage('Description must be at least 10 characters long')
    ],
    async (req, res) => {
        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, price, image, description } = req.body;
        const product = new Product({ name, price, image, description });

        try {
            const newProduct = await product.save();
            res.status(201).json(newProduct);
        } catch (err) {
            res.status(500).json({ message: "Error creating product: " + err.message });
        }
    }
);

module.exports = router;
