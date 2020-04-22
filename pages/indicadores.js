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

export default class extends React.Component {
  static async getInitialProps({ pathname }) {
    let pa = pathname
    return { pa }
  }
  render() {
    const { pa } = this.props
    return (
      <>
        <Header path={pa} />
        <Container>
          <h2>Indicadores</h2>
          <Row className='d-flex justify-content-between'>
            <div className='col-lg-4'>
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
        </Container>
      </>
    )
  }
}
