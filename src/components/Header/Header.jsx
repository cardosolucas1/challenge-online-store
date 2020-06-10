import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
            data-testid="select-filter"
            onChange={(event) => filterBy(event.target.value)}
            className="select" name='popularity'
          >
            <option  data-testid="option" value="Mais populares">Mais populares</option>
            <option  data-testid="option" value="Maior preço">Maior preço</option>
            <option  data-testid="option" value="Menor preço">Menor preço</option>
            <option  data-testid="option" value="Ordem alfabética">Ordem Alfabética</option>
          </select>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  filterBy: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  filterBy: (payload) => dispatch(filterBySelect(payload)),
})

export default connect(null, mapDispatchToProps)(Header);
