import { useState, useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import HeroImage from "../../assets/banner.jpg";
import { toast } from "react-toastify";
import { CiHeart } from "react-icons/ci";
import { addItem } from "../../Utilities/Utilities";

export const cartProduct = [];
export const wishlist=[];

const ProductDetails = () => {
  const navigate = useNavigate(""); 
  const { productId } = useParams();
  const alldata = useLoaderData();
  const [details, setDetails] = useState({});


  // Handle side effect
  useEffect(() => {
    const product = alldata.find((item) => item.product_id === productId);
    if (product) {
      setDetails(product);
    }
  }, [alldata, productId]);

  const handleAddToCart = (product,ID) => {
    const isProductInCart = cartProduct.find(
      (item) => item.product_id === product.product_id
    );
    if (isProductInCart) {

      toast.error("Product already in cart");
    } else {
      cartProduct.push(product);
      addItem(ID)
      toast.success("Product added  to cart successfully");
    }
  };
  // const handleAddToLocalStorage=(productId)=
  const handleAddToWishlist=(product)=>{
    const isProductInWishlist = wishlist.find(
      (item) => item.product_id === product.product_id
    );
    if (isProductInWishlist) {
      toast.error("Product already in wishlist");
    } else {
      wishlist.push(product);
      toast.success("Product added  to wishlist successfully");
    }
  }
  return (
    <div className="bg-purple-600 py-30 rounded-2xl">
      <div className="my-4 flex flex-col items-center">
        <h1 className="font-bold text-center text-2xl text-white">
          Product Details
        </h1>
        <p className="my-3 text-center text-lg max-w-3xl text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="max-w-5xl mx-auto relative">
        {/* card */}
        <div className="absolute rounded-lg bg-white mb-44">
          <div className="flex gap-3">
            <div className="p-2 w-1/2">
              <img src={HeroImage} className="rounded-lg h-full" alt="" />
            </div>
            <div className="mb-3">
              <h3 className="font-bold text-xl my-3">
                {details.product_title}
              </h3>
              <p className="text-lg text-gray-600">Price : $ {details.price}</p>
              <div className="">
                <button className="bg-green-200 rounded-2xl border my-1 border-green-600 px-3 py-1">
                  {details.availability === true ? "InStock" : "Out of Stock"}
                </button>
              </div>
              <p className="my-2 text-gray-600">{details.description}</p>
              <div className="">
                <h1 className="font-bold text-lg">Specification</h1>
                {details.specification?.map((specificationDt, index) => (
                  <p key={index} className="text-gray-600 text-md">
                    {specificationDt}
                  </p>
                ))}
              </div>
              <div className="">
                <h1 className="text-xl font-bold">Rating</h1>
                <button className="bg-gray-300 px-4 py-2 rounded-3xl">
                  {details.rating}
                </button>
              </div>
              <div className="mt-3 flex justify-evenly  gap-4">
                <button
                  onClick={() => handleAddToCart(details,details.product_id)}
                  className="cursor-pointer px-4 py-2 rounded-xl text-white font-bold bg-purple-600"
                >
                  Add To Cart
                </button>
                <div onClick={()=>handleAddToWishlist(details)} className="flex items-center p-3 cursor-pointer rounded-full border-1 border-gray-400">
                  <button  className="cursor-pointer">
                    <CiHeart size={20} />
                  </button>
                </div>
                <button
                  onClick={() => navigate(-1)}
                  className="cursor-pointer px-4 py-2 rounded-xl text-white font-bold bg-purple-600"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
