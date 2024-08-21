// script.js
document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = 'Hello, welcome to my website;  // Missing closing quote (Syntax error)
    document.querySelector('main').appendChild(welcomeMessage)
    // Missing semicolon (Syntax error)
    
    let unusedVariable;  // Unused variable (Code smell)

    const anotherMessage = "Another message"  // Missing semicolon (Syntax error)
    document.querySelector('main').appendChild(anotherMessage);  // Appending a string instead of an element (Logic error)
    
    let obj = {
        key: "value",
        key: "another value"  // Duplicate key in object (Syntax error)
    };
    
    console.log('Welcome to my website');  // Single quotes instead of double quotes (Stylistic issue if your linter prefers double quotes)
});

