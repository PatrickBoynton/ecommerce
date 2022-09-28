import sequelize from "./sequelize"
import User from "../data/models/User"
import Product from "../data/models/Product"
import Order from "../data/models/Order"
import OrderItem from "../data/models/OrderItem"
import ShippingAddress from "../data/models/ShippingAddress"
import Review from "../data/models/Review"

export const syncDb = async () => {
    try {
        await sequelize.sync({alter: true, logging: console.log})
        await User.sync({alter: true})
        await Order.sync({alter: true})
        await OrderItem.sync({alter: true})
        await Product.sync({alter: true})
        await Review.sync({alter: true})
        await ShippingAddress.sync({alter: true})
        console.log("Sync finished.")
    } catch (e: any) {
        console.error(e.message)
    }
}