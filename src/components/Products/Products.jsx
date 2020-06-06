import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product/Product';
import './Products.css';

class Products extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <section className='Products'>
        {products.map((product) => 
          <Product key={product.id} product={product} />
        )}
      </section>
    );
  }
}

export default Products ;