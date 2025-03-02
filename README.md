# 🍽️ Food Ninja

Welcome to the Food Ninja project! This is a Node.js application that allows users to register, login, and manage stores and items.

## 📋 Features

- 📝 User Registration
- 🔐 User Login
- 🏬 Store Management
  - 📍 Add Store
  - 📜 Get All Stores
  - 🔍 Get Store by ID
- 🛒 Item Management
  - ➕ Add Item to Store

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/food-ninja.git
    cd food-ninja
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```env
    PORT=8000
    LOCAL_IP=192.168.113.67
    MONGODB_URI=mongodb://localhost:27017/foodNinja
    JWT_SECRET=your_jwt_secret
    ```

4. Start MongoDB:

    ```sh
    mongod
    ```

5. Start the server:

    ```sh
    npm start
    ```

6. Open your browser and navigate to:

    ```sh
    http://192.168.113.67:8000
    ```

## 📂 Project Structure

```plaintext
.
├── controller
│   ├── auth_controller.js
│   └── stoe_controller.js
├── model
│   ├── strore_schema.js
│   └── user_schema.js
├── routes
│   ├── auth_routes.js
│   └── routers.js
├── view
│   └── mongodb_connection.js
├── server.js
└── README.md
