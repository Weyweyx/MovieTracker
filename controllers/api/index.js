const router = require('express').Router();
const userRoutes = require('./userController');
const movieRoutes = require('./movieController');
const watchlistRoutes = require('./watchlistController')

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/watchlist', watchlistRoutes)

module.exports = router;
