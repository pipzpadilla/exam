import React from 'react';

const Cart = ({product, removeToCart}) => {
	return (
		<div>
			<h4>{product.name}</h4>
			<h4>{product.price}</h4>
			<button onClick={removeToCart}>REMOVE FORM CART</button>
			<hr/>
		</div>
	)
}

export default Cart