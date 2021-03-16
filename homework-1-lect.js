function a() {
    var q = "";
    for (var i = 1; i <= 6; i++) {
        for (var k = 1; k <= 6; k++) {
        q += "* ";
        }
        q += "\n";
    }
    return q;
    }

    console.log(a())

function two() {
    var result = "\n";
    for (var i = 0; i <= 6; i++) {
        if (i == 0 || i == 6) {
        for (var k = 0; k <= 6; k++) {
            result += " * ";
        }
        } else {
        for (var k = 0; k < 1; k++) {
            result += " * ";
        }
        for (var k = 1; k < 6; k++) {
            result += "   ";
        }
        for (var k = 6; k <= 6; k++) {
            result += " * ";
        }
        }
        result += "\n";
    }
    return result;
    }

    console.log(two())