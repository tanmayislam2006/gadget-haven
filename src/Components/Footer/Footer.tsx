import React from 'react';

const Footer = () => {
    return (
        <div className='w-full mt-10 mt-80'>
           <div className="w-10/12 mx-auto border-b-2 border-gray-400 py-8 my-8">
                <h1 className="text-2xl font-bold text-center">Gadget Heaven</h1>
                <p className="my-3 text-center text-gray-600 ">Leading the way in cutting-edge technology and innovation.</p>
           </div>
                <div className=" flex justify-around my-5">
                    <div className="">
                        <h3 className="font-bold">Company</h3>
                        <ul className="my-1">
                            <li className="text-gray-600">About Us</li>
                            <li className="text-gray-600">Contact Us</li>
                            <li className="text-gray-600">Privacy Policy</li>
                            <li className="text-gray-600">Terms of Service</li>
                            </ul>
                    </div>
                    <div className="">
                        <h3 className="font-bold">Company</h3>
                        <ul className="my-1">
                            <li className="text-gray-600">About Us</li>
                            <li className="text-gray-600">Contact Us</li>
                            <li className="text-gray-600">Privacy Policy</li>
                            <li className="text-gray-600">Terms of Service</li>
                            </ul>
                    </div>
                    <div className="">
                        <h3 className="font-bold">Company</h3>
                        <ul className="my-1">
                            <li className="text-gray-600">About Us</li>
                            <li className="text-gray-600">Contact Us</li>
                            <li className="text-gray-600">Privacy Policy</li>
                            <li className="text-gray-600">Terms of Service</li>
                            </ul>
                    </div>
                </div>
        </div>
    );
};

export default Footer;