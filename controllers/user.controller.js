// object validation using JSON schema
// const jsonschema = require("jsonschema");

// mongoose model
const Users = require("../models/user.schema");

// créer un utilisateur en base
const createUser = async (req, res, next) => {
  try {
    const user = new Users(req.body);
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(400).json({ errors: error.message });
  }
};

// obtenir tous les utilisateurs en base
const getAllUsers = async (req, res, next) => {
  try {
    let user_list = await Users.find({});
    res.json({ user_list });
  } catch (error) {
    res.sendStatus(404);
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
