
const fortunes = require('./fortune.json')

module.exports = function getFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length)
    return fortunes[randomIndex]
}