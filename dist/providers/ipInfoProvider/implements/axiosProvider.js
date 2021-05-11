"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosProvider = void 0;
const axios_1 = __importDefault(require("axios"));
class AxiosProvider {
    async execute() {
        return await axios_1.default.get(`http://api.ipstack.com/check?access_key=${process.env.ACCESS_KEY}`);
    }
}
exports.AxiosProvider = AxiosProvider;
