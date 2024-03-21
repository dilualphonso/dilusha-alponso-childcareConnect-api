/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('daycares').del()
    .then(function () {
      // Inserts seed entries
      return knex('daycares').insert([
        {
          childcare_name: 'Little Angels Childcare',
          address: '111 Island Rd',
          city: 'Scarborough',
          region:'Ontario',
          postalcode: 'M1C 2P7',
          country: 'CANADA',
          owner_name: 'Emily Johnson',
          age_range: '0-5',
          years: '5',
          infant_capacity: '15',
          toddler_capacity: '20',
          preschool_capacity: '25',
          contact_phone: '555-1234',
          contact_email: 'emily@example.com'
        },
        {
          childcare_name: 'Happy Faces Daycare',
          address: '734 Kingston Road',
          city: 'Pickering',
          region:'Ontario',
          postalcode:'L1V 1A8',
          country: 'CANADA',
          owner_name: 'Michael Smith',
          age_range: '0-4',
          years: '3',
          infant_capacity: '10',
          toddler_capacity: '15',
          preschool_capacity: '20',
          contact_phone: '555-5678',
          contact_email: 'michael@example.com'
        },
        {
          childcare_name: 'Sunshine Kids Preschool',
          address: '458 Fairall Street',
          city: 'Ajax',
          region:'Ontario',
          postalcode:' L1S 1R6',
          country: 'CANADA',
          owner_name: 'Jessica Lee',
          age_range: '2-6',
          years: '4',
          infant_capacity: '8',
          toddler_capacity: '12',
          preschool_capacity: '18',
          contact_phone: '555-9012',
          contact_email: 'jessica@example.com'
        }
      ]);
    });
};
