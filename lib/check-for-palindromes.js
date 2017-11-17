module.exports = function palindrome(str) {
    let preppedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let copiedStr = preppedStr.split('').reverse().join('')
    if (preppedStr === copiedStr) {
        return true
    } else return false
}



