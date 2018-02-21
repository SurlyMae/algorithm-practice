 const test = require('tape')
 const bounce = require('../lib/falsy-bouncer.js')

test('bounce([7,"ate","",false,9]) should return [7,"ate",9]', function(t) {
    let result = bounce([7,"ate","",false,9])
    let expected = [7,"ate",9]
    t.deepEqual(result,expected)
    t.end()
})

test('bounce(["a","b","c"]) should return ["a","b","c"]', function(t) {
    let result = bounce(["a","b","c"])
    let expected = ["a","b","c"]
    t.deepEqual(result,expected)
    t.end()
})

test('bounce([false,null,0,NaN,undefined,""]) should return []', function(t) {
    let result = bounce([false,null,0,NaN,undefined,""])
    let expected = []
    t.deepEqual(result,expected)
    t.end()
})

test('bounce([1,null,NaN,2,undefined]) should return [1,2]', function(t) {
    let result = bounce([1,null,NaN,2,undefined])
    let expected = [1,2]
    t.deepEqual(result,expected)
    t.end()
})