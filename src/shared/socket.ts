import { Server as SocketIO } from "socket.io";
import { Server } from "http";
import { AppError } from "../error/AppError";

let io: SocketIO;

interface requestMessage {
    message: string
}

export const initIO = async (httpServer: Server): Promise<SocketIO> => {

    io = new SocketIO(httpServer, {
        cors: {
            origin: '*'
        }
    });
    
    io.on("connection", (socket) => {

        console.log(`Cliente conectado`);
        
        socket.on("message", (data: requestMessage) => {

            console.log(`Mensagem recebido pelo servidor: ${data.message}`);
            io.emit("notifications", { messages: data.message });
        });
    });

    return io;
}

export const getIO = (): SocketIO => {

    if (!io) {
        
        throw new AppError("Socket IO not initialized");
    }

    return io;
};