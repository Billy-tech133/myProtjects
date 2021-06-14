const modalBtn = document.querySelector('.modal-btn');
const modalOverLay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function() {
    /*if(modalOverLay.classList.contains('open-modal')) {
        modalOverLay.classList.remove('open-modal')
    } else {
        modalOverLay.classList.add('open-modal');
    }*/
    modalOverLay.classList.toggle('open-modal')
})

closeBtn.addEventListener('click', function() {
    modalOverLay.classList.remove('open-modal')
})