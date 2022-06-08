const modal = document.querySelector('.mask');
const modalHeader = document.getElementById('modal-header');
const modalBtnLior = document.querySelector('.open-modal-button-lior');
const modalBtnSushi = document.querySelector('.open-modal-button-sushi');
const returnBtn = document.querySelector('.return-btn');
const principalTitle = document.querySelector('#ejemplo-accesibilidad-title');
const closeModalBtn = document.querySelector('#close-modal-btn');

// Events
modalBtnLior.addEventListener('click', openModal);
modalBtnSushi.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
returnBtn.addEventListener('click',e => retunToInitialHeader(e));
window.addEventListener('click', outsideClick);
document.body.addEventListener("keyup", e => listenForEsc(e));

function listenForEsc(e) {
    if (e.keyCode === 27) {
        closeModal(e);
        retunToInitialHeader(e);
    }
}
// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.classList.remove("active");
    }
}
/** Esta funcion se llama cuando la persona hace click en cualquier imagen*/
function openModal(e) {
    modal.classList.add("active");
    modalHeader.focus();
}
/** Esta funcion se llama para cerrar el modal */
function closeModal(e) {
    modal.classList.remove("active");
    retunToInitialHeader(e);
}
function retunToInitialHeader(e) {
    principalTitle.focus();
}
