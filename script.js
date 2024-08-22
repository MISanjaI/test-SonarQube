document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = 'Hello, welcome to my website';
    document.querySelector('main').appendChild(welcomeMessage);

    let unusedVariable;
    let anotherUnusedVariable = 42;
    const yetAnotherUnusedVariable = "unused";

    const anotherMessage = document.createElement('p');
    anotherMessage.textContent = "Another message";
    document.querySelector('main').appendChild(anotherMessage);

    let obj = {
        key1: "value",
        key2: "another value"
    };

    console.log("Welcome to my website");

    // More unused variables
    let unusedArray = [1, 2, 3];
    const unusedFunction = () => {
        return "I'm not used";
    };
    var oldStyleUnusedVariable = true;
});