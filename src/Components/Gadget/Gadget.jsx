import React from 'react';
import Category from './Category/Category';
import AllItems from './AllItems/AllItems';

const Gadget = () => {
    return (
        <div className='mt-[450px]'>
                <h1 className='font-bold text-center text-2xl'>Explore Cutting-Edge Gadgets</h1>
                <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4">
                    <Category></Category>
                    <AllItems></AllItems>
                </div>
        </div>
    );
};

export default Gadget;