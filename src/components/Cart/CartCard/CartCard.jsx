import React from 'react';
import PropTypes from 'prop-types';
import './CartCard.css';

function CartCard({ product: { name, price, image, quantity } }) {
  return (
    <div className="CardProduct">
      <div className="cardSquare">
        <img src={require(`../../../assets/${image}`)} alt={`Imagem do ${name}`} width="100em" />
      </div>
      <div className="cardDetails">
        <p>{name}</p>
        <p>R$ {price}</p>
        <p>{quantity}</p>
      </div>
      <div className="iconRemoveItem">
        <img src="https://img.icons8.com/fluent/48/000000/filled-trash.png" width="70%"/>
      </div>
    </div>
  );
}

export default CartCard;
