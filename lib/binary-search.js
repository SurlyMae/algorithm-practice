module.exports = function bSearch(list,item) {
    var low = 0
    var high = list.length - 1
    
    while (low <= high) {
        var mid = Math.floor((low + high) / 2)
        var guess = list[mid]
        if (guess == item) {
            return mid
        }
        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        } 
    } return 'not found'
}