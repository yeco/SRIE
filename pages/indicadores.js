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
import IndicadorComponent, {
  Tag,
} from '../components/layout/IndicadorComponent'
import NavSecundaryCountries from '../components/layout/NavSecundaryCountries'
import Title from '../components/layout/Title'
import PecIcon from '../public/img/home/icon_pec_indicadores.svg'
import styled from 'styled-components'
import { txt, azul1 } from '../theme/colors'

const IconImg = styled.img`
  width: 18px;
  height: 18px;
`
const Divider = styled.span`
  display: block;
  width: 100%;
  border-bottom: 1px solid ${txt};
  margin-top: 20px;
`
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
            <Divider></Divider>
          </Row>

          <Row>
            <div className='col-lg-12 pr-0 text-center'>
              <Title color='azul' type='title'>
                INDICADORES EDUCATIVOS
              </Title>
            </div>
          </Row>
          <Row>
            <div className='col-lg-12 pr-0 text-left'>
              <Title color='azul' type='subtitle'>
                Filtrar indicadores por:
              </Title>
              <form>
                <Row>
                  <div class='form-group col-lg-4'>
                    <select class='form-control' id='exampleFormControlSelect1'>
                      <option selected>Meta PEC</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class='form-group col-lg-4'>
                    <select class='form-control' id='exampleFormControlSelect1'>
                      <option selected>Tema</option>
                      <option>2 </option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class='form-group col-lg-4'>
                    <select class='form-control' id='exampleFormControlSelect1'>
                      <option selected>Nivel educativo</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </Row>
              </form>
            </div>
          </Row>
        </Container>
        <Container fluid>
          <Row className='mt-5 mb-5 bg-light pt-2 pb-0'>
            <Container>
              <Row>
                <div className='col-lg-12 mb-1'>
                  Resultados de la búsqueda por:
                </div>
                <div className='col-lg-12 mb-3'>
                  Meta Pec: <strong>Participación</strong> / Nivel:
                  <strong> Primaria</strong>
                </div>
              </Row>
            </Container>
          </Row>
        </Container>
        <Container>
          <Row className='mt-3 mb-3'>
            <div className='col-lg-7 mb-3'>
              <Title color='negro' type='caption'>
                Indicadores Educativos
              </Title>
            </div>
            <div className='col-lg-3 mb-3'>
              <Row className='d-flex align-content-center'>
                <div className='col-lg-2 m-0 p-0'>
                  <IconImg src={PecIcon} />
                </div>
                <div className='col-lg-8 m-0 p-0'>
                  <Title color='negro' type='caption'>
                    PEC
                  </Title>
                </div>
              </Row>
            </div>
            <div className='col-lg-2 mb-3'>
              <Row>
                <div className='col-lg-2 m-0 p-0'>
                  <IconImg src={PecIcon} />
                </div>
                <div className='col-lg-8 m-0 p-0'>
                  <Title color='negro' type='caption'>
                    ODS 4
                  </Title>
                </div>
              </Row>
            </div>
            {array.map((item, index) => (
              <Link href='/equipo-responsable' as={`equipo-responsable`}>
                <div className='col-lg-12 mb-3 p-0' key={`indicador-${index}`}>
                  <IndicadorComponent>asd</IndicadorComponent>
                </div>
              </Link>
            ))}
          </Row>
        </Container>
      </>
    )
  }
}
