

function findNumber(num) {
    for( var i = 1; i <= num; i++) {
      if ((i % 5 === 0) && (i % 3 === 0)) {
        console.log("threeFive");
      }
      else if (i % 5 === 0) {
        console.log("five");
      }
      else if ((i % 5 === 0)) {
        console.log("three");
      }
      else {
        console.log(i);
      }
      
    }
    
  }
  
  console.log(findNumber(15));
  

for (let i = 0; i <= 15; i++) { mark: 
 for (let j = 0; j <= 20; j++) {
 if (i === 15 && j === 15) {
    break mark;
 }
 console.log(i, j);
 }
 }

//  3) Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
// Анаграмма- слово, которое содержит все буквы другого слова в том же количестве, но ином порядке

function checkAnagramm (str1, str2){
    for(var i = 0; i < str1.length; i++){
        for(var k = 0; i < str2.length; i++){
            if (str1[i] !== str2[i]){
                console.log("Ваше слово не анограмма")
            } else {
                console.log('Ваше слово анограмма')
            }
        } 
    }
}

function checkAnagramm (str1, str2){
    for(var i = 0; i < str1.length; i++){
        for(var k = 0; k < str2.length; k++){
            if (str1[str1.length - 1] !== str2[str2.length - 1]){
                console.log("Ваше слово анограмма");
            } else {
                console.log('Ваше слово не анограмма');
            }
        } 
    }
  }
  console.log(checkAnagramm("фььф", "ььфф"));