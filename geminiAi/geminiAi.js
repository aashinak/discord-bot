import { GoogleGenerativeAI } from '@google/generative-ai'
import 'dotenv/config'



// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
async function run(message) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  const promptMessage = message.content.split("!gemini ")[1]

  const chat = model.startChat({
    history: [
     
      {
        role: "user",
        parts: [{ text: "reply must be less than 200 output tokens" }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 200,
    },
  });

  const msg = promptMessage;

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  message.reply({
        content: text
    })
}

export default run