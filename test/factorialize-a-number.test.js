var test = require('tape')
var factorialize = require ('../lib/factorialize-a-number.js')

test('factorialize(5) should return 120 ', function(t) {
    let result = factorialize(5)
    let expected = 120
    t.deepEqual(result,expected)
    t.end()
})

test('factorialize(10) should return 3628800', function(t) {
    let result = factorialize(10)
    let expected = 3628800
    t.deepEqual(result,expected)
    t.end()
})

test('factorialize(20) should return 2432902008176640000', function(t) {
    let result = factorialize(20)
    let expected = 2432902008176640000
    t.deepEqual(result,expected)
    t.end()
})
    
test('factorialize(0) should return 1', function(t) {
    let result = factorialize(0)
    let expected = 1
    t.deepEqual(result,expected)
    t.end()
})