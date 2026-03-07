import { io } from "socket.io-client";

const URL =
  import.meta.env.VITE_URL_TESTE || "https://discordo-api.onrender.com";

export const socket = io(URL, {
  autoConnect: false,
  transports: ["websocket"],
});
