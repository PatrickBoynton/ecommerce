import { useParams } from "react-router-dom"
import { Grid } from "@mui/material"
import { borderRight, detailsGlobal } from "../../styles/objectStyles"
import { useEffect } from "react"
import { useStoreProducts } from "../../store/store-products"
import ProductDetails from "./singleProduct/ProductDetails"
import AddToCart from "./singleProduct/AddToCart"
import ImageCarousel from "./singleProduct/ImageCarousel"
import Reviews from "./singleProduct/Reviews"

const SingleProduct = () => {
    const params = useParams()

    const { setProduct } = useStoreProducts()

    useEffect(() => {
        setProduct(params.id as string)
    }, [setProduct, params.id])

    return <>
        <Grid container spacing={3} sx={detailsGlobal}>
            <ProductDetails />
            <AddToCart />
        </Grid>
            {/*<ImageCarousel />*/}
        <Grid container>
            <Grid item xs={6} sx={{borderRight}}>
                <Reviews />
            </Grid>
            <Grid xs={6} item>

            </Grid>
        </Grid>
    </>
}


export default SingleProduct
