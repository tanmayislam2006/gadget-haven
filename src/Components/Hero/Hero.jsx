import React from 'react';
import HeroImg from "../../assets/banner.jpg"

const Hero = () => {
    return (
        <div className=' relative max-w-7xl mx-auto bg-purple-600 rounded-lg my-2 py-20 '>
            <div className="my-5 mb-40">
                <h1 className="my-5 max-w-2xl mx-auto font-bold text-3xl text-white text-center">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="my-5 max-w-2xl mx-auto text-center text-white my-3">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className="my-5 flex justify-center">
                <button className="cursor-pointer bg-white font-bold text-purplw-400 px-4 py-2 rounded-lg">
                    Shop Now
                </button>
                </div>
            </div>
            <div className="absolute p-3 border-2 border-gray-300 rounded-lg left-48 top-84 h-[600px] max-w-5xl mx-auto  flex justify-center items-center">
                <img className='h-full rounded-lg' src={HeroImg}alt="" />
            </div>
        </div>
    );
};

export default Hero;