// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32

// Note: for the purposes of this kata you will assume that it is


// Write the function to find the areaOrPerimeter obtained.
const areaOrPerimeter = function (l, w) {
  return (l == w) ? l * w : 2 * (l + w);

}

//Use SpecRunner to check the Test Cases.