const container = document.getElementById('login-wrap');
const registerBtn = document.getElementById('registration');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
});

loginBtn.addEventListener('click', () => {
});


function registerUser() {
    const form = document.getElementById('sign-up-htm');
    const formData = new FormData(form);

    fetch('php/registration.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Успех') {
            form.reset();
            alert('Регистрация успешна!');
        } else {
            alert(data);
        }
    });
}
function loginUser() {
    const form = document.getElementById('sign-in-htm');
    const formData = new FormData(form);

    fetch('php/login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Успех') {
            form.reset();
            window.location.assign('game/game.php');
            
        } else {
            alert(data);
        }
    });
}

function checkRegInputs() {
    var text1 = document.getElementById('regemail').value;
    var text2 = document.getElementById('regpassword').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(text1.length >= 8 && text2.length >= 8 && emailRegex.test(text1)) {
        document.getElementById('registration').disabled = false;
    } else {
        document.getElementById('registration').disabled = true;
    }
}

function checkLoginInputs() {
    var text1 = document.getElementById('email').value;
    var text2 = document.getElementById('password').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(text1.length >= 8 && text2.length >= 8 && emailRegex.test(text1)) {
        document.getElementById('login').disabled = false;
    } else {
        document.getElementById('login').disabled = true;
    }
}

