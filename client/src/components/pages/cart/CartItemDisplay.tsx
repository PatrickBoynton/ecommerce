import { useStoreCart } from "../../../store/store-cart"
import { List, Typography } from "@mui/material"
import { deleteItemsStyles } from "../../../styles/objectStyles"
import { useEffect } from "react"
import CartItemFromDb from "./CartItemFromDb"

const CartItemDisplay = () => {
	const { cartItems, deleteCartDb } = useStoreCart()
	const handleDeleteAllItems = () => {
		deleteCartDb()
	}
	const { getCartFromDb, cart } = useStoreCart()

	useEffect(() => {
		getCartFromDb()
	}, [getCartFromDb])

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
			{cart ? (
				<List>
					{cart.map((item) => (
						<CartItemFromDb key={item?.id} cart={item} />
					))}
				</List>
			) : (
				<Typography variant="h3">No items in your cart. </Typography>
			)}
		</>
	)
}

export default CartItemDisplay
