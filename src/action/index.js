const URL_ROOT = "https://my-json-server.typicode.com/prograk/demo";

export function getProducts() {
    const request = fetch(`${URL_ROOT}/items`,
        { method: 'GET' })
        .then(response => response.json())

    return {
        type: 'LOAD_PRODUCTS',
        payload: request
    }
}

export function searchProducts(keyword) {
    const request = fetch(`${URL_ROOT}/items?q=${keyword}`,
        { method: 'GET' })
        .then(response => response.json())

    return {
        type: 'SEARCH_PRODUCTS',
        payload: request
    }
}

export function productAddCart(id) {
    return {
        type: 'PRODUCT_ADD',
        payload: id
    }
}

export function productRemoveCart(id) {
    return {
        type: 'PRODUCT_REMOVE',
        payload: id
    }
}

export function productDeleteCart(id) {
    return {
        type: 'PRODUCT_DELETE',
        payload: id
    }
}

export function productSortAction(action) {
    return {
        type: action
    }
}

export function productsRangeListing(value) {
    return {
        type: "FILTER_PRICE",
        payload: value
    }
}

export function productsRangeValue(value) {
    return {
        type: "FILTER_VALUE",
        payload: value
    }
}