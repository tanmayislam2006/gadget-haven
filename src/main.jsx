import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Page/Root/Root";
import Home from "./Components/Home/home";
import ProductDetails from "./Page/ProductDetails/ProductDetails";
import DasBoard from "./Page/DashBoard/DasBoard";
import Cart from "./Components/Cart/Cart";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch("allData.json"),
        element: <Home />,
      },
      { path: "/statistics", element: <h1>Statistics</h1> },
      { path: "/dashboard", Component:DasBoard,children:[
        {path:'cart', Component:Cart},
        {path:'wishlist', element:<h1>whislist</h1>}

      ]},
      {
        path: "/:productId",
        loader: () => fetch("allData.json"),
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
