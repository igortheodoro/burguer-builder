import React from "react";
import StyledModalDiv from "./StyledModal";

import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.hideModal} />
    <StyledModalDiv show={props.show}>
    <img
        style={{ width: "80%", marginLeft: '35px' }}
        src={require("../../../assets/undraw-hamburger.svg")}
        alt="Hamburger illustration"
    />

      {props.children}
    </StyledModalDiv>
  </Aux>
);

export default modal;
