const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    completed: { type: Boolean, default: false}
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

module.exports = mongoose.model("Task", taskSchema);
