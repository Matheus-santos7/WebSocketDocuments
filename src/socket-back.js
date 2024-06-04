import io from "./servidor.js";

io.on("connection", (socket) => {
    console.log(`user logged in with id: ${socket.id}`)
    socket.on;

    socket.on("disconnect", (motivo) => {
        console.log(`A user ${socket.id}, disconnected`);
        motivo && console.log(`Motivo: ${motivo}`);
    });

    socket.on("texto_editor", (message) => {
        console.log(`Message received: ${message}`);
        socket.broadcast.emit("message", message);
    });
});