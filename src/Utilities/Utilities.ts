
const getAddItem = (key: string): string[] => {
  const addedItem = localStorage.getItem(key);
  if (addedItem) {
    return JSON.parse(addedItem);
  }
  else{
    return [];
  }
};
const addItem = (item: string, key: string) => {
  const addedItem = getAddItem(key);
  if(addedItem.includes(item)){
    return;
  }
  else{
    addedItem.push(item);
  }

  localStorage.setItem(key, JSON.stringify(addedItem));
};
const removeItem = (itemId: string, key: string) => {
  const addedItem = getAddItem(key);
  const updatedItems = addedItem.filter((localId) => localId !== itemId);
  localStorage.setItem(key, JSON.stringify(updatedItems));
};
export { getAddItem, addItem, removeItem };
