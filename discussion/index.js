// function
/*
    function in JS are line/block of codes that tell our device/application

*/
function printName(){

}
















function showSum(){
    console.log(8+2);
};

showSum()
showSum()
showSum()

// Note: Do not create functions with the same name
/*
    Function with parameters and arguments

    A parameter acts a named variable/container that exist ONLY inside of the function. This is used to store information/ to act as a stand-in or the contain value passed into the function as an argument

*/
function displayName(name){
    console.log(`My name is ${name}`);
}
// you cannot get the value of a parameter outside of its function
// console.log(name)

// when a function is invoked and data is passed, we call the data 'argument'
// In this invocation, 'Jungkook' is an argument passed into our displayName function and is represented by the 'name' parameter within our function
// data passed into the function: argument
// representation of the within the function: parameter
displayName('Jungkook')
displayName('Jimin')

/* create a function that display a number with 5400 value
    screenshot your code and output paste it in our chatbox
*/
function displayNumber(number){
    console.log(number)
}
displayNumber(5400);

/* Mini-Activity
	Create a function which will be able to show a message in the console
		the message should be able to be passed into function via an argument
	  sample message: "JavaScript is fun! I love CEU."
    
    
    screenshot your code and output paste it in our SB */
function displayMessage(message){
    console.log(message);
}
displayMessage('JavaScript is fun! I love CEU');

// multiple parameters and arguments
// a function can not only receive a single argument but it can also receive multiple arguments as long as it matches the number of parameters in function

function displayFullName(firstName, lastName, age){
    console.log(`My name is ${firstName} ${lastName}. I am ${age} years old`);
}
displayFullName('Jungkook','Jeon',25);

/* Return keyword
    is used so that a function may return a value and it also stops the process of the function any other instruction after the keyword will not be processed */

function createFullName(firstName, middleInitial, lastName){
    return `${firstName} ${middleInitial} ${lastName}`
    console.log("I will no longer run because the functions value or result has been return");
}
/* result of this function can be save into variable
    the result of a function without a return keyword will not be save */
let fullName1 = createFullName('Thonie', 'R', 'Fernandez');
console.log(fullName1);

let fullName2 = createFullName('Jeffrey', 'Z', 'Smith');
console.log(fullName2);