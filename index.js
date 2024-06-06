import { Client, GatewayIntentBits } from 'discord.js'
import 'dotenv/config' 
import mongoDbConnect from './connection.js';
import { generateShortUrl } from './controllers/url.js';
import express from 'express'
import urlRoute from './routes/url.js';
import run from './geminiAi/geminiAi.js';


const app = express()



mongoDbConnect(process.env.MONGODB_URL)

app.use('/', urlRoute)

// Create a new client instance
const client = new Client({
    intents: [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent]
});


client.on("messageCreate",  (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith("create")) { 
        generateShortUrl(message)     
    }
    if (message.content.startsWith("hey")) {
        message.reply({
            content: `Hi @${message.author.globalName} hopes you are fine`
        })
    }
    if (message.content.startsWith("!gemini")) {
        run(message)
    }
    
})

client.on("interactionCreate", (interaction) => {
    interaction.reply("Pong!!!")
})

client.login(process.env.TOKEN)

const port = 3000
app.listen(3000, () => {
    console.log(`Server started at http://localhost:${port}`);
})