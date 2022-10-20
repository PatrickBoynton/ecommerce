import { Box, FormControl, InputLabel, ListItem, MenuItem, Select, Typography } from "@mui/material"
import Product from "../models/Product"

interface Props {
	products: Product[]
}


const CartItem = ({products}: Props) => {
	return <ListItem sx={{ width: "60%", borderBottom: "2px solid red", borderRight: "2px solid red" }}>
		<Box component="img" src={products[0].image} alt="Product" sx={{ width: "20%" }} />
		<Typography variant="h5">{products[0].name}</Typography>

		<FormControl sx={{ width: "20%", marginRight: "40px" }}>
			<InputLabel id="demo-simple-select-label">Qty</InputLabel>
			<Select
				// sx={{width: "10%"}}
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={5}
				label="Age"
				// onChange={handleChange}
			>
				<MenuItem value={10}>Ten</MenuItem>
				<MenuItem value={20}>Twenty</MenuItem>
				<MenuItem value={30}>Thirty</MenuItem>
			</Select>
		</FormControl>
		<Typography variant="h5">Price: </Typography>
		{/*<ListItemText primary={"$" + products[0].price}/>*/}
		<Typography variant="h6">${products[0].price}</Typography>
	</ListItem>
}

export default CartItem
