
// TASK 1
function findSum (arr, val) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] + arr[j] === val) {
            return true;
        };
        };
    };
    return false;
} console.log(findSum([2, 5, 6, 2, 5], 8))

// TASK 2
var arr = [1, 2, [3, 4, [5]]];
var flat = arr.join().split(',');
console.log(flat);
// 
const task1 = [ { children: [1, 2, 3] }, { children: [1, 2, 3] } ];

var result = task1.reduce(function(r, o) {
  r = r.concat(o.children);
  return r;
}, []);

console.log(result)
// 
function flatArr(array) {
    var flatArr = [];

    function deep(array)
}


// TASK 3
function third(arr, size) {
    var newArr = [];
    while (arr.length > 0) {
      newArr.push(arr.splice(0, size));
    }
    return newArr;
} console.log(third([1, 2, 3, 4, 5], 3))

// TASK 4
function areEqualObj(a, b) {
    for(var key in a) {
        if(!(key in b) || a[key] !== b[key]) {
            return false;
        }
    }
    for(var key in b) {
        if(!(key in a) || a[key] !== b[key]) {
            return false;
        }
    }
    return true;
} console.log(areEqualObj({ b: 1, a: 1 }, { a: 1, b: 1 }))


// Задача 3 (Разобрать!)
function setArr(arr, arg){
    var count = 0;
    var newArr = [];
    var indArr = [];
    for(var i = 0; i<arr.length; ){

        for(var y = 0; y<arg; y++){

            indArr[y] = arr[i];
            i++;
            if(i === arr.length){
                break;
            }
        }
        newArr[count] = indArr;
        indArr = [];
        count++;
        
    }
    return newArr;
}