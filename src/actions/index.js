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
            "price": 500.00, 
            "inventory": 1
            },
            {
                "id": 2, 
                "name": "H&M T-Shirt White", 
                "price": 10.00, 
                "inventory": 1
            },
            {
                "id": 3,
                "name": "Charli XCX - Sucker CD", 
                "price": 19.00, 
                "inventory": 1
            },
            {
                "id": 4,
                "name": "HammerHead v2 Pro", 
                "price": 50.00, 
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

const onRemoveAll = (product) => {
    return {
        type: c.REMOVE_ALL_TO_CART,
        product
    }
}

export const removeAll = (product) => {
    return dispatch => {
        dispatch(onRemoveAll(product))
    }
}

