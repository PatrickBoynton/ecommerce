import { useStoreCart } from "../../../store/store-cart"
import { List, Typography } from "@mui/material"
import { deleteItemsStyles } from "../../../styles/objectStyles"
import CartItem from "./CartItem"
import Product from "../../../models/Product"

const CartItemDisplay = () => {
	const { cartItems, deleteCartItems } = useStoreCart()
	const handleDeleteAllItems = () => {
		deleteCartItems()
	}
	return (
		<>
			<Typography variant="h2">Shopping Cart</Typography>
			{cartItems.length > 0 && (
				<Typography
					variant="h4"
					sx={deleteItemsStyles}
					onClick={handleDeleteAllItems}
				>
					Delete All
				</Typography>
			)}
			{cartItems ? (
				<List>
					{cartItems.map((item) => (
						<CartItem key={item?.id} product={item as Product} />
					))}
				</List>
			) : (
				<Typography variant="h3">No items in your cart. </Typography>
			)}
		</>
	)
}

export default CartItemDisplay
