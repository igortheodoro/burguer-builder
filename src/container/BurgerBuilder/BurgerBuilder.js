import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Loading from "../../components/UI/Spinner/Spinner";
import Error from "../../hoc/withErrorHandler/withErroHandler";

import axios from "../../axios-orders";

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
      ingredients: null,
      totalPrice: 4,
      purchaseable: false,
      purchasing: false,
      loading: false,
      error: false,
    };
  }

  state = {};

  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then((res) => {
        this.setState({
          ingredients: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  }

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

    const haveIngredients = keys
      .map((ingredient) => {
        return ingredients[ingredient];
      })
      .reduce((accumulator, value) => {
        return value + accumulator;
      }, 0);

    this.setState({
      purchaseable: haveIngredients > 0,
    });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinue = () => {
    this.setState({
      loading: true,
    });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Igor Theodoro",
        address: {
          street: "Rua Pedro Rosa",
          number: "1568",
        },
        email: "igortheodoro18@gmail.com",
      },
      deliveryMethod: "fastest",
    };

    axios
      .post("/orders.json", order)
      .then((res) => {
        this.setState({
          loading: false,
          purchasing: false,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          purchasing: false,
        });
      });
  };

  render() {
    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Ingredients cant be loaded!</p>
    ) : (
      <Loading />
    );

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />

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

      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          cancelOrder={this.purchaseCancelHandler}
          continueOrder={this.purchaseContinue}
          ingredients={this.state.ingredients}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Loading />;
    }

    return (
      <Aux>
        <Modal
          hideModal={this.purchaseCancelHandler}
          show={this.state.purchasing}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default Error(BurgerBuilder, axios);
