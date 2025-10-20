import React, { createContext, useState } from "react";
import Hero from "../Hero/Hero";
import Gadget from "../Gadget/Gadget";
import { useLoaderData } from "react-router";
import { Product } from "../../types/product";

interface AllDataContextType {
  allData: Product[];
  currentData: Product[];
  setCurrentData: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const AllDataContext = createContext<AllDataContextType | null>(null);

const Home = () => {
  const allData = useLoaderData() as Product[];
  const [currentData, setCurrentData] = useState<Product[]>(allData);

  return (
    <div>
      <AllDataContext.Provider value={{ allData, currentData, setCurrentData }}>
        <Hero />
        <Gadget />
      </AllDataContext.Provider>
    </div>
  );
};

export default Home;
