import {
  FILTER_BY_SELECT,
  ADD_TO_CART,
  REMOVE_BY_ID } from '../actions';

const INITIAL_STATE = {
  cartList: [],
  quantity: 0,
  freight: 0,
  totalPrice: 0,
  filter: 'Mais populares',
}

function checkProduct(state, action) {
  const { cartList, totalPrice, freight } = state;
  const { payload } = action;
  return ({
    ...state,
    cartList: [...cartList, payload],
    quantity: cartList.length + 1,
    totalPrice: totalPrice + payload.price,
    freight: freight + 10,
  });
}

function removeProduct(state, product) {
  const { cartList, totalPrice, freight } = state;
  return ({
    ...state,
    cartList: cartList.filter((currentProduct) => currentProduct.id !== product.id),
    quantity: cartList.length - 1,
    totalPrice: totalPrice - product.price,
    freight: freight - 10,
  });
}

function addToCartReducer(state = INITIAL_STATE, action) {
  const { payload } = action;
  switch(action.type) {
    case ADD_TO_CART:
      return checkProduct(state, action);
    case FILTER_BY_SELECT:
      return ({...state, filter: payload });
    case REMOVE_BY_ID:
      return removeProduct(state, payload)
    default:
      return state;
  }
}

export default addToCartReducer;
