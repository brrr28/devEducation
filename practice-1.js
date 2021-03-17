// function isPalindrome(str){
//     var isPalindrome = true
//     for (var i = 0; i < str.length; i++){
//         if (str[i] == str[str.length - i]){
//             isPalindrome = true
//         }
//         else {
//             isPalindrome == false
//         }
//     }
//     return isPalindrome
// }
// console.log(isPalindrome('121'));

// function sumArg (num, str){
//     var result = 0;
//     if(num % 3 == 0 && num % 5 == 0 && num % 15 == 0){
//         num *= -1
//     }
//     result = num + +str;
//     return result;
// } 


// console.log(sumArg(15, '5'))


// План - капкан
// 1. функция (аргумент(строка))
// 2 Создание случаных символов
// 3 Длинна строки
// 4 Начало с заглавной буквы
// 5 Вернуть Valid / Invalid (Если не строка incorrect input data)
    
function isValidCharCode (value, min, max){
    if (value >= min && value <= max){
        return true;
    } 
    return false;
}

function regularVirazheniya (str){
    if (typeof str !== 'string') {
        return 'Incorrect';
    }
    if (str.length <= 2 && str.length >= 20){
        return 'Invalid'
    }
    
    if(str[0] !== str[0].toUpperCase()){
        return 'Invalid'
    }

    var minUpper = 65;
    var maxUpper = 90;
    var minLower = 97;
    var maxLower = 122;
    
    var symbols = [' ', '?', ':', '-', '!', '.']
    var result;
    for (var i = 0; i < str.length; i++){
        if(symbols.indexOf(str[i]) !== -1) {
            result = 'Valid';
        } else {
        return 'Invalid'
        }
    } return result;

}

console.log(regularVirazheniya('Token - !'))
