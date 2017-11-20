const test = require('tape')
const longest = require('../lib/find-longest-word-in-sentence.js')

test('longest("The quick brown fox jumped over the lazy dog") should return a number', function(t) {
    let result = typeof longest("The quick brown fox jumped over the lazy dog")
    let expected = 'number'
    t.deepEqual(result,expected)
    t.end()
})

test('longest("The quick brown fox jumped over the lazy dog") should return 6', function(t) {
    let result = longest("The quick brown fox jumped over the lazy dog")
    let expected = 6
    t.deepEqual(result,expected)
    t.end()
})

test('longest("May the force be with you") should return 5', function(t) {
    let result = longest("May the force be with you")
    let expected = 5
    t.deepEqual(result,expected)
    t.end()
})

test('longest("Google do a barrel roll") should return 6', function(t) {
    let result = longest("Google do a barrel roll")
    let expected = 6
    t.deepEqual(result,expected)
    t.end()
})

test('longest("What is the average airspeed velocity of an unladen swallow") should return 8', function(t) {
    let result = longest("What is the average airspeed velocity of an unladen swallow")
    let expected = 8
    t.deepEqual(result,expected)
    t.end()
})

test('longest("What if we try a super-long word such as otorhinolaryngology") should return 19', function(t) {
    let result = longest("What if we try a super-long word such as otorhinolaryngology")
    let expected = 19
    t.deepEqual(result,expected)
    t.end()
})

