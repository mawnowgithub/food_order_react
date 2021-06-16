import React from "react"
import Cart from "../cart/Cart"
import "./header.css"
import cartIcon from "../../img/cart-icon.svg"

const Header = (props) => {

	return (
		<header className="main-header">
			<section className="shop-info">
				<section
					className="shop-avatar"
					style={{
						backgroundImage: "url(" + props.shopAvatar + ")",
					}}
				></section>
				<section className="shop-name">{props.shopName}</section>
			</section>
			<Cart cartIcon={cartIcon} cartName={"your cart"} />
		</header>
	)
	
}

export default Header
