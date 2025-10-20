import React, { use, useEffect, useState } from "react";
import HeroImage from "../../assets/banner.jpg";
import { getAddItem, removeItem } from "../../Utilities/Utilities";
import { AllDataForDashboardContext } from "../../Page/DashBoard/DasBoard";
import { Product } from "../../types/product";

const WishList = () => {
  const [wishList, setWishList] = useState<Product[]>([]);
  const allProductsData = use(AllDataForDashboardContext) as Product[];
  const wishListFromLocalStorage = getAddItem("wishlistItems");

  useEffect(() => {
    if (allProductsData && wishListFromLocalStorage) {
      const matchedWishListItems = allProductsData.filter((item: Product) =>
        (wishListFromLocalStorage || []).includes(item.product_id)
      );
      setWishList(matchedWishListItems);
    }
  }, [allProductsData]);

  const handleRemoveFromWishlist = (productId: string) => {
    removeItem(productId, "wishlistItems");
    const remainingProduct = wishList.filter(
      (item) => item.product_id !== productId
    );
    setWishList(remainingProduct);
  };

  return (
    <div className="my-5 mx-4">
      <h1 className="text-xl font-bold">Wishlist</h1>

      <div className="">
        {wishList.map((cartItem, index) => {
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
                  onClick={() => handleRemoveFromWishlist(cartItem.product_id)}
                  className="my-4"
                >
                  <button className="px-4 py-2 bg-purple-600 font-bold text-white rounded-xl cursor-pointer">
                    Remove From Wishlist
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

export default WishList;
