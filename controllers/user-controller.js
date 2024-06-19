const knex = require('knex')(require('../knexfile'));
const bcrypt = require('bcrypt');


// const createUser = async (req, res) => {
//   try {
//     // Add the validated body into the users database
//     const result = await knex("user").insert(req.body);
//     // Grab the id of the item just created
//     const newUserId = result[0];
//     // Grab the user object that was just created
//     const createdUser = await knex("user").where({ id: newUserId }).first();

//     // Return the response of a successful creation with the created user data
//     res.status(201).json(createdUser);
//   } catch (error) {
//     // Server error
//     console.error(error);
//     res.status(500).send(`Unable to create new User.`);
//   }
// };


const createUser = async (req, res) => {
  try {
    const { user_name, email, password } = req.body;

    if (!user_name || !email || !password) {
      return res.status(400).json({ message: 'User name, email, and password are required' });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = { user_name, email, password: hashedPassword };

    // Add the validated body into the users database
    const result = await knex("user").insert(userData);
    // Grab the id of the item just created
    const newUserId = result[0];
    // Grab the user object that was just created
    const createdUser = await knex("user").where({ id: newUserId }).first();

    // Return the response of a successful creation with the created user data
    res.status(201).json(createdUser);
  } catch (error) {
    // Server error
    console.error(error);
    res.status(500).send('Unable to create new User.');
  }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Fetch the user from the database by email
    const user = await knex('user').where({ email }).first();

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Passwords match, user is authenticated
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        // Include other user details as needed, but exclude sensitive info
      }
    });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('Unable to login. Please try again later.');
  }
};


module.exports = {
  createUser,
  loginUser,
};
