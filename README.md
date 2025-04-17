# Gadget Haven

Gadget Haven is a React-based e-commerce application built with Vite. It allows users to explore, view, and manage gadgets, including adding products to a cart and navigating through various categories and product details.

## Features

- **Home Page**: Displays a hero section and a list of gadgets categorized for easy navigation.
- **Product Details**: View detailed information about a specific product, including specifications, price, and availability.
- **Cart Management**: Add products to the cart, view the cart, and remove items.
- **Category Filtering**: Filter products by categories like Laptops, Phones, Accessories, etc.
- **Dashboard**: Includes sections for the cart and wishlist.
- **Routing**: Built with React Router for seamless navigation.
- **Toast Notifications**: Provides feedback for user actions like adding items to the cart.

## Tech Stack

- **Frontend**: React, React Router
- **Styling**: Tailwind CSS, DaisyUI
- **Build Tool**: Vite
- **State Management**: React Context API
- **Icons**: React Icons
- **Notifications**: React Toastify



## Project Maps
```
| Route               | Component                     | Description                          |
|---------------------|-------------------------------|--------------------------------------|
| `/`                 | `Home`                        | Displays the home page with gadgets. |
| `/statistics`       | `Statistics`                 | Displays statistics (placeholder).   |
| `/dashboard`        | `DasBoard`                   | Dashboard with cart and wishlist.    |
| `/dashboard/cart`   | `Cart`                        | Displays the cart page.              |
| `/dashboard/wishlist` | `Wishlist` (placeholder)    | Displays the wishlist page.          |
| `/:productId`       | `ProductDetails`             | Displays details of a specific product. |
```
