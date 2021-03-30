function task1(h, w) {
    var out = "";
    for (var i = 1; i <= h; i++) {
      for (var k = 1; k <= w; k++) {
        out += "* ";
      }
      out += "\n";
    }
    return "\n" + out;
  }
  
  function task2(h) {
    var out = "";
    for (var i = 1; i <=h; i++) {
      for (var k = 1; k <= h; k++) {
        if (i === 1 || i === h || k === 1 || k === h) {
          out += "* ";
        } else {
          out += "  ";
        }
      }
      out += "\n";
    }
    return "\n" + out;
  }
  
  function task3(h) {
    var out = "";
    for (var i = 1; i <= h; i++) {
      for (var k = h; k > 0; k--) {
        if (k === h || i === 1 || i == k) {
          out += "* ";
        } else {
          out += "  ";
        }
      }
      out += "\n";
    }
    return "\n" + out;
  }
  
  function task4(h) {
    var out = "";
    for (var i = 1; i <= h; i++) {
      for (var k = 1; k <= h; k++) {
        if (k === 1 || i === h || i === k) {
          out += "* ";
        } else {
          out += "  ";
        }
      }
      out += "\n";
    }
    return "\n" + out;
  }
  
  function task5(h) {
    var out = "";
    for (var i = 1; i <= h; i++) {
      for (var k = h; k > 0; k--) {
        if (k === 1|| i === h || i == k) {
          out += "* ";
        } else {
          out += "  ";
        }
      }
      out += "\n";
    }
    return "\n" + out;
  }
  
  function task6(h) {
    var out = "";
    for (var i = 1; i <= h; i++) {
      for (var k = 1; k <= h; k++) {
        if (k === h || i === 1 || i === k) {
          out += "* ";
        } else {
          out += "  ";
        }
      }
      out += "\n";
    }
    return "\n" + out;
  }
  
  function task7(h) {
    var out = "";
    for (var i = 0; i <= h - 1; i++) {
      for (var k = 0, l = h - 1; k <= h, l >= 0; k++, l--) {
        if (i == k || l == i) {
          out += "* ";
        } else {
          out += "  ";
        }
      }
  
      out += "\n";
    }
    return "\n" + out;
  }
  
  function task8(h) {
    var out = "";
    for (var i = 0; i <= h / 2; i++) {
      for (var k = 0, l = h - 1; k <= h, l >= 0; k++, l--) {
        if (i == 0 || i == k || i == l) {
          out += "* ";
        } else {
          out += "  ";
        }
      }
  
      out += "\n";
    }
    return "\n" + out;
  }
  
  function task9(h) {
    var out = "";
    for (var i = 3; i <= h; i++) {
      for (var k = 0, l = h - 1; k <= h, l >= 0; k++, l--) {
        if (i === h - 1 || i === k || i === l) {
          out += "* ";
        } else {
          out += "  ";
        }
      }
  
      out += "\n";
    }
    return "\n" + out;
  }