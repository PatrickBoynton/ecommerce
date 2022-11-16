import React from "react"
import "./App.css"
import Header from "./components/pages/Header"
import Footer from "./components/pages/Footer"
import Home from "./components/pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SingleProduct from "./components/productDetails/SingleProduct"
import Cart from "./components/pages/cart/Cart"
import Login from "./components/pages/Login"
import ReviewForm from "./components/pages/ReviewForm"

const App = () => {
	return (
		<Router>
			<Header />
			<main style={{ padding: "20px 0" }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/write/:id" element={<ReviewForm />} />
					<Route path="/login" element={<Login />} />
					<Route path="product/:id" element={<SingleProduct />} />
					<Route path="/cart">
						<Route index element={<Cart />} />
						<Route path=":id" element={<Cart />} />
					</Route>
				</Routes>
			</main>
			<Footer />
		</Router>
	)
}

export default App
