
Fundi is a furniture store and home decor company. Fundi.com is the ecommerce version of the store. It is developed using the MERN stack - MongoDB, Express, React, and Node.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Fundi.com aims to provide a seamless online shopping experience for customers looking to purchase furniture and home decor items. The platform offers a wide range of products, easy navigation, and secure payment options.

## Features

- User Authentication and Authorization
- Product Listing and Search
- Shopping Cart and Checkout
- Order Management
- Admin Dashboard for Product and Order Management
- Responsive Design

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **State Management**: Redux Toolkit
- **Other Tools**: Axios, ESLint, PostCSS

## Installation

### Prerequisites

- Node.js (v14 or higher)
- Yarn or npm
- MongoDB

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fundi.com.git
   cd fundi.com

  
2. Install dependencies for the client:
cd client
yarn install

3. Install dependencies for the server:
cd ../server
yarn install

4. Create a .env file in the server directory and add the following environment variables:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

5. Start the development servers:

# In the client directory
yarn dev

# In the server directory
yarn start


Usage
Running the Client
Navigate to the client 
directory and run:

yarn dev

This will start the Vite development server. Open your browser and go to http://localhost:5173/.

Running the Server
Navigate to the server directory and run:

yarn start
