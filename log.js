// script.js

// Function to display a welcome message
function displayWelcomeMessage() {
    const header = document.querySelector('header h1');
    header.innerText = "Welcome to My Website!"; // This is correct, but let's introduce an error below
    console.log("Welcome message displayed: " + header.innerText);
}

// Function to change the main content
function changeMainContent() {
    const mainContent = document.querySelector('main p');
    mainContent.innerText = "This content has been updated."; // Correctly updates the content
    console.log("Main content updated to: " + mainContent.innerText);
}

// Function to calculate the square of a number
function calculateSquare(number) {
    return number * number; // This is correct
}

// Function to display the square of a number
function displaySquare() {
    const number = "5"; // Error: This should be a number, not a string
    const square = calculateSquare(number); // This will not work as intended
    console.log("The square of " + number + " is: " + square);
}

// More unused variables
let unusedArray = [1, 2, 3];
const unusedFunction = () => {
    return "I'm not used";
};
var oldStyleUnusedVariable = true;

// Function to add event listeners
function addEventListeners() {
    const button = document.getElementById('calculate-button'); // Error: Assume this button exists in HTML
    button.addEventListener('click', displaySquare); // This will throw an error if the button is not found
}

// Call functions on page load
window.onload = function() {
    displayWelcomeMessage();
    changeMainContent();
    addEventListeners(); // This function may fail if the button does not exist
};