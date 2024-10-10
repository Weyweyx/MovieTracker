const movies = [
    {
        "title": "Bourne Identity",
        "User_id": 1
    },
    {
        "title": "Bourne Supremacy",
        "User_id": 1
    },
    {
        "title": "Bourne Ultimatum",
        "User_id": 1
    },
    {
        "title": "New Hope",
        "User_id": 2
    },
    {
        "title": "Empire Strikes Back",
        "User_id": 2
    },
    {
        "title": "Return of the Jedi",
        "User_id": 2
    },
    {
        "title": "Despicable Me",
        "User_id": 3
    },
    {
        "title": "Despicable Me 2",
        "User_id": 3
    },
    {
        "title": "Despicable Me 3",
        "User_id": 3
    }
]

const { Movie } = require('../models')
const seedMovies = () => Movie.bulkCreate(movies)

module.exports = seedMovies