const mongoose = require('mongoose');
const cake = require("../controllers/cakes");
const Rate = require("../controllers/rating");
module.exports = function(app){
  console.log('loading routes...');
  app.get('/cakes', cake.allcakes),
  app.get('/cake/:id', cake.findOne),
  app.post('/cake', cake.create),
  app.put('/cakes/:id', cake.update),

  app.post('/ratings', Rate.create)
}
