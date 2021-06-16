import React from "react"
import "./banner.css"

const Banner = (props) => {
	return (
		<section className="banner">
			<article
				className="banner__back"
				style={{ backgroundImage: "url(" + props.image + ")" }}
			></article>
			<article className="banner__text">
				<header className="banner__title"><h2>{props.title}</h2></header>
				<section className="banner__info"><p>{props.info}</p></section>
			</article>
		</section>
	)
}

export default Banner
