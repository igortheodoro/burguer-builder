import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import {StyledDiv, StyledPrice, StyledCheckButton} from "./StyledBuildControls";

const controls = [
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
];

const buildControls = (props) => (
  <StyledDiv>
    <StyledPrice>Price: {props.price.toFixed(2)}</StyledPrice>

    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        addIngredients={() => props.addIngredients(ctrl.type)}
        removeIngredients={() => props.removeIngredients(ctrl.type)}
        disabled={props.disabled(ctrl.type)}
      />
    ))}

      <StyledCheckButton onClick={props.orderClick}
      disabled={!props.isPurchasable}> Order</StyledCheckButton>
  </StyledDiv>
);

export default buildControls;
