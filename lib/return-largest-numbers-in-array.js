module.exports = function findLargest(arr){
    let largest = []
    arr.forEach((el) => {
      el.sort((a,b) => {
        return b-a
      })
      largest.push(el.shift())
    })
    return largest
}