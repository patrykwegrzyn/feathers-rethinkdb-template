const r = require('./db');
const Service = require('feathers-rethinkdb');

module.exports = function(params, hooks, callback) {
  return function() {
    const app = this;
    const serviceName = params.name;

    let options  = Object.assign({
      Model: r,
      paginate: {
        default: 15,
        max: 25
      }
    }, params );

    app.use('/'+serviceName, Service(options));

    const service = app.service('/'+serviceName);

    Object.keys(hooks).forEach((key) => {
      service[key](hooks[key]);
    });

    if (callback) {
      return callback(service);
    }
  };
};
