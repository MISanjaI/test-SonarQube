#!/usr/bin/env node

// A function to calculate the average of an array of numbers
function calculateAverage(numbers) {
    if (numbers.length === 0) return 0; // Handling empty array case
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++) { // Logical error: should be i < numbers.length
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// Example usage
const numbers = [10, 20, 30, 40, 50];
const average = calculateAverage(numbers);
console.log(`The average is: ${average}`);
