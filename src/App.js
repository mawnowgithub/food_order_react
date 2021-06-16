import React from "react"
import Header from "./components/header/Header"
import Banner from "./components/banners/Banner"
import ProductShowcase from "./components/products/product-showcase/ProductShowcase"
import ContextProvider from "./context/ContextProvider"
import BannerImage from "./img/banner-image.jpg"
import "./css/general-styles.css"
import taco from "../src/img/taco.png"

const MOCK_PRODUCT = [
	{
		productName: "Product 1",
		productDescription: "The best possible product",
		productCost: 300,
		productKey: "p001",
	},
	{
		productName: "Product 2",
		productDescription: "The best possible product 2",
		productCost: 600,
		productKey: "p002",
	},
	{
		productName: "Product 3",
		productDescription: "The best possible product 3",
		productCost: 900,
		productKey: "p003",
	},
	{
		productName: "Pasta cara",
		productDescription: "La pasta para el burro que la pida.",
		productCost: 5000,
		productKey: "p004",
	},
]

function App() {	

	return (
		<div>
			<ContextProvider>
				<Header shopName="Best food!" shopAvatar={taco}/>
				<section id="main-container">
					<Banner image={BannerImage} title="banner title" info="banner info"/>
					<ProductShowcase products={MOCK_PRODUCT} />				

				</section>
			</ContextProvider>
		</div>
	)
}

export default App
