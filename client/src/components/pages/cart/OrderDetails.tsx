import { Button, FormControl, MenuItem, Select, Typography } from "@mui/material"
import { useStoreCart } from "../../../store/store-cart"

const OrderDetails = () => {
	const { cartTotal } = useStoreCart()
    return <>
			<Typography variant="h2">Order Total: </Typography>
			<Typography variant="h3">{cartTotal !== undefined  && cartTotal ? "$" + cartTotal.toFixed(2)  : "$0.00"}</Typography>
			{cartTotal && <>
				<Typography variant="h3">Payment Method: </Typography>
				<FormControl sx={{width: "40%"}}>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						defaultValue="Paypal"
						value="Paypal"
						label="Payment Method"
					>
						<MenuItem value="Paypal">Paypal</MenuItem>
						<MenuItem value="Credit Card">Credit Card</MenuItem>
					</Select>
				</FormControl>
				<Typography variant="h2">Tax: </Typography>
				<Typography>6%</Typography>
				<Typography variant="h3">Subtotal: </Typography>
				<Typography>{(cartTotal * .06 + cartTotal).toFixed(2)}</Typography>
				<Button sx={{border: "4px solid red", color: "white"}}>Submit Order</Button>
			</>}
    </>
}

export default OrderDetails
