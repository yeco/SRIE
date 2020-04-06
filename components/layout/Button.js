import styled from 'styled-components'
import {
  amarillo,
  azul,
  azull_roll,
  naranja_2,
  naranja,
  amarillo_roll,
} from '../../theme/colors'
//TODO: importar libreria de colores

export const ButtonNav1 = styled.button`
  outline: 0;
  border: 0;
  border-bottom: 10px solid ${azull_roll};
  text-transform: uppercase;
  padding: 16px 48px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all ease-in 0.2s;
  background-color: ${azul};
  color: white;
  &:hover {
    background-color: #4bdf80;
  }
`
