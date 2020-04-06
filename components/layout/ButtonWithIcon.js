import React from 'react'
import {
  ButtonNav,
  ButtonContainer,
  IconContainer,
  TextContainer,
} from './Button'

const ButtonWithIcon = ({ children, onClick, icon }) => (
  <ButtonContainer verde onClick={onClick}>
    <IconContainer verde>{icon}</IconContainer>
    <TextContainer verde>{children}</TextContainer>
  </ButtonContainer>
)

export default ButtonWithIcon
