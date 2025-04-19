import React, { use, useState } from "react";
import { AllDataContext } from "../../Home/Home";

const Category = () => {
  const categories = [
    {
      id: 0,
      name: "All Products",
    },
    {
      id: 1,
      name: "Laptops",
    },
    {
      id: 2,
      name: "Phones",
    },
    {
      id: 3,
      name: "Accessories",
    },
    {
      id: 4,
      name: "Smart Watches",
    },
    {
      id: 5,
      name: "MacBook",
    },
    {
      id: 6,
      name: "iPhone",
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const { allData, setCurrentData } = use(AllDataContext);
  const handleCategoryChange = (categoryName) => {
    if (categoryName === "All Products") {
      setCurrentData(allData);
      return;
    } 
    else {
      const filertByCategory = allData.filter(
        (item) => item.category === categoryName
      );

      setCurrentData(filertByCategory);
    }
  };
  return (
    <div className="col-span-2">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex items-center justify-center my-2"
        >
          <button
            onClick={() => {
              handleCategoryChange(category.name);
              setActiveCategory(category.id);
            }}
            className={`cursor-pointer font-semibold py-2 px-4  rounded-lg w-full ${
              activeCategory === category.id
                ? "bg-purple-600 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {category.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Category;
