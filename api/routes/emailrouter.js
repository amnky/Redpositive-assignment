const express = require("express")
const router = express.Router()
const { sendEmail } = require("../controller/emailControllers.js")
router.post("/sendemail", sendEmail)

module.exports = router
