
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
    return;
  }
  else{
    addedItem.push(item);
  }

  localStorage.setItem("cartItems", JSON.stringify(addedItem));
};
const removeItem = (itemId) => {
  // console.log("recivd itemId",itemId);
  const addedItem = getAddItem("cartItems");
  // console.log(addedItem);
  const updatedItems = addedItem.filter((localId) => localId !== itemId);
  // console.log("update array",updatedItems);
  localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  // console.log(updatedItems);
};
export { getAddItem, addItem, removeItem };
