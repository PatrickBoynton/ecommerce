import sequelize from "./sequelize"
import User from "../data/models/User"
import Product from "../data/models/Product"
import Order from "../data/models/Order"
import OrderItem from "../data/models/OrderItem"
import ShippingAddress from "../data/models/ShippingAddress"
import Review from "../data/models/Review"
import Cart from "../data/models/Cart"
import PaymentResult from "../data/models/PaymentResult"
import reviews from "../data/reviews"
import users from "../data/users"
import products from "../data/products"

export const syncDb = async () => {
	try {
		await sequelize.sync({ alter: true, logging: false })
		await User.sync({ alter: true, logging: false })
		await Cart.sync({ alter: true, logging: false })
		await Order.sync({ alter: false, logging: false })
		await OrderItem.sync({ alter: false, logging: false })
		await Product.sync({ alter: true, logging: false })
		await Review.sync({ alter: true, logging: false })
		await ShippingAddress.sync({ alter: false, logging: false })
		await PaymentResult.sync({ alter: false, logging: false })

		const usersDb = await User.findByPk(1)
		const productsDb = await Product.findByPk(1)
		const reviewsDb = await Review.findByPk(1)

		if (!usersDb && !productsDb && !reviewsDb) {
			await User.bulkCreate(users)
			await Product.bulkCreate(products)
			await Review.bulkCreate(reviews)
		}
	} catch (e: any) {
		console.log("ERROR \n---------------------------------")
		console.error(e)
	}
}
