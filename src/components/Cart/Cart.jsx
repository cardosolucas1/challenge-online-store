import React from 'react';
// import PropTypes from 'prop-types';
import icon from './cart-icon.svg';
import './Cart.css';

class Cart extends React.Component {
  renderEmptyCart() {
    return (
      <div className="EmptyCart">
        <img src={icon} alt="Ícone de um carrinho de compras" />
        <p>Até o momento, o seu carrinho está vazio.</p>
      </div>
    )
  }

  renderCart() {
    return (
      <div className="Cart">
        <p>YOUR CART</p>
      </div>
    );
  }

  render() {
    // const { SelectedProducts: [] } = this.props;
    const SelectedProducts = [];
    return (
      <div>
        <div className="Cart-Title">
          <p>Carrinho</p>
        </div>
        <div>
          {(SelectedProducts.length === 0) ? this.renderEmptyCart() : this.renderCart()}
        </div>
      </div>
    );
  }
}

export default Cart;
