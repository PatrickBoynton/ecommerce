import { useStoreCart } from "../../../store/store-cart"
import { List, Typography } from "@mui/material"
import { deleteItemsStyles } from "../../../styles/objectStyles"
import { useEffect, useState } from "react"
import CartItemFromDb from "./CartItemFromDb"
import Product from "../../../models/Product"

const CartItemDisplay = () => {
	const { cartItems, deleteCartItems } = useStoreCart()
	const handleDeleteAllItems = () => {
		deleteCartItems()
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
					{cart.map((item, index) => (
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
