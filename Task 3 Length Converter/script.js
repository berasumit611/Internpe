"use strict";

var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("input-type");
var resultType = document.getElementById("result-type");


var inputTypeValue, resultTypeValue;

//add event listner
input.addEventListener("change", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// Get reset element
var resetButton = document.querySelector('.reset');

// Add event listener to reset button
resetButton.addEventListener('click', resetConverter);

//taking initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
  //   alert('ok')
    var resultValue;
  // when we change the input and output type value we need to update the inputTypeValue and resultTypeValue
  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;
  //now compare the input and resultType value and add formula

  if (inputTypeValue === "meter") {
    if (resultTypeValue === "meter") resultValue = input.value;
    else if (resultTypeValue === "kilometer")
      resultValue = input.value * 0.001;
    else if (resultTypeValue === "centimeter") resultValue = input.value * 100;
    else if (resultTypeValue === "feet") resultValue = input.value * 3.281;
    else if (resultTypeValue === "inches") resultValue = input.value * 39.37;
    else if (resultTypeValue === "yards") resultValue = input.value * 1.094;
    else if (resultTypeValue === "miles")
      resultValue = input.value * 0.0006214;
  } 
  else if (inputTypeValue === "kilometer") {
    if (resultTypeValue === "kilometer") resultValue = input.value;
    else if (resultTypeValue === "meter") resultValue = input.value * 1000;
    else if (resultTypeValue === "centimeter")
      resultValue = input.value * 100000;
    else if (resultTypeValue === "feet") resultValue = input.value * 3280.8;
    else if (resultTypeValue === "inches") resultValue = input.value * 39370;
    else if (resultTypeValue === "yards") resultValue = input.value * 1094;
    else if (resultTypeValue === "miles") resultValue = input.value / 1.609;
  } 
  else if (inputTypeValue === "centimeter") {
    if (resultTypeValue === "centimeter") resultValue = input.value;
    else if (resultTypeValue === "meter") resultValue = input.value / 100;
    else if (resultTypeValue === "kilometer")
      resultValue = input.value / 100000;
    else if (resultTypeValue === "feet") resultValue = input.value / 30.48;
    else if (resultTypeValue === "inches") resultValue = input.value /2.54;
    else if (resultTypeValue === "yards") resultValue = input.value /91.44;
    else if (resultTypeValue === "miles") resultValue = input.value / 160934;
  } 
  else if (inputTypeValue === "feet") {
    if (resultTypeValue === "feet") resultValue = input.value;
    else if (resultTypeValue === "meter") resultValue = input.value / 3.281;
    else if (resultTypeValue === "centimeter")
      resultValue = input.value * 30.48;
    else if (resultTypeValue === "kilometer") resultValue = input.value /3280.8;
    else if (resultTypeValue === "inches") resultValue = input.value * 12;
    else if (resultTypeValue === "yards") resultValue = input.value /3;
    else if (resultTypeValue === "miles") resultValue = input.value / 5280;
  } 
  else if (inputTypeValue === "inches") {
    if (resultTypeValue === "inches") resultValue = input.value;
    else if (resultTypeValue === "meter") resultValue = input.value /39.37;
    else if (resultTypeValue === "centimeter")
      resultValue = input.value * 2.54;
    else if (resultTypeValue === "feet") resultValue = input.value /12;
    else if (resultTypeValue === "kilometer") resultValue = input.value / 39370;
    else if (resultTypeValue === "yards") resultValue = input.value /36;
    else if (resultTypeValue === "miles") resultValue = input.value / 63360;
  } 
  else if (inputTypeValue === "yards") {
    if (resultTypeValue === "yards") resultValue = input.value;
    else if (resultTypeValue === "meter") resultValue = input.value / 1.094;
    else if (resultTypeValue === "centimeter")
      resultValue = input.value * 91.44;
    else if (resultTypeValue === "feet") resultValue = input.value * 3;
    else if (resultTypeValue === "inches") resultValue = input.value * 36;
    else if (resultTypeValue === "kilometer") resultValue = input.value / 1094;
    else if (resultTypeValue === "miles") resultValue = input.value / 1760;
  } 
  else if (inputTypeValue === "miles") {
    if (resultTypeValue === "miles") resultValue = input.value;
    else if (resultTypeValue === "meter") resultValue = input.value /0.0006214;
    else if (resultTypeValue === "centimeter")
      resultValue = input.value * 160934;
    else if (resultTypeValue === "feet") resultValue = input.value * 5280;
    else if (resultTypeValue === "inches") resultValue = input.value * 63360;
    else if (resultTypeValue === "yards") resultValue = input.value * 1760;
    else if (resultTypeValue === "kilometer") resultValue = input.value * 1.609;
  } 
 
  // Display the result
  result.value = resultValue;
}
// Reset converter function
function resetConverter() {
    // Reset input and result fields
    input.value = '';
    result.value = '';
  
    // Reset unit types to default (first option)
    inputType.selectedIndex = 0;
    resultType.selectedIndex = 0;
  }