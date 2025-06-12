// Load state from localStorage
export const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error("Load cart state error", err);
    return undefined;
  }
};

// Save state to localStorage
export const saveCartState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    console.error("Save cart state error", err);
  }
};
