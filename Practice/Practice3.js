
function findSum (arr, val) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] + arr[j] === val) {
            return true;
        };
        };
    };
    return false;
};

console.log(findSum([2, 5, 6, 2, 5], 1))