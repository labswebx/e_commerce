import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus } from "lucide-react";
import Button from "./Button";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../features/cart/cartSlice";

const AddToCartButton = ({ product }) => {
  console.log("product at cart", product);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item._id === product._id)
  );
  const { total, totalQuantity } = useSelector((state) => state.cart);
  console.log("cart item", cartItem);
  console.log("total", total);
  console.log("totalQuantity", totalQuantity);

  const quantity = cartItem?.quantity || 0;
  console.log(quantity);
  const handleAdd = () => {
    console.log("cart increase");
    dispatch(addItemToCart(product));
  };

  const handleRemove = () => {
    console.log("cart decrease");
    dispatch(removeItemFromCart(product._id));
  };

  return (
    <div className="flex items-center w-full gap-2">
      {quantity === 0 ? (
        <Button
          onClick={handleAdd}
          label="Add to cart"
          // className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        />
      ) : (
        <>
          <Button
            onClick={handleRemove}
            variant="ghost"
            iconLeft={Minus}
            label=""
            size="sm"
          />
          <span className="min-w-[20px] text-center font-semibold">
            {quantity}
          </span>
          <Button
            onClick={handleAdd}
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
