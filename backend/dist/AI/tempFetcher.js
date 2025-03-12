"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const openai = require('./config');
const templateFetcher = (prompt) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield openai.chat.completions.create({
        model: "deepseek/deepseek-r1:free",
        messages: [{
                role: "user",
                content: "these is an important instruction: Return either 'node' or 'react' based on what this project should be. only return a single word either 'node' or 'react'. Do not return anything extra."
            }, {
                role: "user",
                content: prompt
            }],
    });
    const answer = response.choices[0].message.content;
    return answer;
});
module.exports = templateFetcher;
