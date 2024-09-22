const Feature = require("../../models/features");
const cloudinary = require("../../helpers/cloudinary"); // Assuming you're using Cloudinary for image handling

// Controller to add a feature image
const addFeatureImage = async (req, res) => {
  try {
    const { image } = req.body;

    // Upload image to Cloudinary if applicable
    const uploadedImage = await cloudinary.uploader.upload(image, {
      folder: "feature_images", // Assuming you store images in a 'feature_images' folder on Cloudinary
    });

    // Create a new feature entry with the Cloudinary image URL
    const newFeature = new Feature({
      image: uploadedImage.secure_url,
    });

    // Save the new feature entry to the database
    await newFeature.save();

    res.status(201).json({
      success: true,
      message: "Feature image uploaded successfully",
      data: newFeature,
    });
  } catch (error) {
    console.error("Error uploading feature image:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while uploading the feature image.",
    });
  }
};

// Controller to get all feature images
const getFeatureImages = async (req, res) => {
  try {
    // Fetch all feature images from the database
    const images = await Feature.find({});

    res.status(200).json({
      success: true,
      message: "Feature images retrieved successfully",
      data: images,
    });
  } catch (error) {
    console.error("Error fetching feature images:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the feature images.",
    });
  }
};

module.exports = {
  addFeatureImage,
  getFeatureImages,
};

