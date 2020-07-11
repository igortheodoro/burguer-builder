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

      <StyledButton onClick={props.meetHandler}>+</StyledButton>
        <StyledParagraph>{props.meat}</StyledParagraph>
      <StyledButton onClick={props.meetHandler}>-</StyledButton>
    </StyledDiv>

    <StyledDiv>
      <StyledH1>Bacon: </StyledH1>

      <StyledButton onClick={props.baconHandler}>+</StyledButton>
        <StyledParagraph>{props.bacon}</StyledParagraph>
      <StyledButton onClick={props.baconHandler}>-</StyledButton>
    </StyledDiv>

    <StyledDiv>
      <StyledH1>Cheese:</StyledH1>

      <StyledButton onClick={props.cheeseHandler}>+</StyledButton>
        <StyledParagraph>{props.cheese}</StyledParagraph>
      <StyledButton onClick={props.cheeseHandler}>-</StyledButton>
    </StyledDiv>

    <StyledDiv>
      <StyledH1>Salad: </StyledH1>

      <StyledButton onClick={props.saladHandler}>+</StyledButton>
        <StyledParagraph>{props.salad}</StyledParagraph>
      <StyledButton onClick={props.saladHandler}>-</StyledButton>
    </StyledDiv>
  </StyledControlsDiv>
);

export default controls;
