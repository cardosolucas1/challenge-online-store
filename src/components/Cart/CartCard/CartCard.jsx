import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeCard } from '../../../redux/actions';
import './CartCard.css';

class CartCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  render() {
    const { product: { name, price, image, id, quantity }, removeItem } = this.props;
    return (
      <div
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        className="CardProduct"
      >
        <div className="cardSquare">
          <img src={require(`../../../assets/${image}`)} alt={`Imagem do ${name}`} width="100em" />
        </div>
        <div className="cardDetails">
          <p>{name}</p>
          <p className="priceStyle">R$ {price}</p>
          <p>{quantity}</p>
        </div>
        <div className="iconRemoveItem" onClick={() => removeItem(id)}>
          {(this.state.hover) ?
            <img src="https://img.icons8.com/fluent/48/000000/filled-trash.png" width="70%"/> :
            null
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeCard(id)),
});

export default connect(null, mapDispatchToProps)(CartCard);
