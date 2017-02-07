import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'

const Total = ({total}) => {
	const array = total
		const sum = _.sum(array)
				
	return(
		<div>
			<h1>Total</h1>
			<h3>{sum}</h3>
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
