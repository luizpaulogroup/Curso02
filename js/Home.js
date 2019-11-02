verify();

document.getElementById('name-user').innerHTML = localStorage.getItem('name');
document.getElementById('email-user').innerHTML = localStorage.getItem('email');;

var navigation = document.querySelector('.top-navigation');

window.onscroll = function () {
    var top = window.pageYOffset;
    
    if (top > 50) {
        navigation.classList.add('navigation-fixed');
    } else {
        navigation.classList.remove('navigation-fixed')
    }
}

document.getElementById('logout').addEventListener('click', function () {
    localStorage.removeItem('email');
    verify();
});