import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'

const Total = ({total}) => {
	const array = total
		const sum = _.sum(array)
				
	return(
		<div className="total-container">
			<h1 className="text-design">Total Price <span className="pull-right">{sum}</span></h1>
		</div>
	)
}


export default connect(
	state => {
		const { productList } = state
		return	{
			total: productList.total
		}
	}
)(Total)
