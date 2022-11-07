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

export const getCartItem = async (req: Request, res: Response) => {
	const cartItem = await Cart.findByPk(req.params.id)
	if (!cartItem) return res.status(200)
	return res.send(cartItem)
}

export const createCartItem = async (req: Request, res: Response) => {
	const { qty, ProductId } = req.body

	try {
		const product = await Product.findByPk(ProductId)
		let existingItem: any = await Cart.findOne({ where: { ProductId } })

		if (product) {
			if (product.countInStock > qty) {
				const cartMath = Number((qty * product.price).toFixed(2))
				const cartItem = {
					qty,
					totalPrice: cartMath,
					ProductId: product.id,
				}

				if (existingItem) {
					existingItem = {
						qty,
						totalPrice: cartMath,
						ProductId: product.id,
					}

					await Cart.update(existingItem, {
						where: { ProductId },
					})

					return res.send(existingItem)
				} else {
					await Cart.create(cartItem)

					return res.status(201).send(cartItem)
				}
			} else {
				return res.status(400).send("Please enter a valid amount.")
			}
		} else {
			return res.status(404).send("Product not found.")
		}
	} catch (e: any) {
		console.log(e.message)
		return res.status(500).send(e.message)
	}
}
