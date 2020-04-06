import styled from 'styled-components'
import {
  amarillo,
  azul,
  azull_roll,
  naranja_2,
  naranja,
  amarillo_roll,
  verde,
  verde_roll,
} from '../../theme/colors'
//TODO: importar libreria de colores

export const ButtonNav = styled.button`
  outline: 0;
  border: 0;
  border-bottom: 10px solid
    ${(props) =>
      props.azul
        ? azull_roll
        : props.verde
        ? verde_roll
        : props.amarillo
        ? amarillo_roll
        : undefined};
  text-transform: uppercase;
  padding: 16px 48px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all ease-in 0.2s;
  background-color: ${(props) =>
    props.azul
      ? azul
      : props.verde
      ? verde
      : props.amarillo
      ? amarillo
      : undefined};
  color: white;
  &:hover {
    background-color: ${azull_roll};
    border-bottom: 10px solid ${azul};
  }
`

export const ButtonContainer = styled.button`
  outline: 0;
  border: 0;
  text-transform: uppercase;
  padding: 16px 10px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all ease-in 0.2s;
  background-color: ${(props) =>
    props.azul
      ? azul
      : props.verde
      ? verde
      : props.amarillo
      ? amarillo
      : undefined};

  color: white;
  &:hover {
    background-color: ${azull_roll};
    border-bottom: 10px solid ${azul};
  }
`

export const IconContainer = styled.span`
  border-right: 10px solid white;
  padding: 16px 10px;
  border-bottom: 10px solid
    ${(props) =>
      props.azul
        ? azull_roll
        : props.verde
        ? verde_roll
        : props.amarillo
        ? amarillo_roll
        : undefined};
`

export const TextContainer = styled.span`
  padding: 16px 10px;
  border-bottom: 10px solid
    ${(props) =>
      props.azul
        ? azull_roll
        : props.verde
        ? verde_roll
        : props.amarillo
        ? amarillo_roll
        : undefined};
`
