const getInputValue = inputID => {
    const inputItem = document.getElementById(inputID);
    const inputItemString = inputItem.value;
    const inputNumber = parseFloat(inputItemString);
    inputItem.value = '';
    return inputNumber;
}

const setTotal = (Id,total) => {
    document.getElementById(Id).innerText = total;
}

const getBalance = id =>{
    const balanceItem = document.getElementById(id);
    const balanceString = balanceItem.innerText;
    const balance = parseFloat(balanceString);
    return balance;
}



document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInput = getInputValue('deposit-input');
    const depositTotal = getBalance('deposit-amount');
    const totalDeposit = depositTotal + depositInput;
    setTotal('deposit-amount', totalDeposit);
    const balance = getBalance('balance-amount');
    const totalBalance = balance + depositInput;
    setTotal('balance-amount', totalBalance);
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = getInputValue('withdraw-input');
    const withdrawTotal = getBalance('withdraw-field');
    const totalWithdraw = withdrawTotal + withdrawInput;
    setTotal('withdraw-field', totalWithdraw);
    const balance = getBalance('balance-amount');
    const totalBalance = balance - withdrawInput;
    setTotal('balance-amount', totalBalance)
})