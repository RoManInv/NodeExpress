const courseMgnt = require('../controller/courseMgnt_db');

module.exports.createCourse = courseMgnt.createCourse;
module.exports.updateCourse = courseMgnt.updateCourse;
module.exports.readCourse = courseMgnt.readCourse;
module.exports.readAllCourses = courseMgnt.readAllCourse;
module.exports.deleteCourse = courseMgnt.deleteCourse;
module.exports.generateDatabase = courseMgnt.generateDatabase;