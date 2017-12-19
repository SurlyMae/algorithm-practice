const test = require('tape')
const chunk = require('../lib/chunky-monkey.js')

test('chunk(["a","b","c","d"],2) should return [["a","b"],["c","d"]]', function(t) {
    let result = chunk(["a","b","c","d"],2)
    let expected = [["a","b"],["c","d"]]
    t.deepEqual(result,expected)
    t.end()
})

test('chunk([0,1,2,3,4,5],3) should return [[0,1,2],[3,4,5]]', function(t) {
    let result = chunk([0,1,2,3,4,5],3)
    let expected = [[0,1,2],[3,4,5]]
    t.deepEqual(result,expected)
    t.end()
})

test('chunk([0,1,2,3,4,5],2) should return [[0,1],[2,3],[4,5]]', function(t) {
    let result = chunk([0,1,2,3,4,5],2)
    let expected = [[0,1],[2,3],[4,5]]
    t.deepEqual(result,expected)
    t.end()
})

test('chunk([0,1,2,3,4,5],4) should return [[0,1,2,3],[4,5]]', function(t) {
    let result = chunk([0,1,2,3,4,5],4)
    let expected = [[0,1,2,3],[4,5]]
    t.deepEqual(result,expected)
    t.end()
})

test('chunk([0,1,2,3,4,5,6],3) should return [[0,1,2],[3,4,5],[6]]', function(t) {
    let result = chunk([0,1,2,3,4,5,6],3)
    let expected = [[0,1,2],[3,4,5],[6]]
    t.deepEqual(result,expected)
    t.end()
})

test('chunk([0,1,2,3,4,5,6,7,8],4) should return [[0,1,2,3],[4,5,6,7],[8]]', function(t) {
    let result = chunk([0,1,2,3,4,5,6,7,8],4)
    let expected = [[0,1,2,3],[4,5,6,7],[8]]
    t.deepEqual(result,expected)
    t.end()
})