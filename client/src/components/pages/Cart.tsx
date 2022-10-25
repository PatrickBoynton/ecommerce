import {
    Grid,
    List,
    Typography
} from "@mui/material"
import { useParams, useSearchParams } from "react-router-dom"
import { useStoreProducts } from "../../store/store-products"
import { useEffect, useState } from "react"
import { useStoreCart } from "../../store/store-cart"
import Product from "../../models/Product"
import { borderRight } from "../../styles/objectStyles"
import CartItem from "../CartItem"

const Cart = () => {
    const params = useParams()
    const { products } = useStoreProducts()
    const { setCartItems, cartItems, getCartItems } = useStoreCart()
    const [searchParams] = useSearchParams()
    // const [totalPrice, setTotalPrice] = useState()

    const productId = params.id

    const product = products.find(item => item.id === Number(productId)) as Product
    const testPrice = product?.price

    const qty = Number(searchParams.get("qty"))

    useEffect(() => {
        getCartItems()
    }, [getCartItems])

    return <Grid container>
        <Grid item xs={8} sx={borderRight}>
            <Typography variant="h2">Shopping Cart</Typography>
            {cartItems ? <List>
                {cartItems && cartItems.map((item, index) =>
                  <CartItem key={index}
                            products={item as Product}
                            qty={qty} />)
                  .filter((x, i, a) => a.indexOf(x) === i)}
            </List> : <Typography variant="h3">No items in your cart. </Typography>}
        </Grid>
        <Grid item xs={4}>
            <Typography variant="h2">Subtotal: </Typography>
            <Typography variant="h3">{testPrice !== undefined ? "$" + Math.floor(testPrice * qty).toFixed(2) : "$0.00"}</Typography>
        </Grid>
    </Grid>
}

export default Cart
