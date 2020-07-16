import React from 'react'
import StyledDivBackdrop from './StyledBackdrop'

const backdrop = (props) => (
  props.show ? <StyledDivBackdrop onClick={props.hideModal}></StyledDivBackdrop> : null
)

export default backdrop