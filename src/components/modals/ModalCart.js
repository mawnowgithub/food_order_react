import React, { useContext } from "react"
import ModalItem from "./ModalItem"
import "./modalCart.css"
import CartContext from "../../context/cart-context"

const ModalCart = (props) => {
	const context = useContext(CartContext)
	let totalAmount = 0

	const hideModal = () => {
		props.closeModal()
	}

	const createProductList = (items) => {
		let message = "You haven´t bought anything yet."

		if (items.length < 1) {
			return message
		}

		let productList = items.map((item) => {
			totalAmount += parseInt(item.productCost) * parseInt(item.productQuantity)
			return (
				<ModalItem
					productName={item.productName}
					productCost={item.productCost}
					productQuantity={item.productQuantity}
					key={"i" + Math.random() * 100}
				/>
			)
		})
		return productList
	}

	const finishOrder = () => {
		if (context.products.length > 0) {
			console.table(context.products)
		} else {
			console.warn("please add some items to your order to proceed")
		}
	}

	return (
		<div className="modal-cart__backdrop">
			<section className="modal-cart">
				<header className="modal-cart__header">
					<h2>Your product´s list</h2>
					<button onClick={hideModal}>x</button>
				</header>
				<section className="modal-cart__products">
					{createProductList(context.products)}
				</section>

				<footer className="modal-footer">

					<article className="modal-total-amount">
						<h3>total</h3>
						<p>${totalAmount}</p>
					</article>					
					<button onClick={finishOrder}>order :)</button>
				</footer>
			</section>
		</div>
	)
}

export default ModalCart
