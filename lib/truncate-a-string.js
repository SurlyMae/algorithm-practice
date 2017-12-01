module.exports = function truncate(str, num) {
    let truncated = str    
    if (str.length > num){
        if (num <= 3) {
          truncated = str.slice(0, num) + '...'  
        } else {
          truncated = str.slice(0, num -3) + '...'
        } return truncated
    } return truncated
}
