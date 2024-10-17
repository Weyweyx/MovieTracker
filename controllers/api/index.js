const router = require('express').Router();
const userRoutes = require('./userController');
const movieRoutes = require('./movieController');
const watchlistRoutes = require('./watchlistController')
const trailerRoutes = require('./trailerController')


router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/watchlist', watchlistRoutes)
router.use("/trailer",trailerRoutes)

module.exports = router;
