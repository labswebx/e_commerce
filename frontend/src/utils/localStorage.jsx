const CART_KEY = "cart";
const CART_USER_KEY = "cartUserId";

// Load both cart and the associated user ID
export const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem(CART_KEY);
    const savedUserId = localStorage.getItem(CART_USER_KEY);

    if (!serializedState) return undefined;

    const parsedState = JSON.parse(serializedState);

    if (parsedState?.cart) {
      return {
        ...parsedState.cart,
        userId: savedUserId || null,
      };
    }

    return {
      ...parsedState,
      userId: savedUserId || null,
    };
  } catch (err) {
    console.error("Load cart state error", err);
    return undefined;
  }
};

// Save cart along with user ID
export const saveCartState = (cartState) => {
  try {
    const { userId, ...rest } = cartState;

    if (rest?.cart) {
      localStorage.setItem(CART_KEY, JSON.stringify(rest.cart));
    } else {
      localStorage.setItem(CART_KEY, JSON.stringify(rest));
    }

    localStorage.setItem(CART_USER_KEY, userId || "");
  } catch (err) {
    console.error("Save cart state error", err);
  }
};

// Optional: clear both
export const clearCartState = () => {
  localStorage.removeItem(CART_KEY);
  localStorage.removeItem(CART_USER_KEY);
};
