// Задача №1 (Условные операторы)

function task1(){
    function plusOrMultiply (num1, num2) {
        if (num1 % 2 === 0) {
            result = num1 * num2
        } else {
            result = num1 + num2
        }
        return result;
    }
    console.log(plusOrMultiply(2, 4));
    console.log(plusOrMultiply(3, 2));
}

// Задача №2 (Условные операторы)

function task2(){
    function getQuarterByCoordinates (x, y) {
        result = 0;
        if (x > 0 && y > 0) {
            console.log("I четверть");
        } else if (x < 0 && y > 0) {
            result = "II четверть";
        } else if (x < 0 && y < 0) {
            result = "III четверть";
        } else if (x > 0 && y < 0) {
            result = "IV четверть";
        } else {
            result = "Точка в начале координат"
        }

        return result;
    }
    console.log(getQuarterByCoordinates(3, 4));
    console.log(getQuarterByCoordinates(-3, 5));
}

// Задача №3 (Условные операторы) 

function task3(){
    function sumPositiveNumbers (num1, num2, num3){
        var sum = 0;
        if (num1 > 0) {
            sum += num1;
        }
        if (num2 > 0) {
            sum += num2;
        }
        if (num3 > 0){
            sum += num3;
        }
        return sum;
    }
    console.log(sumPositiveNumbers(1, 4, -6));
}

// Задача №4 (Условные операторы)
  
    function task4 (a,b,c){
        // return((Math.max(a*b*c,a+b+c))+3)
    
        var res = (a*b*c)>(a+b+c) ? (a*b*c)+3 : (a+b+c)+3
        return res
    }     

// Задача №5 (Условные операторы)

function task5() {
var score = +prompt("Сколько баллов вы получили?")

if (score >= 0 && score <= 19 ) {
        alert("Плохо. Ваша оценка 'F'")
    } else if (score >= 20 && score <= 39){
        alert("Вы можете и лучше. Ваша оценка 'E'")
    } else if (score >= 40 && score <= 59){
        alert("Неплохо. Ваша оценка 'D'")
    } else if (score >= 60 && score <= 74){
        alert("Хороший результат. Ваша оценка 'C'")
    } else if (score >= 75 && score <= 89){
        alert("Отлично! Ваша оценка 'B'")
    } else if (score >= 90 && score <= 100){
        alert("Превосходно! Высший бал 'A'")
    } else {
        alert("Введите корректную оценку от 0 до 100")
    }
}

// -------------------------------------------------------------

// Задача №1 (Циклы) Найти сумму четных чисел и их количество
// В диапазоне от 0 до 100

function task1_2 (num1){
    var sum = 0;

    for (var i = 0; i < num1; i++){
        if (i % 2 === 0){
            sum += i;
        }
    }
    return sum;
}

// Задача №2 (Циклы) Проверить простое ли число (на себя и на 1)

function task2_2 (){

    function simCheck (num){
        for (i = 2; i < num; i++){
            if (num % i === 0){
                return false;
            } 
        }
        return true;           
    }
}
console.log(simCheck(6))

// Задача №3 (Циклы)

function task3_2(){
var n = parseInt(prompt('Введите число чтобы узнать его корень:'))
var low = 0;
var mid = 0;
var high = n;

while ((high-low) > 1) {
    mid = Math.floor((high+low)/2);
    if ((mid*mid) <= n){
        low = mid;
        console.log(low);
    } else {
        high = mid;
        console.log(high);
    }
}
console.log(low);
}

// Задача №4 (Циклы)

function task4_2 () {
    let total = 1;
    for (i = 0; 1 < n; i++) {
    
    total = total * (n - i);
    }
    return total;
}

// Задача №5 (Циклы)

function task5_2 (number1) {
    var numStr = "" + number1
    var sum = 0
    
    for (var i = 0; i < numStr.length; i++){ 
        sum += +numStr[i]
    
    return sum
}
}

// Задача №6 (Циклы)

function task6_2(number) {
        var numStr = number + ""
        return +numStr.split("").reverse().join("");
}

// Задача №1 (Одномерные массивы)

function task1_3(){
var minNum = [5, -1, 40, 355, 17, 3];

for (var i = 0; i < minNum.length; i++) {
    if(minNum[i] > minNum[0]){
        minNum[0] = minNum[i]
    }
}

alert(minNum[0]);
}

// Задача №2 (Одномерные массивы)

function task2_3 (){
var maxNum = [5, -1, 40, 355, 17, 3];

for (var i = 0; i < maxNum.length; i++) {
    if(maxNum[i] > maxNum[0]){
        maxNum[0] = maxNum[i]
    }
}

alert(maxNum[0]);
}

// Доп решение к задаче 1 и 2!

var arr1 = [1, -4, 5, 192, 142, -130]
function minArr () {Math.min.apply(null, arr1)};
function maxArr () {Math.max.apply(null, arr1)};

// Задача №3 (Одномерные массивы)

