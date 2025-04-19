import React, { createContext,  useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router";
 export const AllDataForDashboardContext = createContext();

const DasBoard = () => {
  const allDataFromLoader = useLoaderData();
  const [active, setActive] = useState("");

  return (
    <div className="mx-8">
      <div className="bg-purple-600 py-30 rounded-2xl">
        <div className="my-4 flex flex-col items-center">
          <h1 className="font-bold text-center text-2xl text-white">
            Dashboard
          </h1>
          <p className="my-3  text-center text-lg max-w-3xl text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex gap-6">
            <Link to="/dashboard/cart">
              {" "}
              <button
                onClick={() => setActive("cart")}
                className={`${
                  active === "cart"
                    ? "bg-white text-purple-600 border-0"
                    : "text-white border-white "
                }font-bold rounded-4xl border  px-6 py-2 cursor-pointer `}
              >
                Cart
              </button>
            </Link>
            <Link to="/dashboard/wishlist">
              <button
                onClick={() => setActive("wishlist")}
                className={`${
                  active === "wishlist"
                    ? "bg-white text-purple-600 border-0"
                    : "text-white border-white "
                }font-bold rounded-4xl border  px-6 py-2 cursor-pointer `}
              >
                Wishlist
              </button>
            </Link>
          </div>
        </div>
      </div>
      <AllDataForDashboardContext.Provider value={allDataFromLoader}>
      <Outlet></Outlet>
      </AllDataForDashboardContext.Provider>
    </div>
  );
};

export default DasBoard;
