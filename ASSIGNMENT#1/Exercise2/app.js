// BMI Calculator
const heightInInches = 68; // Example height in inches
const weightInPounds = 150; // Example weight in pounds
const inchesToCentimeters = 2.54;
const poundsToKilos = 0.453592;
const heightInCentimeters = heightInInches * inchesToCentimeters;
const weightInKilos = weightInPounds * poundsToKilos;
const heightInMeters = heightInCentimeters / 100;
const bmi = weightInKilos / (heightInMeters ** 2);
console.log("Height in inches:", heightInInches);
console.log("Height in centimeters:", heightInCentimeters);
console.log("Weight in pounds:", weightInPounds);
console.log("Weight in kilograms:", weightInKilos);
console.log("BMI:", bmi);
