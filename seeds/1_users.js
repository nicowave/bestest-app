// This file seeds the database with some initial data to insert.

exports.seed = function(knex) {
  // delete all users, before creating some
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        {
          id: 1,
          name: "Lisa",
          points: 1000
        },
        {
          id: 2,
          name: "Craag",
          points: 2
        },
        {
          id: 3,
          name: "Del",
          points: 500
        },
        {
          id: 4,
          name: "Megan",
          points: 501
        }
      ]);
    });

};
