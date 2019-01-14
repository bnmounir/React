import React, { Component } from 'react';
import Recipes from './components/Recipes';
import Navbar from './components/Navbar';
import RecipeInput from './components/RecipeInput';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
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
          id: 1,
          src:
            'https://images.media-allrecipes.com/userphotos/560x315/3741.jpg',
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
          id: 2,
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
      ],
      nextRecipeId: 3,
      showForm: false
    };
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({ recipes });
  }
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = { ...recipe, id: this.state.nextRecipeId };
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      };
    });
  }

  render() {
    const { showForm } = this.state;
    return (
      <div className='App'>
        <Navbar
          onNewRecipe={() => {
            this.setState({ showForm: true });
          }}
        />
        {showForm ? (
          <RecipeInput
            onSave={this.handleSave}
            onClose={() => this.setState({ showForm: false })}
          />
        ) : null}
        <Recipes onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
