const knex = require("knex")(require("../knexfile"));

const getReview = async (req, res) => {
  try {
    // Get the daycare ID from request params
    const daycareId = req.params.id;

    // Select reviews for a specific daycare
    let query = knex("reviews")
      .join("daycares", "daycares.id", "reviews.daycare_id")
      .select(
        "reviews.id",
        "reviews.reviewer_name",
        "reviews.rating",
        "reviews.comment",
        "reviews.created_at",
        "reviews.daycare_id"
      )
      .where("daycares.id", daycareId);

    // Await here after modifying query
    const data = await query;

    // Return the response of successful selecting the reviews
    res.status(200).json(data);
  } catch (err) {
    // Client error
    res.status(400).send(`Error retrieving reviews: ${err}`);
  }
};

const postReview = async (req, res) => {
  try {
    const { id } = req.params; // Get daycare ID from URL params
    const { reviewer_name, comment, rating } = req.body;

    // Check if the daycare with the given ID exists
    const referencedDaycare = await knex("daycares").where({
      id: id,
    });

    if (referencedDaycare.length === 0) {
      return res.status(400).json({
        error: `Daycare with id ${id} does not exist.`,
      });
    } else {
      // Insert the review into the 'reviews' table
      const result = await knex("reviews").insert({
        daycare_id: id, // Assuming the column in reviews table is named daycare_id
        reviewer_name,
        comment,
        rating,
      });

      // Get the ID of the newly inserted review
      const newReviewId = result[0];

      // Retrieve the newly created review from the database
      const createdReview = await knex("reviews")
        .where({
          id: newReviewId,
        })
        .first(); // Use .first() to get the single object directly

      // Return the created review
      res.status(201).json(createdReview);
    }
  } catch (error) {
    // Log and return server error
    console.log(error);
    res.status(500).send(`Unable to create new review.`);
  }
};

module.exports = {
  postReview,
  getReview,
};
