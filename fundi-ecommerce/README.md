# Fundi E-commerce Application

Fundi is a full-stack e-commerce application for a furniture store and home decor. It is built using the MERN stack (MongoDB, Express, React, Node.js) and follows a modular architecture for scalability and maintainability.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

```
fundi-ecommerce/
├── client/
│   ├── eslint.config.js
│   ├── index.html
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── public/
│   ├── README.md
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AdminView/
│   │   │   ├── Auth/
│   │   │   ├── common/
│   │   │   ├── ShoppingView/
│   │   │   ├── UI/
│   │   ├── config/
│   │   ├── layouts/
│   │   ├── lib/
│   │   ├── pages/
│   │   │   ├── admin-dashboard/
│   │   │   ├── shop-view/
│   │   │   ├── user-auth/
│   │   │   ├── user-unauth/
│   │   ├── store/
│   │   │   ├── Admin/
│   │   │   ├── Auth-slice/
│   │   │   ├── Common-slice/
│   │   │   ├── shop/
│   │   ├── vite.config.js
│   ├── yarn.lock
├── server/
│   ├── config/
│   ├── controllers/
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── common/
│   │   ├── shop/
│   ├── helpers/
│   ├── index.js
│   ├── models/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── routes/
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── common/
│   │   ├── shop/
│   ├── yarn.lock
```

## Features

- User authentication and authorization
- Product listing and search
- Shopping cart and checkout
- Order management for admin
- Responsive design with Tailwind CSS
- Image upload with Cloudinary
- Payment integration

## Installation

### Prerequisites

- Node.js
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/yourusername/fundi-ecommerce.git
cd fundi-ecommerce
```

### Install Dependencies

#### Client

```bash
cd client
yarn install
```

#### Server

```bash
cd server
yarn install
```

## Usage

### Running the Client

```bash
cd client
yarn dev
```

### Running the Server

```bash
cd server
yarn dev
```

## Scripts

### Client

- `dev`: Start the development server
- `build`: Build the application for production
- `lint`: Run ESLint
- `preview`: Preview the production build

### Server

- `start`: Start the server
- `dev`: Start the server with nodemon

## Technologies Used

### Frontend

- React
- React Router DOM
- Axios
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT for authentication
- Cloudinary for image upload
- Express Validator for validation

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.


