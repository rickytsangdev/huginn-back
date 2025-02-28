const router = require("express").Router();

// CREATE ONE user
router.post("/add", createUser, handleCreateUser);