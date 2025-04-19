import React, { use, useEffect, useState } from "react";
import HeroImage from "../../assets/banner.jpg";
import { getAddItem, removeItem } from "../../Utilities/Utilities";
import { AllDataForDashboardContext } from "../../Page/DashBoard/DasBoard";
import {  useNavigate } from "react-router";

const Cart = () => {

  const nevigate=useNavigate("")
  const [cartProduct, setCartProduct] = useState([]);
  const allProductsData = use(AllDataForDashboardContext);
  const cartProductFromLocalStorage = getAddItem("cartItems");
  useEffect(() => {
    const matchedCartItems = (allProductsData || []).filter((item) =>
      (cartProductFromLocalStorage || []).includes(item.product_id)
    );
    setCartProduct(matchedCartItems);
  }, [allProductsData]);
  // Use state to manage the cart products

  const handleRemoveCart = (productId) => {

    removeItem(productId);
    const remaingProducts=cartProduct.filter((item) => item.product_id !== productId)
    setCartProduct(remaingProducts);
  };

  return (
    <div className="my-5 mx-4">
      <div className="flex justify-between items-center my-4">
        <div className="">
          <h1 className="text-xl font-bold">Cart</h1>
        </div>
        <div className="">
          <span className="mx-4 font-bold text-xl">
            Total : $
            {cartProduct
              .reduce((total, item) => total + parseInt(item.price), 0)
              .toFixed(2)}
          </span>
          <button className="mx-5 border-2 rounded-4xl px-4 py-2 text-purple-600 font-bold ">
            Sort By Price
          </button>
          <button onClick={()=>nevigate('purchase')} className="px-4 py-2 rounded-3xl bg-purple-600 font-bold text-white cursor-pointer mx-5">
            Purchase
          </button>
        </div>
      </div>
      <div className="">
        {cartProduct.map((cartItem, index) => {
          return (
            <div
              key={index}
              className="flex gap-3 my-3 bg-gray-100 p-4 rounded-lg"
            >
              <div className="w-80">
                <img src={HeroImage} className="rounded-2xl" alt="" />
              </div>
              <div className="">
                <h3 className="text-xl font-bold">{cartItem.product_title}</h3>
                <p className="text-gray-600 text-lg">{cartItem.description}</p>
                <p className="text-gray-900 text-lg font-bold">
                  Price : $ {cartItem.price}
                </p>
                <div
                  onClick={() => handleRemoveCart(cartItem.product_id)}
                  className="my-4"
                >
                  <button className="px-4 py-2 bg-purple-600 font-bold text-white rounded-xl cursor-pointer">
                    Remove Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
