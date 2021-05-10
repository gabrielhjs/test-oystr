"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipInfoRouter = void 0;
const express_1 = require("express");
const _1 = require(".");
const ipInfoRouter = express_1.Router();
exports.ipInfoRouter = ipInfoRouter;
ipInfoRouter.get("/", (request, response) => {
    return _1.ipInfoController.handle(request, response);
});
