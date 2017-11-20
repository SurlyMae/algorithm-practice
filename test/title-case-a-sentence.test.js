const test = require('tape')
const titleCase = require('../lib/title-case-a-sentence.js')

test('titleCase("I\'m a little tea pot") should return a string', function(t) {
    let result = typeof titleCase("I'm a little tea pot")
    let expected = 'string'
    t.deepEqual(result,expected)
    t.end()
})

test('titleCase("I\'m a little tea pot") should return "I\'m A Little Tea Pot" ', function(t) {
    let result = titleCase("I'm a little tea pot")
    let expected = "I'm A Little Tea Pot"
    t.deepEqual(result,expected)
    t.end()
})

test('titleCase("sHoRt AnD sToUt") should return "Short And Stout', function(t) {
    let result = titleCase("sHoRt AnD sToUt")
    let expected = "Short And Stout"
    t.deepEqual(result,expected)
    t.end()
})

test('titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout', function(t) {
    let result = titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
    let expected = "Here Is My Handle Here Is My Spout"
    t.deepEqual(result,expected)
    t.end()
})