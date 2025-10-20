import React, { use } from "react";
import { AllDataContext } from "../../Home/Home";
import Image from "../../../assets/banner.jpg";
import { useNavigate } from "react-router";
import { Product } from "../../../types/product";

interface AllDataContextType {
  currentData: Product[];
}

const AllItems = () => {
  const navigate = useNavigate();
  const { currentData } = use(AllDataContext) as AllDataContextType;

  return (
    <div className="col-span-10 grid grid-cols-3 gap-5">
      {currentData.map((item: Product, index: number) => (
        <div key={index} className="p-2  rounded-lg shadow py-5">
          <div className=" rounded-lg">
            <img src={Image} className="rounded-lg w-full h-full " />
          </div>
          <div className="mx-4">
            <h3 className="font-bold my-2 text-xl">{item.product_title}</h3>
            <p className="my-2 text-lg text-gray-600">$ {item.price}</p>
            <div className=" w-3/5">
              <button
                onClick={() => navigate(`/${item.product_id}`)}
                className="w-full py-2 px-4 cursor-pointer border-2 border-purple-600  text-purple-600 font-bold rounded-3xl"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllItems;
