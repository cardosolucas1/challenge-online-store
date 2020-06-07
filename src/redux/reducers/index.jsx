import {
  FILTER_BY_SELECT,
  ADD_TO_CART,
  REMOVE_BY_ID } from '../actions';

const INITIAL_STATE = {
  cartList: [],
  quantity: 0,
  filter: 'Mais populares',
}

function checkProduct(state, action) {
  const { cartList } = state;
  return ({
    ...state,
    cartList: [...cartList, action.payload],
    quantity: cartList.length + 1,
  });
}

function removeProduct(state, id) {
  const { cartList } = state;
  return ({
    ...state,
    cartList: cartList.filter((product) => product.id !== id),
    quantity: cartList.length - 1,
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
