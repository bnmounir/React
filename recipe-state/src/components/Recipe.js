import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './recipe.css';

class Recipe extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
  };
  render() {
    const { title, src, instructions, id, onDelete } = this.props;
    const ingredients = this.props.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ));
    return (
      <div className='recipe-card'>
        <div className='recipe-card-img'>
          <img src={src} alt={title} />
        </div>
        <div className='recipe-card-content'>
          <h3 className='recipe-title'>{title}</h3>
          <h4>Ingredients:</h4>
          <ul>{ingredients}</ul>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
          <button type='button' onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Recipe;
