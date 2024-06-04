import { emitirTextoEditor } from "./socket-front.js";

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor(textoEditor.value);
});

function atualizarTextoEditor(message) {
    textoEditor.value = message;
}

export { atualizarTextoEditor };

