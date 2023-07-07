import "./shared/config";
import { serverHttp } from "./http";
import "express-async-errors";
import { initIO } from "./shared/socket";

const server = serverHttp.listen(process.env.HTTP_PORT, () => {
    console.log(`Server HTTP running on port ${process.env.HTTP_PORT}`);
});

// initIO(server);

(async function() {
    await initIO(server);
})().catch((err) => new Error(err));