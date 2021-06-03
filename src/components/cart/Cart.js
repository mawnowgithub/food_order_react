import React, { useContext, useState } from "react"
import CartContext from "../../context/cart-context"
import ModalCart from "../modals/ModalCart"

const Cart = () => {
	const context = useContext(CartContext)
	const [showModal, setShowModal]=useState(false)

	const countItems = (items) => {
		let totalItems = 0
		let registeredProducts = [...items]

		for (let i = 0; i < registeredProducts.length; i++) {
			totalItems += parseInt(registeredProducts[i].productQuantity)
		}
		return totalItems
	}

	const showOrdersModal=()=>{
		setShowModal(modalState=>{
			return !modalState
		})
	}

	return (
		<React.Fragment>
			<section >
				<div>cart icon</div>
				<div>cart name</div>
				<div>{countItems(context.products)}</div>
				<button onClick={showOrdersModal}>view cart</button>
			</section>
			{showModal && <ModalCart closeModal={showOrdersModal}/>}
			
		</React.Fragment>
	)
}

export default Cart
