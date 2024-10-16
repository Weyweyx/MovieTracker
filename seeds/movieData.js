const movies = [
    {
        "title": "Bourne Identity",
        "user_id": 1
    },
    {
        "title": "Bourne Supremacy",
        "user_id": 1
    },
    {
        "title": "Bourne Ultimatum",
        "user_id": 1
    },
    {
        "title": "New Hope",
        "user_id": 2
    },
    {
        "title": "Empire Strikes Back",
        "user_id": 2
    },
    {
        "title": "Return of the Jedi",
        "user_id": 2
    },
    {
        "title": "Despicable Me",
        "user_id": 3
    },
    {
        "title": "Despicable Me 2",
        "user_id": 3
    },
    {
        "title": "Despicable Me 3",
        "user_id": 3
    }
]

const { Movie } = require('../models')
const seedMovies = () => Movie.bulkCreate(movies)

module.exports = seedMovies