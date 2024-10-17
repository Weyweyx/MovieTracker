const User = require('./User');
const Watchlist = require('./Watchlist');
const Movie = require('./Movie');
const Review = require('./Review');

User.hasMany(Movie, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Movie.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Watchlist, Movie, Review };