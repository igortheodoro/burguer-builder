import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
      totalPrice: 4,
      purchaseable: false,
      purchasing: false
    };
  }

  state = {};

  addIngredients = (type) => {
    const ingredients = this.state.ingredients;
    ingredients[type] += 1;

    let totalPrice = this.state.totalPrice;
    totalPrice += INGREDIENT_PRICES[type];

    this.updatePurchaseState();

    this.setState({
      ingredients,
      totalPrice,
    });
  };

  removeIngredients = (type) => {
    const ingredients = this.state.ingredients;
    let totalPrice = this.state.totalPrice;

    if (ingredients[type] > 0) {
      ingredients[type] -= 1;

      totalPrice -= INGREDIENT_PRICES[type];

      this.updatePurchaseState();

      this.setState({
        ingredients,
        totalPrice,
      });
    }
  };

  disabled = (type) => {
    if (this.state.ingredients[type] === 0) {
      return true;
    }
    return false;
  };

  updatePurchaseState = () => {
    const ingredients = this.state.ingredients;
    const keys = Object.keys(ingredients);

    const haveIngredients = keys.map((ingredient) => {
      return ingredients[ingredient]
    }).reduce((accumulator, value) => {
      return value + accumulator
    }, 0)

    this.setState({
      purchaseable: haveIngredients > 0
    });
  };

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  render() {
    return (
      <Aux>

      <Modal hideModal={this.purchaseCancelHandler} show={this.state.purchasing}>
        <OrderSummary ingredients={this.state.ingredients} />
      </Modal>

        <Burger ingredients={this.state.ingredients}/>

        <BuildControls
          addIngredients={this.addIngredients}
          removeIngredients={this.removeIngredients}
          disabled={this.disabled}
          price={this.state.totalPrice}
          isPurchasable={this.state.purchaseable}
          orderClick={this.purchaseHandler}
        />
        
      </Aux>
    );
  }
}

export default BurgerBuilder;
