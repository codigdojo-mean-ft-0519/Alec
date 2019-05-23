const mongoose = require('mongoose');
const Cake = mongoose.model("Cake");

module.exports = {
  allcakes: (req,res) => {
    Cake.find([{}])
    .then(cakes => res.json(cakes))
    .catch(error => res.json(error))
  },
  findOne: (req,res) =>{
    Cake.findOne(req.params)
    .then(cake => res.json(cake ? cake : "nothing here buddy, keep on lookin..."))
    .catch(error => res.json(error))
  },
  create: (req,res) => {
    Cake.create(req.body)
    .then(cake => res.json(cake))
    .catch(err => res.json(err))
  },
  delete: (req,res) => {
    Cake.findByIdAndRemove(req.params.id)
    .then(cake => res.json(cake))
    .catch(err => res.json(err))
  }
};
