import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burguer from "../../components/Burguer/Burguer";
import BuildControls from "../../components/BuildControls/BuildControls";

class BurguerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        meat: 1,
        cheese: 1,
        salad: 1,
        bacon: 1,
      },
      purchased: false,
      totalPrice: 10,
    };
  }

  state = {};

  addMeat = () => {
    const howManyMeatHave = this.state.ingredients.meat;
    const ingredients = this.state.ingredients;

    ingredients.meat = howManyMeatHave + 1;

    this.editPrice(4)

    this.setState({
      ingredients,
    });
  };

  removeMeat = () => {
    const howManyMeatHave = this.state.ingredients.meat;
    const ingredients = this.state.ingredients;

    if (howManyMeatHave > 0) {
      ingredients.meat = howManyMeatHave - 1;

      this.editPrice(-4)

      this.setState({
        ingredients,
      });
    }
  };

  addBacon = () => {
    const howManyBaconHave = this.state.ingredients.bacon;
    const ingredients = this.state.ingredients;

    ingredients.bacon = howManyBaconHave + 1;

    this.editPrice(3)

    this.setState({
      ingredients,
    });
  };

  removeBacon = () => {
    const howManyBaconHave = this.state.ingredients.bacon;
    const ingredients = this.state.ingredients;

    if (howManyBaconHave > 0) {
      ingredients.bacon = howManyBaconHave - 1;

      this.editPrice(-3)

      this.setState({
        ingredients,
      });
    }
  };

  addCheese = () => {
    const howManyCheeseHave = this.state.ingredients.cheese;
    const ingredients = this.state.ingredients;

    ingredients.cheese = howManyCheeseHave + 1;

    this.editPrice(2)

    this.setState({
      ingredients,
    });
  };

  removeCheese = () => {
    const howManyCheeseHave = this.state.ingredients.cheese;
    const ingredients = this.state.ingredients;

    if (howManyCheeseHave > 0) {
      ingredients.cheese = howManyCheeseHave - 1;

      this.editPrice(-2)

      this.setState({
        ingredients,
      });
    }
  };

  addSalad = () => {
    const howManySaladHave = this.state.ingredients.salad;
    const ingredients = this.state.ingredients;

    ingredients.salad = howManySaladHave + 1;

    this.editPrice(1)

    this.setState({
      ingredients,
    });
  };

  removeSalad = () => {
    const howManySaladHave = this.state.ingredients.salad;
    const ingredients = this.state.ingredients;

    if (howManySaladHave > 0) {
      ingredients.salad = howManySaladHave - 1;

      this.editPrice(-1)

      this.setState({
        ingredients,
      });
    }
  };

  editPrice = (price) => {
    let totalPrice = this.state.totalPrice
    totalPrice += price 

    this.setState({
      totalPrice
    })
  }

  render() {
    return (
      <Aux>
        <Burguer ingredients={this.state.ingredients} />
        <BuildControls
          addMeat={this.addMeat}
          removeMeat={this.removeMeat}
          meat={this.state.ingredients.meat}
          addBacon={this.addBacon}
          removeBacon={this.removeBacon}
          bacon={this.state.ingredients.bacon}
          addCheese={this.addCheese}
          removeCheese={this.removeCheese}
          cheese={this.state.ingredients.cheese}
          addSalad={this.addSalad}
          removeSalad={this.removeSalad}
          salad={this.state.ingredients.salad}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurguerBuilder;
