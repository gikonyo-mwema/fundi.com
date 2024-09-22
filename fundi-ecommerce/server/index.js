// Load environment variables from .env file
require('dotenv').config();

// External module imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Internal module imports
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');
const { configureCloudinary } = require('./config/cloudinary');

// Initialize Express app
const app = express();

// Cloudinary configuration
configureCloudinary();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit with failure code
  }
};

// Start the server and connect to MongoDB
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});

