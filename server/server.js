import http from 'node:http';
import app from "./app.js";
import config from "./src/v1/config/config.js";

// get data from .env file
const port = config.port;
const host = config.host;
const server = http.createServer(app);

// start server
const listenServer = server.listen(port, host, () => {
    console.log(`Listening on http://${host}:${port}`);
});``