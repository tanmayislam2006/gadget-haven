import React, { createContext, useState } from "react";
import Hero from "../Hero/Hero";
import Gadget from "../Gadget/Gadget";
import { useLoaderData } from "react-router";
export const AllDataContext = createContext();
const Home = () => {
  const alldata = useLoaderData();
  const [allData, setAllData] = useState(alldata);
  const [fillterData,setFillterData]=useState(allData)
  return (
    <div>
      <AllDataContext.Provider value={[allData, setAllData, fillterData, setFillterData]}>
        <Hero />
        <Gadget />
      </AllDataContext.Provider>
    </div>
  );
};

export default Home;
