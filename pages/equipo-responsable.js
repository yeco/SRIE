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
        {/* Header nav */}
        <Container>
          <Row>
            <div className='col-lg-12 pr-0 text-center'>
              <Title color='azul' type='title'>
                EQUIPO RESPONSABLE
              </Title>
            </div>
          </Row>
          <Row className='d-flex justify-content-betweent mt-5 mb-5'>
            <div className='col-lg-12 '>
              <p>
                El desarrollo de la Serie Regional de Indicadores Educativos se
                inició en 2009 con la conducción institucional y política de
                CECC/SICA y la coordinación técnica de la Asociación Civil
                Educación Para Todos, para el planteo de los indicadores, la
                integración y revisión de aportes de los equipos nacionales,
                diseño y desarrollo de la plataforma web. Durante el año 2012 se
                realizó un nuevo proceso de trabajo y mejora de las
                funcionalidades del sitio, así como la producción de informes
                nacionales.
              </p>
              <p>
                La información estadística es provista y actualizada en forma
                institucional por equipos técnicos de las áreas de estadística
                de los Ministerios de Educación de los países miembros de la
                CECC/SICA cuyos aportes son cruciales para el contenido del
                sitio. A lo largo de los años, diferentes personas han formado
                parte de los equipos nacionales, las cuales han realizado
                aportes valiosos y fundamentales. Las dependencias
                institucionales de los Ministerios de Educación que participan
                de este proceso son las siguientes:
              </p>
            </div>
            <div className='col-lg-12 '>
              <Row>
                <div className='col-lg-3 '>Costa Rica</div>
                <div className='col-lg-9 '>
                  <h3>
                    Dirección de Planificación Institucional - Departamento de
                    Análisis Estadístico
                  </h3>
                  <p>
                    correo electrónico:
                    <a href='mail:lore_ipsu@dolorsit.com'>
                      lore_ipsu@dolorsit.com
                    </a>
                  </p>
                </div>
              </Row>
            </div>
            <p>
              El apoyo del equipo de gestión de la CECC/SICA ha sido un soporte
              a lo largo del proceso, en particular con las tareas técnicas de
              Fressie Aguilar y Alejandra Sanchez, y el soporte administrativo
              de Nidia Abarca, y Giselle Barboza.
            </p>
            <p>
              El equipo de la Asociación Civil Educación Para Todos es
              coordinado en los aspectos técnicos e institucionales por Irene
              Kit y Sergio España.
            </p>
            <p>
              En el diseño conceptual de indicadores y definición
              comunicacional, la tarea fue coordinada por Martín Scasso, con la
              cooperación en distintos momentos de Verónica Marino, Verona
              Batiuk, Lujan Vago, Irene Butcher y Daniela Cura.
            </p>
            <p>
              El desarrollo de la Plataforma Informática estuvo a cargo de Pablo
              De Vas con la cooperación de Ernesto Soler y Andrés Suárez. Las
              propuestas gráficas son un aporte de Flavia Cebrian, Miriam
              Sátollo y Gabriella Tenner.
            </p>
          </Row>
        </Container>
      </>
    )
  }
}
