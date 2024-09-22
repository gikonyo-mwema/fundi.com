const Order = require("../../models/OrderModel");

// Fetch all orders for admin view
const getAllOrdersForAdmin = async (req, res) => {
  try {
    // Get all orders from the database
    const orders = await Order.find({});

    if (orders.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No orders found",
      });
    }

    res.status(200).json({
      success: true,
      orders,  // return all orders
    });
  } catch (error) {
    console.error(error);  // log the error
    res.status(500).json({
      success: false,
      message: "Server error occurred",
    });
  }
};

// Fetch details of a specific order by ID for admin
const getOrderByIdForAdmin = async (req, res) => {
  try {
    const { id } = req.params;  // extract order ID from request params

    const order = await Order.findById(id);  // find order by ID

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      order,  // return order details
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error occurred",
    });
  }
};

// Update the status of an existing order
const updateOrderStatusById = async (req, res) => {
  try {
    const { id } = req.params;  // extract order ID from request params
    const { orderStatus } = req.body;  // extract new status from request body

    const order = await Order.findById(id);  // find order by ID

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    order.orderStatus = orderStatus;  // update order status
    await order.save();  // save updated order

    res.status(200).json({
      success: true,
      message: "Order status updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error occurred",
    });
  }
};

module.exports = {
  getAllOrdersForAdmin,
  getOrderByIdForAdmin,
  updateOrderStatusById,
};

