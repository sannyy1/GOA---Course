// Write a function that calculates the area of a circle given the radius using the formula πr², and use Math.PI for π.

function calculateCircleArea(radius) {
    if (radius <= 0) {
        return "Please enter a positive radius.";
    }
    const area = Math.PI * Math.pow(radius, 2);
    return area;
}