import React from 'react'
import { action } from '@storybook/addon-actions'

import { ButtonNav1 } from '../components/layout/Button'

export default {
  title: 'Button',
  component: ButtonNav1,
}

export const Nav1 = () => (
  <ButtonNav1 onClick={action('clicked')}>Hello Button</ButtonNav1>
)
