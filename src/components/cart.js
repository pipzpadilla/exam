import React from 'react';

const Cart = ({product, removeToCart}) => {
	return (
		<div className="col-sm-10 single-box text-center">
			<span className="pull-right text-span">Price {product.price}</span>
			<hr/>
			<h2>Product Number {product.id}</h2>
			<h4>{product.name}</h4>
			<button 
				className="btn btn-danger btn-lg"
				onClick={removeToCart}>
				REMOVE FORM CART</button>
		</div>
	)
}

export default Cart