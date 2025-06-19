import { Minus, Plus } from "lucide-react";
import Button from "./Button";
import { useCart } from "../../features/cart/cartHooks";

const AddToCartButton = ({ product }) => {
  const { getCartItem, addToCart, removeFromCart, cart } = useCart();

  const cartItem = getCartItem(product._id);

  const quantity = cartItem?.quantity || 0;

  return (
    <div className="flex items-center w-full gap-2 max-sm:justify-between">
      {quantity === 0 ? (
        <Button
          onClick={() => addToCart(product)}
          label="Add to cart"
          className="max-sm:w-full"
        />
      ) : (
        <>
          <Button
            onClick={() => removeFromCart(product._id)}
            variant="ghost"
            iconLeft={Minus}
            label=""
            size="sm"
          />
          <span className="min-w-[20px] text-center font-semibold">
            {quantity}
          </span>
          <Button
            onClick={() => addToCart(product)}
            iconLeft={Plus}
            label=""
            variant="ghost"
            size="sm"
          />
        </>
      )}
    </div>
  );
};

export default AddToCartButton;
