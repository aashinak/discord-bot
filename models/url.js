import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    redirectUrl: {
        type: String,
        required: true,
        unique: true
    },
    creator: {
        type: String,
        required: true
    }
}, { timestamps: true })

const URL = mongoose.model('discordUrl', urlSchema)

export default URL