function verify() {
    if (!localStorage.getItem('email')) {
        window.location.href = '../';
    }
}