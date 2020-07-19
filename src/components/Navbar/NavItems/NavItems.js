import React from 'react'
import Styled from 'styled-components'

const StyledItem = Styled.a`
  margin: 5px 15px;
  padding: 5px;
  text-decoration: none;
  border-bottom: ${props => props.isActive ? '2px solid #264653' : 'none'};

  :hover{
    cursor: pointer;
    border-bottom: 2px solid #264653;
  }

  :visited {
    color: inherit;
  }
`;

const navigationItems = (props) => (
    <StyledItem isActive={props.active} href={props.link}>
      {props.children}
    </StyledItem>
)

export default navigationItems