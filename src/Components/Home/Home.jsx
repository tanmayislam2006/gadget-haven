import React, { createContext, useState } from "react";
import Hero from "../Hero/Hero";
import Gadget from "../Gadget/Gadget";
import { useLoaderData } from "react-router";
export const AllDataContext = createContext();
const Home = () => {
  const allData = useLoaderData();
  const [currentData, setCurrentData] = useState(allData);
  return (
    <div>
      <AllDataContext.Provider value={{allData, currentData, setCurrentData}}>
        <Hero />
        <Gadget />
      </AllDataContext.Provider>
    </div>
  );
};

export default Home;
