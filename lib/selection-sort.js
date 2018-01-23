module.exports = {
    selectionSortAsc(arr){
        for (let i = 0; i < arr.length - 1; i++) {
            let first = i
            for (let j = i + 1; j < arr.length; j++) {
                if(arr[j] < arr[first]) {
                    first = j
                }
            }
            if (first != i) {
                let temp = arr[i]
                arr[i] = arr[first]
                arr[first] = temp
            }
        } return arr
    },
    selectionSortDesc(arr){
        for (let i = 0; i < arr.length - 1; i++) {
            let first = i
            for (let j = i + 1; j < arr.length; j++) {
                if(arr[j] > arr[first]) {
                    first = j
                }
            }
            if (first != i) {
                let temp = arr[i]
                arr[i] = arr[first]
                arr[first] = temp
            }
        } return arr
    },
    selectionSortObj(arr){
        for (let i = 0; i < arr.length - 1; i++) {
          let first = i
            for (let j = i + 1; j < arr.length; j++) {
                if(arr[j].age < arr[i].age) {
                    i = j
                }
            }
            if (first != i) {
                let temp = arr[i]
                arr[i] = arr[first]
                arr[first] = temp
            }
        } return arr
    }
}