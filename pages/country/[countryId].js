import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/layout/Header'
import NavSecundaryCountries from '../../components/layout/NavSecundaryCountries'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

import {
  ButtonNav,
  ButtonNavWithIcon,
  ButtonNavIndicadores,
} from '../../components/layout/Button'
import ButtonWithIcon from '../../components/layout/ButtonWithIcon'

import {
  Box,
  BoxIndicador,
  BoxPreescolar,
  BoxPrimaria,
  BoxSecundaria,
} from '../../components/layout/Box'
import Banner from '../../components/layout/Banner'
import {
  LineTime,
  TitleLineTime,
} from '../../components/layout/TimeLineEducation'

import EducacionIcon from '../../public/img/home/icon_datos_educ.svg'
import AlfabetizacionIcon from '../../public/img/home/icon_datos_alfabetizacion.svg'
import CentroseducIcon from '../../public/img/home/icon_datos_centroseduc.svg'
import DatoNinoIcon from '../../public/img/home/icono_datos_niños.svg'

import ParticipacionIcon from '../../public/img/home/icon_participacion_indicador.svg'
import OfertaIcon from '../../public/img/home/icon_oferta_indicador.svg'
import AprendizajeIcon from '../../public/img/home/icon_aprendizaje_indicador.svg'
import ConclusionIcon from '../../public/img/home/icon_conclusion_indicador.svg'
import EntornoIcon from '../../public/img/home/icon_entorno_indicador.svg'
import MetasIcon from '../../public/img/home/icon_metas_indicador.svg'
import CrFlag from '../../public/img/home/bandera-costa_rica.png'
import FlagNameComponent from '../../components/layout/FlagNameComponent'
import Title from '../../components/layout/Title'

const ColNotPadding = styled(Col)`
  padding: 0;
`

