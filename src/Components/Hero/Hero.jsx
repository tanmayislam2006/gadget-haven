import React from "react";
import HeroImg from "../../assets/banner.jpg";
import { Link, NavLink, useNavigate } from "react-router";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const Hero = () => {
  const navigate = useNavigate("");
  return (
    <div className=" relative max-w-7xl mx-auto bg-purple-600 rounded-lg  py-20 ">
      <div className="flex justify-around items-center">
        {/* name and logo */}

        <div onClick={() => navigate("/")} className="cursor-pointer">
          <h3 className="text-xl text-white font-bold">Gadget Heaven</h3>
        </div>

        {/* nav itmes */}
        <div className="">
          <ul className="flex gap-6">
            <li className=" text-white ">
              <NavLink
                className={({ isActive }) =>
                    isActive ? "text-white underline font-bold " : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className=" text-white ">
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li className=" text-white ">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex  gap-3">
          <div className="flex items-center p-1 bg-white rounded-full border-1 border-gray-400">
            <button className="cursor-pointer">
              <CiHeart size={20} />
            </button>
          </div>
          <div className="flex items-center p-1 bg-white rounded-full border-1 border-gray-400">
            <button className="cursor-pointer ">
              <FiShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="my-5 mb-40">
        <h1 className="my-5 max-w-2xl mx-auto font-bold text-3xl text-white text-center">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="my-5 max-w-2xl mx-auto text-center text-white my-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="my-5 flex justify-center">
          <button className="cursor-pointer bg-white font-bold text-purplw-400 px-4 py-2 rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
      <div className="absolute p-3 border-2 border-gray-300 rounded-lg left-48 top-84 h-[600px] max-w-5xl mx-auto  flex justify-center items-center">
        <img className="h-full rounded-lg" src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
