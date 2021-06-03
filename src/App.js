import React, { useState } from "react"
import Header from "./components/header/Header"
import Banner from "./components/banners/Banner"
import ProductShowcase from "./components/products/product-showcase/ProductShowcase"
import CartContext from "./context/cart-context"

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
]

function App() {
	const [cartProducts, setCartProducts] = useState([])

	const purchaseProcess = (item) => {
		const {productName, productQuantity} = item		
		let foundItem=false;

		setCartProducts((selectedProducts) => {

			let partialProductList=[...selectedProducts]
			
			for(let i=0; i<partialProductList.length; i++){
				if(partialProductList[i].productName===productName){
					partialProductList[i].productQuantity=parseInt(partialProductList[i].productQuantity)+parseInt(productQuantity)
					foundItem=true
					break
				}
			}

			if(!foundItem){
				partialProductList.push(item)
			}

			return partialProductList
		})
	}

	const removeProcess = (item) => {
		const {productName} = item				

		setCartProducts((selectedProducts) => {

			let partialProductList=[...selectedProducts]
			
			for(let i=0; i<partialProductList.length; i++){
				if(partialProductList[i].productName===productName){
					let newQuantity=parseInt(partialProductList[i].productQuantity)-1	
					if(newQuantity===0){
						partialProductList.splice(i,1)
					}else{
						partialProductList[i].productQuantity=parseInt(partialProductList[i].productQuantity)-1					
					}
					break
				}
			}	

			return partialProductList
		})
	}
	

	return (
		<div>
			<CartContext.Provider
				value={{ products: cartProducts, purchaseProcess: purchaseProcess, removeProcess: removeProcess }}
			>
				<Header />
				<Banner />
				<ProductShowcase products={MOCK_PRODUCT} />				
			</CartContext.Provider>
		</div>
	)
}

export default App
