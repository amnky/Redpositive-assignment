const express = require("express")
const router = express.Router()
const { sendEmail } = require("../controller/emailControllers.js")
router.post("/sendemail", sendEmail)
// fuckeing

module.exports = router
