const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/node_mgs_test', { useNewUrlParser: true });


const courseSchema = new mongoose.Schema({
    _id: Number,
    shortName: String,
    fullName: String
});

const courseModel = mongoose.model('courses', courseSchema);

module.exports = courseModel;