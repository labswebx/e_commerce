// controllers/cartController.js
const mongoose = require("mongoose");
const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

// Utility: calculate total quantity and total price
const calculateCartTotals = (cart) => {
  let totalQuantity = 0;
  let totalPrice = 0;

  for (const item of cart.items) {
    const price = item.product?.price || 0;
    const quantity = item.quantity;
    totalQuantity += quantity;
    totalPrice += price * quantity;
  }

  return { totalQuantity, totalPrice };
};

// Middleware validator
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// GET Cart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.product"
    );
    if (!cart) return res.json({ items: [], totalQuantity: 0, totalPrice: 0 });

    const { totalQuantity, totalPrice } = calculateCartTotals(cart);
    res.json({ ...cart.toObject(), totalQuantity, totalPrice });
  } catch (err) {
    console.error("Error getting cart:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// POST Add/Update to Cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!isValidObjectId(productId))
      return res
        .status(400)
        .json({ success: false, message: "Invalid product ID" });
    if (!quantity || quantity < 1)
      return res
        .status(400)
        .json({ success: false, message: "Quantity must be at least 1" });

    const product = await Product.findById(productId);
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    if (product.stock < quantity)
      return res
        .status(400)
        .json({ success: false, message: "Insufficient stock" });

    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) cart = new Cart({ user: req.user._id, items: [] });

    const index = cart.items.findIndex(
      (i) => i.product.toString() === productId
    );
    if (index > -1) {
      cart.items[index].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    cart.updatedAt = Date.now();
    await cart.save();

    const populatedCart = await Cart.findById(cart._id).populate(
      "items.product"
    );
    const { totalQuantity, totalPrice } = calculateCartTotals(populatedCart);
    res.json({ ...populatedCart.toObject(), totalQuantity, totalPrice });
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// POST Update Quantity
exports.updateCartQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    if (!isValidObjectId(productId))
      return res
        .status(400)
        .json({ success: false, message: "Invalid product ID" });
    if (quantity < 1)
      return res
        .status(400)
        .json({ success: false, message: "Quantity must be at least 1" });

    const product = await Product.findById(productId);
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    if (product.stock < quantity)
      return res
        .status(400)
        .json({ success: false, message: "Insufficient stock" });

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart)
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });

    const itemIndex = cart.items.findIndex(
      (i) => i.product.toString() === productId
    );
    if (itemIndex === -1)
      return res
        .status(404)
        .json({ success: false, message: "Product not in cart" });

    cart.items[itemIndex].quantity = quantity;
    cart.updatedAt = Date.now();
    await cart.save();

    const populatedCart = await Cart.findById(cart._id).populate(
      "items.product"
    );
    const { totalQuantity, totalPrice } = calculateCartTotals(populatedCart);
    res.json({ ...populatedCart.toObject(), totalQuantity, totalPrice });
  } catch (err) {
    console.error("Error updating cart quantity:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// POST Remove Item
exports.removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!isValidObjectId(productId))
      return res
        .status(400)
        .json({ success: false, message: "Invalid product ID" });

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart)
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });

    cart.items = cart.items.filter((i) => i.product.toString() !== productId);
    cart.updatedAt = Date.now();
    await cart.save();

    const populatedCart = await Cart.findById(cart._id).populate(
      "items.product"
    );
    const { totalQuantity, totalPrice } = calculateCartTotals(populatedCart);
    res.json({ ...populatedCart.toObject(), totalQuantity, totalPrice });
  } catch (err) {
    console.error("Error removing item from cart:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// POST Clear Cart
exports.clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { user: req.user._id },
      { items: [], updatedAt: Date.now() },
      { new: true }
    );

    const populatedCart = await Cart.findById(cart._id).populate(
      "items.product"
    );
    const { totalQuantity, totalPrice } = calculateCartTotals(populatedCart);
    res.json({ ...populatedCart.toObject(), totalQuantity, totalPrice });
  } catch (err) {
    console.error("Error clearing cart:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
