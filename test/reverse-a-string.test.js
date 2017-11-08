var test = require('tape')
var reverseString = require('../lib/reverse-a-string.js')

test('reverseString("hello") should return "olleh" ', function(t) {
    var result = reverseString('hello')
    var expected = 'olleh'
    t.deepEqual(result,expected)
    t.end()
})

test('reverseString("Howdy") should return "ydwoH" ', function(t) {
    var result = reverseString('Howdy')
    var expected = 'ydwoH'
    t.deepEqual(result,expected)
    t.end()
})

test('reverseString("Greetings from Earth") should return "htraE morf sgniteerG" ', function(t) {
    var result = reverseString('Greetings from Earth')
    var expected = ('htraE morf sgniteerG')
    t.deepEqual(result,expected)
    t.end()
})

