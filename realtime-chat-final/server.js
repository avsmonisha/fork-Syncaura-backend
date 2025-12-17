const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const MAX_USERS = 5;
let users = {}; // socket.id -> username

app.use(express.static("public"));

io.on("connection", (socket) => {

    socket.on("join", (username) => {
        if (Object.keys(users).length >= MAX_USERS) {
            socket.emit("room-full");
            return;
        }

        users[socket.id] = username;

        io.emit("users-list", Object.values(users));
        io.emit("users-count", Object.keys(users).length);
    });

    socket.on("chat-message", (message) => {
        if (!users[socket.id]) return;

        io.emit("chat-message", {
            user: users[socket.id],
            text: message,
            id: socket.id
        });
    });

    socket.on("disconnect", () => {
        delete users[socket.id];
        io.emit("users-list", Object.values(users));
        io.emit("users-count", Object.keys(users).length);
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
