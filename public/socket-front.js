import { atualizarTextoEditor } from "./documento.js";
const socket = io();

function emitirTextoEditor(textoEditor) {
    socket.emit("texto_editor", textoEditor );
}

socket.on("message", (message) => {
    atualizarTextoEditor(message);
});

export { emitirTextoEditor };