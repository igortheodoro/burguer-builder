import React from "react";
import { StyledH1, StyledButton, StyledDiv } from "./StyledBuildControl";

const buildControl = (props) => (
  <StyledDiv>
    <StyledH1>{props.label} </StyledH1>
    <StyledButton disabled={props.disabled} onClick={props.removeIngredients}>Less</StyledButton>
    <StyledButton onClick={props.addIngredients}>More</StyledButton>
  </StyledDiv>
);

export default buildControl;
