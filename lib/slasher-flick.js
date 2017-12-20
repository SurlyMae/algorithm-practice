module.exports = function slash(arr,howMany){
    let remaining
    if(howMany !== 0){
        remaining = arr.splice(howMany)
    } else {remaining = arr}
    return remaining
}