import React from 'react'
import { action } from '@storybook/addon-actions'

import { ButtonNav } from '../components/layout/Button'
import ButtonWithIcon from '../components/layout/ButtonWithIcon'
export default {
  title: 'Button',
  component: ButtonNav,
}

export const Nav1 = () => (
  <ButtonNav amarillo onClick={action('clicked')}>
    Hello Button
  </ButtonNav>
)
export const Nav2 = () => (
  <ButtonNav azul onClick={action('clicked')}>
    Hello Button
  </ButtonNav>
)
export const Nav3 = () => (
  <ButtonNav verde onClick={action('clicked')}>
    Hello Button
  </ButtonNav>
)
export const ButtonWithIconNav = () => (
  <ButtonWithIcon onClick={action('clicked')} icon='icon'>
    asd
  </ButtonWithIcon>
)
