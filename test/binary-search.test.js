const test = require('tape')
const bSearch = require('../lib/binary-search.js')

test('bSearch([1,3,5,7,9],3) should return 1', function(t) {
    let result = bSearch([1,3,5,7,9],3)
    let expected = 1
    t.deepEqual(result,expected)
    t.end()
})

test('bSearch([1,3,5,7,9],-1) should return 1', function(t) {
    let result = bSearch([1,3,5,7,9],3)
    let expected = 1
    t.deepEqual(result,expected)
    t.end()
})