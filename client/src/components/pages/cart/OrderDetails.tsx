import {
	Button,
	FormControl,
	MenuItem,
	Select,
	Typography,
} from "@mui/material"
import { useStoreOrder } from "../../../store/store-order"
import { useEffect } from "react"

const OrderDetails = () => {
	const { total, tax, shipping, setSubtotal, paymentMethod, subtotal } =
		useStoreOrder()

	useEffect(() => {
		setSubtotal()
	}, [setSubtotal])

	console.log(shipping)
	return (
		<>
			<Typography variant="h2">Order Total: </Typography>
			<Typography variant="h3">
				{total !== undefined && total ? "$" + total : "$0.00"}
			</Typography>
			{total && (
				<>
					<Typography variant="h3">Payment Method: </Typography>
					<FormControl sx={{ width: "40%" }}>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							defaultValue="Paypal"
							value="Paypal"
							label="Payment Method"
						>
							{paymentMethod.map((x) => (
								<MenuItem key={x} value={x}>
									{x}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<Typography variant="h2">Shipping: </Typography>
					<Typography>${shipping}</Typography>
					<Typography></Typography>
					<Typography variant="h2">Tax: </Typography>
					<Typography>{tax * 100}%</Typography>
					<Typography variant="h3">Subtotal: </Typography>
					<Typography>{subtotal.toFixed(2)}</Typography>
					<Button sx={{ border: "4px solid red", color: "white" }}>
						Submit Order
					</Button>
				</>
			)}
		</>
	)
}

export default OrderDetails
