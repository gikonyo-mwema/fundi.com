const { imageUploadUtil } = require("../../helpers/cloudinary");
const Product = require('../../models/Product');

// Upload an image for a product using Cloudinary
const uploadProductImage = async (req, res) => {
  try {
    const base64String = Buffer.from(req.file.buffer).toString("base64");
    const imageDataUrl = `data:${req.file.mimetype};base64,${base64String}`;

    const uploadResult = await imageUploadUtil(imageDataUrl);

    res.status(200).json({
      success: true,
      uploadResult,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Image upload failed",
    });
  }
};

// Add a new product to the database
const createNewProduct = async (req, res) => {
  try {
    const {
      image, title, description, category, brand, price,
      salePrice, totalStock, averageReview,
    } = req.body;

    const newProduct = new Product({
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
      averageReview,
    });

    await newProduct.save();  // save new product to the database

    res.status(201).json({
      success: true,
      product: newProduct,  // return the newly created product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Product creation failed",
    });
  }
};

// Fetch all products for the store
const fetchAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});  // retrieve all products

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error fetching products",
    });
  }
};

// Edit an existing product by ID
const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;  // extract product ID from request params
    const {
      image, title, description, category, brand,
      price, salePrice, totalStock, averageReview,
    } = req.body;

    const product = await Product.findById(id);  // find product by ID

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Update only fields that are provided
    product.image = image || product.image;
    product.title = title || product.title;
    product.description = description || product.description;
    product.category = category || product.category;
    product.brand = brand || product.brand;
    product.price = price || product.price;
    product.salePrice = salePrice || product.salePrice;
    product.totalStock = totalStock || product.totalStock;
    product.averageReview = averageReview || product.averageReview;

    await product.save();  // save updated product

    res.status(200).json({
      success: true,
      product,  // return updated product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Product update failed",
    });
  }
};

// Delete a product by ID
const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);  // delete product

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Product deletion failed",
    });
  }
};

module.exports = {
  uploadProductImage,
  createNewProduct,
  fetchAllProducts,
  updateProductById,
  deleteProductById,
};

