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
        <p className="PriceStyle">R$ {product.price}</p>
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
        data-testid="grey-square"
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        className='Product'
      >
        <div className="Image-Square">
          <img
            className="Product-Image"
            src={require(`../../../assets/${product.image}`)}
            alt={`Imagem do produto ${product.name}`} />
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

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }),
  addItemToCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (payload) => dispatch(addToCart(payload)),
});

export default connect(null, mapDispatchToProps)(Product);
