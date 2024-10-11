const movies = [
    {
        "title": "Bourne Identity",
    },
    {
        "title": "Bourne Supremacy",
    },
    {
        "title": "Bourne Ultimatum",
    },
    {
        "title": "New Hope",
    },
    {
        "title": "Empire Strikes Back",
    },
    {
        "title": "Return of the Jedi",
    },
    {
        "title": "Despicable Me",
    },
    {
        "title": "Despicable Me 2",
    },
    {
        "title": "Despicable Me 3",
    }
]

const { Movie } = require('../models')
const seedMovies = () => Movie.bulkCreate(movies)

module.exports = seedMovies