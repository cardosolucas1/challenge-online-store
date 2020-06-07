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

  }

  render() {
    const { cartList, totalQuantity } = this.props;
    return (
      <div>
        <div className="Cart-Title">
        <p>Carrinho {this.renderQuantity(totalQuantity)}</p>
        </div>
        <div>
          {(cartList.length === 0) ? this.renderEmptyCart() : this.renderCart()}
        </div>
        <div>
          {this.renderCheckout()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartList: state.cartList,
  totalQuantity: state.quantity,
});

export default connect(mapStateToProps)(Cart);
