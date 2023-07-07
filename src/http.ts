import express, { NextFunction, Request, Response } from "express";
import http from "http";
import { AppError } from "./error/AppError";
import "express-async-errors";

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    return res.json({ message: `HTTP rodando na porta ${process.env.HTTP_PORT}` });
})

app.use(
    async (err: Error, request: Request, response: Response, _next: NextFunction) => {
        
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                error: true,
                message: err.message
            });
        }
        
        return response.status(500).json({
            error: true,
            message: `Internal server error ${err.message}`
        });
    }
);

const serverHttp = http.createServer(app);

export { serverHttp }