import React from 'react';

const ProductList = ({product ,addToCart}) => {
	return (
		<div>
			<h3>{product.name}</h3>
			<h3>{product.price}</h3>
			<button onClick={addToCart}>ADD TO CART</button>
			<hr/>
		</div>
	)
}

export default ProductList