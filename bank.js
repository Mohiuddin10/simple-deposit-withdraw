

document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInput = parseInt(document.getElementById('deposit-input').value);
    const depositBalance = parseInt(document.getElementById('deposit-amount').innerText);
    const balanceAmount = parseInt(document.getElementById('balance-amount').innerText);
    


    // add deposit 
    let newBalance = depositBalance + depositInput;
    console.log(newBalance);
    document.getElementById('deposit-amount').innerText = newBalance;
    document.getElementById('balance-amount').innerText = newBalance;
     
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = parseInt(document.getElementById('withdraw-field').innerText);
    const withdrawInput = parseInt(document.getElementById('withdraw-input').value);
    const balanceAmount = parseInt(document.getElementById('balance-amount').innerText);
    newBalance = balanceAmount - withdrawInput;
    document.getElementById('balance-amount').innerText = newBalance;
    let newWithdrawAmount = withdrawField + withdrawInput;
    document.getElementById('withdraw-field').innerText = newWithdrawAmount;
})