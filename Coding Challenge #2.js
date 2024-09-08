// Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

// Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;


const calculateBMI = (mass, height) => mass / (height * height);

// For Data 1
const markBMI1 = calculateBMI(markMass1, markHeight1);
const johnBMI1 = calculateBMI(johnMass1, johnHeight1);

// For Data 2
const markBMI2 = calculateBMI(markMass2, markHeight2);
const johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// For Data 1
const markHigherBMI1 = markBMI1 > johnBMI1;

// For Data 2
const markHigherBMI2 = markBMI2 > johnBMI2;

// For Data 1
console.log(`Data 1: Mark's BMI is ${markBMI1.toLocaleString()}, John's BMI is ${johnBMI1.toLocaleString()}.`);
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI1}`);

// For Data 2
console.log(`Data 2: Mark's BMI is ${markBMI2.toLocaleString()}, John's BMI is ${johnBMI2.toLocaleString()}.`);
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI2}`);
