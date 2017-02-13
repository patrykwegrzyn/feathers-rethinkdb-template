'use strict';

const r = require('../db');
const Service = require('feathers-rethinkdb');

module.exports = function(){
  const app = this;

  let options = {
    Model: r,
    name: 'example',
    paginate: {
      default: 5,
      max: 25
    }
  };

  app.use('/example', Service(options));
};
