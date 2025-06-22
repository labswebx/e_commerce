const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");
const wishlistController = require("../controllers/wishlistController");

// Collection CRUD
router.post(
  "/wishlist/collections",
  isAuthenticatedUser,
  wishlistController.createCollection
);
router.get(
  "/wishlist/collections",
  isAuthenticatedUser,
  wishlistController.getCollections
);
router.get(
  "/wishlist/collections/:collectionId",
  isAuthenticatedUser,
  wishlistController.getCollection
);
router.put(
  "/wishlist/collections/:collectionId",
  isAuthenticatedUser,
  wishlistController.updateCollection
);
router.delete(
  "/wishlist/collections/:collectionId",
  isAuthenticatedUser,
  wishlistController.deleteCollection
);

// Product operations
router.post(
  "/wishlist/:collectionId/add",
  isAuthenticatedUser,
  wishlistController.addToCollection
);
router.delete(
  "/wishlist/:collectionId/remove/:productId",
  isAuthenticatedUser,
  wishlistController.removeFromCollection
);
router.post(
  "/wishlist/move-product",
  isAuthenticatedUser,
  wishlistController.moveProduct
);
// shaaring products
module.exports = router;
