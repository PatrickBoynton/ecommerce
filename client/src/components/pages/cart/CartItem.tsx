import { Box, FormControl, InputLabel, ListItem, MenuItem, Select, Typography } from "@mui/material"
import Product from "../../../models/Product"

interface Props {
	product: Product
}


const CartItem = ({product}: Props) => {
	const quantityLeft = Array.from(new Array(product?.countInStock), (x: number, i: number) => (i + 1))

	return <ListItem sx={{ width: "60%", borderBottom: "2px solid red", borderRight: "2px solid red" }}>
		<Box component="img" src={product.image} alt="Product" sx={{ width: "20%" }} />
		<Typography variant="h5">{product.name}</Typography>

		<FormControl sx={{ width: "20%", marginRight: "40px" }}>
			<InputLabel id="qty-label">Qty</InputLabel>
			<Select
				labelId="qty-label"
				id="qt-label"
				defaultValue={product.qty || "1"}
				value={product.qty || "1"}
				label="Qty"
				// onChange={handleChange}
			>
				{quantityLeft.map((item, index) => <MenuItem defaultValue={1} value={item} key={item}>{item}</MenuItem>)}
			</Select>
		</FormControl>
		<Typography variant="h5">Price: </Typography>
		<Typography variant="h6">${product.price * Number((product?.qty || 1))}</Typography>
	</ListItem>
}

export default CartItem
