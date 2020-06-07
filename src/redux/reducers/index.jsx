import { ADD_TO_CART } from '../actions';

const INITIAL_STATE = {
  cartList: [],
}

function checkProduct(state, action) {
  const { cartList } = state;
  return ({...state, cartList: [...cartList, action.payload] });
}

function addToCartReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TO_CART:
      return checkProduct(state, action);
    default:
      return state;
  }
}

export default addToCartReducer;
