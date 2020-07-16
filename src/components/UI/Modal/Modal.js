import React from "react";
import StyledModalDiv from "./StyledModal";

import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} hideModal={props.hideModal} />
    <StyledModalDiv show={props.show}>
    <img
        style={{ width: "100%" }}
        src={require("../../../assets/undraw-hamburger.svg")}
    />

      {props.children}
    </StyledModalDiv>
  </Aux>
);

export default modal;
