import React from "react";
import { Link, NavLink } from "react-router";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="w-full mx-auto bg-purple-50 py-4">
      <div className="flex justify-around items-center">
        {/* name and logo */}
        <Link to="/">
          <div className="">
            <h3 className="text-xl font-bold">Gadget Heaven</h3>
          </div>
        </Link>
        {/* nav itmes */}
        <div className="">
          <ul className="flex gap-6">
            <li className=" text-gray-700 ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className=" text-gray-700 ">
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li className=" text-gray-700 ">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex  gap-3">
          <div className="flex items-center p-1 rounded-full border-1 border-gray-400">
            <button className="cursor-pointer">
              <CiHeart size={20} />
            </button>
          </div>
          <div className="flex items-center p-1 rounded-full border-1 border-gray-400">
            <button className="cursor-pointer">
              <FiShoppingCart size={20} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
