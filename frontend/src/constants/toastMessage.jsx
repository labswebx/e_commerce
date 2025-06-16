const toastMessage = {
  // Address Messages
  ADDRESS_CREATE: {
    SUCCESS: "Address created successfully",
    ERROR: "Failed to create address",
  },
  ADDRESS_UPDATE: {
    SUCCESS: "Address updated successfully",
    ERROR: "Failed to update address",
  },
  ADDRESS_DELETE: {
    SUCCESS: "Address deleted successfully",
    ERROR: "Failed to delete address",
  },
  ADDRESS_LOAD: {
    ERROR: "Failed to load addresses",
  },

  // Order Messages
  ORDER_CREATE: {
    SUCCESS: "Order placed successfully",
    ERROR: "Failed to place order",
  },
  ORDER_LOAD: {
    ERROR: "Failed to load order(s)",
    EMPTY: "No orders found",
  },
  ORDER_STATUS: {
    SUCCESS: "Order status updated",
    ERROR: "Failed to update order status",
  },
  ORDER_CANCEL: {
    SUCCESS: "Order cancelled",
    ERROR: "Failed to cancel order",
  },
  PAYMENT_STATUS: {
    SUCCESS: "Payment verified",
    ERROR: "Payment verification failed",
  },

  // User/Auth Messages
  LOGIN: {
    SUCCESS: "Login successful",
    ERROR: "Login failed. Please check your credentials.",
  },
  REGISTER: {
    SUCCESS: "Registration successful",
    ERROR: "Registration failed",
  },
  LOGOUT: {
    SUCCESS: "Logout successful",
    ERROR: "Logout failed",
  },
  PROFILE_UPDATE: {
    SUCCESS: "Profile updated successfully",
    ERROR: "Failed to update profile",
  },
  PASSWORD_UPDATE: {
    SUCCESS: "Password updated successfully",
    ERROR: "Failed to update password",
  },
  PASSWORD_RESET: {
    SUCCESS: "Password reset successful",
    ERROR: "Failed to reset password",
  },

  // Cart Messages
  CART_ADD: {
    SUCCESS: "Item added to cart",
    ERROR: "Failed to add item to cart",
  },
  CART_REMOVE: {
    SUCCESS: "Item removed from cart",
    ERROR: "Failed to remove item from cart",
  },
  CART_CLEAR: {
    SUCCESS: "Cart cleared",
    ERROR: "Failed to clear cart",
  },
  // Product Messages
  PRODUCT_CREATE: {
    SUCCESS: "Product created successfully",
    ERROR: "Failed to create product",
  },
  PRODUCT_UPDATE: {
    SUCCESS: "Product updated successfully",
    ERROR: "Failed to update product",
  },
  PRODUCT_DELETE: {
    SUCCESS: "Product deleted successfully",
    ERROR: "Failed to delete product",
  },
  PRODUCT_LOAD: {
    ERROR: "Failed to load product(s)",
    EMPTY: "No product found",
  },
  REVIEW_SUBMIT: {
    SUCCESS: "Review submitted successfully",
    ERROR: "Failed to submit review",
  },

  // General Fallback
  GENERAL: {
    ERROR: "Something went wrong",
    SUCCESS: "Operation completed successfully",
  },
};

export default toastMessage;
