const sideToggle = document.querySelector('.sidebar-toggle');
const sideBar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close-btn');


sideToggle.addEventListener('click', function() {
    if(sideBar.classList.contains('show-sidebar')) {
        sideBar.classList.remove('show-sidebar')
    }
    else {
        sideBar.classList.add('show-sidebar');
    }
})





