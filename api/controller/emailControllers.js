/** @format */

const expressAsyncHandler = require("express-async-handler")
const dotenv = require("dotenv")
const nodemailer = require("nodemailer")
dotenv.config()

let transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: process.env.SMTP_PORT,
	secure: false, // true for 465, false for other ports
	auth: {
		user: process.env.EMAIL_ID, // generated ethereal user
		pass: process.env.EMAIL_PASSWORD, // generated ethereal password
	},
})

const sendEmail = expressAsyncHandler(async (req, res) => {
	console.log("access tried")

	const { name, mobile, email, message } = req.body
	console.log(name, mobile, email, message)

	var mailOptions = {
		from: process.env.EMAIL_ID,
		to: "info@redpositive.in",
		// email: email,
		subject: name,
		// mobile: mobile,
		text: `Name: ${name}\n mobile number: ${mobile}\n email: ${email}\n message: ${message}`,
	}
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error)
		} else {
			console.log("Email sent successfully!")
			return
		}
	})
})

module.exports = { sendEmail }
