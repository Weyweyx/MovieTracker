const User = require('./User');
const Watchlist = require('./Watchlist');
const Movie = require('./Movie');
const Review = require('./Review');

// User.hasOne(Watchlist, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Watchlist.belongsTo(User, {
//     foreignKey: 'user_id'
// });

User.hasMany(Movie, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Movie.belongsTo(User, {
    foreignKey: 'user_id'
})

// User.belongsToMany(Movie, {
//     through: {
//         model: Watchlist,
//         unique: false
//     },
//     as: 'movies_to_watch'
// })

// Movie.belongsToMany(User, {
//     through: {
//         model: Watchlist,
//         unique: false
//     },
//     as: 'movie_fans'
// })

// User.hasMany(Review, {
//     foreignKey: 'user_id'
// })

// Review.belongsTo(User, {
//     foreignKey: 'user_id'
// })

// Movie.hasMany(Review, {
//     foreignKey: 'movie_id'
// })

// Review.belongsTo(Movie, {
//     foreignKey: 'movie_id'
// })

module.exports = { User, Watchlist, Movie, Review };