const mongoose = require("mongoose");
const Task = mongoose.model("Task");

module.exports = {
    allTasks: (req,res) => {
        Task.find({})
            .then( tasks => res.json(tasks))
            .catch( error => res.json(errors))
    },
    display: (req,res) => {
        Task.findOne(req.params)
            .then(task => res.json(task ? task: 'Not Available'))
            .catch(error => res.json(error))
    },
    create: (req,res) => {
      Task.create(req.body)
          .then( task => res.json(task))
          .catch( error => res.json(error))
    },
    delete: (req,res) => {
        Task.remove(req.params)
            .then(task => res.json(task))
            .catch(error => res.json(error))
    },
    update(req, res){
        Task.findByIdAndUpdate(request.params._id, request.body, {new: true})
            .then(task => res.json(task))
            .catch(error => res.json(error))
    }
};
