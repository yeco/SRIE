import React from 'react'
import { action } from '@storybook/addon-actions'

import { Box } from '../components/layout/Box'
import ButtonWithIcon from '../components/layout/ButtonWithIcon'

import EducacionIcon from '../public/img/home/icon_datos_educ.svg'
import AlfabetizacionIcon from '../public/img/home/icon_datos_alfabetizacion.svg'
import CentroseducIcon from '../public/img/home/icon_datos_centroseduc.svg'
import DatoNinoIcon from '../public/img/home/icono_datos_niños.svg'
import EntornoIcon from '../public/img/home/icon_entorno_indicador.svg'
import MetasIcon from '../public/img/home/icon_metas_indicador.svg'

export default {
  title: 'Box',
  component: Box,
}

export const Box1 = () => (
  <Box
    iconImg={EducacionIcon}
    title='Educación gratuita y obligatoria'
    subtitle='Número de años: 12'
    color='azul'
  />
)

export const Box2 = () => (
  <Box
    iconImg={AlfabetizacionIcon}
    title='Tasa de alfabetización'
    subtitle='88%'
    color='verde'
  />
)

export const Box3 = () => (
  <Box
    iconImg={CentroseducIcon}
    title='Cantidad de centros educativos'
    subtitle='10.000'
    color='naranja'
  />
)
export const Box4 = () => (
  <Box
    iconImg={DatoNinoIcon}
    title='Niñas, niños y adolescentes fuera
    de la escuela'
    subtitle='10,00%'
    color='celeste'
  />
)
