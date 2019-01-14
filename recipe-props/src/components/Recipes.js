import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './recipes.css';

class Recipes extends Component {
  static defaultProps = {
    recipes: [
      {
        src:
          'https://images.media-allrecipes.com/userphotos/600x600/4504506.jpg',
        title: 'Easy Chorizo Street Tacos',
        ingredients: [
          '1 chorizo sausage link, casing removed and meat crumbled',
          '4 corn tortillas',
          '2 tablespoons chopped onion, or to taste'
        ],
        instructions:
          'Heat a skillet over medium-high heat; add chorizo mixture and cook until crisp, 5 to 7 minutes. Transfer chorizo to a plate, reserving grease in the skillet.'
      },
      {
        src: 'https://images.media-allrecipes.com/userphotos/560x315/3741.jpg',
        title: 'Chicken Milano',
        ingredients: [
          '1/2 cup sun-dried tomatoes, chopped',
          '1 pound skinless, boneless chicken breast halves',
          '1 cup heavy cream'
        ],
        instructions:
          'A delicious pasta and chicken dish with garlic, sun-dried tomatoes and fresh basil. Use the dry packaged sun-dried tomatoes instead of the tomatoes packed in olive oil. The sauce can be kept, covered, for one day in the refrigerator; heat again over low heat. Try it with some crusty bread if desired.'
      },
      {
        src:
          'https://images.media-allrecipes.com/userphotos/560x315/468582.jpg',
        title: 'Filet Mignon with Rich Balsamic Glaze',
        ingredients: [
          '2 (4 ounce) filet mignon steaks',
          '1/4 cup dry red wine',
          '1/2 teaspoon freshly ground black pepper to taste'
        ],
        instructions:
          'This is an elegant and quick romantic dinner for two. Wonderful served with steamed asparagus and baby red potatoes.'
      }
    ]
  };
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object)
  };
  render() {
    return (
      <div className='recipe-list'>
        {this.props.recipes.map((r, i) => (
          <Recipe
            key={i + r.title}
            img={r.src}
            title={r.title}
            ingredients={r.ingredients}
            instructions={r.instructions}
          />
        ))}
      </div>
    );
  }
}

export default Recipes;
