const router = require("express").Router();

const { createUser, getAllUsers } = require("../controllers/user.controller");

// CREATE ONE user
router.post("/add", createUser);

module.exports = router;
