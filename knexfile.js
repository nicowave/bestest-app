// THIS FILE IS DB CONNECTION + ENVIRONMENT DEFS

'use strict';

module.exports = {
    'development': {
      'client': 'pg',
      'connection': 'postgres://localhost/bester_db'
    },

    'testing': {
    },

    'production': {
      'client': 'pg',
      'connection': process.env.DATABASE_URL
    }
}
