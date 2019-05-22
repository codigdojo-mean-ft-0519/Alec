const mongoose = require('mongoose');
const task = require("../controllers/tasks");

module.exports = function(app){
  console.log('loading routes..');
    app.get('/tasks', task.allTasks),
    app.get('/tasks/:id', task.display),
    app.post('/tasks', task.create)
    app.put('/tasks/update/:id', task.update),
    app.delete('/tasks/delete/:id', task.delete)
}
