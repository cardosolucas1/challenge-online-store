import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import addCartReducer from './redux/reducers/index';

const renderWithRedux = (
  component,
  { initialState, store = createStore(addCartReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('Testar se elementos estão presentes na página inicial', () => {
  beforeEach(cleanup);

  test('A página deve ter um título com o texto Games', () => {
    const { queryByText } = renderWithRedux(<App />);
    const titlePage = queryByText('Games');
    expect(titlePage).toBeInTheDocument();
  });

  test('A página deve ter produtos específicos', () => {
    const { queryByText } = renderWithRedux(<App />);
    const shardsProduct = queryByText('Shards of Darkness');
    const terraMediaProduct = queryByText(/Terra Média/i);
    expect(shardsProduct).toBeInTheDocument();
    expect(terraMediaProduct).toBeInTheDocument();
  });

  test('A página deve ter 9 boxs cinzas renderizadas', () => {
    const { queryAllByTestId } = renderWithRedux(<App />);
    const greySquare = queryAllByTestId('grey-square');
    expect(greySquare.length).toBe(9);
  });

  test('A página deve ter um carrinho de compras vazio', () => {
    const { getByText, getByAltText } = renderWithRedux(<App />);
    const cartQuantity = getByText(/0 itens/i);
    const iconCart = getByAltText('Ícone de um carrinho de compras');
    expect(cartQuantity).toBeInTheDocument();
    expect(iconCart).toBeInTheDocument();
  });

  test('A página deve ter um seletor para filtros com 4 opções', () => {
    const { getAllByTestId } = renderWithRedux(<App />);
    const filters = getAllByTestId('select-filter');
    const options = getAllByTestId('option');
    expect(filters.length).toBe(1);
    expect(options.length).toBe(4);
    expect(options[0].value).toBe('Mais populares');
    expect(options[1].value).toBe('Maior preço');
    expect(options[2].value).toBe('Menor preço');
    expect(options[3].value).toBe('Ordem alfabética');
  });

});

describe('Testar funcionalidades da página', () => {
  beforeEach(cleanup);
  test('Deve-se adiconar um item ao carrinho ao clicar em Adicionar ao Carrinho',
   () => {
    const { getAllByTestId, getByText } = renderWithRedux(<App />);
    const greySquare = getAllByTestId('grey-square');
    fireEvent.mouseEnter(greySquare[0]);
    const cartCall = getByText('Adicionar ao Carrinho');
    expect(cartCall).toBeInTheDocument();
    fireEvent.click(cartCall);
    const itemsCart = getByText(/1 item/i);
    const totalPrice = getByText(/81.94/i);
    expect(itemsCart).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
  });
});
