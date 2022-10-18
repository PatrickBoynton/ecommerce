import { cartButton, rightPanel } from "../../styles/objectStyles"
import { Button, Grid, MenuItem, Select, Typography } from "@mui/material"
import Product from "../../models/Product"

interface Props {
	product: Product
	quantityLeft: number[]
	setQty: (e: any) => void
}

const AddToCart = ({product, quantityLeft, setQty}: Props) => {
    return <>
			<Grid item xs={4} sx={rightPanel}>
				<Typography variant="h3">${product?.price}</Typography>
				<Typography variant="h3">{product?.countInStock! > 0 ? 'In Stock' : 'Out of Stock'} {product?.countInStock} left </Typography>
				<Button sx={cartButton} disabled={product?.countInStock! < 1}>Add To Cart</Button>
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
