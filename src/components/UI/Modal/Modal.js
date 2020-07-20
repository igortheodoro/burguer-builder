import React, { Component } from "react";
import StyledModalDiv from "./StyledModal";

import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.show !== this.props.show
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.hideModal} />
        <StyledModalDiv show={this.props.show}>
          <img
            style={{ width: "80%", marginLeft: "35px" }}
            src={require("../../../assets/undraw-hamburger.svg")}
            alt="Hamburger illustration"
          />

          {this.props.children}
        </StyledModalDiv>
      </Aux>
    );
  }
}

export default Modal;
