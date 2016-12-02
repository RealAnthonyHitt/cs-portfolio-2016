//Using variables to store HTML elements for use in Javascript
var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");
var mathTools = document.getElementById("mathTools");
var answer = document.getElementById("answer");
var solveButton = document.getElementById("solveButton");

//The bulk of how the calculator works. Uses 6 math tools, the "number()" parts of the code make it so that the inputs can only read numbers! Uses variables of the variables which collected the HTML and input data to use a button to read their value. Drop down of +, -, *, /,  and √, in that order. 
solveButton.addEventListener("click",function() {
    var firstNumberText = Number(firstNumber.value);
    var secondNumberText = Number(secondNumber.value);
    var mathToolsBox = mathTools.value;

    if (mathToolsBox === "+") {
        answer.value = firstNumberText + secondNumberText; 
    }
    else if (mathToolsBox === "-") {
        answer.value = firstNumberText - secondNumberText;
    }
    else if (mathToolsBox === "*") {
        answer.value = firstNumberText * secondNumberText;
    }
    else if (mathToolsBox === "/") {
        answer.value = firstNumberText / secondNumberText;
    }
    else if (mathToolsBox === "^") {
        answer.value = Math.pow(firstNumberText, secondNumberText);
    }
    //leave second input box blank when using this!!!
    else if (mathToolsBox === "√") {
        answer.value = Math.sqrt(firstNumberText);
    }
});

