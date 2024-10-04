const router = require('express').Router();
const habitRoutes = require('./habitController');
const userRoutes = require('./userController');
const homeRoutes = require('./homeController');

router.use('/', homeRoutes);
router.use('/habits', habitRoutes);
router.use('/users', userRoutes);

module.exports = router;
