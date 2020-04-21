const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    price: String,
    description: String,
    
});






module.exports = model('Task', TaskSchema);
