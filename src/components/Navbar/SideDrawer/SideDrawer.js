import React from 'react'
import Styled from 'styled-components'

import Logo from '../Logo/Logo'
import NavItem from '../NavItems/NavItems'

const StyledSideDrawer = Styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  @media (min-width: 500px){
    display: none;
  }

  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
`

const StyledDiv = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`

const sideDrawer = (props) => {

  return (
    <StyledSideDrawer open={true}>
        <Logo>My Burger</Logo>
      <StyledDiv>
        <NavItem isActive={true} href={'/'}>Builder</NavItem>
        <NavItem isActive={false} href={'/'}>Order</NavItem>
        <NavItem isActive={false} href={'/'}>Login</NavItem>
      </StyledDiv>
    </StyledSideDrawer>
  )
}

export default sideDrawer

