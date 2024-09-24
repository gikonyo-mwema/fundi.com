const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/userAuthRoutes");
const adminProductsRouter = require("./routes/admin/productAdminRoutes");
const adminOrderRouter = require("./routes/admin/orderAdminRoutes");

const shopProductsRouter = require("./routes/shop/productRoutes");
const shopCartRouter = require("./routes/shop/cartRoutes");
const shopAddressRouter = require("./routes/shop/addressRoutes");
const shopOrderRouter = require("./routes/shop/orderRoutes");
const shopSearchRouter = require("./routes/shop/searchRoutes");
const shopReviewRouter = require("./routes/shop/reviewRoutes");

const commonFeatureRouter = require("./routes/common/featureRoutes");

// Load environment variables from .env file
require('dotenv').config();

// Create a database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/orders", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/reviews", shopReviewRouter);

app.use("/api/common/features", commonFeatureRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
