import React from 'react'
import StyledModalDiv from './StyledModal'

import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary'

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} hideModal={props.hideModal}/>
      <StyledModalDiv show={props.show}>
        {props.children}
      </StyledModalDiv>
  </Aux>
)

export default modal