document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositInput = parseInt(document.getElementById('deposit-input').value);
    let depositAmount = 0;
    const depositBalance = parseInt(document.getElementById('deposit-amount'));
    const balanceAmount = parseInt(document.getElementById('balance-amount'));

    const newDeposit = depositBalance + depositInput;
    console.log(newDeposit);
    

    
     
})