const users = [
    {
        "username": "BourneFan",
        "email": "bournefan@yahoo.com",
        "password": "biggestbournefan"
    },
    {
        "username": "StarWarsFan",
        "email": "starwarsfan@yahoo.com",
        "password": "biggeststarwarsfan"
    },
    {
        "username": "GruFan",
        "email": "grufan@yahoo.com",
        "password": "biggestgrufan"
    }
]

const { User } = require('../models')
const seedUsers = () => User.bulkCreate(users)

module.exports = seedUsers