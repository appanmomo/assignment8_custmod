
const fortunes = require('./fortunes.json')

module.exports = function getFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length)
    return fortunes[randomIndex]
}