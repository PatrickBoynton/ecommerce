import { Request, Response } from "express"
import Product from "../data/models/Product"

export const getProducts = async (req: Request, res: Response) => {
	try {
		const products = await Product.findAll()

		res.send(products)
	} catch (e: any) {
		console.error(e.message)
		res.status(500).send("Server error.")
	}
}

export const getProduct = async (req: Request, res: Response) => {
	const product = await Product.findByPk(req.params.id)

	try {
		res.send(product)
	} catch (e: any) {
		console.error(e.message)
		res.status(500).send("Server error")
	}
}

export const addProducts = async (req: Request, res: Response) => {
	const { name, image, brand, category, description, price, countInStock } =
		req.body
	try {
		const newProduct = {
			name,
			image,
			brand,
			category,
			description,
			price,
			countInStock,
			numReviews: 0,
		}
		await Product.create(newProduct)
		return res.status(201).send(newProduct)
	} catch (e: any) {
		console.error(e.message)
		return res.status(500).send("Something went wrong.")
	}
}

export const editProducts = async (req: Request, res: Response) => {
	const { name, image, brand, category, description, price, countInStock } =
		req.body
	try {
		const product = await Product.findByPk(req.params.id)

		const updatedProduct = {
			name,
			image,
			brand,
			category,
			description,
			price,
			countInStock,
		}

		if (product) await product?.update(updatedProduct)
		return res.send(product)
	} catch (e: any) {
		console.error(e.message)
		return res.status(500).send("Something went wrong.")
	}
}

export const deleteProduct = async (req: Request, res: Response) => {
	const product = await Product.findByPk(req.params.id)

	try {
		if (product) {
			await product?.destroy()
			console.log("DESTROYED")
			// res.status(204)
		} else {
			return res.status(404).send("Product does not exist.")
		}
	} catch (e: any) {
		console.error(e.message)
		return res.send("Something went wrong.")
	}
}
