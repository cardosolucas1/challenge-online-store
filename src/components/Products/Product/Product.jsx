import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from '../../../redux/actions';
import './Product.css';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  renderDetails() {
    const { product } = this.props;
    return (
      <div>
        <p>{product.name}</p>
        <p>R$ {product.price}</p>
      </div>
    );
  }

  renderAddToCart() {
    const { addItemToCart, product } = this.props;
    return (
      <div onClick={() => addItemToCart({ ...product, quantity: 1 })}>
        <p className="AddToCart">Adicionar ao Carrinho</p>
      </div>
    );
  }

  render() {
    const { product } = this.props;
    return (
      <div
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        className='Product'
      >
        <div className="Image-Square">
          <img className="Product-Image" src={require(`../../../assets/${product.image}`)} alt="Imagem do produto" />
        </div>
        <div>

        </div>
        <div>
          {(this.state.hover) ? this.renderAddToCart() : this.renderDetails()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (payload) => dispatch(addToCart(payload)),
});

export default connect(null, mapDispatchToProps)(Product);
