document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = 'Hello, welcome to my website'; // Fixed closing quote
    document.querySelector('main').appendChild(welcomeMessage); // Added semicolon

    let unusedVariable; // Added semicolon
    const anotherMessage = document.createElement('p'); // Changed to create an element
    anotherMessage.textContent = "Another message"; // Added semicolon
    document.querySelector('main').appendChild(anotherMessage); // Appending the correct element
    
    let obj = {
        key1: "value",
        key2: "another value" // Changed to unique keys
    }; // Removed extra semicolon

    console.log("Welcome to my website"); // Changed to double quotes


