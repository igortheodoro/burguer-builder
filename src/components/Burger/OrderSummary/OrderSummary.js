import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";

import StyledUl from "./StyledOrderSummary";
import Button from "../../UI/Button/StyledButton";

class OrderSummary extends Component {
  render() {
    let ingredientSummary = Object.keys(this.props.ingredients).map(
      (ing, index) => {
        return (
          <li key={ing + index}>
            <span style={{ textTransform: "capitalize" }}>{ing}</span>:{" "}
            {this.props.ingredients[ing]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Your burger ingredients: </p>
        <StyledUl>{ingredientSummary}</StyledUl>
        <p>
          <strong>Price: ${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnSuccess={false} onClick={this.props.cancelOrder}>
          Cancel
        </Button>
        <Button btnSuccess={true} onClick={this.props.continueOrder}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
