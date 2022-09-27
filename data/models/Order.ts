import sequelize from "../../config/sequelize"
import { DataTypes} from "sequelize"

const Order = sequelize.define("orders", {
	paymentMethod: {
	    type: DataTypes.STRING,
	},
	taxPrice: {
	    type: DataTypes.FLOAT,
			defaultValue: 0.0
	},
	shippingPrice: {
	    type: DataTypes.FLOAT,
	    defaultValue: 0.0
	},
	totalPrice: {
	    type: DataTypes.FLOAT,
	    defaultValue: 0.0
	},
	isPaid: {
	    type: DataTypes.BOOLEAN,
			defaultValue: false
	},
	paidAt: {
	    type: DataTypes.DATE,
	},
	isDelivered: {
	    type: DataTypes.BOOLEAN,
	    defaultValue: false
	},
	deliveredAt: {
	    type: DataTypes.DATE,
	}
})

export default Order