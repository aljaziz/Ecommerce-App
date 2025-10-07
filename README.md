# 🛒 MERN E-Commerce Application

A **full-stack e-commerce web application** built with the **MERN stack (MongoDB, Express, React, Node.js)** and deployed on **Vercel**.  
It provides a **modern shopping experience** with secure authentication, product management, cart functionality, order tracking, and integrated payment features.

---

## 🚀 Live Demo

🔗 **Live App:** [https://ecommerce-app-frontend-olive.vercel.app]
🖥️ **API Base URL:** [https://ecommerce-app-backend-topaz-chi.vercel.app]

---

## ✨ Features

### 👥 User & Authentication

-   Register and login using **JWT authentication**
-   Protected routes for authenticated users
-   User profile management (update details, view orders)
-   Admin panel for product and order management

### 🛍️ Product Management

-   View products with images, descriptions, and prices
-   Admin CRUD operations for products (create, update, delete)
-   SEO-friendly product URLs (slugs)
-   Category and brand filtering

### 🛒 Cart & Checkout

-   Add, update, and remove items from the cart
-   Persist cart data for logged-in users
-   Order summary and checkout flow
-   Payment integration (Stripe / PayPal)

### 📦 Order Management

-   Create and manage customer orders
-   Order history and status tracking
-   Admin dashboard to view all orders

### 🔍 Search & Filters

-   Full-text product search
-   Filter by price range, category, or rating
-   Pagination and sorting

### ⚙️ Developer Features

-   RESTful API architecture
-   Error handling middleware

---

## 🧰 Tech Stack

| Layer              | Technology                                        |
| ------------------ | ------------------------------------------------- |
| **Frontend**       | React.js, React Router, Context API, Tailwind CSS |
| **Backend**        | Node.js, Express.js                               |
| **Database**       | MongoDB + Mongoose                                |
| **Authentication** | JWT + HttpOnly Cookies                            |
| **Deployment**     | Vercel (Frontend + Backend + Admin)               |
| **Payment**        | Stripe                                            |

---

## 🏗️ Project Structure

```bash
Ecomerce-App/
├── admin/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ └── pages/
│ ├── App.jsx
│ ├── main.jsx
│ └── package.json
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── middlewares/
│ │ ├── models/
│ │ └──routes/
│ ├── server.ts
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── App.tsx
│ │ └── Main.tsx
│ └── package.json
└──README.md

```

## 🛠️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/mern-ecommerce.git
cd mern-ecommerce
```

### 2️⃣ Install Dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3️⃣ Run Development Servers

```bash
# In one terminal
cd backend
npm run dev

# In another terminal
cd frontend
npm start
```

## 🧠 Future Improvements

-   Product reviews & ratings

-   Wishlist & favorites

-   Email notifications

-   Admin analytics dashboard

-   Coupon and discount system
