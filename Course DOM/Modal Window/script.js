'use strict';

const btnsModalOpen = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btncloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');


const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let btn of btnsModalOpen) {

    btn.addEventListener(
        'click', openModal
    )
}
btncloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
    console.log(event.key);
}
)