module.exports = function chunkArray(arr,size) {
    let chunked = []
    let start = 0
    while(start < arr.length){
        chunked.push(arr.slice(start, start += size))
    }   
    return chunked
}