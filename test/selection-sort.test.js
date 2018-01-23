const test = require('tape')
const sorters = require('../lib/selection-sort.js')

test('selSortAsc([5,3,6,2,10]) should return [2,3,5,6,10]', function(t) {
    let result = sorters.selectionSortAsc([5,3,6,2,10])
    let expected = [2,3,5,6,10]
    t.deepEqual(result,expected)
    t.end()
})

test('selSortDesc([34,23,12,45,9,1,24]) should return [45,34,24,23,12,9,1]', function(t) {
    let result = sorters.selectionSortDesc([34,23,12,45,9,1,24])
    let expected = [45,34,24,23,12,9,1]
    t.deepEqual(result,expected)
    t.end()
})

let people =    [ { "name": "john","age": "23"},
                {"name": "harry","age": "21"},
                {"name": "jack","age": "25"} ]

let sortedPeople =  [ { "name": "harry","age": "21"},
                    {"name": "john","age": "23"},
                    {"name": "jack","age": "25"} ]

test('selSortObj(people) should return sortedPeople', function(t) {
    let result = sorters.selectionSortObj(people)
    let expected = sortedPeople
    t.deepEqual(result,expected)
    t.end()
})
