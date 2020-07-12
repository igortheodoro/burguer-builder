import React from 'react'
import Styled from 'styled-components'

const StyledNav = Styled.div`
  background-color: #f4a261;
  color: #264653;
  font-weight: 600;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

const StyledDiv = Styled.div`
  display: flex;
`;

const StyledItem = Styled.a`
  margin-left: 10px;
  padding: 5px;
`;

const nav = () => (
  <StyledNav>
  <StyledItem>My Burger</StyledItem>

  <StyledDiv>
    <StyledItem>Builder</StyledItem>

    <StyledItem>Orders</StyledItem>

    <StyledItem>Login</StyledItem>
  </StyledDiv>
</StyledNav>
)

export default nav