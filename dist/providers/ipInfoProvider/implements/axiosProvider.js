"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosProvider = void 0;
const axios_1 = __importDefault(require("axios"));
class AxiosProvider {
    async execute(url) {
        return await axios_1.default.get(url);
    }
}
exports.AxiosProvider = AxiosProvider;
