import {
	Box,
	FormControl,
	InputLabel,
	ListItem,
	MenuItem,
	Select,
	Typography,
} from "@mui/material"
import Product from "../../../models/Product"
import {
	BoxStyle,
	CartItemList,
	FormControlStyles,
} from "../../../styles/objectStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useStoreCart } from "../../../store/store-cart"
import { useState } from "react"

interface Props {
	product: Product
}

const CartItem = ({ product }: Props) => {
	const quantityLeft = Array.from(
		new Array(product?.countInStock),
		(x: number, i: number) => i + 1
	)
	const itemTotal = product.price * Number(product?.qty)
	const [val, setVal] = useState()
	const { setQty, cartItems, editCartItems, getStorageItems } = useStoreCart()

	const handleChange = (e: any) => {
		setVal(e.target.value)
		setQty(product, e.target.value)
	}
	return (
		<ListItem sx={CartItemList}>
			<Box component="img" src={product.image} alt="Product" sx={BoxStyle} />
			<Typography variant="h5">{product.name}</Typography>

			<FormControl sx={FormControlStyles}>
				<InputLabel id="qty-label">Qty</InputLabel>
				<Select
					labelId="qty-label"
					id="qt-label"
					defaultValue={product.qty || val || "1"}
					onChange={handleChange}
					value={product.qty || val || "1"}
					label="Qty"
				>
					{quantityLeft.map((item) => (
						<MenuItem
							defaultValue={1}
							id={`qty-${item}`}
							value={item}
							key={item}
						>
							{item}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<Typography variant="h5">Price: </Typography>
			<Typography variant="h6" sx={{ paddingRight: "5px" }}>
				${itemTotal.toFixed(2)}
			</Typography>
			<FontAwesomeIcon
				style={{ color: "red", cursor: "pointer" }}
				icon={faTrash}
				onClick={() => {
					editCartItems(product, cartItems)
					getStorageItems()
				}}
			/>
		</ListItem>
	)
}

export default CartItem
