const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../../models/UserModel');

// Function to register a new user
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    // Check if the user already exists with the same email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists! Please try a different email.",
      });
    }

    // Hash the user's password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user with the hashed password
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    // Save the user in the database
    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while registering the user. Please try again.",
    });
  }
};

// Function to log in a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found! Please register first.",
      });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid password! Please try again.",
      });
    }

    // Generate a JWT token for the authenticated user
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        email: user.email,
        userName: user.userName,
      },
      process.env.JWT_SECRET || "CLIENT_SECRET_KEY", // Use environment variables for security
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Set the JWT token in an HTTP-only cookie
    res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" }).json({
      success: true,
      message: "Login successful",
      user: {
        email: user.email,
        role: user.role,
        id: user._id,
        userName: user.userName,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred during login. Please try again.",
    });
  }
};

// Function to log out a user
const logoutUser = (req, res) => {
  // Clear the JWT token cookie
  res.clearCookie("token").json({
    success: true,
    message: "Logged out successfully!",
  });
};

// Middleware for authenticating users
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access! No token provided.",
    });
  }

  try {
    // Verify the JWT token and extract user information
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "CLIENT_SECRET_KEY");
    req.user = decoded; // Add user info to request for further access control
    next(); // Move to the next middleware/controller
  } catch (error) {
    console.error(error);
    res.status(401).json({
      success: false,
      message: "Invalid token! Unauthorized access.",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  authMiddleware
};

