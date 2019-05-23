const mongoose = require('mongoose');
const Rating = mongoose.model('Rating');
const Cake = mongoose.model('Cake');

module.exports = {
  index(req, res) {
    Rating.find({})
      .then(ratings => res.json(ratings))
      .catch(error => res.json(error));
  },
  //GET: Retrieve a Rating by ID
  show(req, res) {
    console.log("From our controller...", req.params)
    Rating.findOne(req.params)
      .then(rating => {
        res.json(rating ? rating : 'Not in there');
      })
      .catch(error => res.json(error));
  },

  //POST: Create a Rating
  create(req, res) {
    console.log('creating rating...', req.body);
    Rating.create(req.body)
      .then(rating => {
        return Cake.findByIdAndUpdate(rating.cake, {
            $push: {
              ratings: rating._id
            }
          })
          .then(() => res.json(rating));
      })
      .catch(error => res.json(error));
  },

  //PUT: Update a Rating by ID
  update(req, res) {
    console.log('req stuff', req.params, req.body);
    Rating.findByIdAndUpdate(req.params._id, req.body, {
        new: true
      })
      .then(rating => res.json(rating))
      .catch(error => res.json(error));
  },
}
