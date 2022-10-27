import { Box, FormControl, InputLabel, ListItem, MenuItem, Select, Typography } from "@mui/material"
import Product from "../models/Product"

interface Props {
	products: Product
}


const CartItem = ({products}: Props) => {
	const quantityLeft = Array.from(new Array(products?.countInStock), (x: number, i: number) => (i + 1))

	return <ListItem sx={{ width: "60%", borderBottom: "2px solid red", borderRight: "2px solid red" }}>
		<Box component="img" src={products.image} alt="Product" sx={{ width: "20%" }} />
		<Typography variant="h5">{products.name}</Typography>

		<FormControl sx={{ width: "20%", marginRight: "40px" }}>
			<InputLabel id="qty-label">Qty</InputLabel>
			<Select
				labelId="qty-label"
				id="qt-label"
				defaultValue={products.qty}
				value={products.qty}
				label="Qty"
				// onChange={handleChange}
			>
				{quantityLeft.map((item, index) => <MenuItem defaultValue={1} value={item} key={item}>{item}</MenuItem>)}
			</Select>
		</FormControl>
		<Typography variant="h5">Price: </Typography>
		<Typography variant="h6">${products.price}</Typography>
	</ListItem>
}

export default CartItem
