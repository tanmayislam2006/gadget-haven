# Gadget Haven

Gadget Haven is a React-based e-commerce application built with Vite. It allows users to explore, view, and manage gadgets, including adding products to a cart and navigating through various categories and product details.

## Features

- **Home Page**: Displays a hero section and a list of gadgets categorized for easy navigation.
- **Product Details**: View detailed information about a specific product, including specifications, price, and availability.
- **Cart Management**: Add products to the cart, view the cart, and remove items.
- **Category Filtering**: Filter products by categories like Laptops, Phones, Accessories, etc.
- **Dashboard**: Includes sections for the cart and wishlist.
- **Statistics**: Displays data visualizations using charts.
- **Routing**: Built with React Router for seamless navigation.
- **Toast Notifications**: Provides feedback for user actions like adding items to the cart.

## Tech Stack

- **Frontend**: React, React Router
- **Styling**: Tailwind CSS, DaisyUI
- **Build Tool**: Vite
- **State Management**: React Context API
- **Icons**: React Icons
- **Notifications**: React Toastify
- **Charts**: Recharts

## Project Maps

| Route               | Component                     | Description                          |
|---------------------|-------------------------------|--------------------------------------|
| `/`                 | `Home`                        | Displays the home page with gadgets. |
| `/statistics`       | `Statistics`                  | Displays statistics using charts.    |
| `/dashboard`        | `DasBoard`                    | Dashboard with cart and wishlist.    |
| `/dashboard/cart`   | `Cart`                        | Displays the cart page.              |
| `/dashboard/wishlist` | `WishList`                  | Displays the wishlist page.          |
| `/:productId`       | `ProductDetails`              | Displays details of a specific product. |

## Folder Structure

```
src/
├── assets/                # Static assets like images
├── Components/            # Reusable components
│   ├── Cart/              # Cart component
│   ├── Footer/            # Footer component
│   ├── Gadget/            # Gadget-related components
│   │   ├── AllItems/      # Displays all items
│   │   ├── Category/      # Category filtering
│   ├── Hero/              # Hero section
│   ├── Home/              # Home page
│   ├── Navbar/            # Navigation bar
│   ├── WishList/          # Wishlist component
├── Page/                  # Pages for routing
│   ├── DashBoard/         # Dashboard page
│   ├── ProductDetails/    # Product details page
│   ├── Root/              # Root layout
│   ├── Statistics/        # Statistics page
├── Utilities/             # Utility functions
├── index.css              # Global styles
├── main.jsx               # Entry point
```

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/gadget-haven.git
   cd gadget-haven
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview the Production Build**:
   ```bash
   npm run preview
   ```

## Known Issues

- **Global Cart State**: The cart state is currently managed using local storage. Consider migrating to a global state management solution like Redux or Context API for better scalability.

## Future Enhancements

- Add a backend API for dynamic data fetching.
- Implement user authentication and authorization.
- Add persistent storage for the wishlist.
- Improve the statistics page with real-time data visualization.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
