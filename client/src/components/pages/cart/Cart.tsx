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
    const { cartItems, getCartItems } = useStoreCart()
    const [totalPrice, setTotalPrice] = useState(0)

    const cartTotal = Number(cartItems?.map(x => x?.price)
      .reduce((previousValue, currentValue) => (Number(currentValue) + Number(previousValue)), 0))

    useEffect(() => {
        getCartItems(cartItems)
    }, [getCartItems])

    useEffect(() => {
        setTotalPrice(cartTotal)
    },[ setTotalPrice, cartTotal, cartItems])

    const handleDeleteAllItems = () => {
        localStorage.removeItem("cart")
    }
    return <Grid container>
        <Grid item xs={8} sx={borderRight}>
            <Typography variant="h2">Shopping Cart</Typography>
            {cartItems.length > 0 && cartItems && <Typography variant="h4" sx={{ cursor: "pointer", color: "red" }} onClick={handleDeleteAllItems}>Delete
                All</Typography>}
            {cartItems ? <List>
                {cartItems && cartItems.map((item, index) =>
                  <CartItem key={item?.id} products={item as Product}/>)}
            </List> : <Typography variant="h3">No items in your cart. </Typography>}
        </Grid>
        <Grid item xs={4}>
            <Typography variant="h2">Subtotal: </Typography>
            <Typography variant="h3">{totalPrice !== undefined  && totalPrice ? "$" + totalPrice.toFixed(2)  : "$0.00"}</Typography>
        </Grid>
    </Grid>
}

export default Cart
