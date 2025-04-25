import { useEffect } from "react";
import { useLocation } from "react-router";

const formatPath = (path) => {
  if (path === "/") return "Home";

  // Remove leading slash and split words by "-"
  const words = path.replace("/", "").split("-");
  
  // Capitalize each word
  const capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
  return capitalized.join(" ");
};

const useDynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const formattedTitle = formatPath(location.pathname);
    document.title = `Gadget Haven- ${formattedTitle}`;
  }, [location]);
};

export default useDynamicTitle;
