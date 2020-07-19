import React from 'react'
import {StyledNav, StyledDiv} from './StyledToolbar'

import Logo from '../Logo/Logo'
import NavItem from '../NavItems/NavItems'


const nav = () => (
  <StyledNav>
    <Logo>
      My Burger
    </Logo>

  <StyledDiv>
    <NavItem isActive={true} href={'/'}>Builder</NavItem>
    <NavItem isActive={false} href={'/'}>Order</NavItem>
    <NavItem isActive={false} href={'/'}>Login</NavItem>
  </StyledDiv>
</StyledNav>
)

export default nav