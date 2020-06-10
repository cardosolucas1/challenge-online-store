import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Product from "./Product/Product";
import "./Products.css";

class Products extends React.Component {
  filterProducts() {
    const { products, filterBy } = this.props;
    switch (filterBy) {
      case "Mais populares":
        return products.sort((a, b) => (a.score < b.score ? 1 : -1));
      case "Maior preço":
        return products.sort((a, b) => (a.price < b.price ? 1 : -1));
      case "Menor preço":
        return products.sort((a, b) => (a.price > b.price ? 1 : -1));
      case "Ordem alfabética":
        return products.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      default:
        return products;
    }
  }
  render() {
    return (
      <section className="Products">
        {this.filterProducts().map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    );
  }
}

Products.propTypes = {
  filterBy: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      score: PropTypes.number.isRequired,
    })
  ),
};

const mapStateToProps = (state) => ({
  filterBy: state.filter,
});

export default connect(mapStateToProps)(Products);
