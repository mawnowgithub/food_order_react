import React, { useContext } from "react"
import ModalItem from "./ModalItem"
import "./modalCart.css"
import CartContext from "../../context/cart-context"

const ModalCart = (props) => {
	const context = useContext(CartContext)
	let totalAmount=0

	const hideModal = () => {
		props.closeModal()
	}

	const createProductList = (items) => {
		let productList = items.map((item) => {
			totalAmount+=parseInt(item.productCost)* parseInt(item.productQuantity)
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

	const finishOrder=()=>{
		if(context.products.length>0){

			console.table(context.products)
		}else{
			console.warn("please add some items to your order to proceed")
		}
	}

	return (
		<section className="modal-cart">
			{createProductList(context.products)}
			<article className="modal-total-amount">
				<h2>total amount</h2>
				<p>${totalAmount}</p>
			</article>
			<footer className="modal-footer">
				<button onClick={hideModal}>close</button>
				<button onClick={finishOrder}>order</button>
			</footer>
		</section>
	)
}

export default ModalCart
