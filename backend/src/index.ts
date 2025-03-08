require('dotenv').config();

import OpenAI from "openai"

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "https://github.com/OpenRouterTeam/openrouter-examples",
  },
});

async function makePrompt(prompt:string) {
  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-r1-zero:free",
    messages: [
      { role: "user", content: prompt}
    ],
  })

  return completion.choices[0].message.content;
}