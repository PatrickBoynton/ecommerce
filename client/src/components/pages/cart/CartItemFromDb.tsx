import { Box, ListItem, Typography } from "@mui/material"
import Cart from "../../../models/Cart"
import { BoxStyle } from "../../../styles/objectStyles"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
	cart: Cart
}

const CartItemFromDb = ({ cart }: Props) => {
	return (
		<ListItem>
			<Box
				component="img"
				src={String(cart.Products ? cart.Products?.map((x) => x.image) : "")}
				alt="Product"
				sx={BoxStyle}
			/>
			<Typography>
				{cart.Products ? cart.Products.map((x) => x.name) : ""}
			</Typography>
			<Typography variant="h4">{cart.qty}</Typography>
			<Typography variant="h4">${cart.totalPrice}</Typography>
			<FontAwesomeIcon
				style={{ color: "red", cursor: "pointer" }}
				icon={faTrash}
				// onClick={() => {
				// 	editCartItems(product, cartItems)
				// 	getStorageItems()
				// }}
			/>
		</ListItem>
	)
}

export default CartItemFromDb
