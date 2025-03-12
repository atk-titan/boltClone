import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.API_KEY,
    defaultHeaders: {
      "HTTP-Referer": "https://github.com/OpenRouterTeam/openrouter-examples",
    },
});

module.exports=openai;