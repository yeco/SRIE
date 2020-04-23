import Link from 'next/link'
import Header from '../components/layout/Header'
import { Container, Row } from 'react-bootstrap'

import {
  ButtonNav,
  ButtonNavWithIcon,
  ButtonNavIndicadores,
} from '../components/layout/Button'
import CrFlag from '../public/img/home/bandera-costa_rica.png'
import FlagNameComponent from '../components/layout/FlagNameComponent'
import IndicadorComponent from '../components/layout/IndicadorComponent'
import NavSecundaryCountries from '../components/layout/NavSecundaryCountries'
import Title from '../components/layout/Title'

export default class extends React.Component {
  static async getInitialProps({ pathname }) {
    let pa = pathname
    return { pa }
  }
  render() {
    const { pa } = this.props
    const array = [1, 2, 3, 4, 5]
    return (
      <>
        <Header path={pa} />
        <NavSecundaryCountries />
        <Container>
          <Row className='d-flex justify-content-betweent mt-5 mb-5'>
            <div className='col-lg-4 '>
              <FlagNameComponent icon={CrFlag}>Costa Rica</FlagNameComponent>
            </div>
            <Row className='col-lg-8 d-flex justify-content-end p-0'>
              <div className='col-lg-2 pr-0'>
                <ButtonNav amarillo>Dato Pais</ButtonNav>
              </div>

              <div className='col-lg-3 pr-0'>
                <ButtonNav azul>INDICADORES EDUCATIVOS</ButtonNav>
              </div>
              <div className='col-lg-2 pr-0'>
                <ButtonNav verde>AVANCE 2021</ButtonNav>
              </div>
            </Row>
          </Row>
          <Row>
            <div className='col-lg-12 pr-0 text-center'>
              <Title color='azul' type='title'>
                INDICADORES EDUCATIVOS
              </Title>
            </div>
          </Row>
          <Row className='mt-3 mb-3'>
            {array.map((item, index) => (
              <div className='col-lg-12 mb-3' key={`indicador-${index}`}>
                <IndicadorComponent>asd</IndicadorComponent>
              </div>
            ))}
          </Row>
        </Container>
      </>
    )
  }
}
