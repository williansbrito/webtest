const mongoose = require('mongoose'); //requere mongodb
// connecting to mongodb and updating the databse automatically
mongoose.connect('mongodb+srv://user2:1234@cluster0-0e2vm.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then(() => console.log('DB is connected'))// show it on console if its works
    .catch(e => console.log(e));// catch error if don't connect