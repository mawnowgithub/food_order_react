import React, { useContext, useEffect, useRef, useState, Fragment } from "react"
import {createPortal} from "react-dom"
import CartContext from "../../context/cart-context"
import ModalCart from "../modals/ModalCart"
import "./cart.css"

const Cart = (props) => {

	const context = useContext(CartContext)
	const [showModal, setShowModal] = useState(false)
	const cartShort = useRef()
	
	const showOrdersModal = () => {
		setShowModal((modalState) => {
			return !modalState
		})
	}

	useEffect(() => {
		let colorTimer = null
		cartShort.current.classList.remove("cart--changing")
		clearInterval(colorTimer)

		if (context.itemsAmount > 0) {
			cartShort.current.classList.add("cart--changing")
			colorTimer = setTimeout(() => {
				cartShort.current.classList.remove("cart--changing")
				clearInterval(colorTimer)
			}, 300)
		}
	}, [context.itemsAmount])
	

	return (
		<Fragment>
			<section
				ref={cartShort}
				className="cart"
				onClick={showOrdersModal}				
			>
				<div
					className="cart__icon"
					style={{ backgroundImage: "url(" + props.cartIcon + ")" }}
				></div>
				<div className="cart__name">{props.cartName}</div>
				<div className="cart__counter">{context.itemsAmount}</div>
			</section>

			{createPortal(
				showModal && <ModalCart closeModal={showOrdersModal} />,
				document.getElementById("modal-container")
			)}
		</Fragment>
	)
}

export default Cart
