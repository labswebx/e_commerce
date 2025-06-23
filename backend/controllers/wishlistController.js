const Product = require("../models/productModel");
const Wishlist = require("../models/wishlistModel");

// Create a new wishlist collection
exports.createCollection = async (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  try {
    const { name, products = [] } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Collection name is required" });
    }
    // Validate products exist
    if (products.length > 0) {
      const existingProducts = await Product.countDocuments({
        _id: { $in: products },
      });

      if (existingProducts !== products.length) {
        return res.status(400).json({
          error: "Some products don't exist",
          invalidIds: products.filter((id) => !existingProducts.includes(id)),
        });
      }
    }

    const collection = await Wishlist.create({
      user: req.user._id,
      name,
      products,
    });

    const populated = await Wishlist.findById(collection._id).populate(
      "products",
      "name price images slug"
    );

    res.status(201).json(populated);
  } catch (error) {
    // Handle duplicate names, validation errors, etc.
    if (error.code === 11000) {
      return res.status(400).json({
        error: "Collection name already exists for this user",
      });
    }
    res.status(400).json({
      error: "Failed to create collection",
      details: error.message,
    });
  }
};

// Get all collections for user
exports.getCollections = async (req, res) => {
  try {
    const collections = await Wishlist.find({ user: req.user._id })
      .populate("products")
      .sort({ isDefault: -1, createdAt: -1 }); // Default first, then by creation date
    res.json(collections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single collection by ID
exports.getCollection = async (req, res) => {
  try {
    const collection = await Wishlist.findOne({
      _id: req.params.collectionId,
      user: req.user._id,
    }).populate("products");

    if (!collection) {
      return res.status(404).json({ error: "Collection not found" });
    }

    res.json(collection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add product to collection
exports.addToCollection = async (req, res) => {
  try {
    const { productId } = req.body;
    const collection = await Wishlist.findOneAndUpdate(
      { _id: req.params.collectionId, user: req.user._id },
      { $addToSet: { products: productId } },
      { new: true }
    ).populate("products");

    if (!collection) {
      return res.status(404).json({ error: "Collection not found" });
    }

    res.json(collection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove product from collection
exports.removeFromCollection = async (req, res) => {
  try {
    const collection = await Wishlist.findOneAndUpdate(
      { _id: req.params.collectionId, user: req.user._id },
      { $pull: { products: req.params.productId } },
      { new: true }
    ).populate("products");

    if (!collection) {
      return res.status(404).json({ error: "Collection not found" });
    }

    res.json(collection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update collection name
exports.updateCollection = async (req, res) => {
  try {
    const { name } = req.body;
    const collection = await Wishlist.findOneAndUpdate(
      { _id: req.params.collectionId, user: req.user._id, isDefault: false },
      { name },
      { new: true }
    );

    if (!collection) {
      return res
        .status(404)
        .json({ error: "Collection not found or cannot be modified" });
    }

    res.json(collection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete entire collection
exports.deleteCollection = async (req, res) => {
  try {
    const collection = await Wishlist.findOneAndDelete({
      _id: req.params.collectionId,
      user: req.user._id,
      isDefault: false, // Prevent deleting default collection
    });

    if (!collection) {
      return res
        .status(404)
        .json({ error: "Collection not found or cannot be deleted" });
    }

    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Move product between collections
exports.moveProduct = async (req, res) => {
  try {
    const { fromCollectionId, toCollectionId, productId } = req.body;

    // Verify both collections belong to the user
    const [fromCollection, toCollection] = await Promise.all([
      Wishlist.findOne({ _id: fromCollectionId, user: req.user._id }),
      Wishlist.findOne({ _id: toCollectionId, user: req.user._id }),
    ]);

    if (!fromCollection || !toCollection) {
      return res
        .status(404)
        .json({ error: "One or both collections not found" });
    }

    // Perform the move operation
    await Promise.all([
      Wishlist.updateOne(
        { _id: fromCollectionId },
        { $pull: { products: productId } }
      ),
      Wishlist.updateOne(
        { _id: toCollectionId },
        { $addToSet: { products: productId } }
      ),
    ]);

    // Return updated collections
    const updatedCollections = await Wishlist.find({
      _id: { $in: [fromCollectionId, toCollectionId] },
    }).populate("products");

    res.json(updatedCollections);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
