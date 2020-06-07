import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import CartCard from '../CartCard/CartCard';
import icon from './cart-icon.svg';
import './CartList.css';

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
    const { cartList } = this.props;
    return (
      cartList.map((product) => (
          <CartCard key={product.id} product={product}/>
      )));
  }

  renderQuantity(totalQuantity) {
    if (totalQuantity === 1) {
      return (
        <span>({`${totalQuantity} item`})</span>
      );
    }
    return (<span>({`${totalQuantity} itens`})</span>);
  }

  renderCheckout() {
    const { totalPrice, freight } = this.props;
    let currentFreight = freight;
    if (totalPrice > 250) currentFreight = 0;
    return (
      <div className="checkoutContainer">
        <div className="values">
          <span>Subtotal</span>
          <span>{`R$ ${totalPrice.toFixed(2)}`}</span>
        </div>
        <div className="values">
          <span>Frete</span>
          {(totalPrice > 250) ?
          <span>GRÁTIS</span> :
          <span>{`R$ ${freight.toFixed(2)}`}</span>
          }
        </div>
        <div className="values">
          <span>Total</span>
          <span>{`R$ ${(totalPrice + currentFreight).toFixed(2)}`}</span>
        </div>
      </div>
    );
  }

  render() {
    const { cartList, totalQuantity } = this.props;
    return (
      <div className="cartBox">
        <div className="Cart-Title">
        <p>Carrinho {this.renderQuantity(totalQuantity)}</p>
        </div>
        <div>
          {(cartList.length === 0) ? this.renderEmptyCart() : this.renderCart()}
        </div>
        <div>
          {(totalQuantity > 0) ? this.renderCheckout() : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartList: state.cartList,
  totalQuantity: state.quantity,
  totalPrice: state.totalPrice,
  freight: state.freight,
});

export default connect(mapStateToProps)(Cart);
