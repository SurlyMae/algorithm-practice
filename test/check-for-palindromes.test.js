var test = require ('tape')
var palindrome = require('../lib/check-for-palindromes.js')

test('palindrome("eye") should return a boolean', function(t) {
    let result = typeof palindrome("eye")
    let expected = "boolean"
    t.deepEqual(result,expected)
    t.end()
})

test('palindrome("eye") should return true', function(t) {
    let result = palindrome("eye")
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('palindrome("_eye") should return true', function(t) {
    let result = palindrome("_eye")
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('palindrome("race car" should return true', function(t) {
    let result = palindrome("race car")
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('palindrome("not a palindrome") should return false', function(t) {
    let result = palindrome("not a palindrome")
    let expected = false
    t.deepEqual(result,expected)
    t.end()
})

test('palindrome("A man, a plan, a canal. Panama") should return true', function(t) {
    let result = palindrome("A man, a plan, a canal. Panama")
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('palindrome("never odd or even") should return true', function(t) {
    let result = palindrome("never odd or even")
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('palindrome("nope") should return false', function(t) {
    let result = palindrome("nope")
    let expected = false
    t.deepEqual(result,expected)
    t.end()
})

test('palindrome("almostomla") should return false', function(t) {
    let result = palindrome("almostomla")
    let expected = false
    t.deepEqual(result,expected)
    t.end()
})

test('palindrome("My age is 0, 0 si ega ym.") should return true', function(t) {
    let result = palindrome("My age is 0, 0 si ega ym.")
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('palindrome("1 eye for of 1 eye.") should return false', function(t) {
    let result = palindrome("1 eye for of 1 eye.")
    let expected = false
    t.deepEqual(result,expected)
    t.end()
})

test('palindrome("0_0 (: /-\ :) 0-0") should return true', function(t) {
    let result = palindrome("0_0 (: /-\ :) 0-0")
    let expected = true
    t.deepEqual(result,expected)
    t.end()
})

test('palindrome("five|\_/|four") should return false', function(t) {
    let result = palindrome("five|\_/|four")
    let expected = false
    t.deepEqual(result,expected)
    t.end()
})