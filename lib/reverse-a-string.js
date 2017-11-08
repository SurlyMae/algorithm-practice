module.exports = function reverseString(str) {
    let reversed = str.split('').reverse().join('')
    return reversed
}