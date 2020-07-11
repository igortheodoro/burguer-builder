import React from "react";
import {
  StyledControlsDiv,
  StyledDiv,
  StyledH1,
  StyledButton,
  StyledParagraph,
} from "./StyledBuildControls";

const controls = (props) => (
  <StyledControlsDiv>
    <StyledDiv>
      <StyledH1>Meat: </StyledH1>

      <StyledButton onClick={props.addMeat}>+</StyledButton>
        <StyledParagraph>{props.meat}</StyledParagraph>
      <StyledButton onClick={props.removeMeat}>-</StyledButton>
    </StyledDiv>

    <StyledDiv>
      <StyledH1>Bacon: </StyledH1>

      <StyledButton onClick={props.addBacon}>+</StyledButton>
        <StyledParagraph>{props.bacon}</StyledParagraph>
      <StyledButton onClick={props.removeBacon}>-</StyledButton>
    </StyledDiv>

    <StyledDiv>
      <StyledH1>Cheese:</StyledH1>

      <StyledButton onClick={props.addCheese}>+</StyledButton>
        <StyledParagraph>{props.cheese}</StyledParagraph>
      <StyledButton onClick={props.removeCheese}>-</StyledButton>
    </StyledDiv>

    <StyledDiv>
      <StyledH1>Salad: </StyledH1>

      <StyledButton onClick={props.addSalad}>+</StyledButton>
        <StyledParagraph>{props.salad}</StyledParagraph>
      <StyledButton onClick={props.removeSalad}>-</StyledButton>
    </StyledDiv>
  </StyledControlsDiv>
);

export default controls;
