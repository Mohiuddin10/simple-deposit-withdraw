

document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInput = parseInt(document.getElementById('deposit-input').value);
    const depositBalance = parseInt(document.getElementById('deposit-amount').innerText);
    const balanceAmount = parseInt(document.getElementById('balance-amount').innerText);
    
    let totalDeposit = depositBalance + depositInput;
    document.getElementById('deposit-amount').innerText = totalDeposit;

    let netBalance = balanceAmount + depositInput;
    document.getElementById('balance-amount').innerText =netBalance;
    document.getElementById('deposit-input').value = '';
});


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = parseInt(document.getElementById('withdraw-input').value);
    const withdrawBalance = parseInt(document.getElementById('withdraw-field').innerText);
    const balanceAmount = parseInt(document.getElementById('balance-amount').innerText);

    let totalWithdraw = withdrawBalance + withdrawInput;
    document.getElementById('withdraw-field').innerText = totalWithdraw;
    let netBalance = balanceAmount -withdrawInput;
    document.getElementById('balance-amount').innerText = netBalance;
    document.getElementById('withdraw-input').value = '';
})
