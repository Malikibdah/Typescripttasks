// Q1
// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements
var numbersa = [1, 2, 3, 4, 5];
var sum = 0;
for (var _i = 0, numbersa_1 = numbersa; _i < numbersa_1.length; _i++) {
    var num = numbersa_1[_i];
    sum += num;
}
console.log("Sum of all elements:", sum);
//Q2
// Check if All Elements in Array are Positive
// You are given an array of numbers. Check whether all elements are positive, and print "All Positive" if true, otherwise print "Not All Positive".
var array = [1, 3, 5, 6, 12, -8, 9];
var testifallpositive = true;
;
for (var i = 0; i < array.length; i++) {
    if (array[i] <= 0) {
        testifallpositive = false;
        break;
    }
}
if (testifallpositive === true) {
    console.log("All elements in the array are positive");
}
else {
    console.log("Not all elements in the array are positive");
}
//Q3
// Find the Longest Name in an Array
// You are given an array of names. Iterate through the array and print the longest name .
var names = ["MalikIbdah", "Ahmad", "Ayman", "Mohammad"];
var longestName = "";
for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
    var name_1 = names_1[_a];
    if (name_1.length > longestName.length) {
        longestName = name_1;
    }
}
console.log("The longest name is:", longestName);
//Q4 
// Count Occurrences of a Character in a String
// You are given a string and a character. Print the number of times the character appears in the string .
var string = "Hello World";
var character = "l";
var count = 0;
for (var i = 0; i < string.length; i++) {
    if (string[i] === character) {
        count++;
    }
}
console.log(character + " appears " + count + " times in the string");
//Q5
// Identify Prime Numbers in an Array
// You are given an array of numbers. Identify and print all prime numbers from the array. 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var primeNumbers = [];
for (var _b = 0, numbers_1 = numbers; _b < numbers_1.length; _b++) {
    var number = numbers_1[_b];
    if (number > 1) {
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                break;
            }
            if (i === number - 1) {
                primeNumbers.push(number);
            }
        }
    }
}
console.log("Prime numbers in the array:", primeNumbers);
