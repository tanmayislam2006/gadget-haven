import { toast } from "react-toastify";

const getAddItem = () => {
  const addedItem = localStorage.getItem("cartItems");
  if (addedItem) {
    return JSON.parse(addedItem);
  }
  else{
    return [];
  }
};
const addItem = (item) => {
  const addedItem = getAddItem();
  if(addedItem.includes(item)){
    toast.error("Product already in cart");
    return;
  }
  else{
    addedItem.push(item);
  }

  localStorage.setItem("cartItems", JSON.stringify(addedItem));
};
const removeItem = (itemId) => {
  const addedItem = getAddItem();
  const updatedItems = addedItem.filter((item) => item.product_id !== itemId);
  localStorage.setItem("cartItems", JSON.stringify(updatedItems));
};
export { getAddItem, addItem, removeItem };
