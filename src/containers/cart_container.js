import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

import Cart from '../components/cart';

class CartContainer extends Component {

  render() {
  	const { selectedProduct, removeToCart } = this.props
  		
    return (
      <div>
      	<h1>Cart</h1>
      	<hr/>
      	{selectedProduct.map((product) => {
      		return (
      			<Cart 
      				key={`selectedProdct${product.id}`}
      				product={ product }
      				removeToCart={() => removeToCart(product)}
      			/>
      		)
      	})}
      </div>
    );
  }
}

export default connect(
	state => {
		//console.log(state.productList.selectedProducts)
		const { productList } = state
		return {
			selectedProduct: productList.selectedProducts
		}
	},{
		...actionCreators
	}
)(CartContainer)
