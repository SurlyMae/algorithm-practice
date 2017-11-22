const test = require('tape')
const confirmEnding = require('../lib/confirm-the-ending.js')

test('confirmEnding("Bastian","n") should return true', function(t) {
    let result = confirmEnding("Bastian","n")
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('confirmEnding("Connor","n") should return false', function(t) {
    let result = confirmEnding("Connor","n")
    let expected = false
    t.deepEqual(result,expected)
    t.end()
})

test('confirmEnding("Walking on water and developing software from a specification are easy if both are frozen","specification") should return false', function(t) {
    let result = confirmEnding("Walking on water and developing software from a specification are easy if both are frozen","specification")
    let expected = false
    t.deepEqual(result,expected)
    t.end()
})

test('confirmEnding("He has to give me a new name", "name") should return true', function(t) {
    let result = confirmEnding("He has to give me a new name", "name")
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('confirmEnding("Open sesame","same") should return true', function(t) {
    let result = confirmEnding("Open sesame","same")
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('confirmEnding("Open sesame","pen") should return false', function(t) {
    let result = confirmEnding("Open sesame","pen")
    let expected = false
    t.deepEqual(result,expected)
    t.end()
})

test('confirmEnding("If you want to save our world, you must hurry. We don\'t know how much longer we can withstand the nothing","mountain") should return false', function(t) {
    let result = confirmEnding("If you want to save our world, you must hurry. We don\'t know how much longer we can withstand the nothing","mountain")
    let expected = false
    t.deepEqual(result,expected)
    t.end()
})
