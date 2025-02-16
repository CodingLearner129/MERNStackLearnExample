import express from "express";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import cors from 'cors';
import config from "./src/v1/config/config.js";
import { router as routerV1 } from "./src/v1/routes/index.js";
import db from "./src/v1/config/db.js";
import { decodeToken } from "./src/v1/services/user_service.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Development logging
app.use(morgan('dev'));

// Use CORS middleware
app.use(cors());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specific HTTP methods
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
//     next();
// });

// Body parser, reading data from body into req.body
app.use(express.json({ limit: config.request_data_limit }));
app.use(express.urlencoded({ extended: true, limit: config.request_data_limit }));

// Limit requests from same API
const limiter = rateLimit({
    max: 100, // maximum rate limit for requests is 100
    windowMs: 60 * 1000, // Number of milliseconds (1 minute)
    message: "Too many requests from this IP address, please try again in an hour!"
});
// means in 1h window max 100 requests are allowed

app.use('/v1', limiter); // Apply limiter to all /v1 routes

app.get('/', (req, res) => {
    res.send({
        status: config.status_success,
        message: 'Hello to memories API',
        version: 'v1',
    });
});

// serving static files
app.use(express.static(path.join(__dirname, './src/public')));

app.use('/v1', routerV1);

app.all('*', (req, res) => {
    res.status(404).json({
        status: config.status_fail,
        message: `Can't find ${req.originalUrl} on this server!`
    });
});

export default app;
