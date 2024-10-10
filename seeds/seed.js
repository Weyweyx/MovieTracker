const sequelize = require('../config/connection')
const seedUsers = require('./userData')
const seedMovies = require('./movieData')

const seedAll = async () => {
    await sequelize.sync({ force: true })
    await seedUsers()
    await seedMovies()
    process.exit(0)
}

seedAll()
