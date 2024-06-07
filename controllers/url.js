
import {nanoid} from 'nanoid'
import URL from '../models/url.js';
import 'dotenv/config' 


const generateShortUrl = async (message) => {
    if (message.content.startsWith("create ")) {
        const url = message.content.split("create ")[1]
        if (!url.startsWith("https://") && !url.startsWith("www."))
            return message.reply("Invalid format!!! (eg: create https://www.example.com)")

        const creator = message.author.globalName
        const shortId = nanoid(8)
         URL.create({
            originalUrl: url,
            redirectUrl: shortId,
            creator: creator
         })
        return message.reply(`Short URL: ${process.env.HOSTING}/${shortId}`) 
        
    }
    return message.reply("Invalid format!!! (eg: create https://www.example.com)")
    
    
}

const handleRedirectUrl = async (req, res) => {
    const shortId = req.params.id
    const item = await URL.findOne({ redirectUrl: shortId })
    // console.log(item.originalUrl);
    try {
    return res.redirect(item.originalUrl)
    } catch (error) {
        res.send("invalid url!!!")
    }
}

export  {generateShortUrl, handleRedirectUrl}
