const socket = io();

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
    //console.log(textoEditor.value);
    socket.emit("texto_editor", textoEditor.value);
})