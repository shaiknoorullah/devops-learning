/** @format */

import express from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const app = express()
const port = 4000

app.use(express.json())

app.get("/data", async (req, res) => {
	const data = await prisma.sample.findMany()
	res.json(data)
})

app.post("/data", async (req, res) => {
	try {
		const data = await prisma.sample.create({
			data: {
				name: req.body.name,
			},
		})
		res.json(data)
	} catch (error: any) {
		res.status(500).send(error?.message)
	}
})

app.listen(port, () => {
	console.log(`Backend server running on http://localhost:${port}`)
})
