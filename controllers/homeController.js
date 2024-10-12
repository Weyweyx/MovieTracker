const router = require('express').Router();
const { Movie, User, Watchlist } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const movieData = await Movie.findAll()
    const movies = movieData.map((movie) => movie.get({ plain: true }));
    res.render('homepage', {
      movies,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/movie/:id', async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id);

    const movies = movieData.get({ plain: true });

    res.render('movie', {
      ...movies,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  const id = req.session.user_id
  try {
    const userData = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Movie }]
    })
    // const movies = await Movie.findAll({
    //   where: { user_id: id }
    // });

    const user = userData.get({ plain: true });
    // const movies = movieData.get({ plain: true })

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
