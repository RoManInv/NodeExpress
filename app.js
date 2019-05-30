const router = require('express').Router();
const routing = require('./router/index');

router.get('/', (req, res) => res.redirect('/api/courses'));

router.get('/api/courses', (req, res) => routing.routers.readAllCourses(req, res));
router.get('/api/courses/:id', (req, res) => routing.routers.readCourse(req, res));

router.post('/api/courses/:id', (req, res) => routing.routers.updateCourse(req, res));

router.put('/api/courses', (req, res) => routing.routers.createCourse(req, res));

router.delete('/api/courses/:id', (req, res) => routing.routers.deleteCourse(req, res));

router.put('/api/database', (req, res) => routing.routers.generateDatabase(req, res));

module.exports.router = router;