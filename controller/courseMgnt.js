const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../model/course.json');
var rawData = fs.readFileSync(file);
var courseData = JSON.parse(rawData);

function createCourse(req, res) {
    var id = null;
    if(req.query.id)
        id = parseInt(req.query.id);
    else
        id = courseData.length + 1;
    const course = {
        id: id,
        shortName: req.body.shortName,
        fullName: req.body.fullName
    };
    courseData.push(course);
    res.send(courseData);
}

function updateCourse(req, res) {
    const course = courseData.find(c => c.id === parseInt(req.params.id));
    if(!course)
        res.status(404)
           .send('No such course');
    else
        course.shortName = req.body.shortName;
        course.fullName = req.body.fullName;
        res.send(courseData);
}

function readCourse(req, res) {
    const course = courseData.find(c => c.id === parseInt(req.params.id));
    if(!course)
        res.status(404)
           .send('No such course');
    else
        res.send(course);
}

function readAllCourse(req, res) {
    res.send(courseData);
}

function deleteCourse(req, res) {
    const course = courseData.find(c => c.id === parseInt(req.params.id));
    if(!course)
        res.status(404)
           .send('No such course');
    else    
        courseData.splice(course);
        res.send(courseData);
}

module.exports.createCourse = createCourse;
module.exports.updateCourse = updateCourse;
module.exports.readCourse = readCourse;
module.exports.readAllCourse = readAllCourse;
module.exports.deleteCourse = deleteCourse;