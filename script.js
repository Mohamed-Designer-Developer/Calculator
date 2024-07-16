const displayArea = document.querySelector("#display");

function display(ButtonValue) {
    displayArea.value += ButtonValue;
    console.log(displayArea.value);
}


function Calculate() {
    displayArea.value = eval(displayArea.value);
}

function Clear() {
    displayArea.value = '';
}