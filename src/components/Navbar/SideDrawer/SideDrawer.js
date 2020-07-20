import React from 'react'
import Styled from 'styled-components'

import Logo from '../Logo/Logo'
import NavItem from '../NavItems/NavItems'

import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary'

const StyledSideDrawer = Styled.div`
  position: fixed;
  width: 280px;
  max-width: 50%;
  height: 100%;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  @media (min-width: 500px){
    display: none;
  }

  @media (max-width: 499px){
    display: block;
  }

  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
`

const StyledDiv = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 25px;
`

const sideDrawer = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.closed}/>

      <StyledSideDrawer open={props.show}>
          <Logo>My Burger</Logo>

        <StyledDiv>
          <NavItem isActive={true} href={'/'}>Builder</NavItem>
          <NavItem isActive={false} href={'/'}>Order</NavItem>
          <NavItem isActive={false} href={'/'}>Login</NavItem>
        </StyledDiv>

      </StyledSideDrawer>
    </Aux>
  )
}

export default sideDrawer

