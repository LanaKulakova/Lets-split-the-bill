const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function showTip(e) {
    e.preventDefault();
    tip.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

if (bill === "" || people === "" || people < 1) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please enter your information!',
        });
}

//1 Сколько заплатит за счет каждый человек
let amountPerPerson = bill/people;

//2 Сколько чаевых заплатит каждый человек
let tipPerPerson = (bill*tip) / people;

//3 Сумма счета и чаевых на человека
let totalSum = amountPerPerson + tipPerPerson;

//4 toFixed (добавляем центы)
amountPerPerson = amountPerPerson.toFixed(2);
tipPerPerson = tipPerPerson.toFixed(2);
totalSum = totalSum.toFixed(2);

//5 Показываем все эти расчеты в приложении
document.querySelector("#dividedBill").textContent = amountPerPerson;
document.querySelector("#dividedTip").textContent = tipPerPerson;
document.querySelector("#billAndTip").textContent = totalSum;
}