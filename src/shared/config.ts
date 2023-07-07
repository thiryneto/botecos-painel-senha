import dotenv from "dotenv";
import path from "path";

// PATH DO .ENVs
const pathEnvFiles = path.resolve(__dirname, `./../../.env`);

dotenv.config({
    path: pathEnvFiles
});