import React from 'react'
import {StyledNav, StyledDiv, StyledBtnToggle} from './StyledToolbar'

import Logo from '../Logo/Logo'
import NavItem from '../NavItems/NavItems'

const nav = (props) => (
  <StyledNav>
    <Logo>
      My Burger
    </Logo>

    <StyledBtnToggle isOpened={props.isOpened} onClick={props.toggleSideDrawer}>
      <i className="fas fa-bars"></i>  
    </StyledBtnToggle>

  <StyledDiv>
    <NavItem isActive={true} href={'/'}>Builder</NavItem>
    <NavItem isActive={false} href={'/'}>Order</NavItem>
    <NavItem isActive={false} href={'/'}>Login</NavItem>
  </StyledDiv>
</StyledNav>
)

export default nav