// Q1
// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements

let numbersa: number[] = [1, 2, 3, 4, 5];
let sum: number = 0;

for (let num of numbersa) {
    sum += num;
}

console.log("Sum of all elements:", sum);


//Q2
// Check if All Elements in Array are Positive
// You are given an array of numbers. Check whether all elements are positive, and print "All Positive" if true, otherwise print "Not All Positive".

let array : number[] = [1 , 3 , 5 , 6 , 12 , -8 , 9]; 
let testifallpositive : boolean = true; ;
for (let i = 0; i < array.length; i++) {
    if (array[i] <= 0) {
        testifallpositive = false;
        break;
    }
    }
    if (testifallpositive === true) {
        console.log("All elements in the array are positive");
    } else {
        console.log("Not all elements in the array are positive");
    }
    
    //Q3
    // Find the Longest Name in an Array
    // You are given an array of names. Iterate through the array and print the longest name .
    
    let names: string[] = ["MalikIbdah", "Ahmad", "Ayman", "Mohammad"];  
    
    let longestName: string = ""; 
    
    for (let name of names) {
        if (name.length > longestName.length) {
            longestName = name;
        }
    }
    
    console.log("The longest name is:", longestName);
    
    //Q4 
    // Count Occurrences of a Character in a String
    // You are given a string and a character. Print the number of times the character appears in the string .
    
    let string: string = "Hello World"; 
    let character: string = "l"; 
    let count: number = 0; 
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            count++;
        }
    }
    console.log(character + " appears " + count + " times in the string");

    //Q5
    // Identify Prime Numbers in an Array
    // You are given an array of numbers. Identify and print all prime numbers from the array. 
    
    let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
    let primeNumbers: number[] = []; 
    
    for (let number of numbers) {
        if (number > 1) {
            for (let i = 2; i < number; i++) {
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

