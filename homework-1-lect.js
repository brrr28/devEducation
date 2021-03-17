// function a() {
//     var result = "";
//     for (var i = 1; i <= 6; i++) {
//         for (var k = 1; k <= 6; k++) {
//         result += "* ";
//         }
//         result += "\n";
//     }
//     return result;
//     }

//     console.log(a())

// function two() {
//     var result = "";
//     for (var i = 0; i <= 6; i++) {
//         if (i == 0 || i == 6) {
//         for (var k = 0; k <= 6; k++) {
//             result += " * ";
//         }
//         } else {
//         for (var k = 0; k < 1; k++) {
//             result += " * ";
//         }
//         for (var k = 1; k < 6; k++) {
//             result += "   ";
//         }
//         for (var k = 6; k <= 6; k++) {
//             result += " * ";
//         }
//         }
//         result += "\n";
//     }
//     return result;
//     }

//     console.log(two())

    function seven (){
        var result = '';
        for (var i = 0; i <= 6; i++){
            if (i == 0){
                for (var k = 0; k < 6; k++)
                    if(k == 0 || k == 6)
                result += ' * ' 
            } result += '\n'
        } return result;
    }

    console.log(seven())