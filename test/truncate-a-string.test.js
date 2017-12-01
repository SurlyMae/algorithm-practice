const test = require('tape')
const truncate = require('../lib/truncate-a-string.js')

test('truncate("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket..." ', function(t) {
    let result = truncate("A-tisket a-tasket A green and yellow basket", 11)
    let expected = "A-tisket..."
    t.deepEqual(result,expected)
    t.end()
})

test('truncate("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper..." ', function(t) {
    let result = truncate("Peter Piper picked a peck of pickled peppers", 14)
    let expected = "Peter Piper..."
    t.deepEqual(result,expected)
    t.end()
})

test('truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket" ', function(t) {
    let result = truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
    let expected = "A-tisket a-tasket A green and yellow basket"
    t.deepEqual(result,expected)
    t.end()
})

test('truncate("A-", 1) should return "A..." ', function(t) {
    let result = truncate("A-", 1)
    let expected = "A..."
    t.deepEqual(result,expected)
    t.end()
})

test('truncate("Absolutely longer", 2) should return "Ab..." ', function(t) {
    let result = truncate("Absolutely longer",2)
    let expected = "Ab..."
    t.deepEqual(result,expected)
    t.end()
})
