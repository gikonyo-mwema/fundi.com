const express = require("express");
const {
  uploadProductImage,
  createNewProduct,
  fetchAllProducts,
  updateProductById,
  deleteProductById
} = require("../../controllers/admin/manageProducts");

const { upload } = require("../../helpers/imageUploader");

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), uploadProductImage);
router.post("/add", createNewProduct);
router.put("/edit/:id", updateProductById);
router.delete("/delete/:id", deleteProductById);
router.get("/get", fetchAllProducts);

module.exports = router;

