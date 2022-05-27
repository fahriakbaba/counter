
// This project is created using addEventListener, if else and basic DOM
const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");
const displayValue = document.querySelector(".showing-number");
let count = 0;

// increasing to a value
btnIncrease.addEventListener("click", function (e) {
    count++;
    displayValue.innerHTML = count;
    if (count > 0) {
        displayValue.style.color = "green";
    } else if (count == 0) {
        displayValue.style.color = "black";
    }
});

// decreasing to a value
btnDecrease.addEventListener("click", function (e) {
    count--;
    displayValue.innerHTML = count;
    if (count < 0) {
        displayValue.style.color = "red";
    } else if (count == 0) {
        displayValue.style.color = "black";
    }
});

// reset to a value
btnReset.addEventListener("click", function (e) {
    count = 0;
    displayValue.innerHTML = count;
    displayValue.style.color = "black";
});


