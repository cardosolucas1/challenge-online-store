import React from 'react';
// import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className='Container'>
        <div>
          <span>Games</span>
        </div>
        <div>
          <select className="select" name='popularity'>
            <option>Mais populares</option>
            <option>Maior preço</option>
            <option>Menor preço</option>
            <option>Orden Alfabética</option>
          </select>
        </div>

      </header>
    );
  }
}

export default Header;