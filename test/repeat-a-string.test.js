const test = require('tape')
const repeat = require('../lib/repeat-a-string.js')

test('repeat("*",3) should return a string', function(t) {
    let result = typeof repeat("*",3)
    let expected = 'string'
    t.deepEqual(result,expected)
    t.end()
})

test('repeat("*",3) should return "***" ', function(t) {
    let result = repeat("*",3)
    let expected = "***"
    t.deepEqual(result,expected)
    t.end()
})

test('repeat("abc",3) should return "abcabcabc" ', function(t) {
    let result = repeat("abc",3)
    let expected = "abcabcabc"
    t.deepEqual(result,expected)
    t.end()
})

test('repeat("abc",4) should return "abcabcabcabc" ', function(t) {
    let result = repeat("abc",4)
    let expected = "abcabcabcabc"
    t.deepEqual(result,expected)
    t.end()
})

test('repeat("*",8) should return "********" ', function(t) {
    let result = repeat("*",8)
    let expected = "********"
    t.deepEqual(result,expected)
    t.end()
})

test('repeat("abc",-2) should return "" ', function(t) {
    let result = repeat("abc",-2)
    let expected = ""
    t.deepEqual(result,expected)
    t.end()
})