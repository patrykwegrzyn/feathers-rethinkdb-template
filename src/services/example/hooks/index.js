'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.create = function(options) {
  return function(hook) {
    console.log('here');
    hook.params.rethinkdb = {
      'conflict': 'update'
    };
    return Promise.resolve(hook);
  };
};
