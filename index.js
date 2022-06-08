window.onload = () => {
    document.querySelectorAll(".open-modal-button").forEach(element => {
        console.log("pimche")
        element.addEventListener("click", e => {
            openModal(e);
            console.log('muere boton');
        });
    });
    document.querySelectorAll(".pepe").forEach(element => {
        console.log("pimche")
        element.addEventListener("click", e => {
            openModal(e);
            console.log('muere pepe');
        });
    });
    document.getElementById('pe').addEventListener("click", e => {
        openModal(e);
        console.log('muere');
    });
    document.body.addEventListener("click", e => closeModal(e));
    document.body.addEventListener("keyup", e => listenForEsc(e));
    
};
/**Escucha por la clave esc para cerrar el modal */
function listenForEsc(e) {
    if (e.keyCode === 27) {
        closeModal(e)
    }
}

/** Esta funcion se llama cuando la persona hace click en cualquier porjecto del carousel */
function openModal(e) {
    document.querySelector(".modal-container").style.display = "flex";
    document.getElementById('modal-header').focus();
}

/** Esta funcion se llama para cerrar el modal */
function closeModal(e) {
    // si el click occurio dentro del las imagenes del carousel o dentro del modal, no se cierra el modal
    if (
        e.target.className.includes("project") ||
        e.target.className === "modal"
    ) {
        return;
    } else {
        document.querySelector(".modal-container").style.display = "none";
        document.getElementById('ejemplo-accesibilidad').focus();
    }
}
