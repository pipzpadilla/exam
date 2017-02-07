import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';
import { productList } from './products_reducers';

const rootReducer = combineReducers({
	productList,
	//router: routerReducer
})

export default rootReducer