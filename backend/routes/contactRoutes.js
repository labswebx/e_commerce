const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getAllMessages,
  exportMessagesToExcel,
} = require("../controllers/contactController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.post("/contact-message", isAuthenticatedUser, sendMessage);
router.get(
  "/contact-message",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllMessages
);
router.get(
  "/export",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  exportMessagesToExcel
);

module.exports = router;
