import React, { use, useState } from "react";
import Category from "./Category/Category";
import AllItems from "./AllItems/AllItems";
import { AllDataContext } from "../Home/Home";
import { toast } from "react-toastify";
import { Product } from "../../types/product";

interface AllDataContextType {
  allData: Product[];
  setCurrentData: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Gadget = () => {
  const { allData, setCurrentData } = use(AllDataContext) as AllDataContextType;
  const [inputValue, setInputValue] = useState("");

  const handleFromSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredData = allData.filter(
      (item: Product) =>
        item.product_title
          .toLowerCase()
          .split(" ")
          .includes(inputValue.toLowerCase()) ||
        item.category
          .toLowerCase()
          .split(" ")
          .includes(inputValue.toLowerCase()) ||
        item.product_id
          .toLowerCase()
          .split(" ")
          .includes(inputValue.toLowerCase())
    );
    if (filteredData.length > 0) {
      toast.success("Data found successfully");
      setCurrentData(filteredData);
    } else {
      toast.error("No data found for this search");
      setCurrentData(allData);
    }
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="mt-[450px]">
      <h1 className="font-bold text-center text-2xl">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="">
        <form onSubmit={handleFromSubmit}>
          <div className="flex justify-center my-5">
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Search for gadgets..."
              className="border-2 border-gray-300 rounded-lg py-2 px-4 w-1/2 focus:outline-0"
            />
            <button
              type="submit"
              className="cursor-pointer bg-purple-600 text-white font-bold py-2 px-4 rounded-lg ml-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4">
        <Category></Category>
        <AllItems></AllItems>
      </div>
    </div>
  );
};

export default Gadget;
