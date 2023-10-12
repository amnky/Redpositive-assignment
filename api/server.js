/** @format */

const express = require("express")
const dotenv = require("dotenv")
const emailRoutes = require("./routes/emailrouter")

const app = express()
dotenv.config()

const cors = require("cors")

app.use(cors())
app.use(express.json())

app.use("/form", emailRoutes)
// app.get("/form/sendemail", (req, res) => {
// 	console.log("other tried")
// 	res.send("WRONG try")
// })
app.get("/", (req, res) => {
	res.send("Hello World!")
})
// app.get("*", (req, res) => {
// 	res.status(404).send("page not found")
// })
const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`)
})
