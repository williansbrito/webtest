const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    course: {
        type: String,
        required: true
    },
    level: String,
    name: String,
    email:String,
    review:String
    
});



module.exports = model('Task', TaskSchema);