function minInd(arr){
    var minInd = 0

    for( var i=1; i<arr.length+1;i++){
        if(arr[minInd]>arr[i]){
            minInd=i
        }
    }

    return minInd
}

// Задача №4 (Одномерные массивы)

function maxInd(arr){
    var maxInd = 0

    for( var i=1; i<arr.length+1;i++){
        if(arr[maxInd]<arr[i]){
            maxInd=i
        }
    }

    return maxInd
}

// Задача 5 (Одномерные массивы)

function sumElOdd(arr){
    var res = 0

    for(var i = 0 ; i < arr.length+1; i++){
        if(i % 2==0){
            res += arr[i]
        }
    }
    return res
}

// console.log(sumElOdd([5, 48, 3, 10, 11]));
// console.log(sumElOdd([2, 4, 10, 33, 12]))
// console.log(sumElOdd([13, 4, 22, 46, 33]))


// Задача 6 (Одномерные массивы)

function arrRev(arr){
    var newArr=[]
    for(var i=arr.length-1;i>-1;i--){
        newArr.push(arr[i])
    }
    return newArr
}

// console.log(arrRev([2, 4, 12, 14, 88, 2, 1]))
// console.log(arrRev([83, 2, 53, 12]))


// Задача 7 (Одномерные массивы)

function countOddElem(arr){
    var count = 0

    for(var i=0 ; i<arr.length+1; i++){
        if(arr[i]%2==0){
            count += 1
        }
    }
    return count
}

console.log(countOddElem([12, 4, 26, 44, 26, 11, 12]))


// Задача 8 (Одномерные)

function revHalf(arr){
    
//при нечетной длинне массива, забирает в первую половину на один элемент больше
    let halfArr = Math.round(arr.length/2)
    
    let firstHalf = arr.slice(0,halfArr)
    let secondHalf = arr.slice(halfArr,arr.length)

    let reversedHalf = secondHalf.concat(firstHalf)
    
    return reversedHalf



//при нечетной длинне массива, средний элемент оставляет на месте, оставшиеся половины меняет местами

    var halfArr = Math.round(arr.length/2)
    var reversedHalf
    var firstHalf
    var secondHalf
    if(arr.length%2==0){
        firstHalf = arr.slice(0,halfArr)
        secondHalf = arr.slice(halfArr,arr.length)
        reversedHalf = secondHalf.concat(firstHalf)
    }
    else{
        firstHalf = arr.slice(0,halfArr-1)
        secondHalf = arr.slice(halfArr,arr.length)
        reversedHalf= secondHalf.concat(firstHalf)
        reversedHalf.splice(halfArr-1,0,arr[halfArr-1])
    }
    return reversedHalf



    var halfArr = Math.round(arr.length/2)
    var reversedHalf=[]
    for(var i=halfArr; i<arr.length;i++){
        reversedHalf.push(arr[i])
    }
    reversedHalf.push(arr[halfArr-1])
    for(var j=0; j<halfArr-1;j++){
        reversedHalf.push(arr[j])
    }

    return reversedHalf
}

console.log(revHalf([1, 2, 3, 4]))
console.log(revHalf([34, 22, 1, 12, 65]))
console.log(revHalf([6, 4, 23, 12]))


/// 9 ///

function bubbleSort(arr){
    var newArr = []

    for(var j=0;j<arr.length;){
        for(var i=0; i<arr.length; i++){
            if(arr[i]>arr[i+1]){
                var f = arr[i]
                arr[i] =arr[i+1]
                arr[i+1] =  f
            }
        }
        newArr[arr.length-1]=arr[arr.length-1]
        arr.pop()
    }
    return newArr
}

console.log('bubble ', bubbleSort([5, 48, 3, 10, 11, 2, 15]))
console.log('bubble ', bubbleSort([4, 25, 12, 6, 44]))
console.log('bubble ', bubbleSort([34, 12, 33, 21]))


function selSort(arr){
    var newArr=[]

    for(let j=0;j<arr.length;){
        var res = arr[0]
        indexRes = 0
            for( var i=0; i<arr.length+1;i++){
                if(arr[i]<res){
                    res=arr[i]
                    indexRes = i
                }
            }
        newArr.push(res);
        arr.splice(indexRes, 1);
    }

    return newArr
}

console.log('select ', selSort([5, 48, 3, 10, 11, 2, 15]))
console.log('select ', selSort([4, 25, 12, 6, 44]))
console.log('select ', selSort([34, 12, 33, 21]))


function insSort(arr){
    for (var i = 1; i < arr.length; i++) {
        var t = arr[i];
        var j = i;
        while (j > 0 && arr[j - 1] > t) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = t;
    }
    return arr
}

console.log('insert ', insSort([5, 48, 3, 10, 11, 2, 15]))
console.log('insert ', insSort([4, 25, 12, 6, 44]))
console.log('insert ', insSort([34, 12, 33, 21]))