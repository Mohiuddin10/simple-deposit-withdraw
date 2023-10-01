document.getElementById('submit-btn').addEventListener('click', function() {
    const emailInp = document.getElementById('email-input');
    const givenEmail = emailInp.value;
    const passwordInp = document.getElementById('password-input')
    const givenPassword = passwordInp.value;

    if (givenEmail == 'msujonctg@gmail.com' && givenPassword == 'sujonsiam'){
        window.location.href = 'bank.html';
    }
    else {
        alert('DGM bro')
    }
})