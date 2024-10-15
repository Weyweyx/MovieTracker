const router = require('express').Router();
const { Watchlist } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const watchlistData = await Watchlist.create(req.body);
      const watchlists = watchlistData.map((user) => user.get({ plain: true }));
      res.status(200).json(watchlists);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
module.exports = router
