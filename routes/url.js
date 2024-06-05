import express from 'express'
import { handleRedirectUrl } from '../controllers/url.js'

const router = express.Router()

router.get("/:id", handleRedirectUrl)

export default router