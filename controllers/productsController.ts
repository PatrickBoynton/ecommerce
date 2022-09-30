import { Request, Response } from "express"
import Product from "../data/models/Product"

export const getProducts = async (req: Request, res: Response) => {
	try {
		const products = await Product.findAll()

		res.send(products)
	} catch(e: any) {
		console.error(e.message)
		res.status(500).send("Server error.")
	}

}

export const getProduct = async (req: Request, res: Response) => {
	const product = await Product.findByPk(req.params.id)

	try {
		res.send(product)
	} catch(e: any) {
		console.error(e.message)
		res.status(500).send("Server error")
	}
}