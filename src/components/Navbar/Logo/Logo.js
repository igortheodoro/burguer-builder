import React from 'react'
import Styled from 'styled-components'


const StyledLogo = Styled.img`
  width: 55px;
  height: 100%;
  margin-right: 15px;
`

const StyledDiv = Styled.div`
  display: flex;
  align-items: center;
`;

const Logo = (props) => (
  <StyledDiv>
      <StyledLogo 
      src={require("../../../assets/burger-logo.png")} 
      alt="My Burger Logo"/>

      <p>{props.children}</p>
  </StyledDiv>
)

export default Logo