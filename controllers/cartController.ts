import { Request, Response } from "express"
import Cart from "../data/models/Cart"
import Product from "../data/models/Product"

export const getCart = async (req: Request, res: Response) => {
	try {
		const cart = await Cart.findAll()

		return res.send(cart)
	} catch (e: any) {
		console.error(e.message)
		return res.status(500)
	}
}

export const postCart = async (req: Request, res: Response) => {
	const { qty, productId } = req.body

	try {
		const product = await Product.findByPk(productId)
		const existingItem = await Cart.findOne({
			where: {
				productId,
			},
		})

		if (product && !existingItem) {
			const cartItem = {
				qty,
				totalPrice: qty * product.price,
				productId,
			}
			await Cart.create(cartItem)
			res.status(201).send(cartItem)
		}
	} catch (e: any) {
		console.log(e.message)
		return res.status(500).send("Something went wrong.")
	}
}
