import React from 'react'
import styled from 'styled-components'
import { gris1, txt, verde1, azul, rojo } from '../../theme/colors'
import arrow from '../../public/img/home/arrow_indicadores.svg'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: ${gris1};
`
const Title = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  color: ${txt};
`
export const Tag = styled.h4`
  background-color: ${verde1};
  font-family: 'Raleway', sans-serif;
  padding: 5px;
  color: white;
  font-size: 0.9em;
  text-align: center;
  width: 100px;
`
const Pec = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${txt};
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6em;
  font-weight: 400;
  height: 100px;
  color: ${azul};
`
const Ods = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${txt};
  border-right: 1px solid ${txt};
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6em;
  font-weight: 400;
  height: 100px;
  color: ${rojo};
`
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & img  {
    width: 15px;
  }
`

const IndicadorComponent = ({ children, icon }) => (
  <Container>
    <div className='col-lg-7 m-0 p-0 pl-4 pr-2'>
      <Title>
        Tasa de participación en la enseñanza organizada un año antes de la edad
        oficial de ingreso en la educación primaria, desglosada por sexo
      </Title>
      <Tag>Participación</Tag>
    </div>
    <div className='col-lg-2 m-0 p-0'>
      <Pec>2.2/3.1</Pec>
    </div>
    <div className='col-lg-2 m-0 p-0'>
      <Ods>4.2</Ods>
    </div>
    <IconContainer className='col-lg-1 m-0 p-0'>
      <img src={arrow} alt='icon' />
    </IconContainer>
  </Container>
)

export default IndicadorComponent
