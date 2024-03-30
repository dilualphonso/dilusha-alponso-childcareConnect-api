const knex = require('knex')(require('../knexfile'));

const createUser = async (req, res) => {
  try {
    // Add the validated body into the users database
    const result = await knex("user").insert(req.body);
    // Grab the id of the item just created
    const newUserId = result[0];
    // Grab the user object that was just created
    const createdUser = await knex("user").where({ id: newUserId }).first();

    // Return the response of a successful creation with the created user data
    res.status(201).json(createdUser);
  } catch (error) {
    // Server error
    console.error(error);
    res.status(500).send(`Unable to create new User.`);
  }
};

module.exports = {
  createUser,
};
