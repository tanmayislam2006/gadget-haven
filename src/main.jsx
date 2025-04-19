import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Page/Root/Root";
import Home from "./Components/Home/Home";
import ProductDetails from "./Page/ProductDetails/ProductDetails";
import DasBoard from "./Page/DashBoard/DasBoard";
import Cart from "./Components/Cart/Cart";
import { ToastContainer } from "react-toastify";
import WishList from "./Components/WishList/WishList";
import Statistics from "./Page/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch("/allData.json"),
        hydrateFallbackElement: <p>Loading, please wait....</p>,
        element: <Home />,
      },
      {
        path: "/statistics",
        Component: Statistics,
        loader: () => fetch("/allData.json"),
      },
      {
        path: "/dashboard",
        loader: () => fetch("/allData.json"),
        hydrateFallbackElement: <h2>Loading Data ...........</h2>,
        Component: DasBoard,
        children: [
          {
            path: "cart",
            Component: Cart,
          },
          { path: "wishlist", Component: WishList }
        ],
      },
      {
        path: "/:productId",
        loader: () => fetch("/allData.json"),
        Component: ProductDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer></ToastContainer>
    <RouterProvider router={router} />
  </StrictMode>
);
