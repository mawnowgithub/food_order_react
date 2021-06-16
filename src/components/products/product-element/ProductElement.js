import React, { useState, useContext, useEffect, useRef } from "react"
import CartContext from "../../../context/cart-context"
import "./product-element.css"

const ProductElement = (props) => {
	const context = useContext(CartContext)
	const [quantity, setQuantity] = useState(1)
	const [purchase, setPurchase] = useState(false)

	const inputRef = useRef()

	let productName = props.productName
	let productCost = props.productCost
	let productDescription = props.productDescription
	let effectClass = purchase ? "product-item--changing" : ""

	const inputFocus = () => {
		inputRef.current.focus()
	}

	const changeQuantity = (event) => {
		if (isNaN(parseInt(event.target.value))) {
			setQuantity((prevQuantity) => {
				return prevQuantity
			})
		} else {
			if(event.target.value>5){
				setQuantity((prevQuantity) => {
					return prevQuantity
				})
			}else{
				setQuantity(event.target.value)
			}
		}
	}

	const addProduct = () => {
		let product = {
			productName: productName,
			productCost: productCost,
			productQuantity: quantity,
		}
		setPurchase(true)
		setQuantity(1)
		context.purchaseProcess(product)
	}

	useEffect(() => {		
		if (purchase) {
			let classTimeout = setTimeout(() => {
				setPurchase(false)
				clearTimeout(classTimeout)
			}, 300)
		}
	}, [purchase])

	return (
		<article onClick={inputFocus} className={`product-item ${effectClass}`}>
			<section className="product-item__data">
				<h3 className="product-item__name">{productName}</h3>
				<p className="product-item__description">{productDescription}</p>
				<p className="product-item__cost">$ {productCost}</p>
			</section>
			<section className="product-item__quantity">
				<label
					htmlFor={`input_id_${productName}`}
					className="product-item__quantity-title"
				>
					Amount
				</label>
				<div className="product-item__quantity-input">
					<input
						id={`input_id_${productName}`}
						onChange={changeQuantity}
						value={quantity}
						ref={inputRef}
						type="number"
						step="1"
						min="1"
						max="5"
					/>
					<button onClick={addProduct}>+Add</button>
				</div>
			</section>
		</article>
	)
}

export default ProductElement
