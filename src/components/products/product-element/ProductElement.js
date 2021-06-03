import React, { useState, useContext } from "react"
import CartContext from "../../../context/cart-context"

const ProductElement = (props) => {
	const context = useContext(CartContext)

	let productName = props.productName
	let productCost = props.productCost
	let productDescription = props.productDescription

	const [quantity, setQuantity] = useState(1)

	const changeQuantity = (event) => {
		setQuantity(event.target.value)
	}

	const addProduct = () => {
		let product = {
			productName: productName,
			productCost: productCost,
			productQuantity: quantity,
		}		
		setQuantity(1)
        context.purchaseProcess(product)
	}

	return (
		<article className="product-item">
			<section className="product-item__data">
				<h3>{productName}</h3>
				<p>{productDescription}</p>
				<p>{productCost}</p>
			</section>
			<section className="product-item__input">
				<label>Amount</label>
				<input type="text" onChange={changeQuantity} value={quantity} />
				<button onClick={addProduct}>+Add</button>
			</section>
		</article>
	)
}

export default ProductElement
