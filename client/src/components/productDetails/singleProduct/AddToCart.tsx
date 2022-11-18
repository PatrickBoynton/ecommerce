import {
	cartButton,
	rightPanel,
	selectStyling,
} from "../../../styles/objectStyles"
import { Button, Grid, MenuItem, Select, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { useStoreProducts } from "../../../store/store-products"
import { useStoreCart } from "../../../store/store-cart"
import { useState } from "react"
import { useStoreOrder } from "../../../store/store-order"

const AddToCart = () => {
	const navigate = useNavigate()
	const params = useParams()
	const { product } = useStoreProducts()
	const { setQty, addToCartDb } = useStoreCart()
	const { setTotal } = useStoreOrder()
	const [value] = useState<string>()

	const addToCartHandler = () => {
		if (product) navigate(`/cart/${params.id}`)
		navigate("/cart")
		addToCartDb(product)
		setTotal()
		// useStoreCart.subscribe(console.log)
	}

	const quantityLeft = Array.from(
		new Array(product?.countInStock),
		(x: number, i: number) => i + 1
	)

	return (
		<>
			<Grid item xs={4} sx={rightPanel}>
				<Typography variant="h3">${product?.price}</Typography>
				<Typography variant="h3">
					{(product?.countInStock as number) > 0
						? "In Stock " + product?.countInStock
						: "Out of Stock"}
				</Typography>
				<Button
					sx={cartButton}
					onClick={addToCartHandler}
					disabled={(product?.countInStock as number) < 1}
				>
					Add To Cart
				</Button>
				{(product ? (product.countInStock as number) : 0) > 0 && (
					<Select
						onChange={(e) => setQty(product, e.target.value)}
						defaultValue={"1"}
						value={value}
						sx={selectStyling}
					>
						{product ? (
							quantityLeft.map((x: number) => {
								return (
									<MenuItem value={x} key={x}>
										{x}
									</MenuItem>
								)
							})
						) : (
							<MenuItem>1</MenuItem>
						)}
					</Select>
				)}
			</Grid>
		</>
	)
}

export default AddToCart
