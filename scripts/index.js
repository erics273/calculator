"use strict"
console.log("it is working!");

//going to run the init function after the entire page is loaded
window.onload = init;

function init(){

    //get the buttons from the page so we can work with them in JS
    const addButton = document.querySelector("#addButton");
    const subtractButton = document.querySelector("#subtractButton");
    const multiplyButton = document.querySelector("#multiplyButton");
    const divideButton = document.querySelector("#divideButton");

    //wire up the functions to the click of the buttons
    addButton.addEventListener("click", add);
    subtractButton.addEventListener("click", subtract);
    multiplyButton.addEventListener("click", multiply);

}

//create an add function that gets num1 and num2 of the page and sums them
function add(){

    //get the values out of the input fields the user types in
    let number1 = Number( document.querySelector("#number1Field").value );
    let number2 = Number( document.querySelector("#number2Field").value );

    //do the math
    let result = number1 + number2;

    //put the result in the answer input field
    document.querySelector("#answerField").value = result;

    //also put the answer in the div with the id of "answerDiv"
    document.querySelector("#answerDiv").innerHTML = result;
}

//create a subtract function that gets num1 and num2 of the page and subttracts them
function subtract(){

    //get the values out of the input fields the user types in
    let number1 = Number( document.querySelector("#number1Field").value );
    let number2 = Number( document.querySelector("#number2Field").value );

    //do the math
    let result = number1 - number2;

    //put the result in the answer input field
    document.querySelector("#answerField").value = result;
}

function multiply(){

    //get the values out of the input fields the user types in
    let number1 = Number( document.querySelector("#number1Field").value );
    let number2 = Number( document.querySelector("#number2Field").value );

    //do the math
    let result = number1 * number2;

    //put the result in the answer input field
    document.querySelector("#answerField").value = result;
}