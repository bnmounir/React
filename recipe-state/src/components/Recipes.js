import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './recipes.css';

class Recipes extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  };
  render() {
    const { onDelete } = this.props;
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={r.id} {...r} onDelete={onDelete} />
    ));
    return <div className='recipe-list'>{recipes}</div>;
  }
}

export default Recipes;
