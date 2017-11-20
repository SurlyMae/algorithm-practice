module.exports = function titleCase(str){
    let preppedStr = str.toLowerCase().split(' ')
    let cased = []
    preppedStr.forEach((word) => {
        cased.push(word[0].toUpperCase() + word.substr(1))
        })
    return cased.join(' ')
}