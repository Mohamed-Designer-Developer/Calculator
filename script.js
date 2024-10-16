const input = document.querySelector("#display");

function display(value) {
  input.value += value;
}

function Calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    //   input.value = error.message;
      input.value = "Error";
  }
}

function Clear() {
  input.value = "";
}

/* 
LESSON OBJECTIVES 

Javascript
1- Parameter and Argument.
2- Error Handling.

css styling
:hover :focus :active psuedo classes.
HSL color Variations.
*/
