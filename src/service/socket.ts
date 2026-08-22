import { io } from "socket.io-client";

const URL = "https://discordo-api-2s0b.onrender.com";

export const socket = io(URL, {
  autoConnect: false,
  transports: ["websocket"],
});
