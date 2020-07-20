import React from 'react'
import StyledDivBackdrop from './StyledBackdrop'

const backdrop = (props) => (
  props.show ? <StyledDivBackdrop onClick={props.clicked}></StyledDivBackdrop> : null
)

export default backdrop