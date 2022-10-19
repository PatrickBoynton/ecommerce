import { cartButton, rightPanel } from "../../styles/objectStyles"
import { Button, Grid, MenuItem, Select, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { useStoreProducts } from "../../store/store-products"
import { useEffect, useState } from "react"

const AddToCart = () => {
	const navigate = useNavigate()
	const params = useParams()

	const { product, setProduct } = useStoreProducts()

	const [qty, setQty] = useState<string>()

	const addToCartHandler = () => {
		navigate(`/cart/${params.id}`)
	}

	useEffect(() => {
		setProduct(params.id as string)
	}, [setProduct, params.id])

	const quantityLeft = Array.from(new Array(product?.countInStock), (x: number, i: number) => i + 1)

	console.log(quantityLeft)

    return <>
			<Grid item xs={4} sx={rightPanel}>
				<Typography variant="h3">${product?.price}</Typography>
				<Typography variant="h3">{product?.countInStock! > 0 ? 'In Stock' : 'Out of Stock'} {product?.countInStock} left </Typography>
				<Button sx={cartButton} onClick={addToCartHandler} disabled={product?.countInStock! < 1}>Add To Cart</Button>
				{product?.countInStock! > 0 && (<Select defaultValue={1}  sx={{backgroundColor: "black", color: "red", border: "4px solid red"}}>
					{
						quantityLeft.map((x: number) => <MenuItem value={x}
																											key={x}
																											onChange={(e:any) => setQty(e.target)}
						>{x}</MenuItem>)
					}
				</Select>)}
			</Grid>
    </>
}

export default AddToCart
