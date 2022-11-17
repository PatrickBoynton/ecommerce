import { Request, Response } from "express"
import Review from "../data/models/Review"
import Product from "../data/models/Product"

export const postReview = async (req: Request, res: Response) => {
	const { name, rating, title, comment } = req.body

	const product = (await Product.findByPk(req.params.id)) as Product

	const review = {
		name,
		rating,
		title,
		comment,
		ProductId: product?.id,
	}

	try {
		if (product) {
			await Review.create(review)

			product?.increment("numReviews")

			const ratings = await Review.findAll({
				attributes: ["rating"],
				where: {
					ProductId: product.id,
				},
				group: ["rating"],
			})

			const test: number[] = []

			ratings.map((x) => test.push(x.rating))

			const numRatings = ratings.length

			const avg = Math.ceil(test.reduce((a, b) => (a + b) / numRatings))

			const {
				name,
				image,
				description,
				brand,
				category,
				countInStock,
				numReviews,
			} = product

			const updatedProduct = {
				name,
				image,
				description,
				brand,
				category,
				countInStock,
				rating: avg,
				numReviews,
			}

			product?.update(updatedProduct)
			return res.json(product)
		} else {
			return res.status(404).send("Product not found.")
		}
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
