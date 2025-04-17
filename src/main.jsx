import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Page/Root/Root";
import Home from "./Components/Home/home";
import ProductDetails from "./Page/ProductDetails/ProductDetails";

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
      { path: "/dashboard", element: <h1>DashBoard</h1> },
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
    <RouterProvider router={router} />
  </StrictMode>
);
