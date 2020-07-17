import React from "react";
import Aux from "../../../hoc/Auxiliary";

import StyledUl from "./StyledOrderSummary";
import Button from '../../UI/Button/StyledButton'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map((ing, index) => (
      <li key={ing+index}>
        <span style={{ textTransform: "capitalize" }}>{ing}</span>:{" "}
        {props.ingredients[ing]}
      </li>
    ))

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your burger ingredients: </p>
      <StyledUl>
        {ingredientSummary}
      </StyledUl>
      <p>Continue to Checkout?</p>
      <Button btnSuccess={false} onClick={props.cancelOrder}>Cancel</Button>
      <Button btnSuccess={true} onClick={props.continueOrder}>Continue</Button>
    </Aux>
  );
};

export default orderSummary;
