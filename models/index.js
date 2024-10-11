const User = require('./User');
const Movie = require('./Movie');

User.hasMany(Movie, {
    foreignKey: 'User_id',
    onDelete: 'CASCADE'
});

Movie.belongsTo(User, {
    foreignKey: 'User_id'
});

module.exports = { User, Movie };