import { cartButton, rightPanel } from "../../styles/objectStyles"
import { Button, Grid, MenuItem, Select, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { useStoreProducts } from "../../store/store-products"
import { useStoreCart } from "../../store/store-cart"
import { useEffect, useState } from "react"
import Product from "../../models/Product"

const AddToCart = () => {
	const navigate = useNavigate()
	const params = useParams()
	const { product, setProduct } = useStoreProducts()
	const { cartItems, setCartItems } = useStoreCart()

	const [qty, setQty] = useState("1")


	const addToCartHandler = () => {
		navigate(`/cart/${params.id}?qty=${qty}`)
		setCartItems(product as Product, Number(qty), cartItems)
		localStorage.setItem("cart", JSON.stringify(cartItems))
	}

	useEffect(() => {
		setProduct(params.id as string)
	}, [setProduct, params.id])

	const quantityLeft = Array.from(new Array(product?.countInStock), (x: number, i: number) => i + 1)

    return <>
			<Grid item xs={4} sx={rightPanel}>
				<Typography variant="h3">${product?.price}</Typography>
				<Typography variant="h3">{product?.countInStock! > 0 ? 'In Stock' : 'Out of Stock'} {product?.countInStock} left </Typography>
				<Button sx={cartButton} onClick={addToCartHandler} disabled={product?.countInStock! < 1}>Add To Cart</Button>
				{product?.countInStock! > 0 && (<Select onChange={(e: any) => setQty(e.target.value)} defaultValue={1}  sx={{backgroundColor: "black", color: "red", border: "4px solid red"}}>
					{
						quantityLeft.map((x: number) => <MenuItem value={x}
																											key={x}
						>{x}</MenuItem>)
					}
				</Select>)}
			</Grid>
    </>
}

export default AddToCart
