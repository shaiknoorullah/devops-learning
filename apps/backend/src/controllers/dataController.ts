/** @format */

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getAllSamples = async (req: any, res: any) => {
	const samples = await prisma.sample.findMany()
	res.json(samples)
}
