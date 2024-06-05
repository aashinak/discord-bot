
import {nanoid} from 'nanoid'
import URL from '../models/url.js';

const generateShortUrl = async (message) => {

    const url = message.content.split("create ")[1]
    const creator = message.author.globalName
    const shortId = nanoid(8)
         URL.create({
            originalUrl: url,
            redirectUrl: shortId,
            creator: creator
         })
    return message.reply(`Short URL: http://localhost:3000/${shortId}`) 
    
}

const handleRedirectUrl = async (req, res) => {
    const shortId = req.params.id
    const item = await URL.findOne({ redirectUrl: shortId })
    // console.log(item.originalUrl);
    return res.redirect(item.originalUrl)
}

export  {generateShortUrl, handleRedirectUrl}
