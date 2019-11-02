var form = document.querySelector("#form_login");

function isValidField(field) {
    if (field.trim() === "") return false;
    return true;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var email = form.email;
    var password = form.password;
    var errorHtml = null;

    if (!isValidField(email.value)) {
        errorHtml = '<span class="appendError">Informe o campo email, por favor</span>';
        document.getElementById('errorEmail').innerHTML = errorHtml;
        document.getElementById('email').classList.add('inputError');
        email.focus();
        return;
    } else {
        document.getElementById('errorEmail').innerHTML = null;
        document.getElementById('email').classList.remove('inputError');
    }

    if (!isValidField(password.value)) {
        errorHtml = '<span class="appendError">Informe o campo senha, por favor</span>';
        document.getElementById('errorPassword').innerHTML = errorHtml;
        document.getElementById('password').classList.add('inputError');
        password.focus();
        return;
    } else {
        document.getElementById('errorPassword').innerHTML = null;
        document.getElementById('password').classList.remove('inputError');
    }

    if (password.value.length < 4) {
        errorHtml = '<span class="textError">A senha deve ter entre 4 e 60 caracteres</span>';
        document.getElementById('errorPassword').innerHTML = errorHtml;
        document.getElementById('password').classList.add('inputError');
        password.focus();
        return;
    } else {
        document.getElementById('errorPassword').innerHTML = null;
        document.getElementById('password').classList.remove('inputError');
    }

    localStorage.setItem('email', email.value);

    window.location.href = './browse';
});

function verify() {
    if (localStorage.getItem('email')) {
        window.location.href = './browse';
    }
}

verify();