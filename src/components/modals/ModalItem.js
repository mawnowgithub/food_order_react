import React, {useContext} from "react"
import CartContext from "../../context/cart-context"


const ModalItem=(props)=>{
    const context= useContext(CartContext)

    const addProduct = () => {
		let product = {
			productName: props.productName,			
			productQuantity: 1,
		}			
        context.purchaseProcess(product)
	}

    const removeProduct=()=>{
        let product = {
			productName: props.productName			
		}	
        context.removeProcess(product)
    }

    return(
        <article className="modal-item">
					<div className="modal-item__data">
						<h2>{props.productName}</h2>
						<p>$ {props.productCost}</p>
						<div className="modal-item__quantity">{props.productQuantity}</div>
					</div>

					<div className="modal-item__buttons">
						<button onClick={removeProduct}>-</button>
						<button onClick={addProduct}>+</button>
					</div>
				</article>
    )
}

export default ModalItem