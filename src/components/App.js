import React from 'react';
import ProductContainer from '../containers/product_container';
import CartContainer from '../containers/cart_container';
import Total from '../containers/total_containers';

const App = () => {
	return(
		<div>
			<ProductContainer/>
			<CartContainer/>
			<Total/>
		</div>
	)
}

export default App	