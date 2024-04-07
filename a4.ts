var prompt = require("prompt-sync")();
export {};

// [1] Assign "Hello, World!" to this variable and print it.
let greeting = "Hello World...";
console.log(greeting);

// [2] Assign integer values and perform arithmetic operations
let num1: number = prompt("Enter the frist number = ");
console.log(num1);
let num2: number = prompt("Enter the second number = ");
console.log(num2);
//Addition
let add: number = num1 + num2;
console.log("The Addition of two numbers = ", add);
//Subtraction
let sub = num1 - num2;
console.log("The Subtraction of two numbers = ", sub);
//Multiplication
let multi = num1 * num2;
console.log("The Multiplication of two numbers = ", multi);
//Division
let div = num1 / num2;
console.log("The Division of two numbers = ", div);

// [3] Swap these values without using a new variable.
let a = 4;
console.log("The vale of a variable before swap = 4");
let b = 5;
console.log("The vale of b variable before swap = 5");
a = a + b;
b = a - b;
a = a - b;
console.log("The vale of a variable after swap = ", a);
console.log("The vale of b variable after swap = ", b);

// [4] Now try assigning a number to it and see what happens.
// Before Annotation
let message: string = "My name is Husnain.";
console.log(message);
// After Annotation
message = "I am Husnain.";
console.log(message);

// [5] Use the modulus operator (%) to find the remainder.
let mod: number = num1 % num2;
console.log("The Modulus of two numbers = ", mod);

// [6] Increment this value by 1 in two different ways.
let counter: number = 0;
counter += 1;
console.log("Increment by first method = ", counter);
counter++;
console.log("Increment by second method = ", counter);

// [7] Given three boolean variables, write expressions for AND, OR, and NOT gates
let x = 10;
// OR operator
console.log(x == 5 || x == 6); //false
console.log(x == 5 || x >= 6); //true
// AND operator
console.log(x >= 5 && x <= 8); //false
// NOT operator
console.log(!(x >= 5 && x <= 8)); //true

// [8] Show examples of using compound assignment operators.
// Use +=, -=, *=, and /= on this variable.
let num: number = 10;
num += num;
console.log("using += operator, num = ", num);
num -= num;
console.log("using -= operator, num = ", num);
num *= num;
console.log("using *= operator, num = ", num);
num /= num;
console.log("using /= operator, num = ", num);

// [9] Determine if this is even or odd.
let ch: number = prompt("Write the number to it is EVEN or ODD = ");
console.log(ch);
if (ch % 2 == 0) {
  console.log("The number ", ch, " is EVEN.");
} else {
  console.log("The number ", ch, " is ODD.");
}

// [10] Check if age is 18 or older to determine voting eligibility.
let age = prompt(
  "Enter your age to eheck you are elegible to cast a vote or not = "
);
console.log(age);
if (age >= 18) {
  console.log("You can cast the vote.");
} else {
  console.log("You are still under age.So, you can not cast the vote.");
}

// [11] Assign a grade based on a numerical score.
let marks = prompt("Please enter the marks of the student = ");
console.log(marks);
if (marks <= 100 && marks >= 90) {
  console.log("Congratulations, Your grade is A.");
} else if (marks < 90 && marks >= 80) {
  console.log("Your grade is B.");
} else if (marks < 90 && marks >= 80) {
  console.log("Your grade is B.");
} else if (marks < 80 && marks >= 70) {
  console.log("Your grade is C.");
} else if (marks < 70 && marks >= 60) {
  console.log("Your grade is D.");
} else if (marks < 60 && marks >= 50) {
  console.log("Your grade is E.");
} else if (marks < 50) {
  console.log("Your grade is F.");
} else {
  console.log("Invalid input.");
}

// [12] Find the maximum of three numbers.
let p = prompt("Enter the first number to check the greater one = ");
console.log(p);
let q = prompt("Enter the second number to check the greater one = ");
console.log(q);
let r = prompt("Enter the third number to check the greater one = ");
console.log(r);
if (p > q && p > r) {
  console.log(p, " is greater.");
} else if (q > p && q > r) {
  console.log(q, " is greater.");
} else if (r > p && r > q) {
  console.log(r, " is greater.");
}

// [13] Check if a given year is a leap year
let year: number = prompt(
  "Please Enter the year that you want to check is leap or not in '2000' formate = "
);
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

// [14] converts temperature from Fahrenheit to Celsius.
let fahrenheit: number = prompt("Please enter the temperature = ");
console.log(fahrenheit);
let celsius: number = ((fahrenheit - 32) * 5) / 9;
console.log(celsius, " is the temperature in celsius.");

// [15] Check if a number is positive, negative, or zero.
let w: number = prompt("Enter the number to check is it '+ve,-ve or 0' = ");
console.log(w);
if (w > 0) {
  console.log(w, " is positive (+ve).");
} else if (w < 0) {
  console.log(w, " is negative (-ve).");
} else if (w == 0) {
  console.log(w, " is zero (0).");
}

// [16] Prints the multiplication table of a given number up to 10.
let tablenum = prompt("Please enter the number of which you want the table = ");
console.log(tablenum);
for (let i = 1; i <= 10; i++) {
  let table: number = tablenum * i;
  console.log(tablenum, " * ", i, " = ", table);
}
console.log("Have a 'GOOD DAY!!!'");
