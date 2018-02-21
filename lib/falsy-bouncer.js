module.exports = function falsyBouncer(arr) {
    return arr.filter(el => Boolean(el))
}