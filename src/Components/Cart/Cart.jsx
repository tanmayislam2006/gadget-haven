import React from "react";
import { cartProduct } from "../../Page/ProductDetails/ProductDetails";
import HeroImage from "../../assets/banner.jpg";

const Cart = () => {
  return (
    <div className="my-5 mx-4">
      <div className="flex justify-between items-center my-4">
        <div className="">
          <h1 className="text-xl font-bold">Cart</h1>
        </div>
        <div className="">
          <span className="mx-4 font-bold text-xl">Total :$ 166161.55</span>
          <button className="mx-5 border-2 rounded-4xl px-4 py-2 text-purple-600 font-bold ">
            Short By Price
          </button>
          <button className="px-4 py-2 rounded-3xl bg-purple-600 font-bold text-white cursor-pointer mx-5">
            Purcches
          </button>
        </div>
      </div>
      <div className="">
        {cartProduct.map((cartItem, index) => {
          return (
            <div key={index} className="flex gap-3 my-3 bg-gray-100 p-4 rounded-lg">
              <div className="w-80">
                <img src={HeroImage}  className='rounded-2xl' alt="" />
              </div>
              <div className="">
                <h3 className="text-xl font-bold">{cartItem.product_title}</h3>
                <p className="text-gray-600 text-lg">{cartItem.description}</p>
                <p className="text-gray-900 text-lg font-bold">Price : $ {cartItem.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
