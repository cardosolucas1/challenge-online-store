export const ADD_TO_CART = 'ADD_TO_CART';
export const FILTER_BY_SELECT = 'FILTER_BY_SELECT';

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const filterBySelect = (payload) => ({
  type: FILTER_BY_SELECT,
  payload,
});

