import * as c from '../constant';

const onProductList = (data) => ({
    type: c.PRODUCTS,
    data
})

export const productList = (products) => {
    return dispatch => {
        const products = [
            {
            "id": 1, 
            "name": "iPad 4 Mini", 
            "price": 500.01, 
            "inventory": 1
            },
            {
                "id": 2, 
                "name": "H&M T-Shirt White", 
                "price": 10.99, 
                "inventory": 1
            },
            {
                "id": 3,
                "name": "Charli XCX - Sucker CD", 
                "price": 19.99, 
                "inventory": 1
            }
        ]
        dispatch(onProductList(products));
    }
}

const onAddToCart = (product) => {
    return {
        type: c.ADD_TO_CART,
        product
    }
}

export const addToCart = (data) => {
    return dispatch => {
        dispatch(onAddToCart(data))
    }
}

const onRemoveToCart = (product) => {
    return {
        type: c.REMOVE_TO_CART,
        product
    }
}

export const removeToCart = (product) =>{
    return dispatch => {
        dispatch(onRemoveToCart(product))
    }
}
