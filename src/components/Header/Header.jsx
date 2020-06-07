import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { filterBySelect } from '../../redux/actions';
import './Header.css';

class Header extends React.Component {
  render() {
    const { filterBy } = this.props;
    return (
      <header className='Container'>
        <div>
          <span>Games</span>
        </div>
        <div>
          <select
            onChange={(event) => filterBy(event.target.value)}
            className="select" name='popularity'
          >
            <option value="Mais populares">Mais populares</option>
            <option value="Maior preço">Maior preço</option>
            <option value="Menor preço">Menor preço</option>
            <option value="Ordem alfabética">Orden Alfabética</option>
          </select>
        </div>

      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterBy: (payload) => dispatch(filterBySelect(payload)),
})

export default connect(null, mapDispatchToProps)(Header);
