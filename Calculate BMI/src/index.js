// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


// Write the function to find the bmi obtained.
function bmi(weight, height) {
  return (weight / (height * height) <= 18.5) ? "Underweight" : (weight / (height * height) <= 25.0) ? "Normal" : (weight / (height * height) <= 30.0) ? "Overweight" : "Obese"
}
//Use SpecRunner to check the Test Cases.