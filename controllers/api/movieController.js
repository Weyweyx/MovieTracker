const router = require('express').Router();
const { Movie, User, Watchlist } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const movieData = await Movie.findAll()
    const movies = movieData.map((movie) => movie.get({ plain: true }));
    res.json(movies)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id, {
      include: [{ model: User, through: Watchlist, as: 'movie_fans' }]
    });

    if (!movieData) {
      res.status(404).json({ message: 'No movie found with this id!' });
      return;
    }

    res.status(200).json(movieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    // if move title exists, do not create a new movie
    res.status(200).json(newMovie);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const movieData = await Movie.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!movieData) {
      res.status(404).json({ message: 'No movie found with this id!' });
      return;
    }

    res.status(200).json(movieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
