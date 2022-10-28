import {
    Grid,
    List,
    Typography
} from "@mui/material"
import { useEffect, useState } from "react"
import { useStoreCart } from "../../../store/store-cart"
import Product from "../../../models/Product"
import { borderRight } from "../../../styles/objectStyles"
import CartItem from "./CartItem"

const Cart = () => {
    const { cartItems, getCartItems, setCartTotal, cartTotal } = useStoreCart()
    const [totalPrice, setTotalPrice] = useState(0)

    const price = cartItems && cartItems.map(item => item?.price)
    const qty = cartItems && cartItems.map(item => Number(item?.qty) || 1)

    const sum = price.map((num, idk) => Number(num) * qty[idk])
      .reduce((previousValue, currentValue) => previousValue + currentValue)

    useEffect(() => {
        getCartItems(cartItems)
    }, [getCartItems, cartItems])

    useEffect(() => {
        setTotalPrice(cartTotal)
    },[ setTotalPrice, cartTotal, cartItems])

    useEffect(() => {
        setCartTotal(sum)
    }, [setCartTotal, sum])


    const handleDeleteAllItems = () => {
        localStorage.removeItem("cart")
    }
    return <Grid container>
        <Grid item xs={8} sx={borderRight}>
            <Typography variant="h2">Shopping Cart</Typography>
            {cartItems.length > 0 && <Typography variant="h4" sx={{ cursor: "pointer", color: "red" }} onClick={handleDeleteAllItems}>Delete
                All</Typography>}
            {cartItems ? <List>
                {cartItems && cartItems.map((item, index) =>
                  <CartItem key={item?.id} product={item as Product}/>)}
            </List> : <Typography variant="h3">No items in your cart. </Typography>}
        </Grid>
        <Grid item xs={4}>
            <Typography variant="h2">Subtotal: </Typography>
            <Typography variant="h3">{cartTotal !== undefined  && cartTotal ? "$" + cartTotal.toFixed(2)  : "$0.00"}</Typography>
        </Grid>
    </Grid>
}

export default Cart
