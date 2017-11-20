module.exports = function longestWord(str){
    let wordLengths = [];
    let preppedStr = str.split(' ')
    preppedStr.forEach(function(word) {
      wordLengths.push(word.length)
    }) 
    wordLengths.sort((a,b) => {
        return a-b
      })
    return wordLengths.pop()
};