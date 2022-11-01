import { Grid } from "@mui/material"
import { useEffect } from "react"
import { useStoreCart } from "../../../store/store-cart"
import { borderRight } from "../../../styles/objectStyles"
import CartItemDisplay from "./CartItemDisplay"
import OrderDetails from "./OrderDetails"

const Cart = () => {
    const { cartItems, setCartTotal, getStorageItems } = useStoreCart()

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



    return <Grid container>
        <Grid item xs={8} sx={borderRight}>
            <CartItemDisplay />
        </Grid>
        <Grid item xs={4}>
            <OrderDetails />
        </Grid>
    </Grid>
}

export default Cart
