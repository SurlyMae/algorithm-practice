const test = require('tape')
const mutate = require('../lib/mutations.js')

test('mutate(["hello","hey"]) should return false', function(t) {
    let result = mutate(["hello","hey"])
    let expected = false
    t.deepEqual(result,expected)
    t.end()
})

test('mutate(["hello","Hello"]) should return true', function(t) {
    let result = mutate(["hello","Hello"])
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('mutate(["zyxwvutsrqponmlkjihgfedcba","qrstu"]) should return true', function(t) {
    let result = mutate(["zyxwvutsrqponmlkjihgfedcba","qrstu"])
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('mutate(["Mary","Army"]) should return true', function(t) {
    let result = mutate(["Mary","Army"])
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('mutate(["Mary","Aarmy"]) should return true', function(t) {
    let result = mutate(["Mary","Aarmy"])
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('mutate(["Alien","line"]) should return true', function(t) {
    let result = mutate(["Alien","line"])
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('mutate(["floor","for"]) should return true', function(t) {
    let result = mutate(["floor","for"])
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('mutate(["hello","neo"]) should return false', function(t) {
    let result = mutate(["hello","neo"])
    let expected = false
    t.deepEqual(result,expected)
    t.end()
})

test('mutate(["voodoo","no"]) should return false', function(t) {
    let result = mutate(["voodoo","no"])
    let expected = false
    t.deepEqual(result,expected)
    t.end()
})
