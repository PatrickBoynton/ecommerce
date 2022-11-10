import {
	cartButton,
	rightPanel,
	selectStyling,
} from "../../../styles/objectStyles"
import { Button, Grid, MenuItem, Select, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { useStoreProducts } from "../../../store/store-products"
import { useStoreCart } from "../../../store/store-cart"
import { useEffect, useState } from "react"
import Product from "../../../models/Product"

const AddToCart = () => {
	const navigate = useNavigate()
	const params = useParams()
	const { product, setProduct } = useStoreProducts()
	const { setCartItems, setQty, cartItems, addToCartDb } = useStoreCart()
	const [value] = useState<string>()

	const addToCartHandler = () => {
		if (product) navigate(`/cart/${params.id}`)
		setCartItems(product as Product, cartItems)
		addToCartDb(product)
		navigate("/cart")
		// useStoreCart.subscribe(console.log)
	}

	useEffect(() => {
		setProduct(params.id as string)
	}, [setProduct, params.id])

	const quantityLeft = Array.from(
		new Array(product?.countInStock),
		(x: number, i: number) => i + 1
	)

	return (
		<>
			<Grid item xs={4} sx={rightPanel}>
				<Typography variant="h3">${product?.price}</Typography>
				<Typography variant="h3">
					{(product?.countInStock as number) > 0 ? "In Stock" : "Out of Stock"}{" "}
					{product?.countInStock} left{" "}
				</Typography>
				<Button
					sx={cartButton}
					onClick={addToCartHandler}
					disabled={(product?.countInStock as number) < 1}
				>
					Add To Cart
				</Button>
				{(product.countInStock as number) > 0 && (
					<Select
						onChange={(e) => setQty(product, e.target.value)}
						defaultValue={"1"}
						value={value}
						sx={selectStyling}
					>
						{quantityLeft.map((x: number) => (
							<MenuItem value={x} key={x}>
								{x}
							</MenuItem>
						))}
					</Select>
				)}
			</Grid>
		</>
	)
}

export default AddToCart
