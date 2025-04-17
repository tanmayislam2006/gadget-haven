import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import HeroImage from "../../assets/banner.jpg";
import Hero from "../../Components/Hero/Hero";

const ProductDetails = () => {
  const { productId } = useParams();
  const alldata = useLoaderData();
  const [details, setDetails] = useState({});
  //  handle side effect
  useEffect(() => {
    const product = alldata.find((item) => item.product_id === productId);
    if (product) {
      setDetails(product);
    }
  }, [alldata, productId]);

  return (
    <div className="bg-purple-600 py-30 rounded-2xl">
      <div className="my-4 flex flex-col items-center">
        <h1 className="font-bold text-center text-2xl text-white">
          Product Details
        </h1>
        <p className="my-3  text-center text-lg max-w-3xl text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="max-w-5xl mx-auto relative  ">
        {/* card  */}
        <div className="absolute  rounded-lg bg-white mb-44">
          <div className="flex ">
            <div className="p-2 ">
              <img src={HeroImage} className="rounded-lg"alt="" />
            </div>
            <div className="mb-3">
                <h3 className="font-bold text-xl my-3">{details.product_title}</h3>
                <p className="text-lg text-gray-600">Price : $ {details.price}</p>
                <div className="">
                    <button className="bg-green-200 rounded-2xl border my-1 border-green-600 px-3 py-1">{details.availability === true?"InStock":"NAI"}</button>
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quod maxime, nostrum unde ducimus voluptatum saepe deleniti enim nobis error tempora cumque, itaque natus iure veritatis ex! Natus, sequi. Omnis?

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
