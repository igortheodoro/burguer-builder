import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        meat: 0,
        cheese: 0,
        salad: 0,
        bacon: 0,
      },
      purchased: false,
      totalPrice: 0,
    };
  }

  state = {};

  addIngredients = (type) => {
    const ingredients = this.state.ingredients;
    ingredients[type] += 1;

    let totalPrice = this.state.totalPrice;
    totalPrice += INGREDIENT_PRICES[type];

    this.setState({
      ingredients,
      totalPrice,
    });
  };

  removeIngredients = (type) => {
    const ingredients = this.state.ingredients;
    let totalPrice = this.state.totalPrice;

    if (ingredients[type] >= 0) {
      ingredients[type] -= 1;

      totalPrice -= INGREDIENT_PRICES[type];

      this.setState({
        ingredients,
        totalPrice,
      });
    }
  };

  disabled = (type) => {
    if(this.state.ingredients[type] === 0){
      return true
    }
    return false
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredients={this.addIngredients}
          removeIngredients={this.removeIngredients}
          disabled={this.disabled}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
