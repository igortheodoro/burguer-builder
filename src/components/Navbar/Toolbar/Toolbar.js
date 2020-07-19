import React from 'react'
import {StyledNav, StyledDiv, StyledItem, StyledLogo} from './StyledToolbar'


const nav = () => (
  <StyledNav>
    <StyledDiv>
      <StyledLogo 
      src={require("../../../assets/burger-logo.png")} 
      alt="My Burger Logo"/>

      <p>My Burger</p>
    </StyledDiv>

    <StyledDiv>
      <StyledItem isActive={true} href='/'>Builder</StyledItem>

      <StyledItem href='/'>Orders</StyledItem>

      <StyledItem href='/'>Login</StyledItem>
    </StyledDiv>

</StyledNav>
)

export default nav