import sequelize from "./sequelize"
import User from "../data/models/User"
import Product from "../data/models/Product"
import Order from "../data/models/Order"
import OrderItem from "../data/models/OrderItem"
import ShippingAddress from "../data/models/ShippingAddress"
import PaymentResult from "../data/models/PaymentResult"
import Review from "../data/models/Review"

export const syncDb = async () => {
	try {
		await sequelize.sync({alter: true, logging: console.log})
		await User.sync({alter: true})
		await User.hasMany(Product)
		await User.hasMany(Order)
		await Order.sync({alter: true})
		await Order.belongsTo(User)
		await Order.hasMany(OrderItem)
		await Order.hasMany(ShippingAddress)
		await Order.hasOne(PaymentResult)
		await OrderItem.sync({ alter: true })
		await Product.sync({ alter: true })
		await Product.hasMany(Review)
		await Product.hasMany(ShippingAddress)
		await Review.sync({ alter: true })
		await ShippingAddress.sync()
		console.log("Sync finished.")
	} catch(e: any) {
		console.error(e.message)
	}
}