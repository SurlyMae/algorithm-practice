const test = require('tape')
const findLargest = require('../lib/return-largest-numbers-in-array.js')

test('findLargest([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]) should return an array', function(t) {
    let result = typeof findLargest([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]])
    let expected = 'object'
    t.deepEqual(result,expected)
    t.end()
})

test('findLargest([[13,27,18,26],[4,5,1,3],[32,35,37,39],[1000,1001,857,1]]) should return [27,5,39,1001]', function(t) {
    let result = findLargest([[13,27,18,26],[4,5,1,3],[32,35,37,39],[1000,1001,857,1]])
    let expected = [27,5,39,1001]
    t.deepEqual(result,expected)
    t.end() 
})

test('findLargest([[4,9,1,3],[13,35,18,26],[32,35,97,39],[1000000,1001,857,1]]) should return [9,35,97,1000000]', function(t) {
    let result = findLargest([[4,9,1,3],[13,35,18,26],[32,35,97,39],[1000000,1001,857,1]])
    let expected = [9,35,97,1000000]
    t.deepEqual(result,expected)
    t.end()
})