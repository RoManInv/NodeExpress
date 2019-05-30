const Course = require('../model/courseModel');

function createCourse(req, res) {
    var id = null;
    if(req.query.id)
        id = parseInt(req.query.id);
    else
        Course.count({}, (err, count) => {
            if(err)
                console.log('count failed!');
            else
                id = count + 1;
        });

    var newCourse = new Course({
        _id: id,
        shortName: req.body.shortName,
        fullName: req.body.fullName
    }, {versionKey: false});

    newCourse.save((err, data) => {
        readAllCourse(req, res);
    });
}

function updateCourse(req, res) {
    Course.findById(req.params.id, {__v: 0}, (err, data) => {
        if(err)
            res.status(404)
               .send('No such course');
        else
            data.shortName = req.body.shortName;
            data.fullName = req.body.fullName;
            data.save((err) => {
                res.send(data);
            });
    });
}

function readCourse(req, res) {
    Course.findById(req.params.id, {__v: 0}, (err, data) => {
        if(err)
            res.status(404)
               .send('No such course');
        else
            res.send(data);
    });
}

function readAllCourse(req, res) {
    Course.find({}, {__v: 0}, (err, data) => {
        if(err){ return console.log(err) }
        res.send(data);
    });
}

function deleteCourse(req, res) {
    var id = parseInt(req.params.id);
    Course.remove({_id: id}, (err, data) => {
        if(err)
            res.status(404)
               .send('No such course');
        else
            readAllCourse(req, res);
    });
}

function generateDatabase(req, res){
    Course.deleteMany({}, (err)=>{});
    var courseArr = [
        {
            "_id": 1,
            "shortName": "AWT",
            "fullName": "Advanced Web Technology"
        },
        {
            "_id": 2,
            "shortName": "NIO",
            "fullName": "Neuroinformatik und Organik Computing"
        },
        {
            "_id": 3,
            "shortName": "IR",
            "fullName": "Information Retrieval"
        }
    ];

    // new Course({
    //     _id: 1,
    //     shortName: "AWT",
    //     fullName: "Advanced Web Technology"
    // }).save((err) => {});
    // new Course({
    //     id: 2,
    //     shortName: "NIO",
    //     fullName: "Neuroinformatik und Organik Computing"
    // }).save((err) => {});
    // new Course({
    //     id: 3,
    //     shortName: "IR",
    //     fullName: "Information Retrieval"
    // }).save((err) => {});
    Course.insertMany(courseArr, (err, docs) => {readAllCourse(req, res);});
}

module.exports.createCourse = createCourse;
module.exports.updateCourse = updateCourse;
module.exports.readCourse = readCourse;
module.exports.readAllCourse = readAllCourse;
module.exports.deleteCourse = deleteCourse;
module.exports.generateDatabase = generateDatabase;