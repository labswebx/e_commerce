import { Minus, Plus } from "lucide-react";
import Button from "./Button";
import { useCart } from "../../features/cart/cartHooks";

// manages the add, remove, and update quantity operations for a product in the shopping cart:
const AddToCartButton = ({ product }) => {
  const { getCartItem, addToCart, removeFromCart } = useCart();
  const cartItem = getCartItem(product._id);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="w-full btn-cart-base">
      {quantity === 0 ? (
        <Button
          onClick={() => addToCart(product)}
          label="Add to cart"
          className="btn-full max-sm:btn-md"
        />
      ) : (
        <>
          <Button
            onClick={() => removeFromCart(product._id)}
            variant="ghost"
            iconLeft={Minus}
            label=""
            size="sm"
            ariaLabel="Decrease quantity"
            className="btn-cart-ghost"
          />
          <span className="btn-cart-qty">{quantity}</span>
          <Button
            onClick={() => addToCart(product)}
            iconLeft={Plus}
            label=""
            variant="ghost"
            size="sm"
            ariaLabel="Increase quantity"
            className="btn-cart-ghost"
          />
        </>
      )}
    </div>
  );
};

export default AddToCartButton;
