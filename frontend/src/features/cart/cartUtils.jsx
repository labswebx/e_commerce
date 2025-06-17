export const getExistingCartItem = (items = [], productId) => {
  return items.find((item) => item._id === productId);
};

export const handleAddOrUpdateItem = (items = [], newItem) => {
  const existingItem = getExistingCartItem(items, newItem._id);

  if (existingItem) {
    existingItem.quantity += 1;
    existingItem.totalPrice += newItem.price;
  } else {
    items.push({
      ...newItem,
      quantity: 1,
      totalPrice: newItem.price,
    });
  }

  return items;
};

export const handleRemoveItem = (items = [], productId) => {
  const existingItem = getExistingCartItem(items, productId);

  if (!existingItem) return items;

  if (existingItem.quantity === 1) {
    return items.filter((item) => item._id !== productId);
  } else {
    existingItem.quantity -= 1;
    existingItem.totalPrice -= existingItem.price;
  }

  return items;
};
