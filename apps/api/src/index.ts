/** @format */

import express from "express"
import axios from "axios"

const app = express()
const port = 3000

app.use(express.json())

app.get("/data", async (req, res) => {
	try {
		const response = await axios.get("http://backend:4000/data")
		res.json(response.data)
	} catch (error) {
		res.status(500).send("Error communicating with backend")
	}
})
app.post("/data", async (req, res) => {
	try {
		const response = await axios.post("http://backend:4000/data", {
			name: req.body.name,
		})
		res.json(response.data)
	} catch (error: any) {
		// Forward the error status code and message from the backend, if available
		res
			.status(error?.response?.status || 500)
			.send(error.response?.data || error.message)
	}
})
app.listen(port, () => {
	console.log(`API server running on http://localhost:${port}`)
})
