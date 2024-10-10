const router = require('express').Router();
const userRoutes = require('./userController');
const movieRoutes = require('./movieController');

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);

module.exports = router;
