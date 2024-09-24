const express = require("express");
const {
  getAllOrdersForAdmin,
  getOrderByIdForAdmin,
  updateOrderStatusById,
} = require("../../controllers/admin/manageOrders");

const router = express.Router();

router.get("/get", getAllOrdersForAdmin);
router.get("/details/:id", getOrderByIdForAdmin);
router.put("/update/:id", updateOrderStatusById);

module.exports = router;



