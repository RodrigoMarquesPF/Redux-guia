import CartActionTypes from "./action-types"

export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
});

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
});

export const increaseProduct = (payload) => ({
    type: CartActionTypes.INCREASE_PRODUCT,
    payload,
});

export const decreaseProduct = (payload) => ({
    type: CartActionTypes.DECREASE_PRODUCT,
    payload,
});