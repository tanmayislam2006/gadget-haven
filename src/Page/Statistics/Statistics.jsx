import React from "react";
import { useLoaderData } from "react-router";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
    const data=useLoaderData()

  return (
    <div>
      {/* Header Section */}
      <div className="bg-purple-600 py-10 rounded-2xl">
        <div className="my-4 flex flex-col items-center">
          <h1 className="font-bold text-center text-2xl text-white">
            Statistics
          </h1>
          <p className="my-3 text-center text-lg max-w-3xl text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full mt-8" style={{ height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="" />
            <XAxis dataKey="product_id" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              fill="#BF87EE"
              stroke="#BF87EE"
            />
            <Bar dataKey="price" barSize={20} fill="#9538E2" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
