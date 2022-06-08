window.onload = () => {
    document.querySelectorAll(".open-modal-button").forEach(element => {
        element.addEventListener("click", e => openModal(e));
    });
    document.querySelectorAll(".return-btn").forEach(element => {
        element.addEventListener("click", e => retunToInitialHeader(e));
    });
    document.body.addEventListener("click", e => closeModal(e));
    document.body.addEventListener("keyup", e => listenForEsc(e));
};
/**Escucha por la clave esc para cerrar el modal */
function listenForEsc(e) {
    if (e.keyCode === 27) {
        closeModal(e);
    }
}
/** Esta funcion se llama cuando la persona hace click en cualquier porjecto del carousel */
function openModal(e) {
    document.querySelector(".modal-container").style.display = "flex";
    document.getElementById('modal-header').focus();
}
/** Esta funcion se llama para cerrar el modal */
function closeModal(e) {
    if (
        e.target.className.includes("open-modal-button") ||
        e.target.className === "modal"
    ) {
        return;
    } else {
        document.querySelector(".modal-container").style.display = "none";

    }
}
function retunToInitialHeader(e){
    document.getElementById('ejemplo-accesibilidad-title').focus();
}

