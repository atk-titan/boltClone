const openai = require('./config');

const templateFetcher= async (prompt:string)=>{
    const response = await openai.chat.completions.create({
        model: "deepseek/deepseek-r1:free",
        // model: "claude-3.5-sonnet-20240620",
        messages: [{
            role:"user",
            content:"these is an important instruction: Return either 'node' or 'react' based on what this project should be. only return a single word either 'node' or 'react'. Do not return anything extra."
        },{
          role:"user",
          content:prompt
        }],
    });

    const answer = response.choices[0].message.content;

    return answer;
}

module.exports=templateFetcher;