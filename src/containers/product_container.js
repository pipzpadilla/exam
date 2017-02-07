import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

import ProductList from '../components/product_list';

class ProductContainer extends Component {
 
    componentDidMount() {
      const { productList, products } = this.props;
        productList(products);
    }

  render() {
    const { products, addToCart } = this.props

    return (
      <div>
      	<h1>Products</h1>
        <hr/>
        {products.map((product) => {
            return (
              <ProductList
                key={`product${product.id}`}
                product={product}
                addToCart={() => addToCart(product)}
              />
            )
          })}
      </div>
    );
  }
}

export default connect(
	state => {
		  const { productList } = state
        
		return {
        products: productList.products
		}
	},
  {
		...actionCreators
	}
)(ProductContainer)
