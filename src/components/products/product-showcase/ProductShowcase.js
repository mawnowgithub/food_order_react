import React from "react"
import ProductElement from "../product-element/ProductElement"

const ProductShowcase = (props) => {
	let productList = props.products

	let products = productList.map((product) => {
		return (
			<ProductElement
				productName={product.productName}
				productDescription={product.productDescription}
                productCost={product.productCost}
                key={product.productKey}
			/>
		)
	})
	return (
		<section className="products-container">
			{products}
		</section>
	)
}

export default ProductShowcase
