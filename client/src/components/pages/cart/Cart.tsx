import {
    FormControl,
    Grid,
    List,
    Typography,
    Select, MenuItem, Button
} from "@mui/material"
import { useEffect } from "react"
import { useStoreCart } from "../../../store/store-cart"
import Product from "../../../models/Product"
import { borderRight, deleteItemsStyles } from "../../../styles/objectStyles"
import CartItem from "./CartItem"

const Cart = () => {
    const { cartItems, setCartTotal, cartTotal, deleteCartItems, getStorageItems } = useStoreCart()

    const price = cartItems?.map((item) => item?.price)
    const qty = cartItems?.map((item) => Number(item?.qty) || 1)

    const sum = price?.map((num, idk: number) => Number(num) * qty[idk])
      .reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0)

    useEffect(() => {
        setCartTotal(sum)
    }, [setCartTotal, sum])

    useEffect(() => {
        getStorageItems()
    }, [getStorageItems])


    const handleDeleteAllItems = () => {
        deleteCartItems()
    }
    return <Grid container>
        <Grid item xs={8} sx={borderRight}>
            <Typography variant="h2">Shopping Cart</Typography>
            {cartItems.length > 0 && <Typography variant="h4" sx={deleteItemsStyles} onClick={handleDeleteAllItems}>Delete
                All</Typography>}
            {cartItems ? <List>
                {cartItems.map((item) =>
                  <CartItem key={item?.id} product={item as Product}/>)}
            </List> : <Typography variant="h3">No items in your cart. </Typography>}
        </Grid>
        <Grid item xs={4}>
            <Typography variant="h2">Order Total: </Typography>
            <Typography variant="h3">{cartTotal !== undefined  && cartTotal ? "$" + cartTotal.toFixed(2)  : "$0.00"}</Typography>
            {cartTotal && <>
                <Typography variant="h3">Payment Method: </Typography>
                <FormControl sx={{width: "40%"}}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue="Paypal"
                      value="Paypal"
                      label="Payment Method"
                    >
                        <MenuItem value="Paypal">Paypal</MenuItem>
                        <MenuItem value="Credit Card">Credit Card</MenuItem>
                    </Select>
                </FormControl>
                <Typography variant="h2">Tax: </Typography>
                <Typography>6%</Typography>
                <Typography variant="h3">Subtotal: </Typography>
                <Typography>{(cartTotal * .06 + cartTotal).toFixed(2)}</Typography>
                <Button sx={{border: "4px solid red", color: "white"}}>Submit Order</Button>
            </>}
        </Grid>
    </Grid>
}

export default Cart
