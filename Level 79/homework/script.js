function countArea() {
    if (arguments.length === 2) {
      var length = arguments[0];
      var width = arguments[1];
      return length * width;
    } else if (arguments.length === 1) {
      var radius = arguments[0];
      return Math.PI * radius * radius;
    } else if (arguments.length === 3) {
      var base = arguments[0];
      var height = arguments[1];
      return 0.5 * base * height;
    } else {
      return "Invalid input";
    }
  }