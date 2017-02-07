import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import thunkMiddleware from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware
)(createStore);

export const configureStore = (initialState) => {
	return createStoreWithMiddleware(rootReducer, initialState)
}