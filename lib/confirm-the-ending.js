module.exports = function confirmEnding(str,target) {
    return str.substr(-(target.length)) === target ? true : false

}