import {
    Grid,
    List,
    Typography
} from "@mui/material"
import { useParams, useSearchParams } from "react-router-dom"
import { useStoreProducts } from "../../store/store-products"
import { useEffect } from "react"
import { useStoreCart } from "../../store/store-cart"
import Product from "../../models/Product"
import { borderRight } from "../../styles/objectStyles"
import CartItem from "../CartItem"

const Cart = () => {
    const params = useParams()
    const { products } = useStoreProducts()
    const { setCartItems, cartItems } = useStoreCart()
    const [searchParams] = useSearchParams()

    const productId = params.id

    const product = products.find(item => item.id === Number(productId)) as Product
    const qty = searchParams.get("qty")

    useEffect(() => {
        setCartItems(product, Number(qty))
    }, [setCartItems, product, qty])

    console.log(cartItems)

    return <Grid container>
        <Grid item xs={8} sx={borderRight}>
            <Typography variant="h2">Shopping Cart</Typography>
            <List>
                <CartItem products={products} />
                <CartItem products={products} />
                <CartItem products={products} />
            </List>
        </Grid>
        <Grid item xs={4}>
            <Typography variant="h2">Subtotal: </Typography>
            <Typography variant="h3">${Math.round(products[0].price * Number(qty)).toFixed(2)}</Typography>
        </Grid>
    </Grid>
}

export default Cart
