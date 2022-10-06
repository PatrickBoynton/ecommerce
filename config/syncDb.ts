import sequelize from "./sequelize"
import User from "../data/models/User"
import Product from "../data/models/Product"
import Order from "../data/models/Order"
import OrderItem from "../data/models/OrderItem"
import ShippingAddress from "../data/models/ShippingAddress"
import Review from "../data/models/Review"
// import users from "../data/users"
// import products from "../data/products"

export const syncDb = async () => {
	try {
		await sequelize.sync({alter: true, logging: false})
		await User.sync({alter: true, logging: false})
		await Order.sync({alter: true, logging: false})
		await OrderItem.sync({alter: true, logging: false})
		await Product.sync({alter: true, logging: false})
		await Review.sync({alter: true, logging: false})
		await ShippingAddress.sync({alter: true, logging: false})

		// await User.bulkCreate(users)
		// await Product.bulkCreate(products)

	} catch (e: any) {
		console.log("ERROR \n---------------------------------")
		console.error(e.message)
	}
}