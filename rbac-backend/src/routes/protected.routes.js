const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const authorizeRoles = require("../middleware/roles");
const ROLES = require("../config/roles");

// Admin only
router.get(
  "/admin",
  auth,
  authorizeRoles(ROLES.ADMIN),
  (req, res) => {
    res.json({ message: "Welcome Admin 👑" });
  }
);

// Admin + Co-Admin
router.get(
  "/manage",
  auth,
  authorizeRoles(ROLES.ADMIN, ROLES.CO_ADMIN),
  (req, res) => {
    res.json({ message: "Management access granted" });
  }
);

// Any logged-in user
router.get(
  "/profile",
  auth,
  authorizeRoles(ROLES.ADMIN, ROLES.CO_ADMIN, ROLES.MEMBER),
  (req, res) => {
    res.json({ message: "Profile data", user: req.user });
  }
);

module.exports = router;
