const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    isDefault: { type: Boolean, default: false },
  },
  { timestamps: true }
);
wishlistSchema.index({ user: 1 });

wishlistSchema.virtual("productCount").get(function () {
  return this.products.length;
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
