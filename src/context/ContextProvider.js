import React, { useReducer } from "react"
import CartContext from "./cart-context"

const productProcessing = (state, receivedCall) => {
	let item = receivedCall.data
	let partialProductList = [...state.products]

	if (receivedCall.action === "ADD") {
		const { productName, productQuantity } = item
		let foundItem = false

		for (let i = 0; i < partialProductList.length; i++) {
			if (partialProductList[i].productName === productName) {
				partialProductList[i].productQuantity =
					parseInt(partialProductList[i].productQuantity) +
					parseInt(productQuantity)
				foundItem = true
				break
			}
		}

		if (!foundItem) {
			partialProductList.push(item)
		}
	} else if (receivedCall.action === "REMOVE") {
		let productName = receivedCall.productName

		let productIndex = partialProductList.findIndex(
			(item) => item.productName === productName
		)

		let newQuantity =
			parseInt(partialProductList[productIndex].productQuantity) - 1

		if (newQuantity === 0) {
			partialProductList.splice(productIndex, 1)
		} else {
			partialProductList[productIndex].productQuantity =
				parseInt(partialProductList[productIndex].productQuantity) - 1
		}
	}

	return {
		products: partialProductList,
		itemsAmount: partialProductList.reduce((quantity, item) => {
			return quantity + item.productQuantity
		}, 0),
	}
}

const ContextProvider = (props) => {
	const [cartState, modifyCartState] = useReducer(productProcessing, {
		products: [],
		itemsAmount: 0,
	})

	const { products, itemsAmount } = cartState

	const purchaseProcess = (item) => {
		let purchaseData = {
			action: "ADD",
			data: item,
		}
		modifyCartState(purchaseData)
	}

	const removeProcess = (item) => {
		const { productName } = item

		let purchaseData = {
			action: "REMOVE",
			productName: productName,
		}

		modifyCartState(purchaseData)
	}

	const contextFunctions = {
		products: products,
		itemsAmount: itemsAmount,
		purchaseProcess: purchaseProcess,
		removeProcess: removeProcess,
	}

	return (
		<CartContext.Provider value={contextFunctions}>
			{props.children}
		</CartContext.Provider>
	)
}

export default ContextProvider
