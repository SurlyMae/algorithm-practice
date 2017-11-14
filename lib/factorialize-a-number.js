module.exports = function factorialize(int) {
    let ints = []
    for(i = 1; i <= int; i++) {
        ints.push(i)
    }
    let factorial = ints.reduce( (a,c) => a*c, 1 )
    return factorial
}
