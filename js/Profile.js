verify();

var linkAccess = document.querySelectorAll('.link-profile');

linkAccess.forEach(link => {
    link.addEventListener('click', function(){
        var name = link.textContent.trim();
        localStorage.setItem('name', name);
    })
});
