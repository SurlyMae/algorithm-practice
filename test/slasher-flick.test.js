const test = require('tape')
const slash = require('../lib/slasher-flick.js')

test('slash([1,2,3],2) should return [3]', function(t){
    let result = slash([1,2,3],2)
    let expected = [3]
    t.deepEqual(result,expected)
    t.end()
})

test('slash([1,2,3],0) should return [1,2,3]', function(t) {
    let result = slash([1,2,3],0)
    let expected = [1,2,3]
    t.deepEqual(result,expected)
    t.end()
})

test('slash([1,2,3],9) should return []', function(t) {
    let result = slash([1,2,3],9)
    let expected = []
    t.deepEqual(result,expected)
    t.end()
})

test('slash([1,2,3],4) should return []', function(t) {
    let result = slash([1,2,3],4)
    let expected = []
    t.deepEqual(result,expected)
    t.end()
})

test('slash(["burgers","fries","shake"],1) should return ["fries","shake"]', function(t) {
    let result = slash(["burgers","fries","shake"],1)
    let expected = ["fries","shake"]
    t.deepEqual(result,expected)
    t.end()
})

test('slash([1,2,"chicken",3,"potatoes","cheese",4],5) should return ["cheese",4]', function(t) {
    let result = slash([1,2,"chicken",3,"potatoes","cheese",4],5)
    let expected = ["cheese",4]
    t.deepEqual(result,expected)
    t.end()
})