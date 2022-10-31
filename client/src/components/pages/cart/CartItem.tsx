import { Box, FormControl, InputLabel, ListItem, MenuItem, Select, Typography } from "@mui/material"
import Product from "../../../models/Product"
import { BoxStyle, CartItemList, FormControlStyles } from "../../../styles/objectStyles"

interface Props {
	product: Product
}


const CartItem = ({product}: Props) => {
	const quantityLeft = Array.from(new Array(product?.countInStock), (x: number, i: number) => (i + 1))

	return <ListItem sx={CartItemList}>
		<Box component="img" src={product.image} alt="Product" sx={BoxStyle} />
		<Typography variant="h5">{product.name}</Typography>

		<FormControl sx={FormControlStyles}>
			<InputLabel id="qty-label">Qty</InputLabel>
			<Select
				labelId="qty-label"
				id="qt-label"
				defaultValue={product.qty || "1"}
				value={product.qty || "1"}
				label="Qty"
			>
				{quantityLeft.map((item) => <MenuItem defaultValue={1} value={item} key={item}>{item}</MenuItem>)}
			</Select>
		</FormControl>
		<Typography variant="h5">Price: </Typography>
		<Typography variant="h6">${(product.price * Number((product?.qty || 1))).toFixed(2)}</Typography>
	</ListItem>
}

export default CartItem
