const knex = require('knex')(require('../knexfile'));

const index= async (req, res) => {
  try {
    const { sort_by, order_by } = req.query;
    const sortBy = sort_by || '';
    const orderBy = order_by && order_by.toLowerCase() === 'desc' ? 'desc' : 'asc';
    const searchWord = req.query.s;
    let query = knex("daycares")
      .leftJoin("reviews", "reviews.daycare_id", "daycares.id")
      .select('daycares.id as daycare_id',
      'daycares.childcare_name',
      'daycares.age_range',
      'daycares.address',
      'daycares.city',
      'daycares.postalcode',
      'daycares.country',
      'daycares.region',
      'daycares.latitude',
      'daycares.longitude',
      'daycares.contact_phone',
      'daycares.infant_capacity',
      'daycares.toddler_capacity',
      'daycares.preschool_capacity',
      'daycares.contact_email')
      .count('reviews.id as reviewCount')
      .sum('reviews.rating as totalRating')
      .groupBy('daycares.id');

      if (searchWord) {
        query.where(research => {
          research.where('daycares.childcare_name', 'LIKE', `%${searchWord}%`)
            .orWhere('daycares.city', 'LIKE', `%${searchWord}%`)
            .orWhere('daycares.region', 'LIKE', `%${searchWord}%`)
            .orWhere('daycares.country', 'LIKE', `%${searchWord}%`)

            .select('*');
        })
      }
      if (sortBy) {
        if (sortBy === 'meanRating') {
          query.select(knex.raw('IFNULL(SUM(reviews.rating) / NULLIF(COUNT(reviews.id), 0), 0) AS meanRating'));
          query.orderBy('meanRating', orderBy);
        } else {
          const sortCriteria = sortBy.split(',');
          sortCriteria.forEach(criteria => {
            const [column, order] = criteria.trim().split(':');
            const direction = order && order.toLowerCase() === 'desc' ? 'desc' : 'asc';
            query.orderBy(column, direction);
          });
        }
      }

    const data = await query;

    if (data.length === 0) {
      return res
        .status(200)
        .send({ message: `No result` });
    }
    // Calculate mean rating for each daycare
    data.forEach(daycare => {
      if (daycare.reviewCount === 0) {
        daycare.meanRating = 0;
      } else {
        daycare.meanRating = daycare.totalRating / daycare.reviewCount;
      }
    });



    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving daycares: ${err}`);
  }
};

const findOne = async (req, res) => {
  try {
    const daycareFound = await knex("daycares").where({
      id: req.params.id,
    });

    if (daycareFound.length === 0) {
      return res.status(404).json({
        message: `User with ID ${req.params.id} not found`,
      });
    }

    const daycareData = daycareFound[0];
    res.json(daycareData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve user data for user with ID ${req.params.id}`,
    });
  }
};


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
  createDaycare,
  findOne,

}