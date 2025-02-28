// object validation using JSON schema
const jsonschema = require("jsonschema");

// créer un utilisateur en base
const createUser = (req, res, next) => {
  let validator = new jsonschema.Validator();
  let result = validator.validate(req.body, createUser_Schema);
  if (result.errors.length) {
    return res.sendStatus(500);
  }
  next();
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
