import React from 'react';
import ProductContainer from '../containers/product_container';
import CartContainer from '../containers/cart_container';
import Total from '../containers/total_containers';

const App = () => {
	return(
		<div className="container">
			<div className="row">
				<div className="col-lg-8">
					<ProductContainer/>
				</div>
				<div className="col-lg-4">
					<CartContainer/>
					<Total/>
				</div>
			</div>
		</div>
	)
}

export default App	