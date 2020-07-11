import React from "react";
import Aux from "../../hoc/Aux";
import Styled from "styled-components";
import Nav from './Navbar/Navbar'

const MainStyled = Styled.main`
  margin-top: 25px;
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
