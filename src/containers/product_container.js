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
    const { products, addToCart, removeAll } = this.props

    return (
      <div>
      	<h1 className="text-design">Products</h1> 
        <span>
          <button 
            onClick={removeAll}
            className="btn btn-danger btn-lg">EMPTY CART</button>

        </span>
        <hr/>
          <div className="row box-container">
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
      </div>
    );
  }
}

export default connect(
	state => {
		  const { productList } = state
        console.log(state)
		return {
        products: productList.products
		}
	},
  {
		...actionCreators
	}
)(ProductContainer)
