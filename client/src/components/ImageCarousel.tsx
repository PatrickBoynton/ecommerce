import { useStore } from "../store/store"
import { useEffect, useState } from "react"
import { Card, CardMedia, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Product from "../models/Product"

const ImageCarousel = () => {
	const { products, getProducts } = useStore()
	const [current, setCurrent] = useState(0)

	  useEffect(() => {
			getProducts()
		}, [getProducts])

	const nextSlide =  () => {
		if (current !== undefined) setCurrent(current === products.length - 1 ? 0 : current + 1)
	}

	const previousSlide = () => {
		if(current !== undefined) setCurrent(current === 0 ? products.length - 1 : current - 1)
	}

    return <>
			<Typography variant='h1'>Related Products</Typography>
			<Card>
						<FontAwesomeIcon icon={faArrowLeft} onClick={previousSlide}/>
						{products.map((product: Product, index: number) => {
							return <div className="slider">
								{index === current && <CardMedia component="img"
														className="slide"
														image={product.image}
														sx={{ width: "300px", height: "300px" }}
														key={product.id}
														alt="Product" />}
							</div>
						})}
						<FontAwesomeIcon icon={faArrowRight} onClick={nextSlide} />
			</Card>
    </>
}

export default ImageCarousel
