const knex = require('knex')(require('../knexfile'));

const index = async (req, res) => {
  try {
    const searchWord = req.query.s;
    let query = knex("daycares");

    if (searchWord) {
      query.where(research => {
        research.where('daycares.childcare_name', 'LIKE', `%${searchWord}%`)
          .orWhere('daycares.city', 'LIKE', `%${searchWord}%`)
          .orWhere('daycares.region', 'LIKE', `%${searchWord}%`)
          .orWhere('daycares.country', 'LIKE', `%${searchWord}%`)

          .select('*');
      })
    }
    const data = await query;

    if (data.length === 0) {
      return res
        .status(200)
        .send({ message: `No result` });
    }

    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(`Error retrieving Users: ${err}`)
  }
}


const createDaycare = async (req, res) => {
  try {
    // Add the validated body into the warehouses database
    const result = await knex("daycares").insert(req.body);
    // Grab the id of the item just created
    const newDaycareId = result[0];
    // Grab the warehouse object that was just created
    const createdDaycare = await knex("daycares").where({ id: newDaycareId });

    // Return the response of a successful creation with the created warehouse data
    res.status(201).json(createdDaycare[0]);
  } catch (error) {
    // Server error
    console.log(error);
    res.status(500).send(`Unable to create new Daycare.`);
  }
};

module.exports = {
  index,
  createDaycare
}