export default function Country() {
  const router = useRouter()

  const keu_c = router.query.countryId
  let imgUrlCountry = ''
  let titleC = ''
  switch (router.query.countryId) {
    case 'bh':
      imgUrlCountry = '/img/home/bandera-belice.png'
      titleC = 'Belice'
      break
    case 'cr':
      imgUrlCountry = '/img/home/bandera-costa_rica.png'
      titleC = 'Costa Rica'
      break
    case 'es':
      imgUrlCountry = '/img/home/bandera-el_salvador.png'
      titleC = 'El Salvador'
      break
    case 'gt':
      imgUrlCountry = '/img/home/bandera-guatemala.png'
      titleC = 'Guatemala'
      break
    case 'ho':
      imgUrlCountry = '/img/home/bandera-honduras.png'
      titleC = 'Honduras'
      break
    case 'nu':
      imgUrlCountry = '/img/home/bandera-nicaragua.png'
      titleC = 'Nicaragua'
      break
    case 'pm':
      imgUrlCountry = '/img/home/bandera-panama.png'
      titleC = 'Panamá'
      break
    case 'dr':
      imgUrlCountry = '/img/home/bandera-rep_dominicana.png'
      titleC = 'Rep. Dominicana'
      break

    default:
      break
  }
  console.log(imgUrlCountry)
  return (
    <div>
      {/* {router.query.countryId} */}
      <Header />
      {/* <p>Country content for {router.query.countryId}.</p> */}
      <NavSecundaryCountries />
      <Container className='mt-4'>
        <Row className='d-flex justify-content-between'>
          <div className='col-lg-4'>
            {/* <FlagNameComponent icon={imgUrlCountry}>{titleC}</FlagNameComponent> */}
            <Row>
              <Col sm={2} className='imgUrlCountry p-0'>
                <img src={imgUrlCountry} alt='' />
              </Col>
              <Col className='titleC p-0'>
                <h2>{titleC}</h2>
              </Col>
            </Row>
          </div>
          <Row className='col-lg-8 d-flex justify-content-end p-0'>
            <div className='col-lg-2 pr-0'>
              <ButtonNav amarillo>Dato Pais </ButtonNav>
            </div>

            <div className='col-lg-3 pr-0'>
              <Link href='/indicadores' as={`indicadores`}>
                <ButtonNav azul>INDICADORES EDUCATIVOS</ButtonNav>
              </Link>
            </div>
            <div className='col-lg-2 pr-0'>
              <ButtonNav verde>AVANCE 2021</ButtonNav>
            </div>
          </Row>
        </Row>
        <Row className='mt-4'>
          <div className='col-lg-12 mb-4 text-center'>
            <Title color='amarillo' type='title'>
              Datos pais
            </Title>
          </div>
          <div className='col-lg-12 mb-3 p-0 text-center'>
            <Title color='negro' type='subtitle'>
              Estructura del sistema educativo del país
            </Title>
          </div>
          <div className='col-lg-4 m-0 p-0'>
            <BoxPreescolar title='PREESCOLAR' />
          </div>
          <div className='col-lg-4 m-0 p-0'>
            <BoxPrimaria title='PRIMARIA' />
          </div>
          <div className='col-lg-4 m-0 p-0'>
            <BoxSecundaria title='SECUNDARIA' />
          </div>
          <div className='col-lg-12 m-0 p-0'>
            <LineTime />
          </div>
          <div className='col-lg-12 m-0 p-0'>
            <TitleLineTime />
          </div>
        </Row>
        <Row className='mt-5 mb-5'>
          <div className='col-lg-4 mb-4'>
            <Box
              iconImg={EducacionIcon}
              title='Educación gratuita y obligatoria'
              subtitle='Número de años: 12'
              color='azul'
            />
          </div>
          <div className='col-lg-4 mb-4'>
            <Box
              iconImg={AlfabetizacionIcon}
              title='Tasa de alfabetización'
              subtitle='88%'
              color='verde'
            />
          </div>

          <div className='col-lg-4 mb-4'>
            <Box
              iconImg={CentroseducIcon}
              title='Cantidad de centros educativos'
              subtitle='10.000'
              color='naranja'
            />
          </div>

          <div className='col-lg-4'>
            <BoxIndicador
              title='Tasas de matrícula, por nivel'
              prescolar='50,09%'
              primaria='40,60%'
              secundaria='50,00%'
            />
          </div>

          <div className='col-lg-4'>
            <BoxIndicador
              title='Tasa de finalización, por nivel'
              primaria='36,00%'
              secundaria='50,00%'
            />
          </div>
          <div className='col-lg-4'>
            <Box
              iconImg={DatoNinoIcon}
              title='Niñas, niños y adolescentes fuera
    de la escuela'
              subtitle='10,00%'
              color='celeste'
            />
          </div>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <div className='col-lg-12 p-0 m-0'>
            <Banner />
          </div>
        </Row>
      </Container>
      <Container>
        <Row className='mt-5'>
          <div className='col-lg-12 text-center'>
            <Title color='azul' type='title'>
              Indicadores Educativos
            </Title>
          </div>
          <div className='col-lg-12 text-center'>
            <Title color='azul' type='subtitle'>
              Por categoria
            </Title>
          </div>
        </Row>
        <Row className='mt-4 mb-4'>
          <div className='col-lg-4 mb-3'>
            <ButtonWithIcon color='celeste' icon={ParticipacionIcon}>
              participacion
            </ButtonWithIcon>
          </div>

          <div className='col-lg-4 mb-3'>
            <ButtonWithIcon color='cafe' icon={OfertaIcon}>
              oferta
            </ButtonWithIcon>
          </div>

          <div className='col-lg-4 mb-3'>
            <ButtonWithIcon color='azul' icon={AprendizajeIcon}>
              Aprendizaje y competencias
            </ButtonWithIcon>
          </div>

          <div className='col-lg-4'>
            <ButtonWithIcon color='naranja' icon={ConclusionIcon}>
              Conclusión
            </ButtonWithIcon>
          </div>

          <div className='col-lg-4'>
            <ButtonWithIcon color='rosa' icon={EntornoIcon}>
              Entorno educativo
            </ButtonWithIcon>
          </div>

          <div className='col-lg-4'>
            <ButtonWithIcon color='amarillo' icon={MetasIcon}>
              Metas transversales
            </ButtonWithIcon>
          </div>
        </Row>
        <Row className='mb-5'>
          <div className='col-lg-12 d-flex justify-content-end'>
            <ButtonNavIndicadores azul>
              Ver los indicadores
            </ButtonNavIndicadores>
          </div>
        </Row>
      </Container>
      <style type='text/css'>{`
      .imgUrlCountry img{
        width: 50px;
        height: 30px;
        margin-top: 7px;
      }
      .titleC h2{
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 2.5em;
        color: #1D2D49;
      }
    `}</style>
    </div>
  )
}
