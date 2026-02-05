const express = require("express");
const { register, login, logout } = require("../controller/User.controller");
const isAuthenticated = require("../middleware/isAuthenticated");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout",logout);







module.exports=router;