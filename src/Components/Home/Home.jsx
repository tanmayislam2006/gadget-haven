import React, { createContext, useState } from "react";
import Hero from "../Hero/Hero";
import Gadget from "../Gadget/Gadget";
import { useLoaderData } from "react-router";
export const AllDataContext = createContext();
const Home = () => {
  const alldata = useLoaderData();
  const [allData, setAllData] = useState(alldata);
  return (
    <div>
      <AllDataContext value={[allData, setAllData]}>
        <Hero></Hero>
        <Gadget></Gadget>
      </AllDataContext>
    </div>
  );
};

export default Home;
