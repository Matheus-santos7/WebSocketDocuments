import io from "./servidor.js";

io.on("connection", (socket) => {
    console.log(`user logged in with id: ${socket.id}`)
    socket.on;

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });

    socket.on("texto_editor", (message) => {
        console.log(`Message received: ${message}`);
        io.emit("message", message);
    });
});