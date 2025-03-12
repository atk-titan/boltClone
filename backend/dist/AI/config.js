"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = __importDefault(require("openai"));
const openai = new openai_1.default({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.API_KEY,
    defaultHeaders: {
        "HTTP-Referer": "https://github.com/OpenRouterTeam/openrouter-examples",
    },
});
module.exports = openai;
