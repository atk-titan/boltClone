import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.API_KEY,
    defaultHeaders: {
      "HTTP-Referer": "https://github.com/OpenRouterTeam/openrouter-examples",
    },
});

// const openai = new OpenAI({
//     baseURL: 'https://beta.sree.shop/v1',
//     apiKey: process.env.CLAUDE_KEY  // Replace with your API key  
// });

module.exports=openai;