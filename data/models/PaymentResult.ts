import sequelize from "../../config/sequelize"
import { DataTypes} from "sequelize"

const PaymentResult = sequelize.define("payment_result", {
	 status: {
	     type: DataTypes.STRING,
	 },
	update_time: {
	    type: DataTypes.STRING,
	},
	email: {
	    type: DataTypes.STRING,
	}
})

export default PaymentResult