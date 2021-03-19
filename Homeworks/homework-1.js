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

// Задача №4 (Условные операторы) НЕ ВЫПОЛНЕНА!

function task4(){       

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

// Задача №3 (Циклы) НЕ ВЫПОЛНЕНА!

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

// Задача №3 

if (true || console.log(5)) {
    console.log(6);
}

if (true && console.log(10)) {
    console.log(3);
}

if (false & console.log(10)) {
    console.log(3);
}

if (console.log(2) & console.log(1)) {
    console.log(10);
}