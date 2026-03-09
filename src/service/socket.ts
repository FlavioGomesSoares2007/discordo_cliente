import { io } from "socket.io-client";

const URL = " https://discordo-api.onrender.com";

export const socket = io(URL, {
  autoConnect: false,
  transports: ["websocket"],
});
