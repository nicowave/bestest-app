// Choose an enviroment setup from knexfile
// Get env vars
// Then require knex package, passing in the env config we just found

const env =  process.env.NODE_ENV || 'development';
const kconfig = require('./knexfile.js')[env];
const knex = require('knex')(kconfig);

module.exports = knex;
