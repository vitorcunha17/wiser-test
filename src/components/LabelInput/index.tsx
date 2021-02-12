import React from 'react'
import { LabelStyled } from './styles'

const InputLabel = (props) => {
  return (
    <LabelStyled>{props.children}</LabelStyled>
  )
}

export default InputLabel;