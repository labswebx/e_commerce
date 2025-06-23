const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const cartCtrl = require("../controllers/cartController");
const router = express.Router();

router.get("/cart", isAuthenticatedUser, cartCtrl.getCart);
router.post("/cart/add", isAuthenticatedUser, cartCtrl.addToCart);
router.post("/cart/remove", isAuthenticatedUser, cartCtrl.removeFromCart);
router.post("/cart/clear", isAuthenticatedUser, cartCtrl.clearCart);

module.exports = router;
