import React from 'react';

const ProductList = ({product ,addToCart}) => {
	return (
		<div className="col-sm-4 text-center single-box">
			<h2 className="text-design">Product Number {product.id}</h2>
			<h4>{product.name}</h4>
			<button 
				onClick={addToCart}
				className="btn btn-primary btn-lg">
				ADD TO CART
			</button>
			<hr/>
			<h1>Price {product.price}</h1>
		</div>
	)
}

export default ProductList
