const hooks = require('./hooks');
const cdnMarkets = require('cdnmarkets');
const createService = require('../creator');

module.exports = createService({ name: 'example' }, {
  before: { create: [hooks.create()] }
}, syncMarkets);

function syncMarkets(service) {
  setInterval(() => {
    cdnMarkets((err, data) => {
      if(err) { throw Error(err); }
      service.create(data);
    });
  }, 10000);
}
