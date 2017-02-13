'use strict';
const authentication = require('./authentication');
const user = require('./user');
const example = require('./example');
module.exports = function() {
  const app = this;
  app.configure(authentication);
  app.configure(user);
  app.configure(example);
};
