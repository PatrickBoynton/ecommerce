import { Request, Response } from "express"
import Review from "../data/models/Review"
import Product from "../data/models/Product"

export const postReview = async (req: Request, res: Response) => {
	const { name, rating, title, comment, ProductId } = req.body
	const review = {
		name,
		rating,
		title,
		comment,
		ProductId,
	}

	try {
		const product = await Product.findByPk(review.ProductId)
		if (product) {
			await Review.create(review)
		} else {
			return res.status(404).send("Product not found.")
		}

		return res.status(201).json(review)
	} catch (e: any) {
		console.log(e.message)
		return res.json(e.message)
	}
}

export const getReviews = async (req: Request, res: Response) => {
	const reviews = await Review.findAll()
	try {
		return res.send(reviews)
	} catch (e: any) {
		console.error(e.message)
		return res.status(404).send("No products found.")
	}
}
