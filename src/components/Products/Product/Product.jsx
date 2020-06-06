import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className='Product'>
        <div className="Image-Square">
          <img className="Product-Image" src={require(`./assets/${product.image}`)} alt="Imagem do produto" />
          {console.log(`./assets/${product.image}`)}
        </div>
        <div>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      </div>
    );
  }
}

export default Product;