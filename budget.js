// vars
const incomeTotalE1 = document.querySelector(".outcome-total");

const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");

const balanceE1 = document.querySelector(".balance .value");
const outcomeTotalE1 = document.querySelector(".income-total");
const chartE1 = document.querySelector(".chart");

const expenseE1 = document.querySelector("#expense");
const incomeE1 = document.querySelector("#income");
const allE1 = document.querySelector("#all");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

let ENTRY_LIST = [];



add.addEventListener("click")

// event listeners
expenseBtn.addEventListener('click', function () {
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
    show(expenseE1);
    hide([incomeE1, allE1]);
});

incomeBtn.addEventListener('click', function () {
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
    show(incomeE1);
    hide([expenseE1, allE1]);
});

allBtn.addEventListener('click', function () {
    active(allBtn);
    inactive([expenseBtn, incomeBtn]);
    show(allE1);
    hide([expenseE1, incomeE1]);
});


// update UI functions
function active(element) {
    element.classlist.add("active");
    console.log('active');
}

function show(element) {
    element.classlist.remove("hide");
    console.log('show');
}

function hide(elementsArray) {
    elementsArray.forEach(element => {
        element.classlist.add('hide');
    });
    console.log('hide');
}

function inactive(elementsArray) {
    elementsArray.forEach(element => {
        element.classlist.remove("active");
    });
    console.log('inactive');
}
