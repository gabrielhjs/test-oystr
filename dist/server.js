"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
dotenv_1.default.config();
const PORT = parseInt(process.env.PORT || "3000");
const HOST = "0.0.0.0";
app_1.app.use(cors_1.default({ origin: process.env.APP_URL }));
app_1.app.listen(PORT, HOST, function () {
    `Express app listening on ${HOST}:${PORT}`;
});
