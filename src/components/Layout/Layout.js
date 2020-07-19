import React from "react";
import Aux from "../../hoc/Auxiliary";
import Styled from "styled-components";
import Nav from '../Navbar/Toolbar/Toolbar'

const MainStyled = Styled.main`
  margin-top: 40px;
`

const layout = (props) => (
  <Aux>
    <Nav />
    <MainStyled>
      {props.children}
    </MainStyled>
  </Aux>
);

export default layout;
