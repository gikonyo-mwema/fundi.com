// Load environment variables from .env file at the top
require('dotenv').config();

const cloudinary = require('cloudinary').v2;

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize express app
const app = express();

// Define the PORT from environment variables, fallback to 5000
const PORT = process.env.PORT || 5000;

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');

// Use routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { 
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => {
  console.error("Error connecting to MongoDB: ", err);
  process.exit(1); // Exit with failure code
});

// Server listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

