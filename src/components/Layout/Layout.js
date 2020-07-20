import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Styled from "styled-components";
import Nav from "../Navbar/Toolbar/Toolbar";
import SideDrawer from "../Navbar/SideDrawer/SideDrawer";

const MainStyled = Styled.main`
  margin-top: 40px;
`;

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Nav
          isOpened={this.state.showSideDrawer}
          toggleSideDrawer={this.sideDrawerClosedHandler}
        />
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          show={this.state.showSideDrawer}
        />

        <MainStyled>{this.props.children}</MainStyled>
      </Aux>
    );
  }
}

export default Layout;
