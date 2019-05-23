const mongoose = require('mongoose');
const cake = require("../controllers/cakes");

module.exports = function(app){
  console.log('loading routes...');
  app.get('/cakes', cake.allcakes),
  app.get('/cake/:id', cake.findOne),
  app.post('/cake', cake.create),
  app.delete('/cake/delete/:id', cake.delete)
}
