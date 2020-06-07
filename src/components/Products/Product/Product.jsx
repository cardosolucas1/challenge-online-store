import React from 'react';
import PropTypes from 'prop-types';
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
    return (
      <div>
        <p  className="AddToCart">Adicionar ao Carrinho</p>
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
          <img className="Product-Image" src={require(`./assets/${product.image}`)} alt="Imagem do produto" />
          {console.log(`./assets/${product.image}`)}
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

export default Product;
