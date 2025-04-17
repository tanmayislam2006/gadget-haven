import React, { useState } from 'react';

const Category = () => {
    const categories=[
        {
          "id": 0,
          "name": "All Products"
        },
        {
          "id": 1,
          "name": "Laptops"
        },
        {
          "id": 2,
          "name": "Phones"
        },
        {
          "id": 3,
          "name": "Accessories"
        },
        {
          "id": 4,
          "name": "Smart Watches"
        },
        {
          "id": 5,
          "name": "MacBook"
        },
        {
          "id": 6,
          "name": "iPhone"
        }
      ]
     const [activeCategory,setActiveCategory] =useState(0);

    return (
        <div className='col-span-2'>
           {categories.map(category => (
                <div key={category.id} className='flex items-center justify-center my-2'>
                    <button onClick={() => setActiveCategory(category.id)} className={`cursor-pointer font-semibold py-2 px-4  rounded-lg w-full ${activeCategory === category.id ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                        {category.name}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Category;